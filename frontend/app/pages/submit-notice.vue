<script setup lang="ts">
useHead({
  title: 'Submit a Notice | Willcoll Agencies',
  meta: [
    {
      name: 'description',
      content: 'For existing clients — submit your publication materials securely for processing by the Willcoll team.',
    },
  ],
})
</script>

<template>
  <div>
    <SharedPageHero
      eyebrow="Client portal"
      title="Submit a Notice"
      subtitle="For existing clients: submit your publication materials securely for processing."
    />

    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-3xl mx-auto px-6">
        <div class="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8">
          <p class="text-sm text-amber-800">
            <strong>Existing clients only.</strong> New to Willcoll? <NuxtLink to="/contact" class="font-semibold underline">Get a media quote</NuxtLink> first and our team will set you up.
          </p>
        </div>

        <FormsSubmitNotice />
      </div>
    </section>
  </div>
</template>
