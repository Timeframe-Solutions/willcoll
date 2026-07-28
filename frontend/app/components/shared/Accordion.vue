<template>
  <div class="w-full">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-b border-gray-100 last:border-b-0"
    >
      <button
        @click="toggle(index)"
        class="w-full flex items-center justify-between py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-[var(--radius-sm)]"
      >
        <span
          class="font-heading text-xl font-semibold transition-colors duration-200"
          :class="openIndex === index ? 'text-orange-500' : 'text-ink-900 hover:text-orange-500'"
        >
          {{ item.question }}
        </span>
        <span
          class="ml-6 flex-shrink-0 transition-transform duration-300 ease-in-out text-gray-400"
          :class="openIndex === index ? 'rotate-180 text-orange-500' : ''"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <div 
        v-show="openIndex === index" 
        class="pb-6 transition-all duration-300"
      >
        <p class="text-gray-700 text-base leading-relaxed">
          {{ item.answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface AccordionItem {
  question: string;
  answer: string;
}

interface Props {
  items: AccordionItem[];
}

defineProps<Props>()

const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
