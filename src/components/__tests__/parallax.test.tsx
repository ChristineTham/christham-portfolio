import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { Parallax, ParallaxLayer } from '../parallax'

// Mock motion/react so the parallax component renders plain divs in jsdom.
// The `y` MotionValue is stripped from style to avoid setting an invalid CSS value.
vi.mock('motion/react', () => ({
  motion: {
    div: ({
      children,
      style,
      className,
    }: {
      children?: React.ReactNode
      style?: Record<string, unknown>
      className?: string
    }) => {
      const { y: _y, ...cleanStyle } = style ?? {}
      return React.createElement('div', { style: cleanStyle, className }, children)
    },
  },
  useScroll: () => ({ scrollY: { get: () => 0 } }),
  useTransform: () => ({ get: () => 0 }),
  useMotionValue: (_v: unknown) => ({ get: () => 0 }),
}))

describe('Parallax', () => {
  it('renders children', () => {
    render(
      React.createElement(Parallax, { pages: 3 }, React.createElement('span', null, 'Child content'))
    )
    expect(screen.getByText('Child content')).toBeInTheDocument()
  })

  it('creates a scrollable outer container', () => {
    const { container } = render(React.createElement(Parallax, { pages: 2 }, null))
    const outer = container.firstElementChild as HTMLElement
    expect(outer).not.toBeNull()
    expect(outer.style.overflowY).toBe('scroll')
    expect(outer.style.height).toBe('100vh')
  })

  it('sets the inner height based on the pages prop', () => {
    const { container } = render(React.createElement(Parallax, { pages: 4 }, null))
    const inner = container.firstElementChild?.firstElementChild as HTMLElement
    expect(inner?.style.height).toBe('400vh')
  })

  it('renders multiple children', () => {
    render(
      React.createElement(
        Parallax,
        { pages: 2 },
        React.createElement('span', null, 'First'),
        React.createElement('span', null, 'Second')
      )
    )
    expect(screen.getByText('First')).toBeInTheDocument()
    expect(screen.getByText('Second')).toBeInTheDocument()
  })
})

describe('ParallaxLayer', () => {
  it('renders children inside a Parallax container', () => {
    render(
      React.createElement(
        Parallax,
        { pages: 2 },
        React.createElement(ParallaxLayer, { offset: 0, speed: 0.2 }, 'Layer content')
      )
    )
    expect(screen.getByText('Layer content')).toBeInTheDocument()
  })

  it('renders children outside a Parallax container (fallback mode)', () => {
    render(React.createElement(ParallaxLayer, { offset: 0, speed: 0.2 }, 'Standalone content'))
    expect(screen.getByText('Standalone content')).toBeInTheDocument()
  })

  it('applies a className to the layer element', () => {
    const { container } = render(
      React.createElement(ParallaxLayer, { offset: 0, speed: 0, className: 'layer-class' }, null)
    )
    expect(container.firstElementChild).toHaveClass('layer-class')
  })

  it('positions the layer at the correct offset (top = offset * 100vh)', () => {
    const { container } = render(
      React.createElement(ParallaxLayer, { offset: 1, speed: 0 }, null)
    )
    const div = container.firstElementChild as HTMLElement
    expect(div.style.top).toBe('100vh')
  })

  it('sets the layer height based on the factor prop', () => {
    const { container } = render(
      React.createElement(ParallaxLayer, { offset: 0, speed: 0, factor: 2 }, null)
    )
    const div = container.firstElementChild as HTMLElement
    expect(div.style.height).toBe('200vh')
  })

  it('defaults to factor=1 when the factor prop is omitted', () => {
    const { container } = render(
      React.createElement(ParallaxLayer, { offset: 0, speed: 0 }, null)
    )
    const div = container.firstElementChild as HTMLElement
    expect(div.style.height).toBe('100vh')
  })

  it('applies extra inline styles when provided', () => {
    const { container } = render(
      React.createElement(
        ParallaxLayer,
        { offset: 0, speed: 0, style: { background: 'red' } },
        null
      )
    )
    const div = container.firstElementChild as HTMLElement
    expect(div.style.background).toBe('red')
  })
})
