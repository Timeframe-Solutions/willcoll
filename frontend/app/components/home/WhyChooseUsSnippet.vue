<template>
  <!-- Why Choose Us snippet: warm tinted overlay, 2-col layout -->
  <section
    class="relative py-16 lg:py-28 overflow-hidden"
    aria-label="Why organizations choose Willcoll"
  >
    <!-- Background image -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="
        background-image: url(&quot;https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1800&q=80&quot;);
      "
      aria-hidden="true"
    />

    <!-- Lighter warm-white overlay — just a gentle hint of warmth, not golden -->
    <div
      class="absolute inset-0"
      style="
        background: linear-gradient(
          135deg,
          rgba(255, 250, 240, 0.92) 0%,
          rgba(255, 247, 235, 0.88) 50%,
          rgba(255, 243, 225, 0.85) 100%
        );
      "
      aria-hidden="true"
    />

    <!-- Soft orange radial glow bottom-left — very subtle -->
    <div
      class="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
      style="
        background: radial-gradient(
          ellipse at bottom left,
          rgba(243, 115, 33, 0.1) 0%,
          transparent 65%
        );
      "
      aria-hidden="true"
    />

    <!-- Very subtle top-right warm blush -->
    <div
      class="absolute top-0 right-0 w-[400px] h-[300px] pointer-events-none"
      style="
        background: radial-gradient(
          ellipse at top right,
          rgba(251, 191, 36, 0.08) 0%,
          transparent 60%
        );
      "
      aria-hidden="true"
    />

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left: editorial text column -->
        <div>
          <SharedSectionHeading
            eyebrow="Why Choose Us"
            heading="Why Organizations Choose Willcoll"
            size="lg"
          />
          <p class="text-gray-600 leading-relaxed mb-8">
            Too many growing organizations are too complex to run informally,
            but not yet a priority for the large advisory firms. Willcoll
            Agencies exists for that gap, bringing senior-level advisory
            discipline in compliance, risk, strategy, and transformation
            directly to the businesses that need it most.
          </p>
          <NuxtLink
            to="/why-choose-us"
            class="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm hover:gap-3 transition-all group"
          >
            See why clients choose us
            <Icon
              name="lucide:arrow-right"
              class="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>

        <!-- Right: 4 differentiator tiles -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="item in differentiators"
            :key="item.title"
            class="rounded-xl p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style="
              background: rgba(255, 255, 255, 0.72);
              backdrop-filter: blur(12px);
              border: 1px solid rgba(243, 115, 33, 0.15);
              box-shadow: 0 2px 8px rgba(180, 83, 9, 0.07);
            "
          >
            <SharedIconTile :icon="item.icon" size="sm" class="mb-4" />
            <h3
              class="font-heading font-bold text-base text-ink-900 leading-snug mb-1.5"
            >
              {{ item.title }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const differentiators = [
  {
    icon: "lucide:user-check",
    title: "Senior-Partner Access",
    body: "You work directly with senior decision makers.",
  },
  {
    icon: "lucide:layers",
    title: "Full-Spectrum Advisory",
    body: "Compliance, risk, strategy, and brand under one coordinated engagement.",
  },
  {
    icon: "lucide:map-pin",
    title: "Kenyan Regulatory Fluency",
    body: "Deep familiarity with local regulatory bodies, processes, and expectations.",
  },
  {
    icon: "lucide:gauge",
    title: "Built for Big Established and Growing Businesses",
    body: "Engagement models sized to SME and mid-market realities, not enterprise retainers.",
  },
];
</script>
