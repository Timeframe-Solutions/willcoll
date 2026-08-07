<script setup lang="ts">
import type { Service } from '~/composables/useServices'

defineProps<{
  service: Service
  index?: number
}>()
</script>

<template>
  <NuxtLink
    :to="service.to"
    class="service-card group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
  >
    <!-- Image strip with overlay -->
    <div class="relative h-44 overflow-hidden shrink-0">
      <img
        :src="service.bgImage"
        :alt="service.name"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <!-- gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/20 to-transparent" />

      <!-- Icon badge bottom-left -->
      <div
        class="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-orange-500 group-hover:border-orange-500"
      >
        <Icon :name="service.icon" class="w-5 h-5" :style="{ strokeWidth: '1.8' }" />
      </div>

      <!-- Number badge top-right -->
      <div class="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
        <span class="text-white text-xs font-mono font-bold leading-none">
          {{ String(index !== undefined ? index + 1 : 1).padStart(2, '0') }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col flex-1 p-6">
      <h3 class="font-heading text-lg text-ink-900 mb-2 group-hover:text-orange-600 transition-colors duration-200 leading-snug">
        {{ service.name }}
      </h3>

      <p class="text-sm text-gray-500 leading-relaxed mb-5 grow line-clamp-2">
        {{ service.outcome }}
      </p>

      <!-- Animated arrow CTA -->
      <div class="flex items-center gap-2 text-orange-600 text-sm font-semibold mt-auto">
        <span class="relative overflow-hidden">
          <span class="inline-block transition-transform duration-300 group-hover:-translate-x-full opacity-100 group-hover:opacity-0">Explore</span>
          <span class="absolute inset-0 inline-flex items-center translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Learn more</span>
        </span>
        <Icon name="lucide:arrow-right" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>

    <!-- Bottom accent bar — slides up on hover -->
    <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
  </NuxtLink>
</template>

<style scoped>
.service-card {
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
</style>
