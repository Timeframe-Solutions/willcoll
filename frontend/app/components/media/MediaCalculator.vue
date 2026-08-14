<script setup lang="ts">
const tab = ref<"advertising" | "subscription">("advertising");

const adOptions = [
  { id: "brand", label: "Brand Advertising", icon: "lucide:megaphone" },
  {
    id: "recruitment",
    label: "Recruitment Advertising",
    icon: "lucide:user-search",
  },
  { id: "notices", label: "Public Notices", icon: "lucide:newspaper" },
  {
    id: "corporate",
    label: "Corporate Announcements",
    icon: "lucide:landmark",
  },
  { id: "digital", label: "Digital Advertising", icon: "lucide:monitor" },
];

const selectedAds = ref<string[]>([]);
const digitalSeats = ref(0);
const printPapers = ref(0);
const frequency = ref("Daily");
const orgType = ref("Corporate");

const frequencyOptions = ["Daily", "Weekdays", "Weekend", "Once-off"];
const orgTypeOptions = [
  "Corporate",
  "SME",
  "NGO",
  "Government / Institution",
  "Other",
];

const toggleAd = (id: string) => {
  const i = selectedAds.value.indexOf(id);
  if (i === -1) selectedAds.value.push(id);
  else selectedAds.value.splice(i, 1);
};

const summary = computed(() => {
  if (tab.value === "advertising") {
    const selected = selectedAds.value
      .map((id) => adOptions.find((o) => o.id === id)?.label)
      .filter(Boolean);
    const base = selected.length
      ? selected.join(", ")
      : "No advertising options selected yet";
    return `Advertising requirement: ${base}.`;
  }
  const parts: string[] = [];
  if (digitalSeats.value > 0)
    parts.push(
      `${digitalSeats.value} digital user seat${digitalSeats.value === 1 ? "" : "s"}`,
    );
  if (printPapers.value > 0)
    parts.push(
      `${printPapers.value} print newspaper${printPapers.value === 1 ? "" : "s"}`,
    );
  parts.push(`frequency: ${frequency.value}`);
  parts.push(`organization type: ${orgType.value}`);
  return `Corporate subscription: ${parts.join("; ")}.`;
});

const form = reactive({
  fullName: "",
  company: "",
  email: "",
  phone: "",
  website: "", // honeypot
});

const isSubmitting = ref(false);
const status = ref<{ type: "success" | "error"; message: string } | null>(null);

const submit = async () => {
  status.value = null;
  isSubmitting.value = true;
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: {
        fullName: form.fullName.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service:
          tab.value === "advertising"
            ? "Media Advertising & Placement"
            : "Corporate Digital & Print Subscriptions",
        budget: "",
        message: `${summary.value}. Enquiry from the media calculator.`,
        website: form.website,
      },
    });
    status.value = {
      type: "success",
      message:
        "Thank you. Our team will prepare your package and be in touch shortly.",
    };
    Object.assign(form, {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      website: "",
    });
  } catch (err: any) {
    status.value = {
      type: "error",
      message:
        err?.data?.statusMessage ||
        err?.statusMessage ||
        err?.message ||
        "Unable to send your request. Please try again.",
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="py-16 lg:py-28 bg-gray-50" aria-label="Media calculator">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <SharedSectionHeading
        eyebrow="Media calculator"
        heading="Tell us what you need we'll build the package"
        subhead="Indicate your requirement and our team will prepare an indicative package and quote. No obligation."
        :centered="true"
      />

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <!-- Left: selections -->
        <div
          class="lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-7 shadow-[var(--shadow-sm)]"
        >
          <!-- Tabs -->
          <div class="flex gap-2 mb-7 p-1 bg-gray-50 rounded-xl w-fit">
            <button
              type="button"
              class="px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              :class="
                tab === 'advertising'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-ink-900'
              "
              @click="tab = 'advertising'"
            >
              Advertising
            </button>
            <button
              type="button"
              class="px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              :class="
                tab === 'subscription'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-ink-900'
              "
              @click="tab = 'subscription'"
            >
              Subscriptions
            </button>
          </div>

          <!-- Advertising options -->
          <div v-if="tab === 'advertising'">
            <p class="text-sm text-gray-500 mb-4">
              What type of advertising do you need?
            </p>
            <div class="flex flex-wrap gap-3">
              <button
                v-for="opt in adOptions"
                :key="opt.id"
                type="button"
                class="flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all"
                :class="
                  selectedAds.includes(opt.id)
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 text-gray-600 hover:border-orange-300'
                "
                @click="toggleAd(opt.id)"
              >
                <Icon :name="opt.icon" class="w-4 h-4" />
                {{ opt.label }}
              </button>
            </div>
          </div>

          <!-- Subscription options -->
          <div v-else class="space-y-6">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-semibold text-ink-900 mb-2"
                  >Digital users / seats</label
                >
                <input
                  v-model.number="digitalSeats"
                  type="number"
                  min="0"
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-ink-900 mb-2"
                  >Print newspapers</label
                >
                <input
                  v-model.number="printPapers"
                  type="number"
                  min="0"
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-ink-900 mb-2"
                  >Frequency</label
                >
                <select
                  v-model="frequency"
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                >
                  <option v-for="f in frequencyOptions" :key="f" :value="f">
                    {{ f }}
                  </option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold text-ink-900 mb-2"
                  >Organization type</label
                >
                <select
                  v-model="orgType"
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                >
                  <option v-for="o in orgTypeOptions" :key="o" :value="o">
                    {{ o }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: summary + form -->
        <div class="lg:col-span-2 space-y-5">
          <div class="bg-ink-900 text-white rounded-2xl p-6">
            <p
              class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3"
            >
              Your requirement
            </p>
            <p class="text-sm leading-relaxed text-gray-200">{{ summary }}</p>
            <p class="text-xs text-gray-400 mt-4 leading-relaxed">
              Indicative pricing. Final media rates and availability are
              confirmed by Willcoll.
            </p>
          </div>

          <form
            class="bg-white border border-gray-100 rounded-2xl p-6 shadow-[var(--shadow-sm)] space-y-4"
            @submit.prevent="submit"
          >
            <input
              v-model.trim="form.fullName"
              required
              type="text"
              autocomplete="name"
              placeholder="Full name"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
            <input
              v-model.trim="form.company"
              type="text"
              autocomplete="organization"
              placeholder="Company"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
            <input
              v-model.trim="form.email"
              required
              type="email"
              autocomplete="email"
              placeholder="Work email"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
            <input
              v-model.trim="form.phone"
              type="tel"
              autocomplete="tel"
              placeholder="Phone"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />

            <div class="hidden" aria-hidden="true">
              <input
                v-model="form.website"
                type="text"
                tabindex="-1"
                autocomplete="off"
              />
            </div>

            <SharedButton type="submit" class="w-full" :disabled="isSubmitting">
              {{ isSubmitting ? "Sending…" : "Request My Corporate Package" }}
            </SharedButton>
            <p
              v-if="status"
              class="text-sm rounded-lg px-3 py-2"
              :class="
                status.type === 'success'
                  ? 'text-green-700 bg-green-50'
                  : 'text-red-700 bg-red-50'
              "
              role="status"
            >
              {{ status.message }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
