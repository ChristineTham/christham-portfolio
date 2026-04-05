import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'

vi.mock('@/components/parallax', () => ({
  Parallax: ({ pages, children }: { pages: number; children: React.ReactNode }) => (
    <div data-testid="parallax" data-pages={pages}>
      {children}
    </div>
  ),
}))

vi.mock('@/components/hero', () => ({
  default: ({ offset, factor }: { offset: number; factor?: number }) => (
    <section data-testid="hero" data-offset={offset} data-factor={factor} />
  ),
}))

vi.mock('@/components/projects', () => ({
  default: ({ offset, factor }: { offset: number; factor?: number }) => (
    <section data-testid="projects" data-offset={offset} data-factor={factor} />
  ),
}))

vi.mock('@/components/about', () => ({
  default: ({ offset, factor }: { offset: number; factor?: number }) => (
    <section data-testid="about" data-offset={offset} data-factor={factor} />
  ),
}))

vi.mock('@/components/contact', () => ({
  default: ({ offset, factor }: { offset: number; factor?: number }) => (
    <section data-testid="contact" data-offset={offset} data-factor={factor} />
  ),
}))

import Home from '@/app/page'

describe('Home page composition', () => {
  it('renders the parallax container with 5 pages', () => {
    render(React.createElement(Home))

    const parallax = screen.getByTestId('parallax')
    expect(parallax).not.toBeNull()
    expect(parallax.getAttribute('data-pages')).toBe('5')
  })

  it('passes expected offsets and factors to each section', () => {
    render(React.createElement(Home))

    expect(screen.getByTestId('hero').getAttribute('data-offset')).toBe('0')
    expect(screen.getByTestId('hero').getAttribute('data-factor')).toBe('1')

    expect(screen.getByTestId('projects').getAttribute('data-offset')).toBe('1')
    expect(screen.getByTestId('projects').getAttribute('data-factor')).toBe('2')

    expect(screen.getByTestId('about').getAttribute('data-offset')).toBe('3')
    expect(screen.getByTestId('about').getAttribute('data-factor')).toBe('1')

    expect(screen.getByTestId('contact').getAttribute('data-offset')).toBe('4')
    expect(screen.getByTestId('contact').getAttribute('data-factor')).toBe('1')
  })
})
