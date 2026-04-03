import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import Inner from '../inner'

describe('Inner', () => {
  it('renders children', () => {
    render(React.createElement(Inner, null, 'Test content'))
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders a div element', () => {
    const { container } = render(React.createElement(Inner, null, 'Content'))
    expect(container.querySelector('div')).not.toBeNull()
  })

  it('applies a custom className to the div', () => {
    const { container } = render(
      React.createElement(Inner, { className: 'custom-class' }, 'Content')
    )
    expect(container.querySelector('div')).toHaveClass('custom-class')
  })

  it('does not apply a user-defined className when none is given', () => {
    const { container } = render(React.createElement(Inner, null, 'Content'))
    const div = container.querySelector('div')
    // theme-ui may add its own CSS class; verify no extra user class is set
    expect(div).not.toHaveClass('custom-class')
  })

  it('renders nested children', () => {
    render(
      React.createElement(
        Inner,
        null,
        React.createElement('h1', null, 'Heading'),
        React.createElement('p', null, 'Paragraph')
      )
    )
    expect(screen.getByText('Heading')).toBeInTheDocument()
    expect(screen.getByText('Paragraph')).toBeInTheDocument()
  })
})
