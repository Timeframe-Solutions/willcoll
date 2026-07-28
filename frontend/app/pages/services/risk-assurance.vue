<script setup lang="ts">const service = useServices().getServiceById('risk-assurance')!; useHead({ title: 'Risk & Assurance Advisory | Willcoll Agencies' })</script>
<template><div><ServicesServiceDetailHero :service="service" /><ServicesSubServiceList :sub-services="service.subServices" /><ServicesServiceCta :cta-text="service.ctaText" :service-name="service.name" /></div></template>
