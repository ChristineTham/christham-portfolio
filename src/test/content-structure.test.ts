import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'

const projectRoot = path.resolve(__dirname, '../..')
const contentRoot = path.join(projectRoot, 'src/content')
const componentsRoot = path.join(projectRoot, 'src/components')
const projectsDir = path.join(contentRoot, 'Projects')

const requiredProjectFrontmatterKeys = ['order', 'title', 'link', 'image']

function getProjectMarkdownFiles() {
  return fs.readdirSync(projectsDir).filter((file) => file.endsWith('.md'))
}

function getProjectJsonFiles() {
  return fs.readdirSync(projectsDir).filter((file) => file.endsWith('.json'))
}

function parseFrontmatterAndBody(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) {
    return { frontmatter: '', body: '' }
  }

  return {
    frontmatter: match[1],
    body: match[2].trim(),
  }
}

function hasFile(filePath: string) {
  return fs.existsSync(filePath)
}

describe('content structure', () => {
  it('keeps section markdown files in src/content/Sections', () => {
    expect(hasFile(path.join(contentRoot, 'Sections/about.md'))).toBe(true)
    expect(hasFile(path.join(contentRoot, 'Sections/contact.md'))).toBe(true)
  })

  it('does not keep section markdown files in src/pages', () => {
    expect(hasFile(path.join(projectRoot, 'src/pages/about.md'))).toBe(false)
    expect(hasFile(path.join(projectRoot, 'src/pages/contact.md'))).toBe(false)
  })

  it('defines project entries as markdown files in src/content/Projects', () => {
    const files = getProjectMarkdownFiles()

    expect(files.length).toBeGreaterThan(0)
    expect(getProjectJsonFiles()).toHaveLength(0)
  })

  it('ensures every project entry has required frontmatter and markdown content', () => {
    const files = getProjectMarkdownFiles()

    for (const file of files) {
      const raw = fs.readFileSync(path.join(projectsDir, file), 'utf-8')
      const { frontmatter, body } = parseFrontmatterAndBody(raw)

      expect(frontmatter.length).toBeGreaterThan(0)
      for (const key of requiredProjectFrontmatterKeys) {
        expect(frontmatter).toMatch(new RegExp(`^${key}:\\s*.+`, 'm'))
      }

      expect(frontmatter).toMatch(/^order:\s*\d+/m)
      expect(frontmatter).toMatch(/^link:\s*https?:\/\/.+/m)

      const imageMatch = frontmatter.match(/^image:\s*(.+)$/m)
      expect(imageMatch).not.toBeNull()
      const imagePath = imageMatch?.[1]?.trim() ?? ''
      expect(hasFile(path.resolve(projectsDir, imagePath))).toBe(true)

      expect(body.length).toBeGreaterThan(0)
    }
  })

  it('keeps section backgrounds in src/assets/backgrounds', () => {
    const backgroundsDir = path.join(projectRoot, 'src/assets/backgrounds')
    const files = fs.readdirSync(backgroundsDir)

    expect(files.length).toBeGreaterThan(0)
    expect(files).toContain('floral-spring.svg')
    expect(files).toContain('garden-tree.svg')
    expect(files).toContain('lake.svg')
    expect(files).toContain('river.svg')
  })

  it('does not keep section backgrounds in public/backgrounds', () => {
    expect(hasFile(path.join(projectRoot, 'public/backgrounds'))).toBe(false)
  })

  it('uses SVG component imports instead of raw SVG strings in section components', () => {
    const sectionComponents = ['About.astro', 'Contact.astro', 'Hero.astro', 'Projects.astro']

    for (const fileName of sectionComponents) {
      const file = fs.readFileSync(path.join(componentsRoot, fileName), 'utf-8')
      expect(file).not.toContain('?raw')
    }
  })
})
