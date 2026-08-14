<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Testimonial {
  quote: string
  name: string
  role: string
}

// Sample testimonials for the slider. Replace with verified, authorized quotes
// before launch. Keep them short and free of company names, figures or percentages.
const testimonials: Testimonial[] = [
  {
    quote: 'One conversation replaced weeks of chasing separate suppliers. Media buying finally feels simple.',
    name: 'Jane Wanjiru',
    role: 'Marketing Manager',
  },
  {
    quote: 'Our recruitment campaigns go out faster and reach the right candidates. The coordination is handled for us.',
    name: 'David Otieno',
    role: 'Head of Talent',
  },
  {
    quote: 'I now have a single clear point of contact for every media request. Procurement is far more predictable.',
    name: 'Amina Yusuf',
    role: 'Procurement Lead',
  },
  {
    quote: 'Notices and announcements are placed correctly and on time, every time. It removes a lot of internal pressure.',
    name: 'Samuel Kiptoo',
    role: 'Corporate Communications Officer',
  },
  {
    quote: 'They understand the Kenyan media landscape inside out and recommend what works, not what suits a supplier.',
    name: 'Grace Muthoni',
    role: 'Administration Manager',
  },
]

const active = ref(0)

const goTo = (index: number) => {
  active.value = (index + testimonials.length) % testimonials.length
}
const next = () => goTo(active.value + 1)
const prev = () => goTo(active.value - 1)

let timer: ReturnType<typeof setInterval> | null = null
const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const start = () => {
  if (prefersReducedMotion) return
  stop()
  timer = setInterval(next, 4000)
}
const stop = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(start)
onBeforeUnmount(stop)
</script>

<template>
  <section class="py-16 lg:py-24 bg-gray-50" aria-label="Testimonials">
    <div class="max-w-4xl mx-auto px-6 lg:px-10">
      <SharedSectionHeading
        eyebrow="Testimonials"
        heading="What our clients say"
        subhead="A few words from the people we work with."
        :centered="true"
      />

      <div
        class="relative mt-12"
        role="group"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        @mouseenter="stop"
        @mouseleave="start"
      >
        <div class="bg-white border border-gray-100 rounded-3xl px-6 py-10 sm:px-12 lg:px-16 lg:py-14 text-center shadow-sm">
          <Icon name="lucide:quote" class="w-9 h-9 text-orange-500 mx-auto mb-6" aria-hidden="true" />
          <div class="min-h-[180px] flex items-center justify-center">
            <Transition name="fade-slide" mode="out-in">
              <figure :key="active" class="max-w-2xl mx-auto">
                <blockquote class="font-heading text-xl sm:text-2xl text-ink-900 leading-snug">
                  &ldquo;{{ testimonials[active].quote }}&rdquo;
                </blockquote>
                <figcaption class="mt-7">
                  <p class="text-ink-900 font-semibold">{{ testimonials[active].name }}</p>
                  <p class="text-sm text-gray-500 mt-1">{{ testimonials[active].role }}</p>
                </figcaption>
              </figure>
            </Transition>
          </div>
        </div>

        <div class="flex items-center justify-center gap-5 mt-8">
          <button
            type="button"
            aria-label="Previous testimonial"
            class="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-500 hover:text-orange-600 hover:border-orange-300 transition-colors flex items-center justify-center"
            @click="prev"
          >
            <Icon name="lucide:chevron-left" class="w-5 h-5" />
          </button>

          <div class="flex items-center gap-2.5">
            <button
              v-for="(item, i) in testimonials"
              :key="i"
              type="button"
              :aria-label="`Show testimonial from ${item.name}`"
              :aria-current="i === active ? 'true' : undefined"
              class="h-2.5 rounded-full transition-all duration-300"
              :class="i === active ? 'w-7 bg-orange-500' : 'w-2.5 bg-gray-300 hover:bg-gray-400'"
              @click="goTo(i)"
            />
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            class="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-500 hover:text-orange-600 hover:border-orange-300 transition-colors flex items-center justify-center"
            @click="next"
          >
            <Icon name="lucide:chevron-right" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-14px);
}
</style>
