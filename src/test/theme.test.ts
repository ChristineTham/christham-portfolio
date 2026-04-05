import { describe, it, expect } from 'vitest'
import { fonts, rosely, lightColors, darkColors } from '@/theme'

describe('fonts', () => {
  it('exports a body font stack', () => {
    expect(typeof fonts.body).toBe('string')
    expect(fonts.body).toContain('Noto Sans')
  })

  it('exports a mono font stack', () => {
    expect(typeof fonts.mono).toBe('string')
    expect(fonts.mono).toContain('mono')
  })
})

describe('rosely palette', () => {
  it('contains 16 named color entries plus jamstack', () => {
    const keys = Object.keys(rosely)
    // rosely0 through rosely15 (16 entries) + jamstack
    expect(keys).toHaveLength(17)
  })

  it('all values are valid hex color strings', () => {
    for (const value of Object.values(rosely)) {
      expect(value).toMatch(/^#[0-9a-fA-F]{6}$/)
    }
  })
})

describe('lightColors', () => {
  it('contains primary, text, background and icon colors', () => {
    expect(lightColors).toHaveProperty('primary')
    expect(lightColors).toHaveProperty('text')
    expect(lightColors).toHaveProperty('background')
    expect(lightColors).toHaveProperty('icon_red')
    expect(lightColors).toHaveProperty('icon_blue')
  })

  it('all values are valid hex color strings', () => {
    for (const value of Object.values(lightColors)) {
      expect(value).toMatch(/^#[0-9a-fA-F]{3,8}$/)
    }
  })
})

describe('darkColors', () => {
  it('overrides primary, text and background', () => {
    expect(darkColors).toHaveProperty('primary')
    expect(darkColors).toHaveProperty('text')
    expect(darkColors).toHaveProperty('background')
  })

  it('dark background differs from light background', () => {
    expect(darkColors.background).not.toBe(lightColors.background)
  })
})
