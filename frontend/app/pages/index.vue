<template>
  <div>
    <!-- 1. Hero — full-bleed photography, editorial headline -->
    <HomeHero />

    <!-- 2. Trust bar — 4 proof stats, floats below hero -->
    <HomeTrustBar />

    <!-- 3. Services overview — 7-practice-area card grid -->
    <HomeServiceOverview />

    <!-- 4. Why choose us — 2-col split: text + 4 differentiator tiles -->
    <HomeWhyChooseUsSnippet />

    <!-- 5. Industries — dark ink section with clickable sector tags -->
    <HomeIndustriesSnippet />

    <!-- 6. Mid-page CTA banner -->
    <HomeCtaBanner />

    <!-- 7. Featured insights — 3 editorial article cards -->
    <HomeFeaturedInsight />

    <!-- 8. Testimonial — large pull-quote -->
    <HomeTestimonial />

    <!-- 9. Final CTA — dark section, consultation booking -->
    <HomeFinalCta />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Willcoll Agencies | Business Advisory & Corporate Consulting in Kenya',
  meta: [
    {
      name: 'description',
      content: 'Willcoll Agencies helps Kenyan SMEs, corporates, and organizations achieve regulatory compliance, manage risk, and execute strategic growth. Book a free consultation today.'
    },
    { property: 'og:title', content: 'Willcoll Agencies | Business Advisory & Corporate Consulting in Kenya' },
    { property: 'og:description', content: 'Enterprise-grade business advisory, sized and priced for growing organizations. One firm, from compliance to transformation to brand activation.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>
