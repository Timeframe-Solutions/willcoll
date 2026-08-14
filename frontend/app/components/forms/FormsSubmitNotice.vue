<script setup lang="ts">
const noticeTypes = [
  'Public notice',
  'Statutory notice',
  'Tender notice',
  'Legal notice',
  'Financial statement',
  'AGM notice',
  'Corporate announcement',
  'Compliance-related publication',
  'Other',
]

const form = reactive({
  companyName: '',
  clientReference: '',
  contactName: '',
  email: '',
  phone: '',
  noticeType: '',
  instructions: '',
  website: '',
})

const fileInput = ref<File | null>(null)
const isSubmitting = ref(false)
const status = ref<{ type: 'success' | 'error'; message: string } | null>(null)

const onFileChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  fileInput.value = input.files?.[0] || null
}

const submit = async () => {
  status.value = null
  isSubmitting.value = true
  try {
    const fd = new FormData()
    fd.append('companyName', form.companyName)
    fd.append('clientReference', form.clientReference)
    fd.append('contactName', form.contactName)
    fd.append('email', form.email)
    fd.append('phone', form.phone)
    fd.append('noticeType', form.noticeType)
    fd.append('instructions', form.instructions)
    fd.append('website', form.website)
    if (fileInput.value) fd.append('file', fileInput.value)

    await $fetch('/api/submit-notice', { method: 'POST', body: fd })

    status.value = { type: 'success', message: 'Thank you. Your materials have been received and our team will process them.' }
    Object.assign(form, { companyName: '', clientReference: '', contactName: '', email: '', phone: '', noticeType: '', instructions: '', website: '' })
    fileInput.value = null
    ;(document.getElementById('notice-file') as HTMLInputElement).value = ''
  } catch (err: any) {
    status.value = {
      type: 'error',
      message: err?.data?.statusMessage || err?.statusMessage || err?.message || 'Unable to submit your notice. Please try again.',
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form class="bg-white border border-gray-100 rounded-2xl p-7 lg:p-9 grid grid-cols-1 sm:grid-cols-2 gap-5" @submit.prevent="submit">
    <div>
      <label for="sn-company" class="block text-sm font-semibold text-ink-900 mb-2">Company name</label>
      <input id="sn-company" v-model.trim="form.companyName" required type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
    </div>
    <div>
      <label for="sn-ref" class="block text-sm font-semibold text-ink-900 mb-2">Corporate / client reference</label>
      <input id="sn-ref" v-model.trim="form.clientReference" type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
    </div>
    <div>
      <label for="sn-name" class="block text-sm font-semibold text-ink-900 mb-2">Contact name</label>
      <input id="sn-name" v-model.trim="form.contactName" required type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
    </div>
    <div>
      <label for="sn-email" class="block text-sm font-semibold text-ink-900 mb-2">Email</label>
      <input id="sn-email" v-model.trim="form.email" required type="email" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
    </div>
    <div>
      <label for="sn-phone" class="block text-sm font-semibold text-ink-900 mb-2">Phone</label>
      <input id="sn-phone" v-model.trim="form.phone" type="tel" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
    </div>
    <div>
      <label for="sn-type" class="block text-sm font-semibold text-ink-900 mb-2">Notice type</label>
      <select id="sn-type" v-model="form.noticeType" required class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
        <option value="">Select a type</option>
        <option v-for="t in noticeTypes" :key="t" :value="t">{{ t }}</option>
      </select>
    </div>
    <div class="sm:col-span-2">
      <label for="notice-file" class="block text-sm font-semibold text-ink-900 mb-2">File upload (PDF, Word, image, Excel or PowerPoint — max 10MB)</label>
      <input id="notice-file" type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.xls,.xlsx,.ppt,.pptx" @change="onFileChange" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 file:mr-3 file:rounded-md file:border-0 file:bg-orange-500 file:text-white file:px-4 file:py-2" />
    </div>
    <div class="sm:col-span-2">
      <label for="sn-instructions" class="block text-sm font-semibold text-ink-900 mb-2">Additional instructions</label>
      <textarea id="sn-instructions" v-model.trim="form.instructions" rows="3" class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
    </div>

    <!-- Honeypot (hidden from humans; spam bots will fill it) -->
    <div class="hidden" aria-hidden="true">
      <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
    </div>

    <div class="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
      <SharedButton type="submit" size="lg" :disabled="isSubmitting">{{ isSubmitting ? 'Submitting…' : 'Submit Notice' }}</SharedButton>
      <p v-if="status" class="text-sm rounded-lg px-3 py-2" :class="status.type === 'success' ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'" role="status">{{ status.message }}</p>
    </div>
  </form>
</template>
