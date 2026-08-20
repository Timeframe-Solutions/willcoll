<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    service?: string
    requirement?: string
    submitLabel?: string
    title?: string
    description?: string
  }>(),
  {
    service: '',
    requirement: '',
    submitLabel: 'Send Enquiry',
    title: 'Get a Media Recommendation',
    description:
      'Share your objective, audience and budget. Our team will respond with a media recommendation and next steps.',
  },
)

const { services } = useServices()

const form = reactive({
  fullName: '',
  company: '',
  jobTitle: '',
  email: '',
  phone: '',
  service: props.service,
  budget: '',
  message: props.requirement,
  website: '', // honeypot — hidden from humans
})

// Keep in sync when a parent (e.g. the calculator) updates presets after mount.
watch(
  () => props.service,
  (v) => {
    if (v) form.service = v
  },
)
watch(
  () => props.requirement,
  (v) => {
    if (v) form.message = v
  },
)

const route = useRoute()
const { track } = useAnalytics()

const captureUtm = () => {
  const q = route.query
  const params = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  const parts = params.filter((k) => q[k]).map((k) => `${k}=${q[k]}`)
  return parts.length ? `\n\nSource: ${parts.join(', ')}` : ''
}

import { ref, reactive, watch, computed } from 'vue'

const isSubmitting = ref(false)
const status = ref<{ type: 'success' | 'error'; message: string } | null>(null)

const budgetOptions = [
  'Under KES 50,000',
  'KES 50,000 – 250,000',
  'KES 250,000 – 1,000,000',
  'Over KES 1,000,000',
  'Not sure yet',
]

const config = useRuntimeConfig()
const hasRecaptcha = computed(() => !!config.public.recaptchaSiteKey)
const recaptchaRef = ref<any>(null)

const submit = async () => {
  status.value = null
  isSubmitting.value = true
  try {
    // reCAPTCHA v3: execute invisibly on submit, get fresh token
    let recaptchaToken = ''
    if (hasRecaptcha.value && recaptchaRef.value) {
      recaptchaToken = (await recaptchaRef.value.execute('contact_form')) ?? ''
    }

    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        fullName: form.fullName.trim(),
        company: form.company.trim(),
        jobTitle: form.jobTitle.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: form.service,
        budget: form.budget,
        message: form.message.trim() + captureUtm(),
        website: form.website,
        recaptchaToken,
      },
    })
    status.value = {
      type: 'success',
      message: 'Thank you. Our team will be in touch with next steps.',
    }
    track('media_recommendation_submitted', { service: form.service })
    Object.assign(form, {
      fullName: '',
      company: '',
      jobTitle: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
      website: '',
    })
  } catch (err: any) {
    status.value = {
      type: 'error',
      message:
        err?.data?.statusMessage ||
        err?.statusMessage ||
        err?.message ||
        'Unable to send your enquiry. Please try again.',
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-white border border-gray-100 rounded-2xl p-7 lg:p-9 shadow-[var(--shadow-sm)]">
    <h2 class="font-heading text-2xl text-ink-900 mb-2">{{ title }}</h2>
    <p class="text-gray-500 text-sm leading-relaxed mb-7">{{ description }}</p>

    <form class="grid grid-cols-1 sm:grid-cols-2 gap-5" @submit.prevent="submit">
      <div>
        <label for="qf-name" class="block text-sm font-semibold text-ink-900 mb-2">Full name</label>
        <input id="qf-name" v-model.trim="form.fullName" required type="text" autocomplete="name"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
      </div>
      <div>
        <label for="qf-company" class="block text-sm font-semibold text-ink-900 mb-2">Company</label>
        <input id="qf-company" v-model.trim="form.company" type="text" autocomplete="organization"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
      </div>
      <div>
        <label for="qf-job" class="block text-sm font-semibold text-ink-900 mb-2">Job title</label>
        <input id="qf-job" v-model.trim="form.jobTitle" type="text" autocomplete="organization-title"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
      </div>
      <div>
        <label for="qf-email" class="block text-sm font-semibold text-ink-900 mb-2">Email</label>
        <input id="qf-email" v-model.trim="form.email" required type="email" autocomplete="email"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
      </div>
      <div>
        <label for="qf-phone" class="block text-sm font-semibold text-ink-900 mb-2">Phone</label>
        <input id="qf-phone" v-model.trim="form.phone" type="tel" autocomplete="tel"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
      </div>
      <div>
        <label for="qf-service" class="block text-sm font-semibold text-ink-900 mb-2">Service required</label>
        <select id="qf-service" v-model="form.service"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
          <option value="">Select a service</option>
          <option v-for="s in services" :key="s.id" :value="s.name">{{ s.name }}</option>
        </select>
      </div>
      <div>
        <label for="qf-budget" class="block text-sm font-semibold text-ink-900 mb-2">Estimated budget</label>
        <select id="qf-budget" v-model="form.budget"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
          <option value="">Select a range</option>
          <option v-for="b in budgetOptions" :key="b" :value="b">{{ b }}</option>
        </select>
      </div>
      <div class="sm:col-span-2">
        <label for="qf-message" class="block text-sm font-semibold text-ink-900 mb-2">Your requirement</label>
        <textarea id="qf-message" v-model.trim="form.message" rows="4"
          placeholder="Tell us what you need: platform, audience, timing and any questions."
          class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
      </div>

      <!-- Honeypot (hidden from humans; spam bots will fill it) -->
      <div class="hidden" aria-hidden="true">
        <label for="qf-website">Website</label>
        <input id="qf-website" v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
      </div>

      <div class="sm:col-span-2">
        <SharedRecaptcha ref="recaptchaRef" @verify="() => {}" />
      </div>

      <div class="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
        <SharedButton type="submit" size="lg" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending…' : submitLabel }}
        </SharedButton>
        <p v-if="status" class="text-sm rounded-lg px-3 py-2"
          :class="status.type === 'success' ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'" role="status">
          {{ status.message }}
        </p>
      </div>
      <p class="sm:col-span-2 text-xs text-gray-500">
        We will use your details only to respond to this enquiry. No account is required. See our
        <NuxtLink to="/privacy" class="underline hover:text-gray-700">Privacy Policy</NuxtLink>.
      </p>
    </form>
  </div>
</template>

