import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import Footer from '../footer'

describe('Footer', () => {
  it('renders without error', () => {
    expect(() => render(React.createElement(Footer))).not.toThrow()
  })

  it('shows the current year in the copyright notice', () => {
    render(React.createElement(Footer))
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })

  it('contains "Copyright" text', () => {
    render(React.createElement(Footer))
    expect(screen.getByText(/Copyright/)).toBeInTheDocument()
  })

  it('renders a link to the GitHub repository labeled "Website"', () => {
    render(React.createElement(Footer))
    const websiteLink = screen.getByRole('link', { name: /theme's GitHub repository/i })
    expect(websiteLink).toHaveAttribute(
      'href',
      'https://github.com/ChristineTham/christham-portfolio'
    )
  })

  it('renders a link to the Hello Tham website', () => {
    render(React.createElement(Footer))
    const helloThamLink = screen.getByRole('link', { name: /theme author/i })
    expect(helloThamLink).toHaveAttribute('href', 'https://hellotham.com')
  })

  it('renders the logo image', () => {
    render(React.createElement(Footer))
    const logo = screen.getByAltText('Hello Tham Logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/logo.svg')
  })

  it('renders a footer element', () => {
    const { container } = render(React.createElement(Footer))
    expect(container.querySelector('footer')).not.toBeNull()
  })
})
