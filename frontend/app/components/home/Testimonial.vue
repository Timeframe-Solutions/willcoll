<template>
  <!-- Testimonials Carousel: dark ink background, sleek slide transitions -->
  <section
    class="py-20 lg:py-28 bg-ink-900 overflow-hidden relative"
    aria-label="Client testimonials"
  >
    <!-- Subtle ambient glow shapes -->
    <div
      class="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 pointer-events-none"
      style="background: radial-gradient(circle, #f37321 0%, transparent 70%)"
      aria-hidden="true"
    />
    <div
      class="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-5 pointer-events-none"
      style="background: radial-gradient(circle, #f37321 0%, transparent 70%)"
      aria-hidden="true"
    />

    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- Section label -->
      <div class="flex items-center justify-center gap-3 mb-14">
        <div class="h-px w-12 bg-orange-500 opacity-60" />
        <span
          class="text-orange-500 text-xs font-mono font-medium uppercase tracking-widest"
        >
          Client Stories
        </span>
        <div class="h-px w-12 bg-orange-500 opacity-60" />
      </div>

      <!-- Carousel wrapper -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Slide container -->
        <div class="overflow-hidden min-h-[320px] lg:min-h-[280px]">
          <Transition :name="transitionName" mode="out-in">
            <div :key="current" class="text-center px-4 lg:px-12">
              <!-- Opening quote mark -->
              <div
                class="text-orange-500 text-7xl font-heading leading-none mb-2 select-none opacity-60"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <!-- Testimonial quote -->
              <blockquote
                class="font-heading text-xl lg:text-2xl xl:text-3xl text-white leading-snug font-medium italic mb-10"
              >
                {{ slide.quote }}
              </blockquote>

              <!-- Author info -->
              <div class="flex items-center justify-center gap-4">
                <!-- Human avatar icon -->
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  :style="{
                    backgroundColor: slide.accentColor + '22',
                    border: '1.5px solid ' + slide.accentColor + '55',
                  }"
                  aria-hidden="true"
                >
                  <Icon
                    name="lucide:user-round"
                    class="w-6 h-6"
                    :style="{ color: slide.accentColor }"
                  />
                </div>
                <div class="text-left">
                  <p class="text-sm font-bold text-white">
                    {{ slide.name }}
                  </p>
                  <p class="text-xs text-gray-400">
                    {{ slide.role }}
                  </p>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Navigation dots -->
        <div
          class="flex items-center justify-center gap-3 mt-12"
          role="tablist"
          aria-label="Testimonial navigation"
        >
          <button
            v-for="(t, i) in testimonials"
            :key="i"
            :aria-label="`View testimonial from ${t.name}`"
            :aria-selected="i === current"
            role="tab"
            class="relative h-1.5 rounded-full transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
            :class="
              i === current
                ? 'w-10 bg-orange-500'
                : 'w-4 bg-gray-600 hover:bg-gray-500'
            "
            @click="goTo(i)"
          />
        </div>

        <!-- Prev / Next arrow buttons -->
        <div class="absolute inset-y-0 -left-4 lg:-left-16 flex items-center">
          <button
            class="group w-10 h-10 rounded-full border border-gray-700 bg-ink-700 flex items-center justify-center text-gray-400 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label="Previous testimonial"
            @click="prev"
          >
            <Icon
              name="lucide:chevron-left"
              class="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="absolute inset-y-0 -right-4 lg:-right-16 flex items-center">
          <button
            class="group w-10 h-10 rounded-full border border-gray-700 bg-ink-700 flex items-center justify-center text-gray-400 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label="Next testimonial"
            @click="next"
          >
            <Icon
              name="lucide:chevron-right"
              class="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <!-- Auto-play progress bar -->
      <div class="max-w-4xl mx-auto mt-10">
        <div class="h-px bg-gray-700 relative overflow-hidden rounded-full">
          <div
            class="absolute left-0 top-0 h-full bg-orange-500 rounded-full"
            :class="isAutoPlaying ? 'transition-[width]' : ''"
            :style="{
              width: progressWidth + '%',
              transitionDuration: isAutoPlaying ? AUTOPLAY_MS + 'ms' : '0ms',
              transitionTimingFunction: 'linear',
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const AUTOPLAY_MS = 10000;

const testimonials = [
  {
    service: "Asset Ownership Advisory",
    icon: "lucide:landmark",
    accentColor: "#F37321",
    quote: `We had been trying to structure our land acquisition for over a year. Willcoll cut through the complexity, advised on the right ownership vehicle, and ensured every step was legally watertight. We closed with absolute confidence.`,
    name: "Grace Wambui Njoroge",
    role: "Managing Director",
    initials: "GW",
  },
  {
    service: "Project Risk Mitigation",
    icon: "lucide:shield-check",
    accentColor: "#1E8E5A",
    quote: `Our NGO was rolling out a multi-county water project when delays started piling up. Willcoll's risk assessment identified three critical failure points we had completely missed. That intervention saved us over six months of rework.`,
    name: "Daniel Kipkoech Langat",
    role: "Programme Director",
    initials: "DK",
  },
  {
    service: "Event Production",
    icon: "lucide:sparkles",
    accentColor: "#B8862E",
    quote: `Our annual conference at private location was the most seamless we have ever run, 850 delegates, three stages, zero incidents. Willcoll coordinated every supplier and kept us calm throughout.`,
    name: "Amina Halima Osman",
    role: "Company Secretary",
    initials: "AH",
  },
  {
    service: "Advertising Airtime & Space",
    icon: "lucide:megaphone",
    accentColor: "#2B6CB0",
    quote: `Willcoll helped us navigate media buying in a way our in-house team simply could not. They secured prime radio slots on three major stations at a fraction of what we had budgeted. Our brand awareness numbers jumped by 40% in one quarter.`,
    name: "Michael Oduor",
    role: "Director",
    initials: "MO",
  },
];

const current = ref(0);
const direction = ref<"next" | "prev">("next");
const isAutoPlaying = ref(false);
const progressWidth = ref(0);

const transitionName = computed(() =>
  direction.value === "next" ? "slide-next" : "slide-prev",
);

// Guaranteed non-undefined current slide — `current` is always a valid index
const slide = computed(
  () => testimonials[current.value] as (typeof testimonials)[number],
);

function goTo(index: number) {
  direction.value = index > current.value ? "next" : "prev";
  current.value = index;
  resetProgress();
}

function next() {
  direction.value = "next";
  current.value = (current.value + 1) % testimonials.length;
  resetProgress();
}

function prev() {
  direction.value = "prev";
  current.value =
    (current.value - 1 + testimonials.length) % testimonials.length;
  resetProgress();
}

let autoTimer: ReturnType<typeof setTimeout> | null = null;

function resetProgress() {
  isAutoPlaying.value = false;
  progressWidth.value = 0;
  if (autoTimer) clearTimeout(autoTimer);
  // Allow DOM to reset, then kick off again
  setTimeout(() => {
    isAutoPlaying.value = true;
    progressWidth.value = 100;
    scheduleAutoPlay();
  }, 50);
}

function scheduleAutoPlay() {
  if (autoTimer) clearTimeout(autoTimer);
  autoTimer = setTimeout(() => {
    next();
  }, AUTOPLAY_MS);
}

onMounted(() => {
  resetProgress();
});

onUnmounted(() => {
  if (autoTimer) clearTimeout(autoTimer);
});
</script>

<style scoped>
/* Slide next: enter from right, leave to left */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition:
    opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(48px);
}
.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-48px);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-48px);
}
.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(48px);
}

/* Keep leaving slide in normal flow until gone */
.slide-next-leave-active,
.slide-prev-leave-active {
  position: absolute;
  width: 100%;
}
</style>
