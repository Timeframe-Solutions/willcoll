<script setup lang="ts">
const service = useServices().getServiceById("advertising-airtime-space");

if (!service) {
  throw createError({
    statusCode: 404,
    statusMessage: "Service not found",
  });
}

useHead({
  title: "Advertising Airtime & Space | Willcoll Agencies",
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
