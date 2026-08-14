<template>
  <div
    class="fixed top-0 left-0 right-0 h-28 pointer-events-none z-40 transition-opacity duration-300"
    :class="isScrolled ? 'opacity-0' : 'opacity-100'"
    style="background: linear-gradient(to bottom, rgba(17,17,17,0.55) 0%, transparent 100%)"
  />

  <header
    class="fixed top-0 left-0 right-0 z-[80] transition-all duration-300"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between gap-4">
      <NuxtLink to="/" class="flex items-center flex-shrink-0">
        <img src="/images/logo/willcoll logo.webp" alt="Willcoll Agencies logo" class="h-9 w-9 object-contain" />
        <div class="flex flex-col ml-3">
          <span class="font-heading font-black tracking-tight text-lg leading-none" :class="isScrolled ? 'text-ink-900' : 'text-white'">WILLCOLL</span>
          <span class="text-[9px] font-bold tracking-[0.22em] leading-none mt-1" :class="isScrolled ? 'text-gray-500' : 'text-gray-400'">AGENCIES</span>
        </div>
      </NuxtLink>

      <nav class="hidden lg:flex items-center flex-1 justify-center gap-0.5">
        <NuxtLink to="/" class="px-3 py-2 text-sm font-semibold transition-colors" :class="linkClass">Home</NuxtLink>

        <div class="relative" @mouseenter="openDropdown('services')" @mouseleave="scheduleClose">
          <NuxtLink to="/services" class="px-3 py-2 text-sm font-semibold flex items-center gap-1 transition-colors" :class="linkClass">
            Services
            <Icon name="lucide:chevron-down" class="w-4 h-4" :class="dropdown === 'services' ? 'rotate-180' : ''" />
          </NuxtLink>
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-2"
          >
            <div v-show="dropdown === 'services'" class="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[460px] bg-white rounded-xl border border-gray-100 shadow-lg p-3">
              <NuxtLink v-for="s in services" :key="s.id" :to="s.to" class="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <span class="w-9 h-9 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                  <Icon :name="s.icon" class="w-4 h-4" />
                </span>
                <span>
                  <span class="block text-sm font-semibold text-ink-900">{{ s.navLabel }}</span>
                  <span class="block text-xs text-gray-500">{{ s.name }}</span>
                </span>
              </NuxtLink>
            </div>
          </transition>
        </div>

        <NuxtLink to="/how-it-works" class="px-3 py-2 text-sm font-semibold transition-colors" :class="linkClass">How It Works</NuxtLink>
        <NuxtLink to="/corporate-solutions" class="px-3 py-2 text-sm font-semibold transition-colors" :class="linkClass">Corporate Solutions</NuxtLink>
        <NuxtLink to="/about" class="px-3 py-2 text-sm font-semibold transition-colors" :class="linkClass">About</NuxtLink>
        <NuxtLink to="/contact" class="px-3 py-2 text-sm font-semibold transition-colors" :class="linkClass">Contact</NuxtLink>
      </nav>

      <div class="hidden lg:flex items-center gap-3 flex-shrink-0">
        <div class="relative" @mouseenter="openDropdown('portal')" @mouseleave="scheduleClose">
          <button type="button" class="px-3 py-2 text-sm font-semibold flex items-center gap-1 transition-colors" :class="linkClass">
            Client Portal
            <Icon name="lucide:chevron-down" class="w-4 h-4" :class="dropdown === 'portal' ? 'rotate-180' : ''" />
          </button>
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-2"
          >
            <div v-show="dropdown === 'portal'" class="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl border border-gray-100 shadow-lg p-2">
              <NuxtLink to="/submit-notice" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-ink-900 hover:bg-gray-50">Submit Notice</NuxtLink>
              <NuxtLink to="/activate-staff" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-ink-900 hover:bg-gray-50">Activate Staff</NuxtLink>
            </div>
          </transition>
        </div>
        <SharedButton to="/contact" size="sm">Get a Media Recommendation</SharedButton>
      </div>

      <button class="lg:hidden p-2" :class="isScrolled ? 'text-ink-900' : 'text-white'" @click="isMobileMenuOpen = !isMobileMenuOpen" aria-label="Toggle menu">
        <Icon name="lucide:menu" class="w-6 h-6" />
      </button>
    </div>
  </header>

  <Teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[90] lg:hidden">
        <div class="absolute inset-0 bg-ink-900/60" @click="isMobileMenuOpen = false" />
        <div class="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white overflow-y-auto p-6">
          <div class="flex items-center justify-between mb-8">
            <span class="font-heading font-black text-lg text-ink-900">Menu</span>
            <button @click="isMobileMenuOpen = false" aria-label="Close menu" class="text-gray-500">
              <Icon name="lucide:x" class="w-6 h-6" />
            </button>
          </div>

          <NuxtLink to="/" class="block py-3 text-lg font-bold text-ink-900" @click="isMobileMenuOpen = false">Home</NuxtLink>
          <NuxtLink to="/services" class="block py-3 text-lg font-bold text-ink-900" @click="isMobileMenuOpen = false">Services</NuxtLink>
          <div class="pl-4 pb-2 space-y-2">
            <NuxtLink v-for="s in services" :key="s.id" :to="s.to" class="block text-sm text-gray-600 py-1" @click="isMobileMenuOpen = false">
              {{ s.navLabel }} — {{ s.name }}
            </NuxtLink>
          </div>
          <NuxtLink to="/how-it-works" class="block py-3 text-lg font-bold text-ink-900" @click="isMobileMenuOpen = false">How It Works</NuxtLink>
          <NuxtLink to="/corporate-solutions" class="block py-3 text-lg font-bold text-ink-900" @click="isMobileMenuOpen = false">Corporate Solutions</NuxtLink>
          <NuxtLink to="/about" class="block py-3 text-lg font-bold text-ink-900" @click="isMobileMenuOpen = false">About</NuxtLink>
          <NuxtLink to="/contact" class="block py-3 text-lg font-bold text-ink-900" @click="isMobileMenuOpen = false">Contact</NuxtLink>

          <div class="border-t border-gray-100 mt-6 pt-6">
            <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Existing clients</p>
            <NuxtLink to="/submit-notice" class="block py-2 text-sm text-gray-700" @click="isMobileMenuOpen = false">Submit Notice</NuxtLink>
            <NuxtLink to="/activate-staff" class="block py-2 text-sm text-gray-700" @click="isMobileMenuOpen = false">Activate Staff</NuxtLink>
          </div>

          <SharedButton to="/contact" class="w-full mt-6" @click="isMobileMenuOpen = false">Get a Media Recommendation</SharedButton>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { services } = useServices()

const isScrolled = ref(false)
const dropdown = ref<string | null>(null)
const isMobileMenuOpen = ref(false)
let closeTimer: ReturnType<typeof setTimeout> | null = null

const linkClass = computed(() =>
  isScrolled.value ? 'text-ink-900 hover:text-orange-500' : 'text-white hover:text-orange-200',
)

const openDropdown = (name: string) => {
  if (closeTimer) clearTimeout(closeTimer)
  dropdown.value = name
}

const scheduleClose = () => {
  closeTimer = setTimeout(() => {
    dropdown.value = null
  }, 120)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (closeTimer) clearTimeout(closeTimer)
})
</script>

