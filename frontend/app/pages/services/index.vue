<script setup lang="ts">
const { services } = useServices()
useHead({ title: 'Advisory Services | Willcoll Agencies', meta: [{ name: 'description', content: 'Explore Willcoll Agencies seven business advisory practice areas.' }] })
</script>

<template>
  <div>
    <SharedPageHero centered eyebrow="Our practice areas" title="Advisory Built Around Your Business Problem" subtitle="Seven practice areas. One coordinated advisory relationship. Explore the area most relevant to what you are facing today." />
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <ServicesServiceCard v-for="service in services" :key="service.id" :service="service" />
      </div>
    </section>
    <section class="bg-ink-900 py-16 text-center text-white"><div class="max-w-2xl mx-auto px-6"><p class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">Not sure where to start?</p><h2 class="text-3xl mb-5 text-white">Start with the problem, not the service line.</h2><p class="text-gray-300 mb-7">Book a consultation and we will help you identify the most useful next step.</p><SharedButton to="/contact" size="lg">Book a Consultation</SharedButton></div></section>
  </div>
</template>
