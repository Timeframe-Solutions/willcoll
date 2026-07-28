<script setup lang="ts">
import type { Service } from '~/composables/useServices'

defineProps<{
  service: Service
}>()
</script>

<template>
  <section class="w-full bg-ink-900 py-24 lg:py-36 relative overflow-hidden">
    <!-- Grid lines overlay for executive feel -->
    <div class="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" pointer-events-none></div>
    
    <!-- Organic orange blob accent with subtle scale animation -->
    <div
      class="absolute top-[-100px] right-[-100px] w-[30rem] h-[30rem] bg-orange-500/10 pointer-events-none"
      style="border-radius: var(--radius-blob);"
      aria-hidden="true"
    />

    <div class="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center relative z-10">
      <!-- Left: Text content -->
      <div class="lg:col-span-7">
        <NuxtLink
          to="/services"
          class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-semibold mb-8 group"
        >
          <Icon name="lucide:arrow-left" class="w-4 h-4 transition-transform group-hover:-translate-x-0.5" /> All Practice Areas
        </NuxtLink>

        <div class="mb-6 inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-[var(--radius-sm)]">
          <span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          Willcoll Advisory Practice
        </div>

        <h1 class="font-heading text-4xl lg:text-5.5xl text-white mb-6 leading-[1.1] font-bold tracking-tight">
          {{ service.name }}
        </h1>
        <p class="text-xl text-gray-300 mb-6 leading-relaxed font-light">
          {{ service.subhead }}
        </p>
        <p class="text-base text-gray-400 mb-10 leading-relaxed font-light">
          {{ service.description }}
        </p>

        <!-- Who this is for (Styled as a premium info block) -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 max-w-2xl backdrop-blur-sm">
          <div class="flex items-start gap-4">
            <div class="mt-1 w-10 h-10 bg-orange-500/15 border border-orange-500/30 rounded-xl flex items-center justify-center shrink-0">
              <Icon name="lucide:users" class="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h4 class="text-white font-heading font-semibold text-lg mb-1">Target Audience & Fit</h4>
              <p class="text-sm text-gray-400 leading-relaxed font-light">{{ service.whoIsFor }}</p>
            </div>
          </div>
        </div>

        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-[var(--radius-md)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-ink-900"
        >
          {{ service.ctaText }}
        </NuxtLink>
      </div>

      <!-- Right: Decorative sub-services preview -->
      <div class="lg:col-span-5 flex justify-center lg:justify-end">
        <div class="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-orange-500/30 transition-colors duration-300">
          <div class="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" pointer-events-none></div>
          
          <div class="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white border border-orange-400/30 shadow-lg">
              <Icon :name="service.icon" class="w-8 h-8" :style="{ strokeWidth: '1.5' }" />
            </div>
            <div class="text-right">
              <div class="text-4xl font-heading text-white font-bold font-mono">{{ service.subServices.length }}</div>
              <div class="text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">Focus Areas</div>
            </div>
          </div>
          
          <h4 class="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">Practice Scope Include:</h4>
          <ul class="space-y-4">
            <li
              v-for="(sub, i) in service.subServices"
              :key="i"
              class="flex items-start gap-3 text-gray-300 group/item"
            >
              <Icon name="lucide:check-circle-2" class="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <span class="text-sm font-medium leading-relaxed group-hover/item:text-white transition-colors">{{ sub.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
