#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'
import {
  SCREENSHOT_VIEWPORT,
  SCREENSHOT_SCALE_FACTOR,
  extractTitle,
  extractDescription,
  yamlString
} from './lib/scraper'

const projectRoot = process.cwd()
const projectsDir = path.join(projectRoot, 'src/content/Projects')

type ProjectTarget = {
  fileName: string
  markdownPath: string
  normalizedUrl: string
  imagePath: string
  imageReference: string
  weight?: string
  draft?: string
}

function parseArgs(argv: string[]) {
  const [, , ...args] = argv
  const dryRun = args.includes('--dry-run')
  return { dryRun }
}

function parseFrontmatterAndBody(content: string) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) {
    return { frontmatter: '', body: content.trim() }
  }

  return {
    frontmatter: match[1],
    body: match[2].trim(),
  }
}

function extractField(frontmatter: string, key: string) {
  const rawMatch = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))
  if (!rawMatch?.[1]) {
    return null
  }

  return rawMatch[1].trim()
}

function stripQuotes(value: string) {
  return value.replace(/^"|"$/g, '')
}

async function collectTargets() {
  const files = (await fs.readdir(projectsDir)).filter((file) => file.endsWith('.md')).sort()
  const targets: ProjectTarget[] = []

  for (const fileName of files) {
    const markdownPath = path.join(projectsDir, fileName)
    const content = await fs.readFile(markdownPath, 'utf8')
    const { frontmatter } = parseFrontmatterAndBody(content)

    const linkRaw = extractField(frontmatter, 'link')
    const imageRaw = extractField(frontmatter, 'image')

    if (!linkRaw || !imageRaw) {
      console.warn(`Skipping ${fileName}: missing link or image in frontmatter.`)
      continue
    }

    const link = stripQuotes(linkRaw)
    const normalizedUrl = new URL(link).toString()
    const imageReference = stripQuotes(imageRaw)

    targets.push({
      fileName,
      markdownPath,
      normalizedUrl,
      imagePath: path.resolve(projectsDir, imageReference),
      imageReference,
      weight: extractField(frontmatter, 'weight') ?? undefined,
      draft: extractField(frontmatter, 'draft') ?? undefined,
    })
  }

  return targets
}

async function updateItems() {
  const { dryRun } = parseArgs(process.argv)
  const targets = await collectTargets()

  if (targets.length === 0) {
    console.log('No project entries found to update.')
    return
  }

  const browser = await chromium.launch({ headless: true })
  const failures: string[] = []

  try {
    for (const target of targets) {
      const page = await browser.newPage({
        viewport: SCREENSHOT_VIEWPORT,
        screen: SCREENSHOT_VIEWPORT,
        deviceScaleFactor: SCREENSHOT_SCALE_FACTOR,
        isMobile: false,
        hasTouch: false,
      })

      try {
        console.log(`Updating ${target.fileName} from ${target.normalizedUrl}`)
        await page.goto(target.normalizedUrl, { waitUntil: 'domcontentloaded', timeout: 45000 })
        await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {})
        await page.evaluate(() => window.scrollTo(0, 0))

        const html = await page.content()
        const urlObject = new URL(target.normalizedUrl)
        const inferredTitle = extractTitle(html, urlObject)
        const inferredContent = extractDescription(html, inferredTitle, urlObject)

        if (!dryRun) {
          await page.screenshot({
            path: target.imagePath,
            type: 'jpeg',
            quality: 84,
          })
        }

        const frontmatterLines = [
          '---',
          ...(target.weight ? [`weight: ${target.weight}`] : []),
          ...(target.draft ? [`draft: ${target.draft}`] : []),
          `title: ${yamlString(inferredTitle)}`,
          `link: ${yamlString(target.normalizedUrl)}`,
          `image: ${target.imageReference}`,
          '---',
          '',
          inferredContent,
          '',
        ]

        const nextMarkdown = frontmatterLines.join('\n')

        if (!dryRun) {
          await fs.writeFile(target.markdownPath, nextMarkdown, 'utf8')
        }
      } catch (error) {
        failures.push(`${target.fileName}: ${error instanceof Error ? error.message : String(error)}`)
      } finally {
        await page.close()
      }
    }
  } finally {
    await browser.close()
  }

  if (failures.length > 0) {
    console.error('Some items failed to update:')
    for (const failure of failures) {
      console.error(`- ${failure}`)
    }
    process.exit(1)
  }

  if (dryRun) {
    console.log(`Dry run complete for ${targets.length} project entries.`)
    return
  }

  console.log(`Updated ${targets.length} project entries.`)
}

updateItems().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
})
