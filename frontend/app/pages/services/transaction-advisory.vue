<script setup lang="ts">
const service = useServices().getServiceById("asset-ownership-advisory");

if (!service) {
  throw createError({
    statusCode: 404,
    statusMessage: "Service not found",
  });
}

useHead({
  title: "Asset Ownership Advisory | Willcoll Agencies",
});
</script>

<template>
  <div>
    <ServicesServiceDetailHero :service="service" />
    <ServicesSubServiceList :sub-services="service.subServices" />
    <ServicesServiceCta
      :cta-text="service.ctaText"
      :service-name="service.name"
    />
  </div>
</template>
