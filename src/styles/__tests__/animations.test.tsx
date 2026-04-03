import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { UpDown, UpDownWide, waveAnimation } from '../animations'

describe('waveAnimation', () => {
  it('returns a string', () => {
    expect(typeof waveAnimation('20s')).toBe('string')
  })

  it('includes the provided duration in the output', () => {
    expect(waveAnimation('10s')).toContain('10s')
    expect(waveAnimation('30s')).toContain('30s')
  })

  it('includes "linear" and "infinite" keywords', () => {
    const result = waveAnimation('5s')
    expect(result).toContain('linear')
    expect(result).toContain('infinite')
  })
})

describe('UpDown', () => {
  it('renders children', () => {
    render(React.createElement(UpDown, null, React.createElement('span', null, 'UpDown content')))
    expect(screen.getByText('UpDown content')).toBeInTheDocument()
  })

  it('wraps children in a div', () => {
    const { container } = render(
      React.createElement(UpDown, null, React.createElement('span', null, 'content'))
    )
    expect(container.querySelector('div')).not.toBeNull()
  })
})

describe('UpDownWide', () => {
  it('renders children', () => {
    render(React.createElement(UpDownWide, null, React.createElement('span', null, 'Wide content')))
    expect(screen.getByText('Wide content')).toBeInTheDocument()
  })

  it('wraps children in a div', () => {
    const { container } = render(
      React.createElement(UpDownWide, null, React.createElement('span', null, 'content'))
    )
    expect(container.querySelector('div')).not.toBeNull()
  })
})
