<template>
  <div class="min-h-screen flex flex-col bg-gray-50 selection:bg-orange-200 selection:text-ink-900">
    <LayoutNavbar />
    
    <main class="flex-grow py-16 lg:py-24">
      <div class="max-w-3xl mx-auto px-6 lg:px-10">
        <slot />
      </div>
    </main>

    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
// Article layout wrapping contents in LayoutNavbar and LayoutFooter
</script>
