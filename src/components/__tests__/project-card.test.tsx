import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { useStaticQuery } from 'gatsby'
import ProjectCard from '../project-card'

vi.mock('gatsby')

vi.mock('gatsby-plugin-image', () => ({
  GatsbyImage: ({ alt }: { alt: string }) =>
    React.createElement('img', { alt, 'data-testid': 'project-image' }),
}))

const mockQueryData = {
  allFile: {
    edges: [
      {
        node: {
          base: 'portfolio.jpg',
          childImageSharp: { gatsbyImageData: { width: 800, layout: 'constrained', images: {} } },
        },
      },
      {
        node: {
          base: 'christham.jpg',
          childImageSharp: { gatsbyImageData: { width: 800, layout: 'constrained', images: {} } },
        },
      },
    ],
  },
}

describe('ProjectCard', () => {
  beforeEach(() => {
    vi.mocked(useStaticQuery).mockReturnValue(mockQueryData)
  })

  it('renders the project title', () => {
    render(
      React.createElement(ProjectCard, {
        link: 'https://example.com',
        title: 'My Project',
        bg: '#ff0000',
        image: 'portfolio.jpg',
      })
    )
    expect(screen.getByText('My Project')).toBeInTheDocument()
  })

  it('renders an anchor element linking to the project', () => {
    render(
      React.createElement(ProjectCard, {
        link: 'https://example.com',
        title: 'My Project',
        bg: '#ff0000',
        image: 'portfolio.jpg',
      })
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com')
  })

  it('opens the link in a new tab with rel="noreferrer noopener"', () => {
    render(
      React.createElement(ProjectCard, {
        link: 'https://example.com',
        title: 'My Project',
        bg: '#ff0000',
        image: 'portfolio.jpg',
      })
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer noopener')
  })

  it('renders child content as the description', () => {
    render(
      React.createElement(
        ProjectCard,
        { link: 'https://example.com', title: 'My Project', bg: '#ff0000', image: 'portfolio.jpg' },
        'Project description text'
      )
    )
    expect(screen.getByText('Project description text')).toBeInTheDocument()
  })

  it('renders the project image via GatsbyImage', () => {
    render(
      React.createElement(ProjectCard, {
        link: 'https://example.com',
        title: 'My Project',
        bg: '#ff0000',
        image: 'portfolio.jpg',
      })
    )
    expect(screen.getByTestId('project-image')).toBeInTheDocument()
  })

  it('applies the bg style to the anchor element', () => {
    render(
      React.createElement(ProjectCard, {
        link: 'https://example.com',
        title: 'My Project',
        bg: 'linear-gradient(to right, #f00, #00f)',
        image: 'portfolio.jpg',
      })
    )
    const link = screen.getByRole('link')
    expect(link.style.background).toContain('linear-gradient')
  })

  it('uses portfolio.jpg as the default image', () => {
    render(
      React.createElement(ProjectCard, {
        link: 'https://example.com',
        title: 'My Project',
        bg: '#ff0000',
      })
    )
    // default image='portfolio.jpg' should still find the node at index 0
    expect(screen.getByTestId('project-image')).toBeInTheDocument()
  })
})
