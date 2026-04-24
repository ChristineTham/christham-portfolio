export const SCREENSHOT_VIEWPORT = {
  width: 1920,
  height: 1080,
} as const

export const SCREENSHOT_SCALE_FACTOR = 2

export function stripTags(input: string) {
  return input
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function decodeHtmlEntities(input: string) {
  return input
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

export function extractMetaContent(html: string, nameOrProperty: string) {
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

export function extractTitle(html: string, urlObject: URL) {
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

export function toShortParagraph(input: string) {
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

export function extractDescription(html: string, title: string, urlObject: URL) {
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

export function yamlString(value: string) {
  return `"${value
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, ' ')
    .trim()}"`
}
