<template>
  <!-- Industries snippet: ink-900 dark section with pill tags -->
  <section class="py-16 lg:py-24 bg-ink-700" aria-label="Industries we serve">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Left: heading -->
        <div>
          <p class="text-orange-400 text-xs font-bold tracking-[0.15em] uppercase mb-4">Industries</p>
          <h2 class="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-5">
            Trusted Across Sectors
          </h2>
          <p class="text-white/60 text-base leading-relaxed mb-8">
            Our advisory approach adapts to the regulatory and operational realities of your sector. We serve organizations across seven distinct industry groups.
          </p>
          <NuxtLink
            to="/industries"
            class="inline-flex items-center gap-2 text-orange-400 font-semibold text-sm hover:gap-3 transition-all group"
          >
            View all industries
            <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </NuxtLink>
        </div>

        <!-- Right: industry tags grid -->
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            v-for="industry in industries"
            :key="industry.name"
            to="/industries"
            class="flex items-center gap-2.5 px-5 py-3 rounded-lg border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 hover:border-orange-500/50 hover:text-white transition-all duration-150 group"
          >
            <Icon :name="industry.icon" class="w-4 h-4 text-orange-400" aria-hidden="true" />
            {{ industry.name }}
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { industries } = useIndustries()
</script>
