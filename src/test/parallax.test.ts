// @vitest-environment happy-dom
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { initParallax } from '@/scripts/parallax'

// Helper: create the container + layer DOM structure
function buildDOM(layers: Array<{ offset: string; speed: string }> = []) {
  const container = document.createElement('div')
  container.setAttribute('data-parallax-container', '')
  // happy-dom initialises scrollTop/clientHeight to 0 by default
  Object.defineProperty(container, 'clientHeight', { value: 500, configurable: true })

  for (const { offset, speed } of layers) {
    const layer = document.createElement('div')
    layer.setAttribute('data-parallax-layer', '')
    layer.setAttribute('data-offset', offset)
    layer.setAttribute('data-speed', speed)
    container.appendChild(layer)
  }

  document.body.appendChild(container)
  return container
}

beforeEach(() => {
  document.body.innerHTML = ''
})

afterEach(() => {
  document.body.innerHTML = ''
})

describe('initParallax', () => {
  it('returns without error when no container element is present', () => {
    expect(() => initParallax()).not.toThrow()
  })

  it('sets initial translateY on all layers when called', () => {
    const container = buildDOM([
      { offset: '0', speed: '0.2' },
      { offset: '1', speed: '0.5' },
    ])

    initParallax()

    const layers = container.querySelectorAll<HTMLElement>('[data-parallax-layer]')
    // scrollTop=0, clientHeight=500
    // layer 0: -(0 - 0 * 500) * 0.2 = 0
    // layer 1: -(0 - 1 * 500) * 0.5 = 250
    expect(layers[0].style.transform).toBe('translateY(0px)')
    expect(layers[1].style.transform).toBe('translateY(250px)')
  })

  it('recalculates translateY after a scroll event', () => {
    const container = buildDOM([{ offset: '0', speed: '0.2' }])

    initParallax()

    // Simulate scrolling 100px
    Object.defineProperty(container, 'scrollTop', { value: 100, configurable: true })
    container.dispatchEvent(new Event('scroll'))

    const layer = container.querySelector<HTMLElement>('[data-parallax-layer]')!
    // -(100 - 0 * 500) * 0.2 = -20
    expect(layer.style.transform).toBe('translateY(-20px)')
  })

  it('applies the translateY formula: -(scrollTop - offset * clientHeight) * speed', () => {
    const container = buildDOM([{ offset: '2', speed: '0.4' }])
    Object.defineProperty(container, 'scrollTop', { value: 300, configurable: true })

    initParallax()

    const layer = container.querySelector<HTMLElement>('[data-parallax-layer]')!
    // -(300 - 2 * 500) * 0.4 = -(-700) * 0.4 = 280
    expect(layer.style.transform).toBe('translateY(280px)')
  })

  it('defaults offset and speed to 0 when data attributes are absent', () => {
    const container = document.createElement('div')
    container.setAttribute('data-parallax-container', '')
    Object.defineProperty(container, 'clientHeight', { value: 500, configurable: true })

    const layer = document.createElement('div')
    layer.setAttribute('data-parallax-layer', '')
    // No data-offset or data-speed attributes
    container.appendChild(layer)
    document.body.appendChild(container)

    initParallax()

    // -(0 - 0 * 500) * 0 = 0
    expect(layer.style.transform).toBe('translateY(0px)')
  })

  it('works correctly with zero speed (layer scrolls with page)', () => {
    const container = buildDOM([{ offset: '1', speed: '0' }])
    Object.defineProperty(container, 'scrollTop', { value: 500, configurable: true })

    initParallax()

    const layer = container.querySelector<HTMLElement>('[data-parallax-layer]')!
    // -(500 - 1 * 500) * 0 = 0
    expect(layer.style.transform).toBe('translateY(0px)')
  })

  it('handles multiple scroll events correctly', () => {
    const container = buildDOM([{ offset: '0', speed: '1' }])
    initParallax()

    const layer = container.querySelector<HTMLElement>('[data-parallax-layer]')!

    // First scroll
    Object.defineProperty(container, 'scrollTop', { value: 200, configurable: true })
    container.dispatchEvent(new Event('scroll'))
    expect(layer.style.transform).toBe('translateY(-200px)')

    // Second scroll
    Object.defineProperty(container, 'scrollTop', { value: 350, configurable: true })
    container.dispatchEvent(new Event('scroll'))
    expect(layer.style.transform).toBe('translateY(-350px)')
  })

  it('only transforms layers that existed at init time when new elements are added later', () => {
    const container = buildDOM([{ offset: '0', speed: '1' }])
    initParallax()

    // Add a layer after initialization
    const lateLayer = document.createElement('div')
    lateLayer.setAttribute('data-parallax-layer', '')
    lateLayer.setAttribute('data-offset', '0')
    lateLayer.setAttribute('data-speed', '1')
    container.appendChild(lateLayer)

    Object.defineProperty(container, 'scrollTop', { value: 100, configurable: true })
    container.dispatchEvent(new Event('scroll'))

    // The original layer is updated; the late-added layer is not
    const originalLayer = container.querySelectorAll<HTMLElement>('[data-parallax-layer]')[0]
    expect(originalLayer.style.transform).toBe('translateY(-100px)')
    expect(lateLayer.style.transform).toBe('')
  })
})
