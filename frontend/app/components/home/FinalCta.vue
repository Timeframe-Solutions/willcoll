<template>
  <!-- Final CTA: ink-900 dark section, large centered heading, single CTA -->
  <section
    class="py-16 lg:py-28 bg-ink-900 relative overflow-hidden"
    aria-label="Final call to action"
  >
    <!-- Decorative blob — top right -->
    <div
      class="absolute top-[-60px] right-[-80px] w-80 h-80 bg-orange-500/8 pointer-events-none"
      style="border-radius: 40% 60% 55% 45% / 45% 40% 60% 55%"
      aria-hidden="true"
    />
    <!-- Decorative blob — bottom left -->
    <div
      class="absolute bottom-[-60px] left-[-60px] w-56 h-56 bg-orange-500/5 pointer-events-none"
      style="border-radius: 55% 45% 40% 60% / 60% 55% 45% 40%"
      aria-hidden="true"
    />

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
      <p
        class="text-orange-400 text-xs font-bold tracking-[0.15em] uppercase mb-5"
      >
        Get Started
      </p>
      <h2
        class="font-heading font-bold text-3xl lg:text-5xl text-white leading-tight max-w-2xl mx-auto mb-6"
      >
        Let's Solve Your Next Business Problem.
      </h2>
      <p
        class="text-white/60 text-base lg:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
      >
        Whether it's compliance, risk, strategy, or your next transaction — book
        a consultation and speak directly with our advisory team.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <SharedButton to="/contact" size="lg">
          Book a Consultation
        </SharedButton>
        <SharedButton to="/services" variant="outline-white" size="lg">
          Explore Services
        </SharedButton>
      </div>
    </div>
  </section>
</template>
