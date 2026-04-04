import { describe, it, expect } from 'vitest'
import { fonts, rosely, lightColors, darkColors } from '../index'

describe('fonts', () => {
  it('exports a body font family string', () => {
    expect(typeof fonts.body).toBe('string')
    expect(fonts.body.length).toBeGreaterThan(0)
  })

  it('exports a mono font family string', () => {
    expect(typeof fonts.mono).toBe('string')
    expect(fonts.mono.length).toBeGreaterThan(0)
  })

  it('body font references Noto Sans', () => {
    expect(fonts.body).toContain('Noto Sans')
  })

  it('mono font references Noto Sans Mono', () => {
    expect(fonts.mono).toContain('Noto Sans Mono')
  })
})

describe('rosely', () => {
  it('includes rosely0 through rosely15', () => {
    for (let i = 0; i <= 15; i++) {
      expect(rosely).toHaveProperty(`rosely${i}`)
    }
  })

  it('includes a jamstack color', () => {
    expect(rosely).toHaveProperty('jamstack')
  })

  it('all values are 6-digit hex strings', () => {
    for (const value of Object.values(rosely)) {
      expect(value).toMatch(/^#[0-9a-fA-F]{6}$/)
    }
  })
})

describe('lightColors', () => {
  it('exports primary, secondary, text, and background', () => {
    expect(lightColors).toHaveProperty('primary')
    expect(lightColors).toHaveProperty('secondary')
    expect(lightColors).toHaveProperty('text')
    expect(lightColors).toHaveProperty('background')
  })

  it('exports heading and textMuted', () => {
    expect(lightColors).toHaveProperty('heading')
    expect(lightColors).toHaveProperty('textMuted')
  })

  it('exports all icon color tokens', () => {
    const iconKeys = [
      'icon_brightest',
      'icon_darker',
      'icon_darkest',
      'icon_red',
      'icon_blue',
      'icon_orange',
      'icon_yellow',
      'icon_pink',
      'icon_purple',
      'icon_green',
    ]
    for (const key of iconKeys) {
      expect(lightColors).toHaveProperty(key)
    }
  })

  it('all values are strings', () => {
    for (const value of Object.values(lightColors)) {
      expect(typeof value).toBe('string')
    }
  })
})

describe('darkColors', () => {
  it('overrides primary, text, and background for dark mode', () => {
    expect(darkColors).toHaveProperty('primary')
    expect(darkColors).toHaveProperty('text')
    expect(darkColors).toHaveProperty('background')
  })

  it('overrides heading and textMuted', () => {
    expect(darkColors).toHaveProperty('heading')
    expect(darkColors).toHaveProperty('textMuted')
  })

  it('uses a dark background (rosely0)', () => {
    expect(darkColors.background).toBe('#27272a')
  })

  it('uses a light text color for dark mode', () => {
    // text should be a lighter shade than the dark background
    expect(darkColors.text).toBe('#f4dede')
  })
})
