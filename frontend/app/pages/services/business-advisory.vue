<script setup lang="ts">const service = useServices().getServiceById('business-advisory')!; useHead({ title: 'Business Advisory | Willcoll Agencies' })</script>
<template><div><ServicesServiceDetailHero :service="service" /><ServicesSubServiceList :sub-services="service.subServices" /><ServicesServiceCta :cta-text="service.ctaText" :service-name="service.name" /></div></template>
