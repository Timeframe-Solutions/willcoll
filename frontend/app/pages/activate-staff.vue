<script setup lang="ts">
useHead({
  title: 'Activate Staff Access | Willcoll Agencies',
  meta: [
    {
      name: 'description',
      content: 'For existing corporate subscription clients — submit staff access activation requests to the Willcoll team.',
    },
  ],
})
</script>

<template>
  <div>
    <SharedPageHero
      eyebrow="Client portal"
      title="Activate Staff Access"
      subtitle="For existing corporate subscription clients: submit a request to activate access for your team."
    />

    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-3xl mx-auto px-6">
        <div class="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8">
          <p class="text-sm text-amber-800">
            <strong>Existing corporate subscription clients only.</strong> Not a client yet? <NuxtLink to="/services/subscribe" class="font-semibold underline">Build a corporate package</NuxtLink> first.
          </p>
        </div>

        <FormsActivateStaff />
      </div>
    </section>
  </div>
</template>
