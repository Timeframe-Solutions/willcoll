<script setup lang="ts">
defineProps<{
  ctaText: string
  serviceName: string
}>()
</script>

<template>
  <section class="relative py-24 lg:py-32 overflow-hidden">
    <!-- Background image with dark overlay -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-fixed"
      style="background-image: url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=80')"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-ink-900/88" aria-hidden="true" />
    <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" aria-hidden="true" />

    <!-- Blob accents -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-orange-500/10 blur-3xl pointer-events-none"
      aria-hidden="true"
    />

    <div class="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <!-- Label -->
      <div class="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/25 text-orange-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
        <span class="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
        Ready to Get Started
      </div>

      <h2 class="font-heading text-3xl lg:text-4xl text-white mb-5 leading-tight font-bold">
        Ready to Solve This Business Challenge?
      </h2>
      <p class="text-lg text-gray-300 mb-10 max-w-xl mx-auto font-light leading-relaxed">
        Let's build a practical framework for
        <span class="text-orange-300 font-semibold">{{ serviceName }}</span>
        tailored to your organization.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <SharedButton to="/contact" size="lg">
          {{ ctaText }}
        </SharedButton>
        <a
          href="tel:0722550893"
          class="inline-flex items-center gap-2 text-gray-300 hover:text-white font-medium text-sm transition-colors px-4 py-3"
        >
          <span class="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
            <Icon name="lucide:phone" class="w-4 h-4 text-orange-400" />
          </span>
          Call Managing Partner: 0722 550 893
        </a>
      </div>
    </div>
  </section>
</template>
