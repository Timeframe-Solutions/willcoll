<script setup lang="ts">
const {
  workflow,
  whyWillcoll,
  comparison,
  packages,
  departments,
  insightTopics,
  metrics,
  caseStudies,
} = useContent()

const painPoints = [
  'Multiple suppliers',
  'Multiple quotes',
  'Multiple departments',
  'Multiple deadlines',
  'Multiple invoices',
]

useHead({
  title: 'Willcoll Agencies | Media Planning & Buying Partner in Kenya',
  meta: [
    {
      name: 'description',
      content:
        'Independent media planning, buying and execution for Kenyan organizations. Plan, compare, buy, execute, manage and report your advertising through one commercial partner.',
    },
    {
      property: 'og:title',
      content: 'Willcoll Agencies | Media Planning & Buying Partner in Kenya',
    },
    {
      property: 'og:description',
      content:
        'Independent media planning, buying and execution for Kenyan organizations through one commercial partner.',
    },
    { property: 'og:type', content: 'website' },
  ],
})
</script>

<template>
  <div>
    <HomeHero />
    <HomeTrustBar />

    <!-- Problem -->
    <section class="py-16 lg:py-28 bg-white" aria-label="The problem">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">The problem</p>
          <h2 class="font-heading text-3xl lg:text-5xl leading-tight mb-6">Media buying gets complicated fast.</h2>
          <p class="text-gray-600 text-lg leading-relaxed">
            When an organization buys media directly from multiple houses, the commercial work multiplies across contacts, quotes and invoices.
          </p>
        </div>
        <div class="space-y-3">
          <div
            v-for="p in painPoints"
            :key="p"
            class="flex items-center gap-3 border border-gray-100 rounded-xl px-5 py-4 bg-gray-50"
          >
            <Icon name="lucide:circle-dashed" class="w-5 h-5 text-orange-500 shrink-0" />
            <span class="text-gray-700 font-medium">{{ p }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution / workflow -->
    <section class="py-16 lg:py-28 bg-gray-50" aria-label="The solution">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <SharedSectionHeading
          eyebrow="The solution"
          heading="One commercial media partner."
          subhead="Plan, compare, buy, execute, manage and report through a single accountable workflow."
          :centered="true"
        />
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          <div
            v-for="(w, i) in workflow"
            :key="w.step"
            class="bg-white border border-gray-100 rounded-2xl p-5 text-center"
          >
            <span class="font-mono text-orange-500 font-bold text-xs">0{{ i + 1 }}</span>
            <SharedIconTile :icon="w.icon" size="sm" class="mx-auto my-3" />
            <h3 class="font-heading text-base text-ink-900 mb-1">{{ w.title }}</h3>
            <p class="text-xs text-gray-500 leading-relaxed">{{ w.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services (three layers) -->
    <HomeServiceOverview />

    <!-- Why Willcoll -->
    <section class="relative py-16 lg:py-28 overflow-hidden" aria-label="Why Willcoll">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70"
          alt=""
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-ink-900/90" aria-hidden="true"></div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <SharedSectionHeading
          eyebrow="Why Willcoll"
          heading="Why work with a media partner?"
          subhead="Five reasons organizations consolidate their media with us instead of buying from each house directly."
          :centered="true"
          :dark="true"
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          <div
            v-for="w in whyWillcoll"
            :key="w.title"
            class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7"
          >
            <SharedIconTile :icon="w.icon" size="sm" class="mb-4" />
            <h3 class="font-heading text-lg text-white mb-2">{{ w.title }}</h3>
            <p class="text-sm text-gray-300 leading-relaxed">{{ w.body }}</p>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-6 mt-10">
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 class="font-heading text-lg text-white mb-5">{{ comparison.direct.title }}</h3>
            <ul class="space-y-3">
              <li v-for="p in comparison.direct.points" :key="p" class="flex gap-3 text-gray-300">
                <Icon name="lucide:x" class="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <span class="leading-relaxed">{{ p }}</span>
              </li>
            </ul>
          </div>
          <div class="border-2 border-orange-500 rounded-2xl p-8 bg-orange-500/10">
            <h3 class="font-heading text-lg text-white mb-5">{{ comparison.willcoll.title }}</h3>
            <ul class="space-y-3">
              <li v-for="p in comparison.willcoll.points" :key="p" class="flex gap-3 text-gray-100">
                <Icon name="lucide:check-circle-2" class="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <span class="leading-relaxed">{{ p }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Packages -->
    <section class="py-16 lg:py-28 bg-gray-50" aria-label="Media packages">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <SharedSectionHeading
          eyebrow="Media packages"
          heading="Starter media packages"
          subhead="A starting point for common objectives. Every package is scoped to your requirement and budget."
          :centered="true"
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          <div
            v-for="p in packages"
            :key="p.name"
            class="bg-white border border-gray-100 rounded-2xl p-7 flex flex-col"
          >
            <h3 class="font-heading text-xl text-ink-900 mb-2">{{ p.name }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-5">{{ p.description }}</p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="c in p.components"
                :key="c"
                class="text-xs font-semibold text-orange-600 bg-orange-100 rounded-full px-3 py-1"
              >{{ c }}</span>
            </div>
            <SharedButton to="/contact" class="mt-auto w-full">Request Package</SharedButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Results & proof: renders only when verified data is available -->
    <section
      v-if="metrics.length || caseStudies.length"
      class="py-16 lg:py-28 bg-white"
      aria-label="Results and proof"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <SharedSectionHeading eyebrow="Results" heading="Proof that matters" :centered="true" />
        <div v-if="metrics.length" class="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-center">
          <div v-for="m in metrics" :key="m.label">
            <p class="font-heading text-4xl font-bold text-orange-500">{{ m.value }}</p>
            <p class="text-sm text-gray-500 mt-2">{{ m.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Media network -->
    <MediaPlatformsCarousel />

    <!-- Departments -->
    <section class="relative py-16 lg:py-28 overflow-hidden" aria-label="Who we serve">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=70"
          alt=""
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-ink-900/90" aria-hidden="true"></div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <SharedSectionHeading
          eyebrow="Who it's for"
          heading="Built for every team that buys media"
          subhead="Marketing, HR, procurement, communications and administration all benefit from one media partner."
          :centered="true"
          :dark="true"
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          <NuxtLink
            v-for="d in departments"
            :key="d.name"
            to="/corporate-solutions"
            class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-orange-400/40 hover:bg-white/10 transition-all"
          >
            <SharedIconTile :icon="d.icon" size="md" class="mb-4" />
            <h3 class="font-heading text-lg text-white mb-2">{{ d.name }}</h3>
            <p class="text-sm text-gray-300 leading-relaxed mb-4">{{ d.body }}</p>
            <ul class="space-y-1.5">
              <li v-for="pt in d.points" :key="pt" class="flex gap-2 text-sm text-gray-300">
                <Icon name="lucide:check" class="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span class="leading-relaxed">{{ pt }}</span>
              </li>
            </ul>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Insights -->
    <section class="relative py-16 lg:py-28 overflow-hidden" aria-label="Insights">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=70"
          alt=""
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-white/85" aria-hidden="true"></div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <SharedSectionHeading
          eyebrow="Insights"
          heading="Guides to media buying in Kenya"
          subhead="Practical guidance on planning, buying and managing media across television, print and digital."
          :centered="true"
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <div
            v-for="t in insightTopics"
            :key="t.title"
            class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
          >
            <SharedIconTile :icon="t.icon" size="sm" class="mb-4" />
            <h3 class="font-heading text-base text-ink-900 mb-1">{{ t.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ t.description }}</p>
          </div>
        </div>
        <p class="text-center text-sm text-gray-600 mt-10">
          Guides are published regularly.
          <NuxtLink to="/contact" class="text-orange-600 font-semibold hover:underline">Talk to a Media Advisor</NuxtLink>
          for guidance specific to your organization.
        </p>
      </div>
    </section>

    <HomeFinalCta />
  </div>
</template>
