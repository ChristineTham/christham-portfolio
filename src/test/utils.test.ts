import { describe, it, expect } from 'vitest'
import { iconpos, styleToString } from '@/lib/utils'

describe('iconpos', () => {
  it('returns an absolute-positioned style with numeric size converted to rem', () => {
    const style = iconpos(16, '10%', '20%')
    expect(style.position).toBe('absolute')
    expect(style.width).toBe('4rem')
    expect(style.height).toBe('4rem')
    expect(style.left).toBe('10%')
    expect(style.top).toBe('20%')
  })

  it('passes through a string size unchanged', () => {
    const style = iconpos('2rem', 0, 0)
    expect(style.width).toBe('2rem')
    expect(style.height).toBe('2rem')
  })

  it('converts size 0 to 0rem', () => {
    const style = iconpos(0, '5%', '5%')
    expect(style.width).toBe('0rem')
    expect(style.height).toBe('0rem')
  })
})

describe('styleToString', () => {
  it('returns empty string for undefined', () => {
    expect(styleToString(undefined)).toBe('')
  })

  it('returns empty string for empty object', () => {
    expect(styleToString({})).toBe('')
  })

  it('passes through a plain CSS string unchanged', () => {
    const css = 'position: absolute; width: 4rem'
    expect(styleToString(css)).toBe(css)
  })

  it('converts a single camelCase key to kebab-case', () => {
    expect(styleToString({ backgroundColor: 'red' })).toBe('background-color: red')
  })

  it('joins multiple entries with "; "', () => {
    expect(styleToString({ width: '4rem', height: '4rem' })).toBe('width: 4rem; height: 4rem')
  })

  it('handles numeric values', () => {
    expect(styleToString({ zIndex: 10 })).toBe('z-index: 10')
  })

  it('converts the iconpos return value to a valid CSS string', () => {
    const pos = iconpos(16, '10%', '20%')
    const css = styleToString(pos)
    expect(css).toBe('position: absolute; width: 4rem; height: 4rem; left: 10%; top: 20%')
  })
})
