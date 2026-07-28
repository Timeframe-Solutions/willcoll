<script setup lang="ts">
import type { SubService } from '~/composables/useServices'

defineProps<{
  subServices: SubService[]
}>()
</script>

<template>
  <section class="py-24 lg:py-32 bg-gray-50/50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="text-center mb-16 lg:mb-20">
        <span class="inline-flex items-center gap-1.5 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-[var(--radius-sm)] mb-4">
          <Icon name="lucide:check-square" class="w-3.5 h-3.5" />
          Engagement Capabilities
        </span>
        <h2 class="font-heading text-3xl lg:text-4.5xl text-ink-900 font-bold tracking-tight">Core Competencies & Focus</h2>
        <p class="text-gray-500 mt-4 max-w-xl mx-auto font-light text-base leading-relaxed">
          Each capability is scoped to deliver a defined compliance, risk, or strategic outcome — avoiding bloated corporate structures.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="(sub, index) in subServices"
          :key="index"
          class="bg-white border border-gray-100 rounded-2xl p-8 shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] transition-all duration-250 flex gap-6 group"
        >
          <!-- Stylized Index Indicator -->
          <div class="mt-1 w-10 h-10 rounded-xl bg-orange-50 text-orange-600 font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-orange-100 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-200">
            {{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}
          </div>
          <div>
            <h3 class="font-heading font-bold text-xl text-ink-900 mb-2 group-hover:text-orange-600 transition-colors">
              {{ sub.name }}
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed font-light">
              {{ sub.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
