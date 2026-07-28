<template>
  <div class="bg-white border-b border-gray-100 py-16 lg:py-24">
    <div
      class="max-w-7xl mx-auto px-6 lg:px-10"
      :class="centered ? 'text-center flex flex-col items-center' : ''"
    >
      <SharedBadge v-if="eyebrow" :label="eyebrow" class="mb-6" />

      <h1
        class="font-heading font-bold text-ink-900 text-4xl lg:text-5xl leading-tight mb-6"
        :class="centered ? 'text-center' : ''"
      >
        {{ title }}
      </h1>

      <p
        v-if="subtitle"
        class="text-gray-500 text-lg leading-relaxed max-w-2xl"
        :class="centered ? 'text-center mx-auto' : ''"
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
}
withDefaults(defineProps<Props>(), {
  centered: false
})
</script>
