<template>
  <!-- Full-bleed hero: warm photography + precise mobile-first charcoal overlay + low content alignment -->
  <section
    class="relative min-h-screen min-h-[100dvh] flex items-end overflow-hidden bg-zinc-950"
    aria-label="Hero"
  >
    <!-- Background photo with neutral dark-grey/charcoal overlays -->
    <div class="absolute inset-0 z-0 bg-zinc-900">
      <img
        src="/images/hero-consulting.jpg"
        alt="Business advisory meeting — professional team collaboration"
        class="w-full h-full object-cover object-center"
      />
      <!-- Neutral dark-grey/charcoal gradient overlay for WCAG AAA accessibility -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40 lg:bg-gradient-to-r lg:from-zinc-950/90 lg:via-zinc-950/70 lg:to-transparent"
        aria-hidden="true"
      />
    </div>

    <!-- Organic amber blob accent — bottom right, very subtle -->
    <div
      class="absolute bottom-[-80px] right-[-60px] w-72 h-72 bg-amber-500/10 z-0 pointer-events-none"
      style="border-radius: 40% 60% 55% 45% / 45% 40% 60% 55%"
      aria-hidden="true"
    />

    <!-- Hero content container: lower alignment on mobile with ample bottom padding -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16 sm:pb-24 lg:py-40"
    >
      <div class="max-w-2xl text-left">
        <!-- Tagline: Small uppercase pill badge -->
        <div class="inline-block mb-5">
          <span
            class="px-3 py-1 text-xs font-bold tracking-[0.2em] text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full uppercase"
          >
            Advisory
          </span>
        </div>

        <!-- Headline: High Contrast Text -->
        <h1
          class="font-heading font-extrabold text-white leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6"
        >
          Engage Trusted Partners for Your Business Growth
        </h1>

        <!-- Subheadline: constrained text width using light neutral grey -->
        <p
          class="text-zinc-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
        >
          Willcoll Agencies helps individuals, SMEs, Corporates, and
          organisations achieve compliance, manage risks, and drive growth with
          expertise and personalized advice.
        </p>

        <!-- CTAs: Mobile-first actions with minimum 44px touch targets -->
        <div class="flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center">
          <SharedButton
            to="/contact"
            variant="primary"
            size="lg"
            class="w-full sm:w-auto text-center justify-center min-h-[48px] py-3.5 transition-all duration-200 hover:-translate-y-0.5"
          >
            Book a Consultation
          </SharedButton>
          <SharedButton
            to="/services"
            variant="outline-white"
            size="lg"
            class="w-full sm:w-auto text-center justify-center min-h-[48px] py-3.5 transition-all duration-200 hover:bg-white/10 hover:border-white/45"
          >
            Explore Our Services
          </SharedButton>
        </div>
      </div>
    </div>

    <!-- Scroll cue -->
    <div
      class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60 hidden sm:flex"
    >
      <span class="text-white text-[10px] tracking-widest uppercase animate-pulse"
        >Scroll</span
      >
      <div class="w-px h-10 bg-white/30 overflow-hidden relative">
        <div
          class="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line"
        />
      </div>
    </div>
  </section>
</template>
