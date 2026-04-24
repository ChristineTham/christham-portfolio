#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import {
  SCREENSHOT_VIEWPORT,
  SCREENSHOT_SCALE_FACTOR,
  extractTitle,
  extractDescription,
  yamlString
} from './lib/scraper'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '../..')
const projectsDir = path.join(projectRoot, 'src/content/Projects')
const portfolioAssetsDir = path.join(projectRoot, 'src/assets/portfolio')

type UniquePath = {
  filePath: string
  fileName: string
}

function parseArgs(argv: string[]) {
  const [, , ...args] = argv
  const dryRun = args.includes('--dry-run')
  const urlArg = args.find((arg) => !arg.startsWith('--'))
  return { urlArg, dryRun }
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/https?:\/\//g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70)
}

async function findUniquePath(dir: string, baseSlug: string, extension: string): Promise<UniquePath> {
  let counter = 0
  while (true) {
    const suffix = counter === 0 ? '' : `-${counter + 1}`
    const fileName = `${baseSlug}${suffix}.${extension}`
    const filePath = path.join(dir, fileName)

    try {
      await fs.access(filePath)
      counter += 1
    } catch {
      return { filePath, fileName }
    }
  }
}

async function captureScreenshot(url: string, targetPath: string) {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({
    viewport: SCREENSHOT_VIEWPORT,
    screen: SCREENSHOT_VIEWPORT,
    deviceScaleFactor: SCREENSHOT_SCALE_FACTOR,
    isMobile: false,
    hasTouch: false,
  })

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 })
    await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {})
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.screenshot({
      path: targetPath,
      type: 'jpeg',
      quality: 84,
    })
  } finally {
    await browser.close()
  }
}

async function fetchPageHtml(url: string) {
  let response: Response
  try {
    response = await fetch(url, {
      redirect: 'follow',
      headers: {
        'User-Agent': 'christham-portfolio-bot/1.0 (+https://portfolio.christham.net)',
      },
    })
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error)
    throw new Error(`Failed to fetch page. Check network/DNS access for ${url}. (${detail})`, {
      cause: error,
    })
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch page (${response.status} ${response.statusText})`)
  }

  return response.text()
}

async function main() {
  const { urlArg, dryRun } = parseArgs(process.argv)

  if (!urlArg) {
    console.error('Usage: pnpm additem <url> [--dry-run]')
    process.exit(1)
  }

  let normalizedUrl: string
  try {
    normalizedUrl = new URL(urlArg).toString()
  } catch {
    console.error(`Invalid URL: ${urlArg}`)
    process.exit(1)
  }

  await fs.mkdir(projectsDir, { recursive: true })
  await fs.mkdir(portfolioAssetsDir, { recursive: true })

  console.log(`Analyzing ${normalizedUrl}...`)
  const html = await fetchPageHtml(normalizedUrl)

  const urlObject = new URL(normalizedUrl)
  const inferredTitle = extractTitle(html, urlObject)
  const inferredContent = extractDescription(html, inferredTitle, urlObject)
  const baseSlug = slugify(inferredTitle) || slugify(urlObject.hostname) || 'portfolio-item'

  const markdownTarget = await findUniquePath(projectsDir, baseSlug, 'md')
  const screenshotTarget = await findUniquePath(portfolioAssetsDir, baseSlug, 'jpg')

  if (!dryRun) {
    console.log(`Capturing 4K screenshot to ${path.relative(projectRoot, screenshotTarget.filePath)}...`)
    await captureScreenshot(normalizedUrl, screenshotTarget.filePath)
  }

  const markdown = [
    '---',
    `title: ${yamlString(inferredTitle)}`,
    `link: ${yamlString(normalizedUrl)}`,
    `image: ../../assets/portfolio/${screenshotTarget.fileName}`,
    '---',
    '',
    inferredContent,
    '',
  ].join('\n')

  if (dryRun) {
    console.log('Dry run complete. Preview of generated markdown:')
    console.log('')
    console.log(markdown)
    console.log(`Planned file: ${path.relative(projectRoot, markdownTarget.filePath)}`)
    console.log(`Planned screenshot: ${path.relative(projectRoot, screenshotTarget.filePath)}`)
    return
  }

  await fs.writeFile(markdownTarget.filePath, markdown, 'utf8')

  console.log('Portfolio item created successfully:')
  console.log(`- Markdown: ${path.relative(projectRoot, markdownTarget.filePath)}`)
  console.log(`- Screenshot: ${path.relative(projectRoot, screenshotTarget.filePath)}`)
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
})
