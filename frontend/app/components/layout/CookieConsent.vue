<template>
  <ClientOnly>
    <div
      v-if="isVisible"
      class="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 bg-zinc-900 border border-zinc-800 text-white rounded-xl shadow-2xl p-6 transition-all duration-300 transform translate-y-0"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <div class="space-y-4">
        <!-- Header -->
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
            <h2 id="cookie-title" class="text-lg font-bold font-heading text-zinc-100">
              Cookie Preferences
            </h2>
          </div>
        </div>

        <!-- Description -->
        <p id="cookie-desc" class="text-sm text-zinc-300 leading-relaxed">
          We use cookies to improve your browsing experience, analyze site traffic, and deliver personalized content. By clicking "Accept All", you agree to our use of cookies.
        </p>

        <!-- Preference Toggles (Expanded view) -->
        <div v-if="showPreferences" class="space-y-3 pt-2 border-t border-zinc-800">
          <!-- Necessary (Always Active) -->
          <div class="flex items-center justify-between text-sm">
            <div>
              <span class="font-medium text-zinc-200 block">Necessary Cookies</span>
              <span class="text-xs text-zinc-400 block">Required for the website to function properly.</span>
            </div>
            <span class="px-2.5 py-0.5 text-xs font-semibold text-zinc-400 bg-zinc-800 rounded">Required</span>
          </div>

          <!-- Analytics -->
          <div class="flex items-center justify-between text-sm pt-2">
            <div>
              <span class="font-medium text-zinc-200 block">Analytics Cookies</span>
              <span class="text-xs text-zinc-400 block">Help us understand how visitors interact with the site.</span>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="preferences.analytics" class="sr-only peer" />
              <div class="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-500"></div>
            </label>
          </div>

          <!-- Marketing -->
          <div class="flex items-center justify-between text-sm pt-2">
            <div>
              <span class="font-medium text-zinc-200 block">Marketing Cookies</span>
              <span class="text-xs text-zinc-400 block">Used to track visitors across websites to deliver relevant ads.</span>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="preferences.marketing" class="sr-only peer" />
              <div class="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-500"></div>
            </label>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-col gap-2 pt-2">
          <div class="flex gap-2">
            <button
              @click="acceptAll"
              class="flex-1 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold py-2 px-4 rounded text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              Accept All
            </button>
            <button
              @click="savePreferences"
              class="flex-1 bg-zinc-800 hover:bg-zinc-750 text-zinc-200 font-bold py-2 px-4 rounded text-sm transition-colors duration-200 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              {{ showPreferences ? 'Save Choices' : 'Reject Optional' }}
            </button>
          </div>
          <button
            @click="togglePreferences"
            class="text-xs text-amber-400/90 hover:text-amber-400 underline transition-colors duration-200 py-1"
          >
            {{ showPreferences ? 'Hide Preferences' : 'Manage Preferences' }}
          </button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const showPreferences = ref(false);

const preferences = ref({
  necessary: true,
  analytics: false,
  marketing: false
});

// Nuxt composable cookie
const consentCookie = useCookie('willcoll_cookie_consent', {
  maxAge: 60 * 60 * 24 * 365, // 1 year
  path: '/',
  sameSite: 'lax'
});

onMounted(() => {
  // Check if consent has already been saved
  if (!consentCookie.value) {
    // Show banner after a tiny delay for entry animation feeling
    setTimeout(() => {
      isVisible.value = true;
    }, 1000);
  } else {
    // Apply choices (e.g. initialize analytics if agreed)
    applyConsent(consentCookie.value);
  }
});

function togglePreferences() {
  showPreferences.value = !showPreferences.value;
}

function acceptAll() {
  const choices = {
    necessary: true,
    analytics: true,
    marketing: true,
    timestamp: new Date().toISOString()
  };
  consentCookie.value = choices;
  applyConsent(choices);
  isVisible.value = false;
}

function savePreferences() {
  // If preferences view is open, save selected, else it acts as 'reject optional'
  const choices = {
    necessary: true,
    analytics: showPreferences.value ? preferences.value.analytics : false,
    marketing: showPreferences.value ? preferences.value.marketing : false,
    timestamp: new Date().toISOString()
  };
  consentCookie.value = choices;
  applyConsent(choices);
  isVisible.value = false;
}

function applyConsent(choices) {
  // Set window variables or state so plugins/analytics can read them
  if (process.client) {
    window.willcollConsent = choices;
    // Emit global event for custom scripts/integrations
    window.dispatchEvent(new CustomEvent('willcoll-consent-updated', { detail: choices }));
  }
}
</script>
