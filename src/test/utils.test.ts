import { describe, it, expect } from 'vitest'
import { iconpos, HIDDEN_MOBILE_CLASS } from '@/lib/utils'

describe('HIDDEN_MOBILE_CLASS', () => {
  it('is a non-empty string', () => {
    expect(typeof HIDDEN_MOBILE_CLASS).toBe('string')
    expect(HIDDEN_MOBILE_CLASS.length).toBeGreaterThan(0)
  })
})

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
