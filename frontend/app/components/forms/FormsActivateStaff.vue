<script setup lang="ts">
const form = reactive({
  company: '',
  referenceToken: '',
  contactName: '',
  email: '',
  phone: '',
  numberOfUsers: '',
  employeeEmails: '',
  instructions: '',
  website: '',
})

const isSubmitting = ref(false)
const status = ref<{ type: 'success' | 'error'; message: string } | null>(null)

const { track } = useAnalytics()

const submit = async () => {
  status.value = null
  isSubmitting.value = true
  try {
    await $fetch('/api/activate-staff', {
      method: 'POST',
      body: {
        company: form.company.trim(),
        referenceToken: form.referenceToken.trim(),
        contactName: form.contactName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        numberOfUsers: form.numberOfUsers,
        employeeEmails: form.employeeEmails.trim(),
        instructions: form.instructions.trim(),
        website: form.website,
      },
    })
    status.value = { type: 'success', message: 'Thank you. Our team will coordinate the access activation and be in touch.' }
    track('staff_activation_submitted', { company: form.company })
    Object.assign(form, { company: '', referenceToken: '', contactName: '', email: '', phone: '', numberOfUsers: '', employeeEmails: '', instructions: '', website: '' })
  } catch (err: any) {
    status.value = { type: 'error', message: err?.data?.statusMessage || err?.statusMessage || err?.message || 'Unable to submit your request. Please try again.' }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form class="bg-white border border-gray-100 rounded-2xl p-7 lg:p-9 grid grid-cols-1 sm:grid-cols-2 gap-5" @submit.prevent="submit">
    <div>
      <label for="as-company" class="block text-sm font-semibold text-ink-900 mb-2">Company</label>
      <input id="as-company" v-model.trim="form.company" required type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
    </div>
    <div>
      <label for="as-token" class="block text-sm font-semibold text-ink-900 mb-2">Corporate reference / token</label>
      <input id="as-token" v-model.trim="form.referenceToken" type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
    </div>
    <div>
      <label for="as-name" class="block text-sm font-semibold text-ink-900 mb-2">Contact name</label>
      <input id="as-name" v-model.trim="form.contactName" required type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
    </div>
    <div>
      <label for="as-email" class="block text-sm font-semibold text-ink-900 mb-2">Email</label>
      <input id="as-email" v-model.trim="form.email" required type="email" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
    </div>
    <div>
      <label for="as-phone" class="block text-sm font-semibold text-ink-900 mb-2">Phone</label>
      <input id="as-phone" v-model.trim="form.phone" type="tel" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
    </div>
    <div>
      <label for="as-users" class="block text-sm font-semibold text-ink-900 mb-2">Number of new users</label>
      <input id="as-users" v-model.trim="form.numberOfUsers" type="number" min="1" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
    </div>
    <div class="sm:col-span-2">
      <label for="as-emails" class="block text-sm font-semibold text-ink-900 mb-2">Employee email addresses</label>
      <textarea id="as-emails" v-model.trim="form.employeeEmails" rows="3" placeholder="One email address per line" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
    </div>
    <div class="sm:col-span-2">
      <label for="as-instructions" class="block text-sm font-semibold text-ink-900 mb-2">Instructions</label>
      <textarea id="as-instructions" v-model.trim="form.instructions" rows="3" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
    </div>

    <!-- Honeypot (hidden from humans; spam bots will fill it) -->
    <div class="hidden" aria-hidden="true">
      <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
    </div>

    <div class="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
      <SharedButton type="submit" size="lg" :disabled="isSubmitting">{{ isSubmitting ? 'Submitting…' : 'Submit Activation Request' }}</SharedButton>
      <p v-if="status" class="text-sm rounded-lg px-3 py-2" :class="status.type === 'success' ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'" role="status">{{ status.message }}</p>
    </div>
  </form>
</template>
