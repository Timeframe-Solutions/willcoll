<script setup lang="ts">
import type { Service } from '~/composables/useServices'

defineProps<{
  service: Service
}>()
</script>

<template>
  <NuxtLink
    :to="service.to"
    class="bg-white border border-gray-100 rounded-[var(--radius-lg)] p-7 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
  >
    <div class="w-14 h-14 bg-orange-100 flex items-center justify-center rounded-lg text-orange-600 mb-5 shrink-0">
      <Icon :name="service.icon" class="w-7 h-7" :style="{ strokeWidth: '1.5' }" />
    </div>

    <h3 class="font-heading text-xl text-ink-900 mb-2 group-hover:text-orange-600 transition-colors">
      {{ service.name }}
    </h3>

    <p class="text-sm text-gray-500 line-clamp-2 mb-5 grow leading-relaxed">
      {{ service.outcome }}
    </p>

    <div class="mt-auto text-orange-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
      Explore <Icon name="lucide:arrow-right" class="w-4 h-4" />
    </div>
  </NuxtLink>
</template>
