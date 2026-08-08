<template>
  <!-- Full-bleed hero: professional layout + accessible dark overlay + high contrast content -->
  <section
    class="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden bg-slate-950"
    aria-label="Hero"
  >
    <!-- Background photo with responsive overlays -->
    <div class="absolute inset-0 z-0 bg-slate-900">
      <img
        src="/images/hero-consulting.jpg"
        alt="Business advisory meeting — professional team collaboration"
        class="w-full h-full object-cover object-center"
      />
      <!-- Subtle dark gradient overlay to ensure all text passes WCAG AAA accessibility -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/30 lg:from-slate-950/85 lg:via-slate-950/60 lg:to-transparent"
        aria-hidden="true"
      />
      <!-- Extra bottom gradient overlay for readability and transition -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20"
        aria-hidden="true"
      />
    </div>

    <!-- Organic orange blob accent — bottom right, very subtle -->
    <div
      class="absolute bottom-[-80px] right-[-60px] w-72 h-72 bg-orange-500/10 z-0 pointer-events-none"
      style="border-radius: 40% 60% 55% 45% / 45% 40% 60% 55%"
      aria-hidden="true"
    />

    <!-- Hero content container -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 sm:py-32 lg:py-40"
    >
      <div class="max-w-2xl text-left">
        <!-- Tagline: Small uppercase pill badge / secondary text -->
        <div class="inline-block mb-6">
          <span
            class="px-3 py-1 text-xs font-bold tracking-[0.2em] text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full uppercase"
          >
            Advisory
          </span>
        </div>

        <!-- Headline: Unified solid color (solid text-white) to prevent visual splitting and achieve WCAG AAA contrast -->
        <h1
          class="font-heading font-extrabold text-white leading-tight tracking-tight text-3xl sm:text-3xl lg:text-5xl xl:text-6xl mb-6"
        >
          Engage Trusted Partners
        </h1>

        <!-- Subheadline: constrained text width so it doesn't span full screen -->
        <p
          class="text-slate-200 text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
        >
          Willcoll Agencies helps individuals, SMEs, Corporates, and
          organisations achieve compliance, manage risks, and drive growth with
          expertise and personalized advice.
        </p>

        <!-- CTAs: Distinct visual hierarchy (Stack on mobile, row on tablet/desktop) -->
        <div
          class="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
        >
          <SharedButton
            to="/contact"
            variant="primary"
            size="lg"
            class="w-full sm:w-auto text-center justify-center transition-all duration-200 hover:-translate-y-0.5"
          >
            Book a Consultation
          </SharedButton>
          <SharedButton
            to="/services"
            variant="outline-white"
            size="lg"
            class="w-full sm:w-auto text-center justify-center transition-all duration-200 hover:bg-white/10 hover:border-white/40"
          >
            Explore Our Services
          </SharedButton>
        </div>
      </div>
    </div>

    <!-- Scroll cue -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60 hidden sm:flex"
    >
      <span
        class="text-white text-[10px] tracking-widest uppercase animate-pulse"
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
