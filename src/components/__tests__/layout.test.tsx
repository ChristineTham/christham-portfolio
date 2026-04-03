import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import Layout from '../layout'

describe('Layout', () => {
  it('renders children', () => {
    render(React.createElement(Layout, null, 'Hello World'))
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('wraps children in a main element', () => {
    const { container } = render(React.createElement(Layout, null, 'Content'))
    expect(container.querySelector('main')).not.toBeNull()
  })

  it('applies the provided className to the main element', () => {
    const { container } = render(
      React.createElement(Layout, { className: 'test-class' }, 'Content')
    )
    expect(container.querySelector('main')).toHaveClass('test-class')
  })

  it('uses an empty className by default', () => {
    const { container } = render(React.createElement(Layout, null, 'Content'))
    const main = container.querySelector('main')
    expect(main?.className).toBe('')
  })

  it('renders multiple children', () => {
    render(
      React.createElement(
        Layout,
        null,
        React.createElement('span', { key: '1' }, 'First'),
        React.createElement('span', { key: '2' }, 'Second')
      )
    )
    expect(screen.getByText('First')).toBeInTheDocument()
    expect(screen.getByText('Second')).toBeInTheDocument()
  })
})
