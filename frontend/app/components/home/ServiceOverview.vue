<template>
  <!-- Services overview: editorial intro text + 7-service card grid -->
  <section class="py-16 lg:py-28 bg-white" aria-label="Services overview">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- Section heading — centered, editorial -->
      <SharedSectionHeading
        eyebrow="Our Practice Areas"
        heading="One Advisory Partner"
        subhead="From getting your compliance right to completion of your project, we cover the full lifecycle of business advisory needs under one roof."
        :centered="true"
      />

      <!-- Services grid: 1 → 2 → 3 columns, last row centered if 7 items -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <NuxtLink
          v-for="service in services"
          :key="service.id"
          :to="service.to"
          class="group relative flex flex-col bg-white border border-gray-100 rounded-xl p-7 transition-all duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          style="box-shadow: 0 1px 2px rgba(17, 17, 17, 0.04)"
          :style-hover="'box-shadow: 0 4px 12px rgba(17,17,17,0.06);'"
        >
          <!-- Hover shadow handled via Tailwind -->
          <div
            class="absolute inset-0 rounded-xl transition-shadow duration-200 group-hover:shadow-md pointer-events-none"
          />

          <!-- Icon tile -->
          <SharedIconTile :icon="service.icon" size="md" class="mb-5" />

          <!-- Name -->
          <h3
            class="font-heading font-bold text-xl text-ink-900 leading-snug mb-2 group-hover:text-orange-600 transition-colors"
          >
            {{ service.name }}
          </h3>

          <!-- Outcome line -->
          <p class="text-gray-500 text-sm leading-relaxed flex-1">
            {{ service.outcome }}
          </p>

          <!-- Explore link -->
          <div
            class="mt-5 flex items-center gap-1.5 text-sm font-semibold text-orange-600 group-hover:gap-2.5 transition-all"
          >
            <span>Explore</span>
            <Icon
              name="lucide:arrow-right"
              class="w-4 h-4"
              aria-hidden="true"
            />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { services } = useServices();
</script>
