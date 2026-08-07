<script setup lang="ts">
useScrollReveal()
useHead({ title: 'Why Choose Willcoll Agencies | Business Advisory Kenya' })

const reasons = [
  ['Senior-Partner Access', 'You engage directly with decision-makers throughout — not a rotating bench of junior staff.'],
  ['One Firm, Full Spectrum', 'Compliance, risk, strategy, transactions, and brand — coordinated under one relationship.'],
  ['Kenyan Regulatory Fluency', 'Deep, current familiarity with the regulatory bodies relevant to your organization.'],
  ['Right-Sized Engagement', 'Advisory scoped and priced for SME and mid-market realities.'],
  ['Outcome-Focused', 'Every engagement is measured against a defined business outcome, not billable hours.']
]
</script>

<template>
  <div>
    <SharedPageHero
      eyebrow="The Willcoll difference"
      title="Why Organizations Choose Willcoll Agencies"
      subtitle="Enterprise-grade advisory discipline, delivered at the speed growing organizations need."
      bg-image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80"
    />

    <!-- The gap we fill -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-5 reveal-left">
          <p class="text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">The gap we fill</p>
          <h2 class="text-3xl lg:text-4xl leading-tight">More rigorous than a freelancer. More accessible than a big firm.</h2>
          <div class="mt-6 w-12 h-1 bg-orange-500 rounded-full"></div>
        </div>
        <div class="lg:col-span-6 lg:col-start-7 text-gray-600 text-lg leading-relaxed space-y-4 reveal-right">
          <p>Large firms serve enterprise clients with enterprise pricing and junior delivery teams. Independent consultants offer flexibility but lack institutional depth.</p>
          <p>Willcoll occupies the space between — senior-led advisory at a scale and price point that matches growing organizations.</p>
        </div>
      </div>
    </section>

    <!-- Reasons -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <SharedSectionHeading eyebrow="What sets us apart" heading="Five reasons organizations choose us." centered />
        <div class="grid md:grid-cols-2 gap-5 mt-12 stagger-children">
          <article
            v-for="([title, text], i) in reasons"
            :key="title"
            class="bg-white border border-gray-100 rounded-2xl p-7 flex gap-5 hover:-translate-y-1 hover:shadow-lg hover:border-orange-200 transition-all duration-300"
          >
            <span class="text-orange-500 font-mono font-bold text-lg shrink-0">0{{ i + 1 }}</span>
            <div>
              <h2 class="text-xl mb-2">{{ title }}</h2>
              <p class="text-gray-600 text-sm leading-relaxed">{{ text }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-orange-500 text-center text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" aria-hidden="true"></div>
      <div class="relative z-10 reveal">
        <h2 class="text-3xl text-white mb-4">Let's make the next decision clearer.</h2>
        <p class="text-orange-100 mb-7 max-w-md mx-auto px-4">Schedule a consultation with our advisory team and get a clear path forward.</p>
        <SharedButton to="/contact" variant="outline-white" size="lg">Book a Consultation</SharedButton>
      </div>
    </section>
  </div>
</template>
