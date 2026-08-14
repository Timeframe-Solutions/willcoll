<script setup lang="ts">
const route = useRoute()
const presetService = typeof route.query.service === 'string' ? route.query.service : ''
const presetRequirement = typeof route.query.requirement === 'string' ? route.query.requirement : ''

useHead({
  title: 'Get a Media Recommendation | Willcoll Agencies',
  meta: [
    {
      name: 'description',
      content: 'Request a media recommendation from Willcoll. Independent media planning, buying and execution for Kenyan organizations.',
    },
  ],
})
</script>

<template>
  <div>
    <SharedPageHero
      eyebrow="Media recommendation"
      title="Tell Us What You're Trying to Achieve"
      subtitle="Share your objective, audience and budget. Our team will respond with a media recommendation and next steps."
    />

    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-5xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-8 items-start">
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-white border border-gray-100 rounded-2xl p-6">
            <h2 class="font-heading text-lg text-ink-900 mb-2">Prefer to talk?</h2>
            <p class="text-sm text-gray-500 mb-3">Call our team or reach us directly.</p>
            <a href="tel:0722550893" class="block font-semibold text-ink-900">0722 550 893</a>
            <a href="mailto:info@willcoll.co.ke" class="block text-orange-600">info@willcoll.co.ke</a>
          </div>
          <div class="bg-ink-900 rounded-2xl p-6 text-white">
            <p class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Office</p>
            <p class="text-sm text-gray-300">10th Floor, Pension Towers, Loita Street, Nairobi</p>
          </div>
        </div>
        <div class="lg:col-span-3">
          <MediaQuoteForm
            :service="presetService"
            :requirement="presetRequirement"
            submit-label="Get a Media Recommendation"
          />
        </div>
      </div>
    </section>
  </div>
</template>
