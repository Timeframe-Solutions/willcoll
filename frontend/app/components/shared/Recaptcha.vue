<script setup lang="ts">
import { onMounted } from 'vue'

const config = useRuntimeConfig()
const siteKey = config.public.recaptchaSiteKey

const emit = defineEmits<{
  (e: 'verify', token: string): void
  (e: 'error'): void
}>()

// v3: load script with ?render=SITE_KEY (not ?render=explicit)
const loadScript = (): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve()
    if (!siteKey) {
      console.warn('reCAPTCHA site key is missing. Set NUXT_PUBLIC_RECAPTCHA_SITE_KEY.')
      return resolve()
    }

    if (window.grecaptcha?.execute) return resolve()

    const existing = document.querySelector(`script[src*="recaptcha/api.js"]`)
    if (existing) {
      const wait = setInterval(() => {
        if (window.grecaptcha?.execute) { clearInterval(wait); resolve() }
      }, 50)
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.defer = true
    script.onload = () => {
      const wait = setInterval(() => {
        if (window.grecaptcha?.execute) { clearInterval(wait); resolve() }
      }, 50)
    }
    script.onerror = () => {
      console.error('Failed to load reCAPTCHA v3 script.')
      emit('error')
      resolve()
    }
    document.head.appendChild(script)
  })
}

// Call this from the form before submitting
const execute = async (action = 'submit'): Promise<string | null> => {
  if (!siteKey) return null
  try {
    await loadScript()
    const token: string = await window.grecaptcha!.execute(siteKey, { action })
    emit('verify', token)
    return token
  } catch (e) {
    console.error('reCAPTCHA v3 execute failed:', e)
    emit('error')
    return null
  }
}

onMounted(() => {
  if (siteKey) loadScript()
})

defineExpose({ execute })

declare global {
  interface Window {
    grecaptcha?: {
      // v3
      execute: (siteKey: string, options: { action: string }) => Promise<string>
      // v2 (kept for type safety only — not used here)
      render?: (el: HTMLElement, opts: any) => number
      reset?: (widgetId?: number) => void
      getResponse?: (widgetId?: number) => string
    }
  }
}
</script>

<template>
  <!-- reCAPTCHA v3 is fully invisible — no widget rendered -->
  <div v-if="!siteKey" class="text-xs text-red-500 my-2">
    reCAPTCHA configuration missing (NUXT_PUBLIC_RECAPTCHA_SITE_KEY)
  </div>
</template>
