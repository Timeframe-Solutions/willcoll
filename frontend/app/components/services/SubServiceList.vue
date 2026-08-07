<script setup lang="ts">
import type { SubService } from '~/composables/useServices'

defineProps<{
  subServices: SubService[]
}>()

useScrollReveal()
</script>

<template>
  <section class="py-20 lg:py-28 bg-white border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <!-- Section heading -->
      <div class="text-center mb-14 reveal">
        <span class="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          <Icon name="lucide:layers" class="w-3.5 h-3.5" />
          What We Deliver
        </span>
        <h2 class="font-heading text-3xl lg:text-4xl text-ink-900 font-bold mb-4 leading-tight">
          Core Capabilities & Focus Areas
        </h2>
        <p class="text-gray-500 max-w-md mx-auto text-base leading-relaxed">
          Each capability is scoped to deliver a defined, measurable outcome for your organization.
        </p>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
        <div
          v-for="(sub, index) in subServices"
          :key="index"
          class="sub-svc-card group relative bg-gray-50 border border-gray-100 rounded-2xl p-6 overflow-hidden hover:bg-white hover:border-orange-200 hover:shadow-lg transition-all duration-350"
        >
          <!-- Hover orange accent corner -->
          <div class="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-bl-full transition-all duration-350 group-hover:w-28 group-hover:h-28 group-hover:bg-orange-500/10" />

          <!-- Index + icon row -->
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-xl bg-white border border-gray-200 text-orange-600 font-mono font-bold text-sm flex items-center justify-center shadow-sm group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-250">
              {{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}
            </div>
            <div class="h-px flex-1 bg-gray-200 group-hover:bg-orange-200 transition-colors duration-350" />
            <Icon name="lucide:check-circle-2" class="w-5 h-5 text-gray-300 group-hover:text-orange-500 transition-colors duration-250" />
          </div>

          <!-- Content -->
          <h3 class="font-heading font-bold text-lg text-ink-900 mb-2 group-hover:text-orange-700 transition-colors duration-200 leading-snug">
            {{ sub.name }}
          </h3>
          <p class="text-sm text-gray-500 leading-relaxed">
            {{ sub.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sub-svc-card {
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              background-color 0.25s ease,
              border-color 0.25s ease;
}
.sub-svc-card:hover {
  transform: translateY(-4px);
}
</style>
