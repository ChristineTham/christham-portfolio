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

  function updateLayers() {
    const scrollY = parallaxContainer.scrollTop
    const viewportHeight = parallaxContainer.clientHeight

    layers.forEach((layer) => {
      const offset = parseFloat(layer.dataset.offset ?? '0')
      const speed = parseFloat(layer.dataset.speed ?? '0')
      const translateY = -(scrollY - offset * viewportHeight) * speed
      layer.style.transform = `translateY(${translateY}px)`
    })
  }

  parallaxContainer.addEventListener('scroll', updateLayers, { passive: true })
  window.addEventListener('resize', updateLayers)

  // Set transforms immediately so layout is correct for first paint in tests/runtime.
  updateLayers()

  // Defer the first measurement until layout is stable to avoid first-paint jumps.
  requestAnimationFrame(updateLayers)
}
