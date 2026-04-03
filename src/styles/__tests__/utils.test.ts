import { describe, it, expect } from 'vitest'
import { hidden, iconpos } from '../utils'

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

describe('iconpos', () => {
  it('returns position absolute', () => {
    const result = iconpos(24, 10, 20)
    expect(result.position).toBe('absolute')
  })

  it('sets size, left and top from arguments', () => {
    const result = iconpos(24, 10, 20)
    expect(result.size).toBe(24)
    expect(result.left).toBe(10)
    expect(result.top).toBe(20)
  })

  it('defaults display to ["block"]', () => {
    const result = iconpos(24, 10, 20)
    expect(result.display).toEqual(['block'])
  })

  it('accepts string values for size, left and top', () => {
    const result = iconpos('2rem', '10px', '20px')
    expect(result.size).toBe('2rem')
    expect(result.left).toBe('10px')
    expect(result.top).toBe('20px')
  })

  it('accepts a custom display array', () => {
    const result = iconpos(16, 5, 10, ['block', 'none', 'block'])
    expect(result.display).toEqual(['block', 'none', 'block'])
  })

  it('returns the full CSS object shape', () => {
    const result = iconpos(32, 0, 0)
    expect(result).toMatchObject({
      position: 'absolute',
      size: 32,
      left: 0,
      top: 0,
    })
  })
})
