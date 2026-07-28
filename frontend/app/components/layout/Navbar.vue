<template>
  <!-- Pre-scroll gradient scrim so nav text is readable over hero photography -->
  <div
    class="fixed top-0 left-0 right-0 h-28 pointer-events-none z-40 transition-opacity duration-300"
    :class="isScrolled ? 'opacity-0' : 'opacity-100'"
    style="
      background: linear-gradient(
        to bottom,
        rgba(17, 17, 17, 0.55) 0%,
        transparent 100%
      );
    "
  />

  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
        : 'bg-transparent py-5',
    ]"
  >
    <div
      class="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between"
    >
      <!-- Desktop Navigation Left -->
      <nav
        class="hidden lg:flex items-center space-x-8 flex-1 justify-end mr-8"
      >
        <NuxtLink
          to="/about"
          class="font-sans text-sm font-semibold tracking-wide nav-link-underline transition-colors py-2"
          :class="
            isScrolled
              ? 'text-ink-900 hover:text-orange-500'
              : 'text-white hover:text-orange-200'
          "
        >
          About
        </NuxtLink>

        <!-- Services Dropdown Trigger -->
        <div
          class="relative group"
          @mouseenter="openDropdown"
          @mouseleave="closeDropdown"
        >
          <NuxtLink
            to="/services"
            class="font-sans text-sm font-semibold tracking-wide flex items-center gap-1 transition-colors py-2"
            :class="
              isScrolled
                ? 'text-ink-900 hover:text-orange-500'
                : 'text-white hover:text-orange-200'
            "
          >
            Services
            <Icon
              name="lucide:chevron-down"
              class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
            />
          </NuxtLink>

          <!-- Services Mega Menu Dropdown -->
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-2 pointer-events-none"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-2 pointer-events-none"
          >
            <div
              v-show="isDropdownOpen"
              class="absolute right-[-150px] top-full mt-2 w-[580px] bg-white rounded-lg border border-gray-100 shadow-lg p-6 grid grid-cols-2 gap-4"
            >
              <div
                class="col-span-2 border-b border-gray-100 pb-3 mb-2 flex justify-between items-center"
              >
                <span
                  class="text-xs font-semibold tracking-wider text-gray-500 uppercase"
                  >Advisory Practice Areas</span
                >
                <NuxtLink
                  to="/services"
                  class="text-xs font-bold text-orange-500 hover:underline"
                >
                  All Services &rarr;
                </NuxtLink>
              </div>

              <NuxtLink
                v-for="service in services"
                :key="service.id"
                :to="service.to"
                class="flex gap-3 p-2.5 rounded-md hover:bg-gray-50 transition-colors group/item"
              >
                <div
                  class="flex-shrink-0 w-8 h-8 rounded bg-orange-100 text-orange-500 flex items-center justify-center"
                >
                  <Icon :name="service.icon" class="w-4 h-4" />
                </div>
                <div>
                  <h4
                    class="text-sm font-semibold text-ink-900 group-hover/item:text-orange-500 transition-colors leading-tight"
                  >
                    {{ service.name }}
                  </h4>
                  <p class="text-xs text-gray-500 mt-1 line-clamp-1">
                    {{ service.subhead }}
                  </p>
                </div>
              </NuxtLink>
            </div>
          </transition>
        </div>

        <NuxtLink
          to="/industries"
          class="font-sans text-sm font-semibold tracking-wide nav-link-underline transition-colors py-2"
          :class="
            isScrolled
              ? 'text-ink-900 hover:text-orange-500'
              : 'text-white hover:text-orange-200'
          "
        >
          Industries
        </NuxtLink>
      </nav>

      <!-- Center Logo -->
      <NuxtLink to="/" class="flex items-center group z-50">
        <!-- Monogram Logo Container -->
        <div class="flex items-center">
          <img
            src="/images/logo/willcoll logo.webp"
            alt="Willcoll Agencies logo"
            class="h-9 w-9 flex-shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <!-- Typography Wordmark -->
          <div class="flex flex-col ml-3 text-left">
            <span
              class="text-ink-900 font-heading font-black tracking-tight text-lg leading-none transition-colors group-hover:text-orange-500"
            >
              WILLCOLL
            </span>
            <span
              class="text-gray-500 font-sans tracking-[0.22em] text-[9px] font-bold leading-none mt-1"
            >
              AGENCIES
            </span>
          </div>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation Right -->
      <nav
        class="hidden lg:flex items-center space-x-8 flex-1 justify-start ml-8"
      >
        <NuxtLink
          to="/why-choose-us"
          class="font-sans text-sm font-semibold tracking-wide nav-link-underline transition-colors py-2"
          :class="
            isScrolled
              ? 'text-ink-900 hover:text-orange-500'
              : 'text-white hover:text-orange-200'
          "
        >
          Why Choose Us
        </NuxtLink>
        <NuxtLink
          to="/insights"
          class="font-sans text-sm font-semibold tracking-wide nav-link-underline transition-colors py-2"
          :class="
            isScrolled
              ? 'text-ink-900 hover:text-orange-500'
              : 'text-white hover:text-orange-200'
          "
        >
          Insights
        </NuxtLink>
        <div class="pl-2">
          <SharedButton
            to="/contact"
            size="sm"
            :variant="isScrolled ? 'primary' : 'outline-white'"
          >
            Book Consultation
          </SharedButton>
        </div>
      </nav>

      <!-- Mobile Hamburger Button -->
      <button
        @click="toggleMobileMenu"
        class="lg:hidden p-2 focus:outline-none z-50 transition-colors"
        :class="isScrolled ? 'text-ink-900' : 'text-white'"
        :aria-expanded="isMobileMenuOpen.toString()"
        aria-label="Toggle menu"
      >
        <Icon
          :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
          class="w-6 h-6"
        />
      </button>
    </div>

    <!-- Mobile Drawer Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isMobileMenuOpen"
        class="fixed inset-0 bg-ink-900/40 backdrop-blur-sm z-40 lg:hidden"
        @click="isMobileMenuOpen = false"
      />
    </transition>

    <!-- Mobile Drawer Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-show="isMobileMenuOpen"
        class="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white shadow-xl z-40 p-6 pt-24 flex flex-col justify-between overflow-y-auto lg:hidden"
      >
        <div class="space-y-6">
          <NuxtLink
            to="/"
            @click="isMobileMenuOpen = false"
            class="block text-lg font-bold text-ink-900 hover:text-orange-500"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            @click="isMobileMenuOpen = false"
            class="block text-lg font-bold text-ink-900 hover:text-orange-500"
          >
            About
          </NuxtLink>

          <!-- Services Accordion in Mobile Nav -->
          <div>
            <button
              @click="isMobileServicesOpen = !isMobileServicesOpen"
              class="w-full flex items-center justify-between text-lg font-bold text-ink-900 hover:text-orange-500 focus:outline-none"
            >
              <span>Services</span>
              <Icon
                name="lucide:chevron-down"
                class="w-5 h-5 transition-transform"
                :class="{ 'rotate-180': isMobileServicesOpen }"
              />
            </button>
            <div
              v-show="isMobileServicesOpen"
              class="mt-3 pl-4 border-l-2 border-gray-100 space-y-3"
            >
              <NuxtLink
                v-for="service in services"
                :key="service.id"
                :to="service.to"
                @click="isMobileMenuOpen = false"
                class="block text-sm text-gray-700 hover:text-orange-500"
              >
                {{ service.name }}
              </NuxtLink>
              <NuxtLink
                to="/services"
                @click="isMobileMenuOpen = false"
                class="block text-sm font-semibold text-orange-500 hover:underline"
              >
                All Services Overview &rarr;
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
            to="/industries"
            @click="isMobileMenuOpen = false"
            class="block text-lg font-bold text-ink-900 hover:text-orange-500"
          >
            Industries
          </NuxtLink>
          <NuxtLink
            to="/why-choose-us"
            @click="isMobileMenuOpen = false"
            class="block text-lg font-bold text-ink-900 hover:text-orange-500"
          >
            Why Choose Us
          </NuxtLink>
          <NuxtLink
            to="/insights"
            @click="isMobileMenuOpen = false"
            class="block text-lg font-bold text-ink-900 hover:text-orange-500"
          >
            Insights
          </NuxtLink>
        </div>

        <div class="mt-8 border-t border-gray-100 pt-6 space-y-4">
          <div class="text-xs text-gray-500 flex flex-col gap-1">
            <span class="font-bold text-ink-900">Office Contact</span>
            <span>0722 550 893</span>
            <span>Pension Towers, Loita Street, Nairobi</span>
          </div>
          <SharedButton
            to="/contact"
            class="w-full"
            @click="isMobileMenuOpen = false"
          >
            Book Consultation
          </SharedButton>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const { services } = useServices();

const isScrolled = ref(false);
const isDropdownOpen = ref(false);
const isMobileMenuOpen = ref(false);
const isMobileServicesOpen = ref(false);

let dropdownTimer: ReturnType<typeof setTimeout> | null = null;

const openDropdown = () => {
  if (dropdownTimer) clearTimeout(dropdownTimer);
  isDropdownOpen.value = true;
};

const closeDropdown = () => {
  dropdownTimer = setTimeout(() => {
    isDropdownOpen.value = false;
  }, 100);
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Run once to initialize in case user refreshed down the page
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
