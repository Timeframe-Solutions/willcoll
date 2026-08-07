<script setup lang="ts">
const { articles } = useInsights()
useScrollReveal()
useHead({ title: 'Insights | Willcoll Agencies', meta: [{ name: 'description', content: 'Practical guidance on compliance, governance, risk, and growth for Kenyan businesses.' }] })
</script>

<template>
  <div>
    <SharedPageHero
      centered
      eyebrow="Willcoll insights"
      title="Practical perspective for better business decisions."
      subtitle="Clear guidance on compliance, governance, risk, and growth for Kenyan organizations."
      bg-image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=80"
    />

    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          <InsightsInsightCard v-for="article in articles" :key="article.slug" :article="article" />
        </div>
      </div>
    </section>

    <section class="py-16 bg-white text-center">
      <div class="max-w-xl mx-auto px-6 reveal">
        <p class="text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">Have a business question?</p>
        <h2 class="text-3xl mb-4">Bring it to a conversation.</h2>
        <p class="text-gray-600 mb-7">Our team can translate general guidance into a practical next step for your organization.</p>
        <SharedButton to="/contact">Book a Consultation</SharedButton>
      </div>
    </section>
  </div>
</template>
