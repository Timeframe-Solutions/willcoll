<script setup lang="ts">
const mediaPlatforms = [
  { name: 'NTV', type: 'Television' },
  { name: 'Citizen TV', type: 'Television' },
  { name: 'TV47', type: 'Television' },
  { name: 'KTN', type: 'Television' },
  { name: 'KBC', type: 'Television' },
  { name: 'Daily Nation', type: 'Print' },
  { name: 'Standard', type: 'Print' },
  { name: 'Business Daily', type: 'Print' },
  { name: 'The Star', type: 'Print' },
  { name: 'Nation.africa', type: 'Digital' },
  { name: 'Standard Digital', type: 'Digital' },
  { name: 'The Star Online', type: 'Digital' },
]
</script>

<template>
  <section class="py-16 lg:py-24 bg-ink-900 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
      <SharedSectionHeading
        eyebrow="Media reach"
        heading="Placing campaigns across Kenya's trusted media"
        subhead="We work across the platforms Kenyans watch, read and engage with every day — advising the right mix for your audience and objectives."
        :centered="true"
        class="text-white [&_h2]:text-white [&_p]:text-gray-400 [&_span]:text-orange-400"
      />
    </div>

    <!-- Infinite scroll track -->
    <div class="relative">
      <!-- Fade edges -->
      <div
        class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ink-900 to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ink-900 to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div class="flex media-scroll-track" aria-label="Media platforms we work with">
        <!-- Two copies for a seamless loop -->
        <div
          v-for="pass in 2"
          :key="pass"
          class="flex gap-5 flex-shrink-0 pr-5"
          :aria-hidden="pass === 2 ? 'true' : undefined"
        >
          <div
            v-for="platform in mediaPlatforms"
            :key="`${pass}-${platform.name}`"
            class="flex-shrink-0 flex flex-col justify-between bg-white/5 border border-white/[0.08] rounded-2xl px-7 py-5 min-w-[170px] hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
          >
            <span class="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">{{ platform.type }}</span>
            <p class="font-heading font-bold text-white text-lg leading-tight">{{ platform.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <p class="text-center text-xs text-gray-600 mt-8 px-6">
      Platform names listed for reference. Rates and availability are confirmed directly by each media house.
    </p>
  </section>
</template>

<style scoped>
@keyframes scroll-x {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.media-scroll-track {
  animation: scroll-x 32s linear infinite;
}

.media-scroll-track:hover {
  animation-play-state: paused;
}
</style>
