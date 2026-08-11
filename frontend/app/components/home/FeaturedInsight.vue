<template>
  <!-- Featured Insight: white section, editorial header + 3 placeholder insight cards -->
  <section class="py-16 lg:py-28 bg-white" aria-label="Featured insights">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- Header row -->
      <div
        class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 lg:mb-14"
      >
        <SharedSectionHeading
          eyebrow="From Our Insights"
          heading="Practical Guidance for Kenyan Businesses"
          subhead="Compliance, governance, and growth from our advisory desk."
          class="mb-0"
        />
        <NuxtLink
          to="/insights"
          class="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:gap-3 transition-all group whitespace-nowrap"
        >
          View all Insights
          <Icon
            name="lucide:arrow-right"
            class="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>

      <!-- 3-column insight cards -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <NuxtLink
          v-for="insight in featuredInsights"
          :key="insight.slug"
          :to="`/insights/${insight.slug}`"
          class="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
          style="box-shadow: 0 1px 2px rgba(17, 17, 17, 0.04)"
        >
          <!-- Placeholder category colour band -->
          <div class="h-1 w-full bg-orange-500" />

          <div class="p-7 flex flex-col flex-1">
            <!-- Category badge -->
            <span
              class="inline-block text-xs font-bold tracking-[0.12em] uppercase text-orange-600 bg-orange-100 px-3 py-1 rounded-sm mb-4 self-start"
            >
              {{ insight.category }}
            </span>

            <h3
              class="font-heading font-bold text-lg text-ink-900 leading-snug mb-3 group-hover:text-orange-600 transition-colors flex-1"
            >
              {{ insight.title }}
            </h3>

            <p class="text-gray-500 text-sm leading-relaxed mb-5">
              {{ insight.description }}
            </p>

            <div class="flex items-center justify-between mt-auto">
              <span class="text-xs text-gray-400">{{ insight.date }}</span>
              <Icon
                name="lucide:arrow-right"
                class="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Placeholder insights — will be replaced by Nuxt Content when articles are authored
const { articles: featuredInsights } = useInsights();

const placeholderInsights = [
  {
    slug: "why-compliance-cannot-wait",
    category: "Regulatory Compliance",
    title:
      "Why Regulatory Compliance Cannot Be an Afterthought for Kenyan SMEs",
    excerpt:
      "The cost of non-compliance — in fines, reputational damage, and operational disruption — far exceeds the cost of getting it right from the start.",
    date: "July 2025",
  },
  {
    slug: "governance-frameworks-for-family-businesses",
    category: "Corporate Governance",
    title:
      "Building Governance Frameworks That Work for Family-Owned Businesses",
    excerpt:
      "Transitioning from founder-led to institutionally governed is one of the most consequential decisions a family business makes. Here's how to do it without losing what makes you distinctive.",
    date: "June 2025",
  },
  {
    slug: "due-diligence-before-acquisition",
    category: "Transaction Advisory",
    title: "What Every Buyer Needs to Know Before Acquiring a Kenyan Business",
    excerpt:
      "Insufficient due diligence is one of the leading causes of failed acquisitions. These are the critical areas buyers consistently underweight.",
    date: "May 2025",
  },
];
</script>
