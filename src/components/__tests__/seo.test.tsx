import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { useStaticQuery } from 'gatsby'
import Seo from '../seo'

vi.mock('gatsby')

const mockSiteMetadata = {
  siteTitle: 'Chris Tham Portfolio',
  siteTitleAlt: 'Chris Tham',
  siteHeadline: 'Portfolio',
  siteUrl: 'https://christham.net',
  siteDescription: 'A portfolio website',
  siteImage: '/banner.jpg',
  siteLanguage: 'en',
  author: '@christham',
}

describe('Seo', () => {
  beforeEach(() => {
    vi.mocked(useStaticQuery).mockReturnValue({
      site: { siteMetadata: mockSiteMetadata },
    })
  })

  it('renders without error', () => {
    expect(() => render(React.createElement(Seo))).not.toThrow()
  })

  it('sets the document title to the siteTitleAlt when no title prop given', () => {
    render(React.createElement(Seo))
    expect(document.title).toBe('Chris Tham')
  })

  it('includes the siteTitle in the document title when a title prop is given', () => {
    render(React.createElement(Seo, { title: 'Projects' }))
    expect(document.title).toBe('Projects | Chris Tham Portfolio')
  })

  it('renders a description meta tag', () => {
    render(React.createElement(Seo))
    const descMeta = document.querySelector('meta[name="description"]')
    expect(descMeta).not.toBeNull()
    expect(descMeta?.getAttribute('content')).toBe('A portfolio website')
  })

  it('renders an og:title meta tag', () => {
    render(React.createElement(Seo, { title: 'About' }))
    const ogTitle = document.querySelector('meta[property="og:title"]')
    expect(ogTitle?.getAttribute('content')).toBe('About | Chris Tham Portfolio')
  })

  it('renders an og:url meta tag using siteUrl and pathname', () => {
    render(React.createElement(Seo, { pathname: '/about' }))
    const ogUrl = document.querySelector('meta[property="og:url"]')
    expect(ogUrl?.getAttribute('content')).toBe('https://christham.net/about')
  })

  it('renders a twitter:card meta tag', () => {
    render(React.createElement(Seo))
    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    expect(twitterCard?.getAttribute('content')).toBe('summary_large_image')
  })

  it('renders a twitter:creator meta tag with the author', () => {
    render(React.createElement(Seo))
    const twitterCreator = document.querySelector('meta[name="twitter:creator"]')
    expect(twitterCreator?.getAttribute('content')).toBe('@christham')
  })

  it('renders a gatsby-theme meta tag', () => {
    render(React.createElement(Seo))
    const gatsbyTheme = document.querySelector('meta[name="gatsby-theme"]')
    expect(gatsbyTheme).not.toBeNull()
  })

  it('renders icon links', () => {
    render(React.createElement(Seo))
    const icons = document.querySelectorAll('link[rel="icon"]')
    expect(icons.length).toBeGreaterThan(0)
  })
})
