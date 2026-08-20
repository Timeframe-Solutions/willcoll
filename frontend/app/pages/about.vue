<script setup lang="ts">
useScrollReveal()
useHead({
  title: 'About Willcoll Agencies | Commercial Media & Event Partner, Nairobi',
  meta: [
    {
      name: 'description',
      content: 'Willcoll Agencies is an independent commercial partner helping Kenyan businesses coordinate media buying and experiential event production setups.',
    },
  ],
})

const values = [
  ['Independence', 'We act in your commercial interest, with one accountable point of contact.'],
  ['Reliability', 'Clear coordination and consistent delivery across every requirement.'],
  ['Procurement discipline', 'Documented quotes and predictable handovers for buying teams.'],
  ['Kenyan market knowledge', 'Practical understanding of the platforms and processes that matter here.'],
]

const approach = [
  'Listen: Confirm the requirement and the outcome you need.',
  'Recommend: Shape the right media or event option, package, or campaign.',
  'Coordinate: Manage placement, publication, event execution, and delivery end to end.',
  'Deliver: Your campaign runs, event is executed, or subscription is in place.',
]
</script>

<template>
  <div>
    <SharedPageHero
      eyebrow="About Willcoll"
      title="A commercial media &amp; event partner for Kenyan businesses."
      subtitle="Willcoll helps organizations access, plan, purchase, and manage media campaigns and experiential event setups through one trusted partner."
      bg-image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
    />

    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-5 reveal-left">
          <p class="text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">Our role</p>
          <h2 class="text-3xl lg:text-4xl leading-tight">One point of contact for your media &amp; event requirements.</h2>
          <div class="mt-6 w-12 h-1 bg-orange-500 rounded-full"></div>
        </div>
        <div class="lg:col-span-6 lg:col-start-7 text-lg text-gray-600 leading-relaxed space-y-4 reveal-right">
          <p>Businesses and institutions across Kenya need advertising, recruitment campaigns, public notices, event production, and corporate subscriptions; however, buying and coordinating these services can be fragmented and time-consuming.</p>
          <p>Willcoll exists to make that simpler: a commercial partner that plans, places, and manages your media and event requirements end to end.</p>
        </div>
      </div>
    </section>

    <section class="bg-ink-900 py-16 lg:py-24 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true"></div>
      <div class="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-8 relative z-10">
        <div class="border border-white/15 rounded-2xl p-8">
          <p class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">Our mission</p>
          <p class="font-heading text-2xl leading-relaxed">To make buying media and executing event production simpler, clearer, and more accountable for Kenyan organizations.</p>
        </div>
        <div class="border border-white/15 rounded-2xl p-8">
          <p class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">Our vision</p>
          <p class="font-heading text-2xl leading-relaxed">To be the commercial partner Kenyan businesses and institutions turn to first.</p>
        </div>
      </div>
    </section>

    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <SharedSectionHeading eyebrow="What guides us" heading="Our values show up in the work." centered />
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 stagger-children">
          <div v-for="([name, text], i) in values" :key="name" class="bg-white border border-gray-100 rounded-2xl p-6">
            <span class="text-orange-500 font-mono text-sm">0{{ i + 1 }}</span>
            <h3 class="text-xl mt-5 mb-3">{{ name }}</h3>
            <p class="text-sm text-gray-600">{{ text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <SharedSectionHeading eyebrow="How we work" heading="Four steps, one accountable partner." centered />
        <ol class="max-w-2xl mx-auto space-y-5 mt-12">
          <li v-for="(step, i) in approach" :key="step" class="flex gap-5 border-b border-gray-100 pb-5">
            <span class="text-orange-500 font-mono font-bold shrink-0">0{{ i + 1 }}</span>
            <p class="text-gray-600">{{ step }}</p>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>
