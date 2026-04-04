import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import MdxComponents from '../mdx-components'

// Mock ProjectCard so we can test MdxComponents in isolation without needing
// gatsby's useStaticQuery or gatsby-plugin-image.
vi.mock('../project-card', () => ({
  default: ({
    link,
    title,
    children,
  }: {
    link: string
    title: string
    children?: React.ReactNode
  }) =>
    React.createElement(
      'a',
      { href: link, 'data-testid': 'project-card' },
      React.createElement('span', { 'data-testid': 'card-title' }, title),
      children
    ),
}))

describe('MdxComponents', () => {
  it('exports a ProjectCard component', () => {
    expect(typeof MdxComponents.ProjectCard).toBe('function')
  })

  it('renders the project title through the ProjectCard wrapper', () => {
    render(
      React.createElement(MdxComponents.ProjectCard, {
        link: 'https://example.com',
        title: 'Test Project',
        bg: '#ff0000',
      })
    )
    expect(screen.getByTestId('card-title')).toHaveTextContent('Test Project')
  })

  it('passes the link prop to ProjectCard', () => {
    render(
      React.createElement(MdxComponents.ProjectCard, {
        link: 'https://christham.net',
        title: 'Test',
        bg: '#ff0000',
      })
    )
    expect(screen.getByTestId('project-card')).toHaveAttribute('href', 'https://christham.net')
  })

  it('passes children through to ProjectCard', () => {
    render(
      React.createElement(
        MdxComponents.ProjectCard,
        { link: 'https://example.com', title: 'Test', bg: '#ff0000' },
        'Card description'
      )
    )
    expect(screen.getByText('Card description')).toBeInTheDocument()
  })
})
