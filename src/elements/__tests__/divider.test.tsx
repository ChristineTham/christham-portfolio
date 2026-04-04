import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import Divider from '../divider'

// Mock ParallaxLayer with a simple div wrapper that forwards style and className.
vi.mock('../../components/parallax', () => ({
  ParallaxLayer: ({
    children,
    style,
    className,
  }: {
    children?: React.ReactNode
    style?: React.CSSProperties
    className?: string
  }) => React.createElement('div', { style, className }, children),
}))

describe('Divider', () => {
  it('renders children', () => {
    render(React.createElement(Divider, { speed: 0.2, offset: 0 }, 'Divider content'))
    expect(screen.getByText('Divider content')).toBeInTheDocument()
  })

  it('renders without children by default', () => {
    const { container } = render(React.createElement(Divider, { speed: 0, offset: 0 }))
    expect(container.querySelector('div')).not.toBeNull()
  })

  it('applies a background style when bg is provided', () => {
    const { container } = render(
      React.createElement(Divider, { speed: 0, offset: 0, bg: 'rgb(255, 0, 0)' })
    )
    const div = container.querySelector('div') as HTMLElement
    expect(div.style.background).toBeTruthy()
  })

  it('does not set a background style when bg is omitted', () => {
    const { container } = render(React.createElement(Divider, { speed: 0, offset: 0 }))
    const div = container.querySelector('div') as HTMLElement
    expect(div.style.background).toBe('')
  })

  it('applies a clipPath style when clipPath is provided', () => {
    const { container } = render(
      React.createElement(Divider, {
        speed: 0,
        offset: 0,
        clipPath: 'polygon(0 16%, 100% 4%, 100% 82%, 0 94%)',
      })
    )
    const div = container.querySelector('div') as HTMLElement
    expect(div.style.clipPath).toBe('polygon(0 16%, 100% 4%, 100% 82%, 0 94%)')
  })

  it('does not set a clipPath style when clipPath is omitted', () => {
    const { container } = render(React.createElement(Divider, { speed: 0, offset: 0 }))
    const div = container.querySelector('div') as HTMLElement
    expect(div.style.clipPath).toBe('')
  })

  it('applies fill as the color style (for SVG currentColor inheritance)', () => {
    const { container } = render(
      React.createElement(Divider, { speed: 0, offset: 0, fill: 'purple' })
    )
    const div = container.querySelector('div') as HTMLElement
    expect(div.style.color).toBeTruthy()
  })

  it('does not set a color style when fill is omitted', () => {
    const { container } = render(React.createElement(Divider, { speed: 0, offset: 0 }))
    const div = container.querySelector('div') as HTMLElement
    expect(div.style.color).toBe('')
  })

  it('appends an extra className when provided', () => {
    const { container } = render(
      React.createElement(Divider, { speed: 0, offset: 0, className: 'z-10' })
    )
    expect(container.querySelector('div')?.className).toContain('z-10')
  })

  it('includes the default absolute-positioning class', () => {
    const { container } = render(React.createElement(Divider, { speed: 0, offset: 0 }))
    expect(container.querySelector('div')?.className).toContain('absolute')
  })
})
