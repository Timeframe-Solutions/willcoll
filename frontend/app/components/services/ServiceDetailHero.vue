<script setup lang="ts">
import type { Service } from "~/composables/useServices";

const props = defineProps<{
  service: Service;
}>();
</script>

<template>
  <section
    class="relative w-full min-h-[85vh] flex items-center overflow-hidden"
  >
    <!-- ── Full-bleed background image ── -->
    <div
      class="absolute inset-0 bg-cover bg-center svc-hero-img"
      :style="`background-image: url('${service.bgImage}')`"
      aria-hidden="true"
    />

    <!-- ── Layered overlays: dark gradient left-to-right + overall dim ── -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/80 to-ink-900/50"
      aria-hidden="true"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent"
      aria-hidden="true"
    />

    <!-- ── Subtle grid texture ── -->
    <div
      class="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]"
      aria-hidden="true"
    />

    <!-- ── Orange glow blob ── -->
    <div
      class="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/15 blur-3xl pointer-events-none svc-blob"
      aria-hidden="true"
    />

    <!-- ── Content grid ── -->
    <div
      class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-40 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
    >
      <!-- Left column: text content -->
      <div class="lg:col-span-7 svc-hero-left">
        <!-- Back link -->
        <NuxtLink
          to="/services"
          class="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium mb-10 group"
        >
          <span
            class="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors"
          >
            <Icon
              name="lucide:arrow-left"
              class="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5"
            />
          </span>
          All Practice Areas
        </NuxtLink>

        <!-- Service icon + name row -->
        <div class="flex items-start gap-5 mb-6">
          <div
            class="shrink-0 w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30 mt-1"
          >
            <Icon
              :name="service.icon"
              class="w-7 h-7 text-white"
              :style="{ strokeWidth: '1.6' }"
            />
          </div>
          <h1
            class="font-heading font-bold text-white text-4xl lg:text-5xl leading-[1.1] tracking-tight"
          >
            {{ service.name }}
          </h1>
        </div>

        <!-- Subhead -->
        <p
          class="text-xl text-gray-200 mb-5 leading-relaxed font-light max-w-xl"
        >
          {{ service.subhead }}
        </p>

        <!-- Description -->
        <p class="text-base text-gray-400 mb-10 leading-relaxed max-w-lg">
          {{ service.description }}
        </p>

        <!-- Who this is for -->
        <div
          class="bg-white/5 border border-white/10 rounded-2xl p-5 mb-10 max-w-lg backdrop-blur-sm"
        >
          <div class="flex items-start gap-4">
            <div
              class="w-9 h-9 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center shrink-0 mt-0.5"
            >
              <Icon name="lucide:users" class="w-4 h-4 text-orange-400" />
            </div>
            <div>
              <p
                class="text-white text-xs font-bold uppercase tracking-widest mb-1"
              >
                Ideal For
              </p>
              <p class="text-sm text-gray-300 leading-relaxed">
                {{ service.whoIsFor }}
              </p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="flex flex-wrap items-center gap-4">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-ink-900"
          >
            {{ service.ctaText }}
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </NuxtLink>
          <a
            href="tel:0722550893"
            class="inline-flex items-center gap-2 text-gray-300 hover:text-white font-medium text-sm transition-colors"
          >
            <Icon name="lucide:phone" class="w-4 h-4 text-orange-400" />
            0722 550 893
          </a>
        </div>
      </div>

      <!-- Right column: floating sub-services panel -->
      <div class="lg:col-span-5 svc-hero-right">
        <div
          class="relative bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-md shadow-2xl overflow-hidden"
        >
          <!-- Panel shimmer accent -->
          <div
            class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"
          />

          <!-- Panel header -->
          <div
            class="flex items-center justify-between mb-6 pb-5 border-b border-white/10"
          >
            <div>
              <p
                class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1"
              >
                Focus Areas
              </p>
              <p class="text-white font-heading font-bold text-3xl">
                {{ service.subServices.length }}
              </p>
            </div>
            <div
              class="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg"
            >
              <Icon
                :name="service.icon"
                class="w-6 h-6 text-white"
                :style="{ strokeWidth: '1.6' }"
              />
            </div>
          </div>

          <!-- Sub-services list -->
          <ul class="space-y-3">
            <li
              v-for="(sub, i) in service.subServices"
              :key="i"
              class="svc-panel-item flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group/item cursor-default"
            >
              <div
                class="shrink-0 w-6 h-6 rounded-lg bg-orange-500/15 border border-orange-500/25 flex items-center justify-center mt-0.5"
              >
                <Icon name="lucide:check" class="w-3.5 h-3.5 text-orange-400" />
              </div>
              <div>
                <p
                  class="text-sm font-semibold text-gray-200 group-hover/item:text-white transition-colors leading-snug"
                >
                  {{ sub.name }}
                </p>
                <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  {{ sub.description }}
                </p>
              </div>
            </li>
          </ul>

          <!-- Panel bottom shimmer -->
          <div
            class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
        </div>
      </div>
    </div>

    <!-- ── Scroll indicator ── -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce"
    >
      <div
        class="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center pt-1.5"
      >
        <div class="w-1 h-1.5 bg-white/60 rounded-full animate-scroll-dot" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ken Burns zoom on hero image */
.svc-hero-img {
  animation: svcHeroZoom 18s ease-out forwards;
}
@keyframes svcHeroZoom {
  from {
    transform: scale(1.08);
  }
  to {
    transform: scale(1);
  }
}

/* Blob gentle float */
.svc-blob {
  animation: blobFloat 8s ease-in-out infinite alternate;
}
@keyframes blobFloat {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(20px, 15px) scale(1.08);
  }
}

/* Left column fade-in from left */
.svc-hero-left {
  animation: heroLeftIn 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
}
@keyframes heroLeftIn {
  from {
    opacity: 0;
    transform: translateX(-32px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Right panel fade-in from right */
.svc-hero-right {
  animation: heroRightIn 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
}
@keyframes heroRightIn {
  from {
    opacity: 0;
    transform: translateX(32px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Staggered panel items */
.svc-panel-item:nth-child(1) {
  animation: panelItemIn 0.5s 0.5s both;
}
.svc-panel-item:nth-child(2) {
  animation: panelItemIn 0.5s 0.62s both;
}
.svc-panel-item:nth-child(3) {
  animation: panelItemIn 0.5s 0.74s both;
}
.svc-panel-item:nth-child(4) {
  animation: panelItemIn 0.5s 0.86s both;
}
.svc-panel-item:nth-child(5) {
  animation: panelItemIn 0.5s 0.98s both;
}
@keyframes panelItemIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scroll dot bounce */
@keyframes scroll-dot {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(10px);
    opacity: 0;
  }
}
.animate-scroll-dot {
  animation: scroll-dot 1.4s ease-in-out infinite;
}
</style>
