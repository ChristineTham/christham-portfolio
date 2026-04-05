import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Inner from '../elements/inner'
import React from 'react'

describe('Inner', () => {
  it('renders children', () => {
    const { getByText } = render(
      React.createElement(Inner, null, 'Hello Inner')
    )
    expect(getByText('Hello Inner')).not.toBeNull()
  })

  it('applies default classes when no className is provided', () => {
    const { container } = render(
      React.createElement(Inner, null, 'content')
    )
    const div = container.querySelector('div')
    expect(div?.classList.contains('w-full')).toBe(true)
    expect(div?.classList.contains('text-left')).toBe(true)
  })

  it('appends a custom className when provided', () => {
    const { container } = render(
      React.createElement(Inner, { className: 'custom-class' }, 'content')
    )
    const div = container.querySelector('div')
    expect(div?.classList.contains('custom-class')).toBe(true)
    expect(div?.classList.contains('w-full')).toBe(true)
  })

  it('renders without children', () => {
    const { container } = render(React.createElement(Inner))
    expect(container.querySelector('div')).not.toBeNull()
  })
})
