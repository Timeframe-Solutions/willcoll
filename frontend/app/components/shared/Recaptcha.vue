<script setup lang="ts">
import { ref, onMounted, defineEmits, defineExpose } from 'vue'

const config = useRuntimeConfig()
const siteKey = config.public.recaptchaSiteKey

const emit = defineEmits<{
  (e: 'verify', token: string): void
  (e: 'expired'): void
  (e: 'error'): void
}>()

const recaptchaContainer = ref<HTMLElement | null>(null)
let widgetId: number | null = null

const initRecaptcha = () => {
  if (typeof window === 'undefined') return
  if (!siteKey) {
    console.warn('reCAPTCHA site key is missing. Please set NUXT_PUBLIC_RECAPTCHA_SITE_KEY.')
    return
  }
  
  if (window.grecaptcha && window.grecaptcha.render && recaptchaContainer.value) {
    try {
      widgetId = window.grecaptcha.render(recaptchaContainer.value, {
        sitekey: siteKey,
        callback: (token: string) => {
          emit('verify', token)
        },
        'expired-callback': () => {
          emit('expired')
        },
        'error-callback': () => {
          emit('error')
        }
      })
    } catch (e) {
      console.error('Error rendering reCAPTCHA:', e)
    }
  }
}

const loadScript = () => {
  if (typeof window === 'undefined') return
  if (!siteKey) return

  if (window.grecaptcha) {
    initRecaptcha()
    return
  }

  // Check if script is already added
  const existingScript = document.querySelector('script[src*="recaptcha/api.js"]')
  if (existingScript) {
    // Wait for it to load
    const interval = setInterval(() => {
      if (window.grecaptcha) {
        clearInterval(interval)
        initRecaptcha()
      }
    }, 100)
    return
  }

  const script = document.createElement('script')
  script.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
  script.async = true
  script.defer = true
  script.onload = () => {
    const checkGrecaptcha = setInterval(() => {
      if (window.grecaptcha && window.grecaptcha.render) {
        clearInterval(checkGrecaptcha)
        initRecaptcha()
      }
    }, 50)
  }
  document.head.appendChild(script)
}

onMounted(() => {
  loadScript()
})

const reset = () => {
  if (window.grecaptcha && widgetId !== null) {
    window.grecaptcha.reset(widgetId)
  }
}

defineExpose({
  reset
})

// Declare types for grecaptcha
declare global {
  interface Window {
    grecaptcha?: {
      render: (element: HTMLElement, options: any) => number
      reset: (widgetId?: number) => void
      getResponse: (widgetId?: number) => string
    }
  }
}
</script>

<template>
  <div v-if="siteKey" class="recaptcha-wrapper my-4">
    <div ref="recaptchaContainer"></div>
  </div>
  <div v-else class="text-xs text-red-500 my-2">
    reCAPTCHA configuration missing (NUXT_PUBLIC_RECAPTCHA_SITE_KEY)
  </div>
</template>
