// Parallax scroll handler using vanilla JS.
// Replicates react-spring/parallax behaviour:
//   translateY = -(scrollY - offset * viewportHeight) * speed

export function initParallax() {
  const container = document.querySelector<HTMLElement>('[data-parallax-container]')
  if (!container) return
  const parallaxContainer = container

  // Guard against duplicate listeners if initParallax is called more than once.
  if (parallaxContainer.dataset.parallaxInitialized === 'true') return
  parallaxContainer.dataset.parallaxInitialized = 'true'

  const layers = parallaxContainer.querySelectorAll<HTMLElement>('[data-parallax-layer]')
  const overflowY = window.getComputedStyle(parallaxContainer).overflowY
  const useContainerScroll = overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay'
  let ticking = false

  function getScrollY() {
    if (useContainerScroll) return parallaxContainer.scrollTop

    // In window-scroll mode, compute scroll relative to the parallax container.
    const containerTop = parallaxContainer.getBoundingClientRect().top + window.scrollY
    return Math.max(0, window.scrollY - containerTop)
  }

  function updateLayers() {
    const scrollY = getScrollY()
    const viewportHeight = useContainerScroll
      ? parallaxContainer.clientHeight
      : window.innerHeight

    layers.forEach((layer) => {
      const offset = parseFloat(layer.dataset.offset ?? '0')
      const speed = parseFloat(layer.dataset.speed ?? '0')
      const translateY = -(scrollY - offset * viewportHeight) * speed
      layer.style.transform = `translate3d(0, ${translateY}px, 0)`
    })
  }

  function scheduleUpdate() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      ticking = false
      updateLayers()
    })
  }

  if (useContainerScroll) {
    parallaxContainer.addEventListener('scroll', scheduleUpdate, { passive: true })
  } else {
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
  }
  window.addEventListener('resize', scheduleUpdate)

  // Set transforms immediately so layout is correct for first paint in tests/runtime.
  updateLayers()

  // Defer the first measurement until layout is stable to avoid first-paint jumps.
  requestAnimationFrame(updateLayers)
}
