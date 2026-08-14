<script setup lang="ts">
const route = useRoute()
const { getServiceBySlug } = useServices()
const service = getServiceBySlug(String(route.params.slug))

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found' })
}

useHead({
  title: `${service.name} | Willcoll Agencies`,
  meta: [
    { name: 'description', content: service.outcome },
    { property: 'og:title', content: `${service.name} | Willcoll Agencies` },
    { property: 'og:description', content: service.outcome },
    { property: 'og:type', content: 'website' },
  ],
})
</script>

<template>
  <MediaServicePage :service="service" />
</template>
