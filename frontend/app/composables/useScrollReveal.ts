/**
 * useScrollReveal
 * Attaches an IntersectionObserver to all elements with the given selector
 * inside the provided root element, adding `is-visible` when they enter view.
 */
export const useScrollReveal = (
  selectors = '.reveal, .reveal-left, .reveal-right, .stagger-children'
) => {
  onMounted(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const targets = document.querySelectorAll<HTMLElement>(selectors)
    targets.forEach((el) => observer.observe(el))

    onUnmounted(() => observer.disconnect())
  })
}
