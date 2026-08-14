<template>
  <section class="py-16 lg:py-28 bg-white" aria-label="Services overview">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <SharedSectionHeading
        eyebrow="Our services"
        heading="Three layers. One partner."
        subhead="Strategy, execution and management, connected by independent media buying and advisory expertise."
        :centered="true"
      />

      <div class="space-y-12 mt-4">
        <div v-for="layer in layers" :key="layer.label">
          <div class="flex items-center gap-3 mb-5">
            <span class="text-xs font-bold uppercase tracking-[0.15em] text-orange-500 whitespace-nowrap">{{ layer.label }}</span>
            <div class="h-px flex-1 bg-gray-200" aria-hidden="true"></div>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <NuxtLink
              v-for="service in layerServices(layer.serviceIds)"
              :key="service.id"
              :to="service.to"
              class="group relative flex flex-col bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl hover:border-orange-200 transition-all duration-300 overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-[0.06]"
                :style="{ background: service.accentColor }"
                aria-hidden="true"
              />
              <div class="flex items-center gap-4 mb-5">
                <SharedIconTile :icon="service.icon" size="lg" />
              </div>
              <h3 class="font-heading text-xl text-ink-900 leading-snug mb-2">{{ service.name }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{{ service.coreMessage }}</p>
              <div class="flex items-center gap-2 text-orange-600 text-sm font-semibold group-hover:gap-3 transition-all">
                <span>{{ service.ctaText }}</span>
                <Icon name="lucide:arrow-right" class="w-4 h-4" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { getServiceById } = useServices()

const layers: { label: string; serviceIds: string[] }[] = [
  { label: 'Media Strategy', serviceIds: ['media-buying-advisory'] },
  { label: 'Media Execution', serviceIds: ['advertise', 'recruit', 'publish'] },
  { label: 'Media Management', serviceIds: ['subscribe'] },
]

const layerServices = (ids: string[]) =>
  ids.map((id) => getServiceById(id)).filter(Boolean)
</script>
