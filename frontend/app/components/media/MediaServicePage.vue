<script setup lang="ts">
import type { Service } from '~/composables/useServices'

defineProps<{ service: Service }>()

useScrollReveal()

const whyWillcoll = [
  {
    icon: 'lucide:handshake',
    title: 'One Commercial Partner',
    body: 'A single point of contact across advertising, recruitment, publications and subscriptions.',
  },
  {
    icon: 'lucide:map-pin',
    title: 'Kenyan Media Fluency',
    body: "Practical knowledge of Kenya's leading media platforms and how to work with them.",
  },
  {
    icon: 'lucide:file-check',
    title: 'Procurement-Ready',
    body: 'Clear quotes, documented coordination and predictable handovers for procurement teams.',
  },
  {
    icon: 'lucide:workflow',
    title: 'End-to-End Coordination',
    body: "We manage artwork, placement, publication and delivery so your team doesn't have to.",
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative min-h-[80vh] flex items-center overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="`background-image: url('${service.bgImage}')`"
        aria-hidden="true"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/80 to-ink-900/50" aria-hidden="true" />

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-36 w-full">
        <div class="max-w-2xl">
          <NuxtLink to="/services" class="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm mb-8 group">
            <span class="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10">
              <Icon name="lucide:arrow-left" class="w-3.5 h-3.5" />
            </span>
            All Services
          </NuxtLink>

          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-orange-500/15 border border-orange-500/30 text-orange-300 mb-6">
            {{ service.navLabel }}
          </div>

          <h1 class="font-heading font-bold text-white text-4xl lg:text-5xl leading-tight mb-5">{{ service.name }}</h1>
          <p class="text-xl text-white/95 font-light leading-relaxed mb-4">{{ service.coreMessage }}</p>
          <p class="text-gray-300 leading-relaxed mb-9 max-w-xl">{{ service.subhead }}</p>

          <div class="flex flex-col sm:flex-row gap-4">
            <SharedButton :to="`/contact?service=${encodeURIComponent(service.name)}`" size="lg">{{ service.ctaText }}</SharedButton>
            <SharedButton to="/contact" variant="outline-white" size="lg">Talk to a Media Advisor</SharedButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-5 reveal-left">
          <p class="text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">The challenge</p>
          <h2 class="font-heading text-3xl lg:text-4xl leading-tight">A common commercial problem.</h2>
          <div class="mt-6 w-12 h-1 bg-orange-500 rounded-full"></div>
        </div>
        <div class="lg:col-span-6 lg:col-start-7 space-y-5 reveal-right">
          <div v-for="(p, i) in service.problem" :key="i" class="flex gap-4">
            <div class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
              <Icon name="lucide:circle-alert" class="w-3.5 h-3.5" />
            </div>
            <p class="text-gray-600 leading-relaxed">{{ p }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution + who it's for -->
    <section class="bg-ink-900 py-16 lg:py-24 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />
      <div class="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div class="lg:col-span-6 reveal-left">
          <p class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">How Willcoll helps</p>
          <h2 class="font-heading text-3xl lg:text-4xl text-white leading-tight mb-5">{{ service.coreMessage }}</h2>
          <p class="text-gray-300 leading-relaxed text-lg">{{ service.solution }}</p>
        </div>
        <div class="lg:col-span-5 lg:col-start-8 reveal-right">
          <div class="border border-white/10 rounded-2xl p-7 bg-white/5 backdrop-blur-sm">
            <div class="flex items-center gap-3 mb-4">
              <SharedIconTile icon="lucide:users" size="sm" />
              <p class="text-orange-400 text-xs font-bold uppercase tracking-widest">Who it's for</p>
            </div>
            <p class="text-gray-300 leading-relaxed">{{ service.whoIsFor }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Options -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <SharedSectionHeading
          eyebrow="Available options"
          heading="What you can buy"
          subhead="Specific products and services within this area."
          :centered="true"
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          <div
            v-for="sub in service.subServices"
            :key="sub.name"
            class="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <Icon name="lucide:check-circle-2" class="w-5 h-5 text-orange-500 mb-3" />
            <h3 class="font-heading text-lg text-ink-900 mb-2 leading-snug">{{ sub.name }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ sub.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Media Platforms Carousel — advertise only -->
    <MediaPlatformsCarousel v-if="service.id === 'advertise'" />

    <!-- How it works -->
    <MediaHowItWorks />

    <!-- Why Willcoll -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <SharedSectionHeading
          eyebrow="Why Willcoll"
          heading="Why organizations work with us"
          :centered="true"
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
          <div
            v-for="item in whyWillcoll"
            :key="item.title"
            class="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
          >
            <SharedIconTile :icon="item.icon" size="sm" class="mb-4" />
            <h3 class="font-heading text-base text-ink-900 mb-2 leading-snug">{{ item.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-3xl mx-auto px-6">
        <SharedSectionHeading
          eyebrow="FAQ"
          heading="Common questions"
          :centered="true"
        />
        <SharedAccordion :items="service.faqs" />
      </div>
    </section>

    <!-- Final CTA -->
    <section class="relative py-20 lg:py-28 overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="`background-image: url('${service.bgImage}')`"
        aria-hidden="true"
      />
      <div class="absolute inset-0 bg-ink-900/90" aria-hidden="true" />
      <div class="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-5">Get started</p>
        <h2 class="font-heading text-3xl lg:text-4xl text-white mb-4 leading-tight">Ready to get started?</h2>
        <p class="text-gray-300 text-lg mb-9">{{ service.coreMessage }}</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <SharedButton :to="`/contact?service=${encodeURIComponent(service.name)}`" size="lg">
            {{ service.ctaText }}
          </SharedButton>
          <a
            href="tel:0722550893"
            class="inline-flex items-center gap-2 text-gray-300 hover:text-white font-medium text-sm transition-colors px-4 py-3"
          >
            <span class="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
              <Icon name="lucide:phone" class="w-4 h-4 text-orange-400" />
            </span>
            Call 0722 550 893
          </a>
        </div>
      </div>
    </section>
  </div>
</template>


