<script setup lang="ts">
useHead({ title: "Frequently Asked Questions | Willcoll Agencies" });
const items = [
  {
    question: "What size of business do you typically work with?",
    answer:
      "We primarily work with SMEs, startups, family-owned businesses, NGOs, and SACCOs — as well as investors and corporates seeking specialized advisory support.",
  },
  {
    question: "How does an engagement typically start?",
    answer:
      "Every engagement begins with a free initial consultation to understand your specific business problem before we propose a scope of work.",
  },
  {
    question: "Do you offer support across multiple service areas at once?",
    answer:
      "Yes. Many clients engage us across more than one practice area — for example, compliance and risk together, or transformation and transaction advisory in sequence.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Pricing is scoped to each engagement based on complexity and duration. We do not use one-size-fits-all retainers; every proposal reflects the actual work required.",
  },
  {
    question: "Is our information kept confidential?",
    answer:
      "Yes. Confidentiality is standard across all engagements, particularly for compliance, risk, and transaction advisory work involving sensitive financial or operational information.",
  },
  {
    question: "Do you work outside Nairobi?",
    answer:
      "Our office is based in Nairobi, and we serve clients across Kenya, with engagement models adapted to remote and on-site delivery as needed.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Timelines vary by service. We provide a clear timeline at proposal stage based on the work required.",
  },
];
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
          <p class="text-gray-300 mb-6">
            A short conversation is the fastest way to get a useful answer.
          </p>
          <SharedButton to="/contact">Talk to Our Team</SharedButton>
        </div>
      </div>
    </section>
  </div>
</template>
