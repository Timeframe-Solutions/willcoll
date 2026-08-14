<script setup lang="ts">
const teams = [
  "Marketing Teams",
  "HR Teams",
  "Procurement Teams",
  "Corporate Communications",
  "Administration",
];

useHead({
  title: "Willcoll Agencies | Commercial Media Partner for Kenyan Businesses",
  meta: [
    {
      name: "description",
      content:
        "Willcoll helps Kenyan businesses plan, place and manage advertising, recruitment campaigns, public notices and corporate subscriptions through one commercial media partner.",
    },
    {
      property: "og:title",
      content:
        "Willcoll Agencies | Commercial Media Partner for Kenyan Businesses",
    },
    {
      property: "og:description",
      content:
        "Your commercial gateway to Kenya's leading media platforms — advertising, recruitment, notices and subscriptions through one partner.",
    },
    { property: "og:type", content: "website" },
  ],
});
</script>

<template>
  <div>
    <HomeHero />
    <HomeTrustBar />
    <HomeServiceOverview />
    <MediaHowItWorks />
    <MediaCalculator />

    <section
      class="py-16 lg:py-24 text-white relative overflow-hidden"
    >
      <!-- Parallax image layer -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2400&q=80'); background-attachment: fixed;"
        aria-hidden="true"
      />
      <!-- Dark overlay -->
      <div
        class="absolute inset-0"
        style="background: linear-gradient(135deg, rgba(10,10,10,0.93) 0%, rgba(17,17,17,0.82) 60%, rgba(10,10,10,0.90) 100%)"
        aria-hidden="true"
      />
      <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p
              class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4"
            >
              Corporate solutions
            </p>
            <h2
              class="font-heading text-3xl lg:text-4xl text-white leading-tight mb-5"
            >
              One media partner for your organization.
            </h2>
            <p class="text-gray-300 leading-relaxed mb-8">
              Marketing, HR, procurement, corporate communications and
              administration consolidate your media requirements under one
              accountable commercial partner.
            </p>
            <SharedButton to="/corporate-solutions" size="lg"
              >Talk to a Corporate Media Advisor</SharedButton
            >
          </div>
          <div class="grid sm:grid-cols-2 gap-4">
            <div
              v-for="t in teams"
              :key="t"
              class="border border-white/10 rounded-xl px-5 py-4 text-sm text-gray-300 flex items-center gap-3"
            >
              <Icon
                name="lucide:check-circle-2"
                class="w-4 h-4 text-orange-400 shrink-0"
              />
              {{ t }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <MediaPlatformsCarousel />

    <HomeFinalCta />
  </div>
</template>
