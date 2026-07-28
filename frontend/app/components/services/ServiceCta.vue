<script setup lang="ts">
defineProps<{
  ctaText: string
  serviceName: string
}>()
</script>

<template>
  <section class="py-24 lg:py-32 bg-ink-900 text-center text-white relative overflow-hidden">
    <!-- Grid overlay and blob accent for visual depth -->
    <div class="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" pointer-events-none></div>
    <div 
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-orange-500/10 pointer-events-none"
      style="border-radius: var(--radius-blob);"
    ></div>

    <div class="max-w-3xl mx-auto px-6 lg:px-10 relative z-10">
      <span class="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-[var(--radius-sm)] mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
        Get Started
      </span>
      <h2 class="font-heading text-3xl lg:text-4.5xl text-white mb-6 leading-tight font-bold tracking-tight">
        Ready to Solve this Business Challenge?
      </h2>
      <p class="text-lg text-gray-300 mb-10 max-w-xl mx-auto font-light leading-relaxed">
        Let's discuss how we can help your organization implement a practical framework for <span class="text-orange-400 font-semibold">{{ serviceName }}</span>.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <SharedButton 
          to="/contact" 
          size="lg"
          class="w-full sm:w-auto"
        >
          {{ ctaText }}
        </SharedButton>
        <a 
          href="tel:0722550893" 
          class="text-gray-300 hover:text-white font-semibold text-sm transition-colors flex items-center gap-2"
        >
          <Icon name="lucide:phone" class="w-4 h-4 text-orange-500" />
          Call Managing Partner: 0722 550 893
        </a>
      </div>
    </div>
  </section>
</template>
