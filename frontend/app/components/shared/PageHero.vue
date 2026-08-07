<template>
  <div
    class="relative overflow-hidden"
    :class="bgImage ? 'py-28 lg:py-40' : 'bg-white border-b border-gray-100 py-16 lg:py-24'"
  >
    <!-- Background image layer -->
    <template v-if="bgImage">
      <div
        class="absolute inset-0 bg-cover bg-center scale-[1.04] hero-img-zoom"
        :style="`background-image: url('${bgImage}')`"
        aria-hidden="true"
      />
      <!-- Dark gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-ink-900/85 via-ink-900/70 to-ink-900/60" aria-hidden="true" />
      <!-- Subtle orange accent blob -->
      <div
        class="absolute top-[-80px] right-[-80px] w-[28rem] h-[28rem] bg-orange-500/15 blur-3xl pointer-events-none"
        style="border-radius: var(--radius-blob);"
        aria-hidden="true"
      />
    </template>

    <!-- Content -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 hero-content-fadein"
      :class="centered ? 'text-center flex flex-col items-center' : ''"
    >
      <!-- Eyebrow pill — adapts to background -->
      <div
        v-if="eyebrow"
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
        :class="bgImage
          ? 'bg-orange-500/15 border border-orange-500/30 text-orange-300'
          : 'bg-orange-100 border border-orange-200 text-orange-600'"
      >
        <span v-if="bgImage" class="w-1.5 h-1.5 rounded-full bg-orange-400" />
        {{ eyebrow }}
      </div>

      <h1
        class="font-heading font-bold text-4xl lg:text-5xl leading-tight mb-6"
        :class="[centered ? 'text-center' : '', bgImage ? 'text-white' : 'text-ink-900']"
      >
        {{ title }}
      </h1>

      <p
        v-if="subtitle"
        class="text-lg leading-relaxed max-w-2xl"
        :class="[centered ? 'text-center mx-auto' : '', bgImage ? 'text-gray-200' : 'text-gray-500']"
      >
        {{ subtitle }}
      </p>

      <div v-if="$slots.default" class="mt-8 flex flex-wrap gap-4" :class="centered ? 'justify-center' : ''">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  bgImage?: string
}
withDefaults(defineProps<Props>(), {
  centered: false
})
</script>

<style scoped>
.hero-img-zoom {
  animation: heroZoom 14s ease-out forwards;
}
@keyframes heroZoom {
  from { transform: scale(1.04); }
  to   { transform: scale(1.0); }
}

.hero-content-fadein {
  animation: fadeSlideUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
