// Parallax scroll handler using vanilla JS.
// Replicates react-spring/parallax behaviour:
//   translateY = -(scrollY - offset * viewportHeight) * speed

export function initParallax() {
  const container = document.querySelector<HTMLElement>('[data-parallax-container]')
  if (!container) return

  const layers = container.querySelectorAll<HTMLElement>('[data-parallax-layer]')

  function updateLayers() {
    const scrollY = container!.scrollTop
    const viewportHeight = container!.clientHeight

    layers.forEach((layer) => {
      const offset = parseFloat(layer.dataset.offset ?? '0')
      const speed = parseFloat(layer.dataset.speed ?? '0')
      const translateY = -(scrollY - offset * viewportHeight) * speed
      layer.style.transform = `translateY(${translateY}px)`
    })
  }

  container.addEventListener('scroll', updateLayers, { passive: true })
  updateLayers()
}
