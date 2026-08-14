<template>
  <div class="mb-12 lg:mb-16" :class="centered ? 'text-center' : ''">
    <!-- Eyebrow -->
    <p
      v-if="eyebrow"
      class="inline-block text-xs font-bold tracking-[0.15em] uppercase text-orange-500 mb-4"
    >
      {{ eyebrow }}
    </p>
    <!-- Heading -->
    <h2
      v-if="heading"
      class="font-heading font-bold leading-tight"
      :class="[
        centered ? 'mx-auto' : '',
        dark ? 'text-white' : 'text-ink-900',
        sizeClasses
      ]"
    >
      <slot name="heading">{{ heading }}</slot>
    </h2>
    <!-- Subhead -->
    <p
      v-if="subhead"
      class="mt-4 leading-relaxed"
      :class="[
        centered ? 'mx-auto max-w-2xl' : 'max-w-xl',
        dark ? 'text-gray-300' : 'text-gray-500',
        subheadSize
      ]"
    >
      {{ subhead }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  eyebrow?: string
  heading?: string
  subhead?: string
  centered?: boolean
  size?: 'md' | 'lg' | 'xl'
  dark?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  centered: false,
  size: 'lg',
  dark: false
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'xl': return 'text-4xl lg:text-5xl'
    case 'lg': return 'text-3xl lg:text-4xl'
    case 'md': return 'text-2xl lg:text-3xl'
  }
})

const subheadSize = computed(() => {
  return props.size === 'xl' ? 'text-lg' : 'text-base'
})
</script>
