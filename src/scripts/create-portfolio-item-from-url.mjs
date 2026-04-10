#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '../..')
const projectsDir = path.join(projectRoot, 'src/content/Projects')
const portfolioAssetsDir = path.join(projectRoot, 'src/assets/portfolio')

function parseArgs(argv) {
  const [, , ...args] = argv
  const dryRun = args.includes('--dry-run')
  const urlArg = args.find((arg) => !arg.startsWith('--'))
  return { urlArg, dryRun }
}

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/https?:\/\//g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70)
}

function stripTags(input) {
  return input
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function decodeHtmlEntities(input) {
  return input
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function extractMetaContent(html, nameOrProperty) {
  const escaped = nameOrProperty.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const patterns = [
    new RegExp(`<meta[^>]+property=["']${escaped}["'][^>]*content=["']([^"']+)["'][^>]*>`, 'i'),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]*property=["']${escaped}["'][^>]*>`, 'i'),
    new RegExp(`<meta[^>]+name=["']${escaped}["'][^>]*content=["']([^"']+)["'][^>]*>`, 'i'),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]*name=["']${escaped}["'][^>]*>`, 'i'),
  ]

  for (const pattern of patterns) {
    const match = html.match(pattern)
    if (match?.[1]) {
      return decodeHtmlEntities(stripTags(match[1]))
    }
  }

  return null
}

function extractTitle(html, urlObject) {
  const ogTitle = extractMetaContent(html, 'og:title')
  if (ogTitle) {
    return ogTitle
  }

  const twitterTitle = extractMetaContent(html, 'twitter:title')
  if (twitterTitle) {
    return twitterTitle
  }

  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  if (titleMatch?.[1]) {
    return decodeHtmlEntities(stripTags(titleMatch[1]))
  }

  return urlObject.hostname.replace(/^www\./, '')
}

function extractDescription(html, title, urlObject) {
  const candidates = [
    extractMetaContent(html, 'og:description'),
    extractMetaContent(html, 'twitter:description'),
    extractMetaContent(html, 'description'),
  ]

  for (const candidate of candidates) {
    if (candidate && candidate.length > 30) {
      return toShortParagraph(candidate)
    }
  }

  const firstParagraphMatch = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i)
  if (firstParagraphMatch?.[1]) {
    const paragraph = decodeHtmlEntities(stripTags(firstParagraphMatch[1]))
    if (paragraph.length > 30) {
      return toShortParagraph(paragraph)
    }
  }

  return `${title} is a website hosted at ${urlObject.hostname} that showcases its core content and purpose.`
}

function toShortParagraph(input) {
  const cleaned = input.replace(/\s+/g, ' ').trim()
  if (cleaned.length <= 220) {
    return cleaned
  }

  const truncated = cleaned.slice(0, 220)
  const lastSentence = Math.max(truncated.lastIndexOf('. '), truncated.lastIndexOf('! '), truncated.lastIndexOf('? '))
  if (lastSentence > 80) {
    return truncated.slice(0, lastSentence + 1).trim()
  }

  return `${truncated.trimEnd()}...`
}

async function findUniquePath(dir, baseSlug, extension) {
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

function yamlString(value) {
  return `"${value
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, ' ')
    .trim()}"`
}

async function captureScreenshot(url, targetPath) {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } })

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 })
    await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {})
    await page.screenshot({ path: targetPath, fullPage: true, type: 'jpeg', quality: 84 })
  } finally {
    await browser.close()
  }
}

async function fetchPageHtml(url) {
  let response
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
    console.error('Usage: pnpm portfolio:add <url> [--dry-run]')
    process.exit(1)
  }

  let normalizedUrl
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
    console.log(`Capturing screenshot to ${path.relative(projectRoot, screenshotTarget.filePath)}...`)
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

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
})
