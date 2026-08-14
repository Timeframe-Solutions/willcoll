<script setup lang="ts">
useScrollReveal();
useHead({
  title: "How It Works | Willcoll Agencies",
  meta: [
    {
      name: "description",
      content:
        "How Willcoll helps you advertise, recruit, publish and subscribe four simple steps from enquiry to outcome.",
    },
  ],
});

const afterSteps = [
  "We confirm your requirement and gather any details we need.",
  "We recommend the right media option, package and campaign approach.",
  "We prepare a quote or proposal for your review.",
  "On approval, we coordinate placement, publication or subscription delivery.",
];
</script>

<template>
  <div>
    <SharedPageHero
      eyebrow="How it works"
      title="A Simple, Coordinated Process"
      subtitle="From your first enquiry to a published campaign or delivered subscription, Willcoll manages the process end to end."
    />

    <MediaHowItWorks />

    <section class="py-16 lg:py-24 bg-gray-50">
      <div
        class="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center"
      >
        <div class="reveal-left">
          <SharedSectionHeading
            eyebrow="After you enquire"
            heading="What happens next"
          />
          <ol class="space-y-5">
            <li v-for="(s, i) in afterSteps" :key="s" class="flex gap-5">
              <span class="text-orange-500 font-mono font-bold shrink-0"
                >0{{ i + 1 }}</span
              >
              <p class="text-gray-600 leading-relaxed">{{ s }}</p>
            </li>
          </ol>
        </div>
        <div class="bg-ink-900 rounded-2xl p-8 lg:p-10 text-white reveal-right">
          <p
            class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            Ready when you are
          </p>
          <h2 class="font-heading text-2xl text-white mb-4">
            Start with a single requirement.
          </h2>
          <p class="text-gray-300 mb-7 leading-relaxed">
            Tell us what you need: an advert, a recruitment campaign, a notice
            or a subscription. We'll handle the rest.
          </p>
          <SharedButton to="/contact" size="lg">Get a Media Recommendation</SharedButton>
        </div>
      </div>
    </section>
  </div>
</template>
