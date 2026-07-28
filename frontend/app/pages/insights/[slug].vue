<script setup lang="ts">
const route = useRoute()
const { getArticle, articles } = useInsights()
const article = computed(() => getArticle(String(route.params.slug)))
if (!article.value) throw createError({ statusCode: 404, statusMessage: 'Insight not found' })
useHead(() => ({ title: `${article.value?.title} | Willcoll Insights`, meta: [{ name: 'description', content: article.value?.description || '' }] }))
</script>
<template>
  <article v-if="article" class="bg-white">
    <header class="bg-ink-900 text-white pt-32 pb-16 lg:pt-40 lg:pb-24"><div class="max-w-3xl mx-auto px-6"><NuxtLink to="/insights" class="text-gray-300 hover:text-white text-sm inline-flex items-center gap-2 mb-9"><Icon name="lucide:arrow-left" class="w-4 h-4" /> All insights</NuxtLink><p class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-5">{{ article.category }}</p><h1 class="text-4xl lg:text-5xl text-white leading-tight mb-6">{{ article.title }}</h1><p class="text-lg text-gray-300 leading-relaxed">{{ article.description }}</p><div class="mt-8 text-sm text-gray-400">{{ article.date }} <span class="mx-2">•</span> {{ article.readTime }}</div></div></header>
    <div class="max-w-3xl mx-auto px-6 py-16 lg:py-20 prose-willcoll"><section v-for="section in article.body" :key="section.heading"><h2>{{ section.heading }}</h2><p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p></section><div class="mt-12 p-7 rounded-2xl bg-orange-100 not-prose"><p class="font-heading text-xl text-ink-900 mb-2">Need advice for your specific situation?</p><p class="text-gray-700 mb-5">Speak directly with the Willcoll advisory team.</p><SharedButton to="/contact">Book a Consultation</SharedButton></div></div>
    <section class="border-t border-gray-100 py-14 bg-gray-50"><div class="max-w-3xl mx-auto px-6"><p class="text-xs text-gray-500 uppercase font-bold tracking-widest mb-5">Continue reading</p><div class="grid sm:grid-cols-2 gap-5"><InsightsInsightCard v-for="other in articles.filter(item => item.slug !== article?.slug).slice(0, 2)" :key="other.slug" :article="other" /></div></div></section>
  </article>
</template>
