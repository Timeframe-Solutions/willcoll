<script setup lang="ts">
useScrollReveal();
useHead({
  title: "Corporate Media & Event Solutions | Willcoll Agencies",
  meta: [
    {
      name: "description",
      content:
        "One partner for your organization's advertising, recruitment, public notices, event production, and corporate subscriptions.",
    },
  ],
});

const teams = [
  {
    icon: "lucide:megaphone",
    team: "Marketing Teams",
    body: "Advertising campaigns, media buying, and experiential events, planned and coordinated through one partner.",
  },
  {
    icon: "lucide:user-search",
    team: "HR Teams",
    body: "Recruitment advertising, corporate subscriptions, and internal team events.",
  },
  {
    icon: "lucide:shopping-cart",
    team: "Procurement Teams",
    body: "Centralized media and event vendor purchasing and supplier coordination.",
  },
  {
    icon: "lucide:newspaper",
    team: "Corporate Communications",
    body: "Public notices, announcements, corporate publications, and official event setups.",
  },
  {
    icon: "lucide:building-2",
    team: "Administration",
    body: "Office newspaper subscriptions, distribution, and corporate meeting setups.",
  },
];

const benefits = [
  "One point of contact for multiple media and event needs",
  "Consolidated quotes and coordinated execution",
  "Consistent service across departments",
  "A partner that scales with your organization",
];
</script>

<template>
  <div>
    <SharedPageHero
      eyebrow="Corporate solutions"
      title="One Media &amp; Event Partner for Your Organization"
      subtitle="Consolidate your advertising, recruitment, publication, event production, and subscription requirements under a single commercial partner."
      bg-image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
    />

    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <SharedSectionHeading
          eyebrow="Across your organization"
          heading="Built for every department buying media &amp; events"
          :centered="true"
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          <div
            v-for="t in teams"
            :key="t.team"
            class="bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:border-orange-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <SharedIconTile :icon="t.icon" size="md" class="mb-5" />
            <h2 class="font-heading text-xl text-ink-900 mb-2">{{ t.team }}</h2>
            <p class="text-sm text-gray-500 leading-relaxed">{{ t.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 lg:py-24 bg-gray-50">
      <div
        class="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start"
      >
        <div class="reveal-left">
          <SharedSectionHeading
            eyebrow="Why consolidate"
            heading="Simpler procurement. Clearer accountability."
          />
          <ul class="space-y-4">
            <li v-for="b in benefits" :key="b" class="flex gap-3">
              <Icon
                name="lucide:check-circle-2"
                class="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
              />
              <span class="text-gray-600 leading-relaxed">{{ b }}</span>
            </li>
          </ul>
        </div>
        <div class="reveal-right">
          <MediaQuoteForm
            submit-label="Talk to a Corporate Advisor"
            title="Talk to a Corporate Advisor"
            description="Tell us about your organization's media and event requirements and a corporate advisor will respond."
          />
        </div>
      </div>
    </section>
  </div>
</template>
