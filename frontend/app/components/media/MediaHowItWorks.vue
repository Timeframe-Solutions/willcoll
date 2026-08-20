<template>
  <section class="py-16 lg:py-28 bg-white" aria-label="How it works">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <SharedSectionHeading
        eyebrow="How it works"
        heading="Four steps from enquiry to outcome"
        subhead="A simple, coordinated process whether you are advertising, recruiting, publishing a notice, setting up event production, or managing corporate subscriptions."
        :centered="true"
      />

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children"
      >
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          class="relative bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
        >
          <span class="font-mono text-orange-500 font-bold text-sm"
            >0{{ i + 1 }}</span
          >
          <SharedIconTile :icon="step.icon" size="sm" class="my-4" />
          <h3 class="font-heading text-lg text-ink-900 mb-2 leading-snug">
            {{ step.title }}
          </h3>
          <p class="text-sm text-gray-500 leading-relaxed">{{ step.body }}</p>
        </div>
      </div>

      <div class="mt-12 text-center">
        <SharedButton to="/contact" size="lg"
          >Start With Your Requirement</SharedButton
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useScrollReveal();

const steps = [
  {
    icon: "lucide:clipboard-list",
    title: "Tell Us What You Need",
    body: "Choose your advertising, recruitment, publication, event production, or subscription requirement.",
  },
  {
    icon: "lucide:layers",
    title: "We Build the Solution",
    body: "Willcoll recommends the appropriate media or event production option, package, and approach.",
  },
  {
    icon: "lucide:workflow",
    title: "We Coordinate Everything",
    body: "We manage creative requirements, media placement, event execution, and subscription coordination.",
  },
  {
    icon: "lucide:check-circle-2",
    title: "You Get the Outcome",
    body: "Your campaign runs, your notice reaches its audience, your event is executed, or your organization receives its subscription service.",
  },
];
</script>
