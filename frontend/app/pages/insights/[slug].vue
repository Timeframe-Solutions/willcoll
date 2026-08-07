<script setup lang="ts">
const route = useRoute()
const { getArticle, articles } = useInsights()
useScrollReveal()
const article = computed(() => getArticle(String(route.params.slug)))
if (!article.value) throw createError({ statusCode: 404, statusMessage: 'Insight not found' })
useHead(() => ({ title: `${article.value?.title} | Willcoll Insights`, meta: [{ name: 'description', content: article.value?.description || '' }] }))
</script>

<template>
  <article v-if="article" class="bg-white">
    <!-- Article hero header with background image -->
    <header class="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <!-- Background image with overlay -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80')"
        aria-hidden="true"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-ink-900/90 via-ink-900/80 to-ink-900/70" aria-hidden="true" />

      <div class="max-w-3xl mx-auto px-6 relative z-10">
        <NuxtLink
          to="/insights"
          class="text-gray-300 hover:text-white text-sm inline-flex items-center gap-2 mb-9 transition-colors"
        >
          <Icon name="lucide:arrow-left" class="w-4 h-4" /> All insights
        </NuxtLink>

        <p class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-5">{{ article.category }}</p>
        <h1 class="text-4xl lg:text-5xl text-white leading-tight mb-6">{{ article.title }}</h1>
        <p class="text-lg text-gray-300 leading-relaxed max-w-2xl">{{ article.description }}</p>
        <div class="mt-8 text-sm text-gray-400">
          {{ article.date }} <span class="mx-2">•</span> {{ article.readTime }}
        </div>
      </div>
    </header>

    <!-- Article body -->
    <div class="max-w-3xl mx-auto px-6 py-16 lg:py-20 prose-willcoll reveal">
      <section v-for="section in article.body" :key="section.heading">
        <h2>{{ section.heading }}</h2>
        <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
      </section>

      <div class="mt-12 p-7 rounded-2xl bg-orange-50 border border-orange-100 not-prose">
        <p class="font-heading text-xl text-ink-900 mb-2">Need advice for your specific situation?</p>
        <p class="text-gray-700 mb-5">Speak directly with the Willcoll advisory team.</p>
        <SharedButton to="/contact">Book a Consultation</SharedButton>
      </div>
    </div>

    <!-- Continue reading -->
    <section class="border-t border-gray-100 py-14 bg-gray-50">
      <div class="max-w-3xl mx-auto px-6">
        <p class="text-xs text-gray-500 uppercase font-bold tracking-widest mb-5">Continue reading</p>
        <div class="grid sm:grid-cols-2 gap-5 stagger-children">
          <InsightsInsightCard
            v-for="other in articles.filter(item => item.slug !== article?.slug).slice(0, 2)"
            :key="other.slug"
            :article="other"
          />
        </div>
      </div>
    </section>
  </article>
</template>
