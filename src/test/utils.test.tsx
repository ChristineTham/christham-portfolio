import { describe, it, expect } from 'vitest'
import { iconpos, makeIcon, HIDDEN_MOBILE_CLASS, hidden } from '@/lib/utils'
import React from 'react'
import { render } from '@testing-library/react'

describe('HIDDEN_MOBILE_CLASS', () => {
  it('is a non-empty string', () => {
    expect(typeof HIDDEN_MOBILE_CLASS).toBe('string')
    expect(HIDDEN_MOBILE_CLASS.length).toBeGreaterThan(0)
  })
})

describe('hidden', () => {
  it('is an array of three display values', () => {
    expect(Array.isArray(hidden)).toBe(true)
    expect(hidden).toHaveLength(3)
  })
})

describe('iconpos', () => {
  it('returns an absolute-positioned style with numeric size converted to rem', () => {
    const style = iconpos(16, '10%', '20%')
    expect(style.position).toBe('absolute')
    expect(style.width).toBe('4rem')
    expect(style.height).toBe('4rem')
    expect(style.left).toBe('10%')
    expect(style.top).toBe('20%')
  })

  it('passes through a string size unchanged', () => {
    const style = iconpos('2rem', 0, 0)
    expect(style.width).toBe('2rem')
    expect(style.height).toBe('2rem')
  })

  it('converts size 0 to 0rem', () => {
    const style = iconpos(0, '5%', '5%')
    expect(style.width).toBe('0rem')
    expect(style.height).toBe('0rem')
  })
})

describe('makeIcon', () => {
  it('returns a component with a displayName reflecting the source component', () => {
    const FakeSvg: React.FC<React.SVGProps<SVGSVGElement>> & { defaultProps?: { viewBox?: string } } = (props) =>
      React.createElement('svg', props)
    FakeSvg.displayName = 'FakeSvg'
    FakeSvg.defaultProps = { viewBox: '0 0 100 100' }

    const Icon = makeIcon(FakeSvg)
    expect(Icon.displayName).toBe('Icon(FakeSvg)')
  })

  it('passes viewBox from defaultProps to the underlying component', () => {
    const FakeSvg: React.FC<React.SVGProps<SVGSVGElement>> & { defaultProps?: { viewBox?: string } } = (props) =>
      React.createElement('svg', { 'data-viewbox': props.viewBox, ...props })
    FakeSvg.defaultProps = { viewBox: '0 0 24 24' }

    const Icon = makeIcon(FakeSvg)
    const { container } = render(React.createElement(Icon))
    const svg = container.querySelector('svg')
    expect(svg?.getAttribute('data-viewbox')).toBe('0 0 24 24')
  })

  it('works when defaultProps has no viewBox', () => {
    const FakeSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
      React.createElement('svg', props)
    const Icon = makeIcon(FakeSvg)
    expect(Icon.displayName).toBe('Icon(FakeSvg)')
    const { container } = render(React.createElement(Icon))
    expect(container.querySelector('svg')).not.toBeNull()
  })
})
