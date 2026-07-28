<template>
  <div class="flex flex-col text-center sm:text-left">
    <div class="font-heading text-4xl font-bold text-ink-900 mb-2">
      {{ value }}
    </div>
    <div class="text-sm font-medium text-gray-500 tracking-wide uppercase">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  value: string
  label: string
}
defineProps<Props>()
</script>
