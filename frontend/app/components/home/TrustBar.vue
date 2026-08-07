<template>
  <!-- Trust bar: stats in a clean horizontal strip, white card overlapping hero base -->
  <section
    class="relative z-10 -mt-1"
    aria-label="Trust indicators"
    ref="sectionRef"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div
        class="bg-white border border-gray-100 rounded-xl grid grid-cols-1 sm:grid-cols-3"
        style="box-shadow: 0 12px 32px rgba(17, 17, 17, 0.1)"
      >
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="flex flex-col items-center justify-center text-center px-6 py-8 lg:py-10 transition-all duration-700 ease-out"
          :class="[
            i < stats.length - 1
              ? 'border-b sm:border-b-0 sm:border-r border-gray-100'
              : '',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ]"
          :style="{ transitionDelay: isVisible ? `${i * 120}ms` : '0ms' }"
        >
          <span
            class="font-heading font-bold text-3xl lg:text-4xl text-ink-900 leading-none tabular-nums"
          >
            {{ stat.isNumeric ? displayValues[i] : stat.value }}
          </span>
          <span class="text-gray-500 text-sm mt-2 leading-snug">{{
            stat.label
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Stat {
  value: string;
  label: string;
  isNumeric?: boolean; // count-up target, e.g. "10+" -> numeric 10 with a "+" suffix
  numericTarget?: number;
  suffix?: string;
}

const stats: Stat[] = [
  {
    value: "10+",
    label: "Years of Advisory Experience",
    isNumeric: true,
    numericTarget: 10,
    suffix: "+",
  },
  {
    value: "4",
    label: "Core Advisory Practices",
    isNumeric: true,
    numericTarget: 4,
    suffix: "",
  },
  { value: "Nairobi", label: "Based in Kenya, Serving All Sectors" },
];

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const displayValues = ref(
  stats.map((s) => (s.isNumeric ? "0" + (s.suffix || "") : s.value)),
);

let observer: IntersectionObserver | null = null;

function animateCount(index: number, target: number, suffix: string) {
  const duration = 900;
  const start = performance.now();

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    displayValues.value[index] = `${current}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true;
          stats.forEach((stat, i) => {
            if (stat.isNumeric && stat.numericTarget !== undefined) {
              animateCount(i, stat.numericTarget, stat.suffix || "");
            }
          });
          observer?.disconnect();
        }
      });
    },
    { threshold: 0.3 },
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>
