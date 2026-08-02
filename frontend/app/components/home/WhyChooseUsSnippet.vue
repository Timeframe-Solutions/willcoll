<template>
  <!-- Why Choose Us snippet: gray-50 background, 2-col layout: text left, 4 differentiators right -->
  <section
    class="py-16 lg:py-28 bg-gray-50"
    aria-label="Why organizations choose Willcoll"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left: editorial text column -->
        <div>
          <SharedSectionHeading
            eyebrow="Why Choose Us"
            heading="Why Organizations Choose Willcoll"
            size="lg"
          />
          <p class="text-gray-500 leading-relaxed mb-8">
            Too many growing organizations are too complex to run informally,
            but not yet a priority for the large advisory firms. Willcoll
            Agencies exists for that gap bringing senior-level advisory
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
            class="bg-white border border-gray-100 rounded-xl p-6 transition-shadow duration-200 hover:shadow-md"
            style="box-shadow: 0 1px 2px rgba(17, 17, 17, 0.04)"
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
