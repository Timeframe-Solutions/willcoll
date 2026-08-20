<script setup lang="ts">
const { services } = useServices()
useScrollReveal()
useHead({
  title: 'Commercial Media Services | Willcoll Agencies',
  meta: [{
    name: 'description',
    content: 'Advertise, recruit, publish notices and manage corporate subscriptions through Willcoll, one commercial media partner for Kenyan businesses.',
  }],
})
</script>

<template>
  <div>
    <SharedPageHero
      centered
      eyebrow="Our services"
      title="One Commercial Media Partner"
      subtitle="Five primary services, connected by media buying and advisory expertise. Choose the requirement most relevant to your organization."
      bg-image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
    />

    <section class="bg-white py-10 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p class="text-sm text-gray-500">Showing <span class="font-semibold text-ink-900">{{ services.length }}</span> services</p>
        <NuxtLink to="/contact" class="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
          Not sure where to start? Get a media recommendation
          <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>
    </section>

    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid sm:grid-cols-2 gap-6 stagger-children">
          <NuxtLink
            v-for="service in services"
            :key="service.id"
            :to="service.to"
            class="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div class="relative h-40 overflow-hidden">
              <img :src="service.bgImage" :alt="service.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
              <div class="absolute bottom-4 left-5 flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                  <Icon :name="service.icon" class="w-5 h-5" />
                </div>
                <span class="text-white font-heading font-bold text-lg">{{ service.navLabel }}</span>
              </div>
            </div>
            <div class="flex flex-col flex-1 p-6">
              <h2 class="font-heading text-xl text-ink-900 mb-2">{{ service.name }}</h2>
              <p class="text-sm text-gray-500 leading-relaxed mb-5 grow">{{ service.coreMessage }}</p>
              <div class="flex items-center gap-2 text-orange-600 text-sm font-semibold">
                {{ service.ctaText }}
                <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-ink-900 py-20 text-center text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" aria-hidden="true" />
      <div class="max-w-2xl mx-auto px-6 relative z-10">
        <p class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">Not sure where to start?</p>
        <h2 class="text-3xl lg:text-4xl font-heading text-white mb-5 leading-tight">Tell us the requirement, we'll shape the solution.</h2>
        <p class="text-gray-300 mb-8 text-lg">Speak to a media advisor and we'll recommend the most useful next step.</p>
        <SharedButton to="/contact" size="lg">Get a Media Recommendation</SharedButton>
      </div>
    </section>
  </div>
</template>
