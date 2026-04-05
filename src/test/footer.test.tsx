import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Footer from '@/components/footer'
import React from 'react'

describe('Footer', () => {
  it('renders a footer element', () => {
    const { container } = render(React.createElement(Footer))
    expect(container.querySelector('footer')).not.toBeNull()
  })

  it('shows the current year in the copyright notice', () => {
    const { container } = render(React.createElement(Footer))
    const year = new Date().getFullYear().toString()
    expect(container.textContent).toContain(year)
  })

  it('contains a link to the GitHub repository', () => {
    const { getByLabelText } = render(React.createElement(Footer))
    const repoLink = getByLabelText("Link to the theme's GitHub repository")
    expect(repoLink).not.toBeNull()
    expect(repoLink.getAttribute('href')).toContain('github.com')
  })

  it('contains a link to the Hello Tham website', () => {
    const { getByLabelText } = render(React.createElement(Footer))
    const authorLink = getByLabelText("Link to the theme author's website")
    expect(authorLink).not.toBeNull()
    expect(authorLink.getAttribute('href')).toContain('hellotham.com')
  })

  it('renders the logo image with correct alt text', () => {
    const { getByAltText } = render(React.createElement(Footer))
    const logo = getByAltText('Hello Tham Logo')
    expect(logo).not.toBeNull()
  })
})
