<template>
  <section
    ref="sectionRef"
    class="hero-section relative flex flex-col overflow-hidden bg-zinc-950"
    aria-label="Hero"
  >
    <!-- Background image + layered gradient system -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/nairobi-skyline.jpg"
        alt="Nairobi skyline and Central Business District"
        class="w-full h-full object-cover object-center"
        fetchpriority="high"
      />
      <!-- Base darkening overlay for text contrast -->
      <div class="absolute inset-0 bg-slate-950/30" aria-hidden="true" />
      <!-- Mobile: bottom-up gradient keeps text legible -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent lg:hidden"
        aria-hidden="true"
      />
      <!-- Desktop: side gradient, lets image breathe on the right -->
      <div
        class="absolute inset-0 hidden lg:block bg-gradient-to-r from-black/70 via-black/45 to-black/15"
        aria-hidden="true"
      />
      <!-- Universal top scrim for navbar legibility -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>

    <!-- Main content — fills the viewport height -->
    <div class="relative z-10 flex flex-col flex-1 min-h-[100dvh]">
      <!-- Navbar spacer -->
      <div class="h-20 sm:h-24 flex-shrink-0" aria-hidden="true" />

      <!-- Hero body: bottom-weighted on mobile, centred on desktop -->
      <div class="flex-1 flex items-end lg:items-center">
        <div
          class="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pb-20 sm:pb-28 lg:pb-0 lg:py-20"
        >
          <!-- Grid: copy left | stat cards right (XL+) -->
          <div
            class="grid xl:grid-cols-[1fr_auto] gap-10 xl:gap-16 items-center"
          >
            <!-- Copy column -->
            <div
              class="max-w-2xl xl:max-w-3xl hero-content"
              :class="{ 'is-revealed': revealed }"
            >
              <!-- Badge -->
              <div class="hero-item" style="--delay: 0ms">
                <span
                  class="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-400 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse flex-shrink-0"
                    aria-hidden="true"
                  />
                  Media Partner
                </span>
              </div>

              <!-- Headline with fluid type scaling -->
              <h1
                class="hero-item font-sans font-extrabold text-white leading-[1.1] tracking-tight mb-5 text-3xl sm:text-4xl md:text-5xl xl:text-6xl"
                style="--delay: 80ms"
              >
                Strategic
                <span class="text-orange-500">Media Solutions</span>
                built&nbsp;for&nbsp;Growth.
              </h1>

              <!-- Sub-copy -->
              <p
                class="hero-item text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed mb-9"
                style="--delay: 160ms"
              >
                Independent media planning, buying and execution for Kenyan
                organizations.
              </p>

              <!-- CTA row -->
              <div
                class="hero-item flex flex-col sm:flex-row gap-4 mb-10 sm:mb-12"
                style="--delay: 240ms"
              >
                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 w-full sm:w-auto"
                >
                  Get a Media Recommendation
                </NuxtLink>
                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl backdrop-blur-sm transition-all w-full sm:w-auto"
                >
                  Talk to a Media Advisor
                </NuxtLink>
              </div>

              <!-- Trust signals row -->
              <div
                class="hero-item hidden md:flex flex-wrap items-center gap-x-6 gap-y-3"
                style="--delay: 320ms"
              >
                <div
                  v-for="stat in trustStats"
                  :key="stat.label"
                  class="flex items-center gap-2"
                >
                  <span
                    class="text-orange-400 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <Icon :name="stat.icon" class="w-4 h-4" />
                  </span>
                  <span class="text-sm text-gray-300 font-medium">{{
                    stat.label
                  }}</span>
                </div>
              </div>
            </div>

            <!-- Floating stat cards — visible XL+ only -->
            <div
              class="hidden xl:flex flex-col gap-4 hero-cards"
              :class="{ 'is-revealed': revealed }"
              aria-hidden="true"
            >
              <div
                v-for="(card, i) in statCards"
                :key="card.value"
                class="stat-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 min-w-[190px]"
                :style="`--card-delay: ${i * 80 + 400}ms`"
              >
                <p
                  class="text-3xl font-sans font-extrabold text-white leading-none mb-1.5"
                >
                  {{ card.value }}
                </p>
                <p
                  class="text-xs text-gray-300 font-medium uppercase tracking-widest"
                >
                  {{ card.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 opacity-50"
      aria-hidden="true"
    >
      <span
        class="text-white text-[9px] tracking-[0.25em] uppercase font-medium"
        >Scroll</span
      >
      <div class="w-px h-9 overflow-hidden relative rounded-full bg-white/20">
        <div
          class="absolute top-0 left-0 w-full h-1/2 bg-white/80 rounded-full animate-scroll-line"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const sectionRef = ref<HTMLElement | null>(null);
const revealed = ref(false);

const trustStats = [
  { icon: "lucide:building-2", label: "Nairobi-based, Kenya-wide" },
  { icon: "lucide:shield-check", label: "Trusted commercial partner" },
  { icon: "lucide:layers", label: "TV, Print & Digital" },
];

const statCards = [
  { value: "Multi-Platform", label: "TV, Print & Digital" },
  { value: "Kenya-wide", label: "Nairobi-Based" },
  { value: "1 Partner", label: "End-to-End Solutions" },
];

onMounted(() => {
  requestAnimationFrame(() => {
    setTimeout(() => {
      revealed.value = true;
    }, 100);
  });
});
</script>

<style scoped>
.hero-section {
  min-height: 100dvh;
}

/* Staggered slide-up reveal for copy items */
.hero-item {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--delay, 0ms);
}

.hero-content.is-revealed .hero-item {
  opacity: 1;
  transform: translateY(0);
}

/* Stat cards slide in from the right */
.stat-card {
  opacity: 0;
  transform: translateX(20px);
  transition:
    opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--card-delay, 400ms);
}

.hero-cards.is-revealed .stat-card {
  opacity: 1;
  transform: translateX(0);
}

/* Scroll indicator animation */
@keyframes scrollLine {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(200%);
  }
}

.animate-scroll-line {
  animation: scrollLine 1.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Respect reduced-motion preference */
@media (prefers-reduced-motion: reduce) {
  .hero-item,
  .stat-card {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  .animate-scroll-line {
    animation: none;
  }
}
</style>
