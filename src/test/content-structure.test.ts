import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'

const projectRoot = path.resolve(__dirname, '../..')
const contentRoot = path.join(projectRoot, 'src/content')
const componentsRoot = path.join(projectRoot, 'src/components')

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

  it('defines project entries as JSON files in src/content/Projects', () => {
    const projectsDir = path.join(contentRoot, 'Projects')
    const files = fs.readdirSync(projectsDir).filter((file) => file.endsWith('.json'))

    expect(files.length).toBeGreaterThan(0)
  })

  it('ensures every project entry has required keys', () => {
    const projectsDir = path.join(contentRoot, 'Projects')
    const files = fs.readdirSync(projectsDir).filter((file) => file.endsWith('.json'))

    for (const file of files) {
      const raw = fs.readFileSync(path.join(projectsDir, file), 'utf-8')
      const data = JSON.parse(raw) as Record<string, unknown>

      expect(data).toHaveProperty('order')
      expect(data).toHaveProperty('title')
      expect(data).toHaveProperty('link')
      expect(data).toHaveProperty('bg')
      expect(data).toHaveProperty('image')
      expect(data).toHaveProperty('description')
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
