<template>
  <section class="py-16 lg:py-28 bg-white" aria-label="Services overview">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <SharedSectionHeading
        eyebrow="Our services"
        heading="Four services. One commercial partner."
        subhead="Plan, place and manage advertising, recruitment, publications and subscriptions  through a single point of contact."
        :centered="true"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <NuxtLink
          v-for="service in primaryServices"
          :key="service.id"
          :to="service.to"
          class="group relative flex flex-col bg-white border border-gray-100 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl hover:border-orange-200 transition-all duration-300 overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-[0.06]"
            :style="{ background: service.accentColor }"
            aria-hidden="true"
          />
          <div class="flex items-center gap-4 mb-5">
            <SharedIconTile :icon="service.icon" size="lg" />
            <span
              class="text-xs font-bold uppercase tracking-[0.15em] text-orange-500"
              >{{ service.navLabel }}</span
            >
          </div>
          <h3 class="font-heading text-2xl text-ink-900 leading-snug mb-3">
            {{ service.name }}
          </h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
            {{ service.coreMessage }}
          </p>
          <div
            class="flex items-center gap-2 text-orange-600 text-sm font-semibold group-hover:gap-3 transition-all"
          >
            <span>{{ service.ctaText }}</span>
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </div>
        </NuxtLink>
      </div>

      <NuxtLink
        to="/services/media-buying-advisory"
        class="mt-8 block group bg-ink-900 rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
      >
        <div>
          <p
            class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2"
          >
            Media Buying & Advisory
          </p>
          <h3 class="font-heading text-xl lg:text-2xl text-white leading-snug">
            The expertise that connects every service.
          </h3>
          <p class="text-gray-400 text-sm mt-2 leading-relaxed max-w-2xl">
            Media strategy, planning, selection and buying the commercial layer
            behind our advertising, recruitment, publishing and subscription
            work.
          </p>
        </div>
        <span
          class="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold whitespace-nowrap group-hover:gap-3 transition-all"
        >
          Talk to an Advisor <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { primaryServices } = useServices();
</script>
