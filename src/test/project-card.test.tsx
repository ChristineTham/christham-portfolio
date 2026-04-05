import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import React from 'react'

// Mock next/image to render a plain <img> element
vi.mock('next/image', () => ({
  default: ({ src, alt, width, height, style, loading }: {
    src: string
    alt: string
    width: number
    height: number
    style?: React.CSSProperties
    loading?: string
  }) =>
    React.createElement('img', { src, alt, width, height, style, loading }),
}))

import ProjectCard from '../components/project-card'

describe('ProjectCard', () => {
  const defaultProps = {
    link: 'https://example.com',
    title: 'My Project',
    bg: 'linear-gradient(to right, #f00, #00f)',
  }

  it('renders a link wrapping the card', () => {
    const { container } = render(React.createElement(ProjectCard, defaultProps))
    const anchor = container.querySelector('a')
    expect(anchor).not.toBeNull()
    expect(anchor?.getAttribute('href')).toBe('https://example.com')
    expect(anchor?.getAttribute('target')).toBe('_blank')
    expect(anchor?.getAttribute('rel')).toContain('noreferrer')
  })

  it('displays the project title', () => {
    const { getByText } = render(React.createElement(ProjectCard, defaultProps))
    expect(getByText('My Project')).not.toBeNull()
  })

  it('renders children as description text', () => {
    const { getByText } = render(
      React.createElement(ProjectCard, defaultProps, 'A great project description')
    )
    expect(getByText('A great project description')).not.toBeNull()
  })

  it('uses the default image when image prop is omitted', () => {
    const { container } = render(React.createElement(ProjectCard, defaultProps))
    const img = container.querySelector('img')
    expect(img?.getAttribute('src')).toContain('portfolio.jpg')
  })

  it('uses a custom image when provided', () => {
    const { container } = render(
      React.createElement(ProjectCard, { ...defaultProps, image: 'myapp.jpg' })
    )
    const img = container.querySelector('img')
    expect(img?.getAttribute('src')).toContain('myapp.jpg')
  })

  it('applies the bg style to the anchor element', () => {
    const { container } = render(React.createElement(ProjectCard, defaultProps))
    const anchor = container.querySelector('a')
    expect(anchor?.getAttribute('style')).toContain('background')
  })

  it('uses the image filename (without extension) as alt text', () => {
    const { container } = render(
      React.createElement(ProjectCard, { ...defaultProps, image: 'coolsite.jpg' })
    )
    const img = container.querySelector('img')
    expect(img?.getAttribute('alt')).toBe('coolsite')
  })
})
