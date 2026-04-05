import { describe, it, expect } from 'vitest'
import { waveAnimation, wave, UpDown, UpDownWide } from '@/components/animations'
import { render } from '@testing-library/react'
import React from 'react'

describe('waveAnimation', () => {
  it('returns a CSS animation string with the given length', () => {
    expect(waveAnimation('25s')).toBe('wave 25s linear infinite alternate')
  })

  it('works with different length values', () => {
    expect(waveAnimation('10s')).toBe('wave 10s linear infinite alternate')
  })
})

describe('wave', () => {
  it('is the string "wave"', () => {
    expect(wave).toBe('wave')
  })
})

describe('UpDown', () => {
  it('renders children inside a div with animate-up-down class', () => {
    const { container } = render(
      React.createElement(UpDown, null, React.createElement('span', null, 'test'))
    )
    const div = container.querySelector('div')
    expect(div).not.toBeNull()
    expect(div?.classList.contains('animate-up-down')).toBe(true)
    expect(div?.textContent).toBe('test')
  })
})

describe('UpDownWide', () => {
  it('renders children inside a div with animate-up-down-wide class', () => {
    const { container } = render(
      React.createElement(UpDownWide, null, React.createElement('span', null, 'wide'))
    )
    const div = container.querySelector('div')
    expect(div).not.toBeNull()
    expect(div?.classList.contains('animate-up-down-wide')).toBe(true)
    expect(div?.textContent).toBe('wide')
  })
})
