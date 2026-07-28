<template>
  <!-- Icon tile: 56×56 orange-100 rounded-square container with line icon -->
  <div
    class="flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 flex-shrink-0"
    :class="sizeClass"
    aria-hidden="true"
  >
    <Icon :name="icon" :class="iconSizeClass" :style="{ strokeWidth: '1.5' }" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  icon: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'w-10 h-10'
    case 'lg': return 'w-16 h-16'
    default: return 'w-14 h-14'
  }
})

const iconSizeClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'w-5 h-5'
    case 'lg': return 'w-8 h-8'
    default: return 'w-7 h-7'
  }
})
</script>
