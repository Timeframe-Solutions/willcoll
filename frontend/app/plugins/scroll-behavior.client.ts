// scroll-behavior.client.ts
// Client-only plugin: enables smooth scrolling for in-page anchor links.
// Runs before app mount; the .client suffix ensures SSR safety.

export default defineNuxtPlugin(() => {
  if (typeof document === 'undefined') return

  document.documentElement.style.scrollBehavior = 'smooth'
})
