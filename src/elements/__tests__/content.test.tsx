import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import Content from '../content'

// Mock ParallaxLayer with a simple div wrapper so Content tests don't depend
// on motion/react or the parallax context.
vi.mock('../../components/parallax', () => ({
  ParallaxLayer: ({
    children,
    className,
  }: {
    children?: React.ReactNode
    className?: string
  }) => React.createElement('div', { className }, children),
}))

describe('Content', () => {
  it('renders children', () => {
    render(React.createElement(Content, { speed: 0.4, offset: 0 }, 'Test content'))
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('wraps content in a div element', () => {
    const { container } = render(
      React.createElement(Content, { speed: 0.4, offset: 0 }, React.createElement('p', null, 'Hello'))
    )
    expect(container.querySelector('div')).not.toBeNull()
  })

  it('includes the default layout classes on the wrapper', () => {
    const { container } = render(React.createElement(Content, { speed: 0.4, offset: 0 }, null))
    const div = container.querySelector('div')
    expect(div?.className).toContain('flex')
  })

  it('appends a custom className when provided', () => {
    const { container } = render(
      React.createElement(Content, { speed: 0.4, offset: 0, className: 'extra-class' }, null)
    )
    const div = container.querySelector('div')
    expect(div?.className).toContain('extra-class')
  })

  it('does not append a trailing space when no className is provided', () => {
    const { container } = render(React.createElement(Content, { speed: 0.4, offset: 0 }, null))
    const className = container.querySelector('div')?.className ?? ''
    expect(className).not.toMatch(/ $/)
  })

  it('renders multiple children', () => {
    render(
      React.createElement(
        Content,
        { speed: 0.4, offset: 0 },
        React.createElement('span', { key: '1' }, 'First'),
        React.createElement('span', { key: '2' }, 'Second')
      )
    )
    expect(screen.getByText('First')).toBeInTheDocument()
    expect(screen.getByText('Second')).toBeInTheDocument()
  })
})
