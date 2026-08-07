<script setup lang="ts">
const { services } = useServices()
useScrollReveal()
useHead({
  title: 'Advisory Services | Willcoll Agencies',
  meta: [{ name: 'description', content: 'Explore Willcoll Agencies four business advisory practice areas.' }]
})
</script>

<template>
  <div>
    <SharedPageHero
      centered
      eyebrow="Our practice areas"
      title="Advisory Built Around Your Business Problem"
      subtitle="Four focused practice areas. One coordinated relationship. Choose the area most relevant to what you are facing today."
      bg-image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
    />

    <!-- Intro strip -->
    <section class="bg-white py-10 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 reveal">
        <div>
          <p class="text-sm text-gray-500">Showing <span class="font-semibold text-ink-900">{{ services.length }}</span> advisory practice areas</p>
        </div>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
        >
          Not sure where to start? Talk to us
          <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>
    </section>

    <!-- Service grid -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 stagger-children">
          <ServicesServiceCard
            v-for="(service, i) in services"
            :key="service.id"
            :service="service"
            :index="i"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-ink-900 py-20 text-center text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" aria-hidden="true" />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-orange-500/8 blur-3xl pointer-events-none"
        style="border-radius: var(--radius-blob);"
        aria-hidden="true"
      />
      <div class="max-w-2xl mx-auto px-6 relative z-10 reveal">
        <p class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">Not sure where to start?</p>
        <h2 class="text-3xl lg:text-4xl font-heading text-white mb-5 leading-tight">Start with the problem, not the service line.</h2>
        <p class="text-gray-300 mb-8 text-lg">Book a consultation and we'll help identify the most useful next step.</p>
        <SharedButton to="/contact" size="lg">Book a Consultation</SharedButton>
      </div>
    </section>
  </div>
</template>
