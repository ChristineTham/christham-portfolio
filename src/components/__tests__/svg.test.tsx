import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import * as React from 'react'
import Svg from '../svg'

vi.mock('gatsby')

describe('Svg', () => {
  it('renders an svg element', () => {
    const { container } = render(
      React.createElement(Svg, { icon: 'triangle', width: 24, left: '10%', top: '20%' })
    )
    expect(container.querySelector('svg')).not.toBeNull()
  })

  it('renders a <use> element with the correct icon href', () => {
    const { container } = render(
      React.createElement(Svg, { icon: 'circle', width: 16, left: '0', top: '0' })
    )
    const use = container.querySelector('use')
    expect(use?.getAttribute('href')).toContain('circle')
  })

  it('converts a numeric width to a rem value (n * 0.25rem)', () => {
    const { container } = render(
      React.createElement(Svg, { icon: 'circle', width: 16, left: '0', top: '0' })
    )
    const svg = container.querySelector('svg') as HTMLElement
    expect(svg.style.width).toBe('4rem')
    expect(svg.style.height).toBe('4rem')
  })

  it('uses a string width as-is', () => {
    const { container } = render(
      React.createElement(Svg, { icon: 'circle', width: '3rem' as never, left: '0', top: '0' })
    )
    const svg = container.querySelector('svg') as HTMLElement
    expect(svg.style.width).toBe('3rem')
    expect(svg.style.height).toBe('3rem')
  })

  it('maps a theme color name to the matching CSS variable', () => {
    const { container } = render(
      React.createElement(Svg, {
        icon: 'triangle',
        color: 'icon_brightest',
        width: 16,
        left: '0',
        top: '0',
      })
    )
    const svg = container.querySelector('svg') as HTMLElement
    expect(svg.style.color).toContain('--color-icon_brightest')
  })

  it('adds the hidden-mobile class when hiddenMobile is true', () => {
    const { container } = render(
      React.createElement(Svg, {
        icon: 'triangle',
        width: 16,
        left: '0',
        top: '0',
        hiddenMobile: true,
      })
    )
    expect(container.querySelector('svg')).toHaveClass('icon-hidden-mobile')
  })

  it('does not add the hidden-mobile class by default', () => {
    const { container } = render(
      React.createElement(Svg, { icon: 'triangle', width: 16, left: '0', top: '0' })
    )
    expect(container.querySelector('svg')).not.toHaveClass('icon-hidden-mobile')
  })

  it('uses stroke=currentColor and fill=none when stroke is true', () => {
    const { container } = render(
      React.createElement(Svg, {
        icon: 'triangle',
        width: 16,
        left: '0',
        top: '0',
        stroke: true,
      })
    )
    const svg = container.querySelector('svg') as HTMLElement
    // jsdom normalises CSS keyword values to lowercase
    expect(svg.style.stroke.toLowerCase()).toBe('currentcolor')
    expect(svg.style.fill).toBe('none')
  })

  it('uses fill=currentColor and stroke=none when stroke is false', () => {
    const { container } = render(
      React.createElement(Svg, {
        icon: 'triangle',
        width: 16,
        left: '0',
        top: '0',
        stroke: false,
      })
    )
    const svg = container.querySelector('svg') as HTMLElement
    expect(svg.style.fill.toLowerCase()).toBe('currentcolor')
    expect(svg.style.stroke).toBe('none')
  })

  it('positions the svg element using left and top props', () => {
    const { container } = render(
      React.createElement(Svg, { icon: 'circle', width: 16, left: '25%', top: '50%' })
    )
    const svg = container.querySelector('svg') as HTMLElement
    expect(svg.style.left).toBe('25%')
    expect(svg.style.top).toBe('50%')
  })

  it('uses the correct viewBox for each icon type', () => {
    const expectedViewBoxes: Record<string, string> = {
      triangle: '0 0 30 30',
      circle: '0 0 30 30',
      arrowUp: '0 0 30 42',
      upDown: '0 0 30 44.58',
      box: '0 0 30 30',
      hexa: '0 0 30 30',
      cross: '0 0 100 100',
    }
    for (const [icon, viewBox] of Object.entries(expectedViewBoxes)) {
      const { container } = render(
        React.createElement(Svg, { icon: icon as never, width: 16, left: '0', top: '0' })
      )
      expect(container.querySelector('svg')?.getAttribute('viewBox')).toBe(viewBox)
    }
  })
})
