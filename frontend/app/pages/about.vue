<script setup lang="ts">
useHead({
  title: "About Willcoll Agencies | Business Advisory Firm, Nairobi",
  meta: [
    {
      name: "description",
      content:
        "Learn about Willcoll Agencies mission, values, and approach to advisory for growing Kenyan organizations.",
    },
  ],
});
useScrollReveal();

const values = [
  [
    "Integrity",
    "We give clients the advice they need to hear, not just what is easiest to say.",
  ],
  [
    "Rigor",
    "Every engagement follows a disciplined, evidence-based methodology.",
  ],
  [
    "Accessibility",
    "Enterprise-grade advisory at a price growing businesses can afford.",
  ],
  [
    "Partnership",
    "We measure success by your outcomes, not our billable hours.",
  ],
];
const approach = [
  "Diagnose — Understand the real problem, not the assumed solution.",
  "Design — Build a scoped, practical plan for your organization's size.",
  "Deliver — Execute alongside your team with clear milestones.",
  "Sustain — Hand over frameworks your team can maintain independently.",
];
</script>

<template>
  <div>
    <SharedPageHero
      eyebrow="About Willcoll"
      title="Advisory for Businesses that are ready to grow with confidence."
      subtitle="Senior-level thinking, practical delivery, and Kenyan market fluency — applied to the decisions that shape your future."
      bg-image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
    />

    <!-- Our Story -->
    <section class="py-16 lg:py-24 bg-white">
      <div
        class="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center"
      >
        <div class="lg:col-span-5 reveal-left">
          <p
            class="text-orange-600 text-xs font-bold uppercase tracking-widest mb-4"
          >
            Our story
          </p>
          <h2 class="text-3xl lg:text-4xl leading-tight">
            Built to close a real gap in the market.
          </h2>
          <div class="mt-6 w-12 h-1 bg-orange-500 rounded-full"></div>
        </div>
        <div
          class="lg:col-span-6 lg:col-start-7 text-lg text-gray-600 leading-relaxed space-y-4 reveal-right"
        >
          <p>
            Kenyan businesses past the founder-managed stage still struggle to
            access advisory that matches their ambition. Enterprise consulting
            firms demand enterprise budgets.
          </p>
          <p>
            Willcoll was built to close that gap, bringing rigorous,
            senior-level advisory to SMEs, family businesses, NGOs, SACCOs, and
            growing corporates across Kenya.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section
      class="bg-ink-900 py-16 lg:py-24 text-white relative overflow-hidden"
    >
      <div
        class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]"
        aria-hidden="true"
      ></div>
      <div
        class="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-8 relative z-10 stagger-children"
      >
        <div
          class="border border-white/15 rounded-2xl p-8 hover:border-orange-500/40 transition-colors duration-300"
        >
          <p
            class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            Our mission
          </p>
          <p class="font-heading text-2xl leading-relaxed">
            Equipping Kenyan organizations with compliance, risk, and strategic
            advisory to operate with confidence and scale sustainably.
          </p>
        </div>
        <div
          class="border border-white/15 rounded-2xl p-8 hover:border-orange-500/40 transition-colors duration-300"
        >
          <p
            class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            Our vision
          </p>
          <p class="font-heading text-2xl leading-relaxed">
            To be the most trusted business advisory partner for Kenya's growing
            and mid-market organizations.
          </p>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <SharedSectionHeading
          eyebrow="What guides us"
          heading="Our values show up in the work."
          centered
        />
        <div
          class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 stagger-children"
        >
          <div
            v-for="([name, text], i) in values"
            :key="name"
            class="bg-white border border-gray-100 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <span class="text-orange-500 font-mono text-sm">0{{ i + 1 }}</span>
            <h3 class="text-xl mt-5 mb-3">{{ name }}</h3>
            <p class="text-sm text-gray-600">{{ text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership + How We Work -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
        <div class="rounded-3xl bg-orange-50 p-8 lg:p-12 reveal-left">
          <p
            class="text-orange-600 text-xs font-bold uppercase tracking-widest mb-5"
          >
            Leadership
          </p>
          <div
            class="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-heading text-3xl mb-7"
          >
            WK
          </div>
          <h2 class="text-3xl mb-1">Wilson Kimani</h2>
          <p class="text-orange-600 font-semibold mb-4">Managing Partner</p>
          <p class="text-gray-700">
            Wilson leads Willcoll's advisory practice, working directly with
            clients across compliance, governance, risk, and transformation.
          </p>
        </div>
        <div class="reveal-right">
          <p
            class="text-orange-600 text-xs font-bold uppercase tracking-widest mb-4"
          >
            How we work
          </p>
          <h2 class="text-3xl mb-7">
            Rigorous enough to be trusted. Practical enough to deliver.
          </h2>
          <ol class="space-y-5">
            <li
              v-for="(step, i) in approach"
              :key="step"
              class="flex gap-5 border-b border-gray-100 pb-5"
            >
              <span class="text-orange-500 font-mono font-bold shrink-0"
                >0{{ i + 1 }}</span
              >
              <p class="text-gray-600">{{ step }}</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>
