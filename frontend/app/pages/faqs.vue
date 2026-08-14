<script setup lang="ts">
useHead({ title: 'Frequently Asked Questions | Willcoll Agencies' })

const items = [
  {
    question: 'What does Willcoll do?',
    answer: "Willcoll is an independent commercial media partner. We help businesses and organizations plan, place and manage advertising, recruitment campaigns, public notices and corporate subscriptions across Kenya's leading media platforms.",
  },
  {
    question: 'How do I get a quote?',
    answer: "Send us your requirement through the Get a Media Quote form. Our team will respond with next steps and, where possible, an indicative quote. Final rates and availability are confirmed by the relevant media house.",
  },
  {
    question: 'Which media platforms do you work with?',
    answer: "We work with Kenya's leading media platforms, including NTV, Daily Nation and Nation.africa, as well as other relevant media depending on your objectives.",
  },
  {
    question: 'Do I need to create an account?',
    answer: 'No. Enquiries are simple and form-based. There is no registration or login required to get started.',
  },
  {
    question: 'I am an existing client. How do I submit a notice?',
    answer: 'Use the Submit Notice page under Client Portal to send your publication materials securely for processing.',
  },
  {
    question: 'How is pricing determined?',
    answer: 'Pricing depends on the media house, format and timing of your requirement. We provide an indicative quote and confirm final rates with the media house before you commit.',
  },
  {
    question: 'Do you serve organizations outside Nairobi?',
    answer: 'Yes. We are based in Nairobi and serve businesses and institutions across Kenya.',
  },
]
</script>

<template>
  <div>
    <SharedPageHero
      centered
      eyebrow="Helpful answers"
      title="Frequently Asked Questions"
      subtitle="The essentials on how we work, what to expect, and where to begin."
    />
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-3xl mx-auto px-6">
        <SharedAccordion :items="items" />
        <div class="mt-12 rounded-2xl bg-ink-900 p-8 text-center">
          <h2 class="text-white text-2xl mb-3">Still have a question?</h2>
          <p class="text-gray-300 mb-6">A short conversation is the fastest way to get a useful answer.</p>
          <SharedButton to="/contact">Get a Media Quote</SharedButton>
        </div>
      </div>
    </section>
  </div>
</template>
