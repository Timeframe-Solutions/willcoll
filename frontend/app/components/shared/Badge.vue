<template>
  <span
    class="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-[var(--radius-sm)]"
  >
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup lang="ts">
interface Props {
  label?: string
}
defineProps<Props>()
</script>
