<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center font-sans font-semibold text-center transition-all duration-150 ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-[0.625rem]"
    :class="[variantClasses, sizeClasses]"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    class="inline-flex items-center justify-center font-sans font-semibold text-center transition-all duration-150 ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none rounded-[0.625rem]"
    :class="[variantClasses, sizeClasses]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline-white'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  to: undefined,
  type: 'button',
  disabled: false
})

const variantClasses = computed(() => ({
  primary: 'bg-orange-500 text-white shadow-sm hover:bg-orange-600 hover:-translate-y-px hover:shadow-md active:translate-y-0',
  secondary: 'border border-ink-900 text-ink-900 bg-transparent hover:bg-orange-100 hover:border-orange-500 hover:-translate-y-px active:translate-y-0',
  'outline-white': 'border border-white text-white bg-transparent hover:bg-white hover:text-ink-900 hover:-translate-y-px active:translate-y-0',
  ghost: 'text-orange-600 bg-transparent hover:underline hover:text-orange-700 !p-0 !rounded-none focus:!ring-0 focus:!ring-offset-0'
}[props.variant]))

const sizeClasses = computed(() => {
  if (props.variant === 'ghost') return 'text-sm'
  return { sm: 'text-sm px-4 py-2', md: 'text-base px-7 py-3.5', lg: 'text-base px-8 py-4' }[props.size]
})
</script>
