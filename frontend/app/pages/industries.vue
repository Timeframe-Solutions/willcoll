<script setup lang="ts">
const { industries } = useIndustries()
useScrollReveal()
useHead({ title: 'Industries We Serve | Willcoll Agencies' })
</script>

<template>
  <div>
    <SharedPageHero
      centered
      eyebrow="Sector understanding"
      title="Industries We Serve"
      subtitle="Our advisory approach adapts to the regulatory and operational realities of your sector."
      bg-image="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1800&q=80"
    />

    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        <article
          v-for="industry in industries"
          :key="industry.name"
          class="bg-white rounded-2xl border border-gray-100 p-7 hover:-translate-y-1 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group"
        >
          <div class="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
            <Icon :name="industry.icon" class="w-6 h-6" />
          </div>
          <h2 class="text-xl mb-3">{{ industry.name }}</h2>
          <p class="text-gray-600 text-sm leading-relaxed">{{ industry.description }}</p>
        </article>
      </div>
    </section>

    <section class="py-16 bg-ink-900 text-white text-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" aria-hidden="true"></div>
      <div class="max-w-2xl mx-auto px-6 relative z-10 reveal">
        <h2 class="text-3xl text-white mb-4">Your context matters.</h2>
        <p class="text-gray-300 mb-7">Tell us about the challenge your organization faces and we'll shape the right engagement.</p>
        <SharedButton to="/contact" size="lg">Talk to Our Team</SharedButton>
      </div>
    </section>
  </div>
</template>
