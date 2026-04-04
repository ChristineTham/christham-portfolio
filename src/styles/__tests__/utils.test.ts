import { describe, it, expect } from 'vitest'
import { hidden, iconpos, HIDDEN_MOBILE_CLASS } from '../utils'

describe('hidden', () => {
  it('is an array with three responsive display values', () => {
    expect(hidden).toEqual(['none', 'none', 'block'])
  })

  it('hides on the first two breakpoints', () => {
    expect(hidden[0]).toBe('none')
    expect(hidden[1]).toBe('none')
  })

  it('shows on the third breakpoint', () => {
    expect(hidden[2]).toBe('block')
  })
})

describe('HIDDEN_MOBILE_CLASS', () => {
  it('is a non-empty string', () => {
    expect(typeof HIDDEN_MOBILE_CLASS).toBe('string')
    expect(HIDDEN_MOBILE_CLASS.length).toBeGreaterThan(0)
  })
})

describe('iconpos', () => {
  it('returns position absolute', () => {
    const result = iconpos(24, 10, 20)
    expect(result.position).toBe('absolute')
  })

  it('sets width, height, left and top from arguments', () => {
    const result = iconpos(24, 10, 20)
    expect(result.width).toBe('6rem')  // 24 maps to 6rem in Tailwind size scale
    expect(result.height).toBe('6rem')
    expect(result.left).toBe(10)
    expect(result.top).toBe(20)
  })

  it('accepts string values for size, left and top', () => {
    const result = iconpos('2rem', '10px', '20px')
    expect(result.width).toBe('2rem')
    expect(result.height).toBe('2rem')
    expect(result.left).toBe('10px')
    expect(result.top).toBe('20px')
  })

  it('returns the full inline style object shape', () => {
    const result = iconpos(32, 0, 0)
    expect(result).toMatchObject({
      position: 'absolute',
      width: '8rem',  // 32 maps to 8rem
      height: '8rem',
      left: 0,
      top: 0,
    })
  })

  it('does not include media query keys (inline style only)', () => {
    const result = iconpos(16, 5, 10)
    const keys = Object.keys(result)
    expect(keys.every(k => !k.startsWith('@media'))).toBe(true)
  })
})
