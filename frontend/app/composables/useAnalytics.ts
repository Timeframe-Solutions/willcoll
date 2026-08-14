// app/composables/useAnalytics.ts
// Consent-aware analytics and event tracking layer.
//
// Events are pushed to window.dataLayer and dispatched as a custom
// 'willcoll-event' so a tag manager or analytics provider can subscribe.
// No third-party script is loaded here, keeping the implementation
// privacy-compliant by default. Events are only recorded once the visitor
// has granted analytics consent through the cookie banner.

type ConsentChoices = {
  analytics?: boolean
  marketing?: boolean
  necessary?: boolean
} | undefined

export const useAnalytics = () => {
  const hasConsent = (): boolean => {
    if (typeof window === 'undefined') return false
    const consent = (window as any).willcollConsent as ConsentChoices
    return !!consent?.analytics
  }

  const track = (eventName: string, props: Record<string, unknown> = {}) => {
    if (typeof window === 'undefined') return
    if (!hasConsent()) return
    const w = window as any
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({ event: eventName, ...props })
    window.dispatchEvent(
      new CustomEvent('willcoll-event', { detail: { event: eventName, props } }),
    )
  }

  return { track, hasConsent }
}
