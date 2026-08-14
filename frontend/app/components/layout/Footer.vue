<template>
  <footer class="bg-ink-900 text-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <div class="lg:col-span-2">
          <NuxtLink to="/" class="flex items-center group mb-5">
            <img src="/images/logo/willcoll logo.webp" alt="Willcoll Agencies logo" class="h-9 w-9 flex-shrink-0 object-contain" />
            <div class="flex flex-col ml-3">
              <span class="text-white font-heading font-black tracking-tight text-lg leading-none">WILLCOLL</span>
              <span class="text-gray-500 font-sans tracking-[0.22em] text-[9px] font-bold leading-none mt-1">AGENCIES</span>
            </div>
          </NuxtLink>
          <p class="text-gray-500 text-sm leading-relaxed max-w-xs">Independent media planning, buying and execution for Kenyan organizations.</p>
          <div class="mt-6 space-y-1.5 text-sm text-gray-500">
            <p>10th Floor, Pension Towers, Loita Street</p>
            <p>P.O. Box 24799 - 00502, Nairobi, Kenya</p>
            <a href="tel:0722550893" class="block hover:text-orange-500 transition-colors font-medium text-white mt-2">0722 550 893</a>
            <a href="mailto:info@willcoll.co.ke" class="block hover:text-orange-500 transition-colors font-medium text-white">info@willcoll.co.ke</a>
          </div>
        </div>

        <div>
          <h3 class="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">Services</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.id">
              <NuxtLink :to="service.to" class="text-sm text-gray-400 hover:text-white transition-colors leading-snug block">{{ service.navLabel }} — {{ service.name }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">Company</h3>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm text-gray-400 hover:text-white transition-colors">{{ link.label }}</NuxtLink>
            </li>
          </ul>

          <h3 class="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3 mt-8">Existing Clients</h3>
          <ul class="space-y-3">
            <li><NuxtLink to="/submit-notice" class="text-sm text-gray-400 hover:text-white transition-colors">Submit Notice</NuxtLink></li>
            <li><NuxtLink to="/activate-staff" class="text-sm text-gray-400 hover:text-white transition-colors">Activate Staff</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <span>© {{ currentYear }} Willcoll Agencies. All rights reserved.</span>
        <div class="flex gap-5">
          <NuxtLink to="/privacy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/faqs" class="hover:text-white transition-colors">FAQs</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { services } = useServices()
const currentYear = new Date().getFullYear()
const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Corporate Solutions', to: '/corporate-solutions' },
  { label: 'Contact', to: '/contact' },
]
</script>
