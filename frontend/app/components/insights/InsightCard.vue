<template>
  <NuxtLink :to="`/insights/${article.slug}`" class="group block h-full">
    <div class="h-full bg-white border border-gray-100 rounded-[1rem] overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 p-7 flex flex-col">
      <div>
        <span class="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-[var(--radius-sm)]">
          {{ article.category }}
        </span>
        <h3 class="font-heading text-xl text-ink-900 mt-3 group-hover:text-orange-600 transition-colors">
          {{ article.title }}
        </h3>
        <p class="text-sm text-gray-500 mt-2 line-clamp-2">
          {{ article.description }}
        </p>
      </div>
      <div class="mt-auto pt-5 flex items-center justify-between">
        <span class="text-xs text-gray-400 font-medium">{{ article.date }}</span>
        <span class="text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors">
          Read article &rarr;
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface InsightArticle {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
}

defineProps<{
  article: InsightArticle;
}>();
</script>
