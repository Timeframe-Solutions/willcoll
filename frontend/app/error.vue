<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-6 select-none">
    <div class="max-w-xl w-full text-center bg-white border border-gray-100 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] p-12">
      <div class="text-8xl font-heading font-bold text-gray-100 mb-6">404</div>
      <h1 class="text-3xl font-heading font-bold text-ink-900 mb-4">Page Not Found</h1>
      <p class="text-gray-500 mb-10 text-sm leading-relaxed">
        The page you're looking for has moved or doesn't exist. Let us point you in the right direction.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <SharedButton @click="handleError" size="lg" class="w-full sm:w-auto">
          Go to Home
        </SharedButton>
        <NuxtLink to="/services" class="w-full sm:w-auto border border-ink-900 text-ink-900 bg-transparent hover:bg-orange-100 hover:border-orange-500 font-semibold px-7 py-3.5 rounded-[var(--radius-md)] transition-colors flex items-center justify-center text-base">
          View Our Services
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
