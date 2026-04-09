import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'

const projectRoot = path.resolve(__dirname, '../..')
const globalCssPath = path.join(projectRoot, 'src/styles/global.css')
const globalCss = fs.readFileSync(globalCssPath, 'utf-8')

describe('global.css theme tokens', () => {
  it('imports font packages and defines font family theme variables', () => {
    expect(globalCss).toContain('@import "@fontsource-variable/noto-sans";')
    expect(globalCss).toContain('@import "@fontsource-variable/noto-sans-mono";')
    expect(globalCss).toContain('--font-sans: "Noto Sans Variable", "Noto Sans", sans-serif;')
    expect(globalCss).toContain('--font-mono: "Noto Sans Mono Variable", "Noto Sans Mono", monospace;')
  })

  it('defines rosely scale variables and jamstack token', () => {
    const roselyVars = globalCss.match(/--rosely\d+:/g) ?? []
    expect(roselyVars).toHaveLength(16)
    expect(globalCss).toContain('--jamstack: #f0047f;')
  })

  it('maps semantic light mode color tokens from palette variables', () => {
    expect(globalCss).toContain('--color-secondary: var(--rosely7);')
    expect(globalCss).toContain('--color-text: var(--rosely0);')
    expect(globalCss).toContain('--color-background: var(--rosely5);')
    expect(globalCss).toContain('--color-icon_pink: var(--jamstack);')
  })

  it('defines dark mode token overrides', () => {
    expect(globalCss).toContain('.dark {')
    expect(globalCss).toContain('--color-background: var(--rosely0);')
    expect(globalCss).toContain('--color-heading: var(--rosely4);')
  })

  it('keeps animation keyframes in global css', () => {
    expect(globalCss).toContain('@keyframes up-down {')
    expect(globalCss).toContain('@keyframes up-down-wide {')
  })
})
