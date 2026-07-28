<template>
  <!-- Trust bar: 4 stats in a clean horizontal strip, white card overlapping hero base -->
  <section class="relative z-10 -mt-1" aria-label="Trust indicators">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div
        class="bg-white border border-gray-100 rounded-xl grid grid-cols-2 lg:grid-cols-4"
        style="box-shadow: 0 12px 32px rgba(17,17,17,0.10);"
      >
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="flex flex-col items-center justify-center text-center px-6 py-8 lg:py-10"
          :class="i < stats.length - 1 ? 'border-b lg:border-b-0 border-r-0 lg:border-r border-gray-100' : ''"
        >
          <span class="font-heading font-bold text-3xl lg:text-4xl text-ink-900 leading-none">
            {{ stat.value }}
          </span>
          <span class="text-gray-500 text-sm mt-2 leading-snug">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '10+', label: 'Years of Advisory Experience' },
  { value: '80+', label: 'Organizations Advised' },
  { value: '7', label: 'Core Advisory Practices' },
  { value: 'Nairobi', label: 'Based in Kenya, Serving All Sectors' }
]
</script>
