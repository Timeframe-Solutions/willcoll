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
          <h2 class="font-heading text-3xl lg:text-5xl leading-tight mb-6">Media &amp; event production get complicated fast.</h2>
          <p class="text-gray-600 text-lg leading-relaxed">
            When an organization buys media or executes corporate events, managing multiple independent vendors multiplies quotes, invoices, and execution risks.
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
    <section class="relative py-16 lg:py-28 overflow-hidden bg-gray-50" aria-label="The solution">
      <div
        class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.08]"
        style="background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=70'); background-attachment: fixed;"
        aria-hidden="true"
      />
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <SharedSectionHeading
          eyebrow="The solution"
          heading="One commercial media &amp; event partner."
          subhead="Plan, compare, buy, execute, manage and report your campaigns and event production through a single accountable workflow."
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
    <section class="relative py-16 lg:py-24 overflow-hidden text-white bg-slate-950" aria-label="Why Willcoll">
      <div
        class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-15"
        style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70'); background-attachment: fixed;"
        aria-hidden="true"
      />
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="text-orange-500 text-xs font-bold uppercase tracking-widest mb-3">Why Willcoll</p>
          <h2 class="font-heading font-bold text-3xl lg:text-4xl leading-tight text-white mb-4">Why work with a media &amp; events partner?</h2>
          <p class="text-gray-400 text-base leading-relaxed">Consolidate campaigns and production under a single partner instead of managing multiple vendors directly.</p>
        </div>

        <!-- 5 Differentiators Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          <div v-for="w in whyWillcoll" :key="w.title" class="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all flex flex-col">
            <SharedIconTile :icon="w.icon" size="sm" class="mb-4 shrink-0" />
            <h3 class="font-heading text-base font-semibold text-white mb-2">{{ w.title }}</h3>
            <p class="text-xs text-gray-300 leading-relaxed flex-1">{{ w.body }}</p>
          </div>
        </div>

        <!-- Comparison side-by-side -->
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 class="font-heading text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">{{ comparison.direct.title }}</h3>
            <ul class="space-y-2.5">
              <li v-for="p in comparison.direct.points" :key="p" class="flex gap-2.5 text-xs text-gray-300">
                <Icon name="lucide:x" class="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span class="leading-snug">{{ p }}</span>
              </li>
            </ul>
          </div>
          <div class="border border-orange-500/30 rounded-2xl p-6 bg-orange-500/5">
            <h3 class="font-heading text-sm font-semibold uppercase tracking-wider text-orange-400 mb-4">{{ comparison.willcoll.title }}</h3>
            <ul class="space-y-2.5">
              <li v-for="p in comparison.willcoll.points" :key="p" class="flex gap-2.5 text-xs text-gray-200">
                <Icon name="lucide:check-circle-2" class="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                <span class="leading-snug">{{ p }}</span>
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
          heading="Starter media &amp; event packages"
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
          heading="Built for every team buying media &amp; events"
          subhead="Marketing, HR, procurement, communications and administration all benefit from a consolidated media &amp; events partner."
          :centered="true"
          :dark="true"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          <NuxtLink
            v-for="d in departments"
            :key="d.name"
            to="/corporate-solutions"
            class="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-orange-500/50 hover:bg-white/10 transition-all flex flex-col"
          >
            <div class="flex items-center gap-3 mb-3">
              <Icon :name="d.icon" class="w-5 h-5 text-orange-500 shrink-0" />
              <h3 class="font-heading text-sm font-semibold text-white leading-tight">{{ d.name }}</h3>
            </div>
            <p class="text-xs text-gray-400 leading-relaxed mb-4 flex-1">{{ d.body }}</p>
            <div class="border-t border-white/5 pt-3 mt-auto">
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="pt in d.points"
                  :key="pt"
                  class="text-[10px] text-gray-300 bg-white/5 px-2 py-0.5 rounded-md leading-none"
                >{{ pt }}</span>
              </div>
            </div>
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
          heading="Guides to media &amp; events in Kenya"
          subhead="Practical guidance on planning, buying and executing media and corporate events."
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

    <!-- Testimonials -->
    <HomeTestimonials />

    <HomeFinalCta />
  </div>
</template>
