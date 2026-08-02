<template>
  <!-- Full-bleed hero: warm photography + ink overlay + editorial headline bottom-left -->
  <section
    class="relative min-h-screen flex items-end overflow-hidden bg-ink-900"
    aria-label="Hero"
  >
    <!-- Background photo -->
    <div class="absolute inset-0 z-0 bg-ink-700">
      <img
        src="/images/hero-consulting.jpg"
        alt="Business advisory meeting — warm natural light"
        class="w-full h-full object-cover object-center"
      />
      <!-- Ink-tinted duotone gradient — left-heavy, not a flat dark scrim -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-ink-900/75 via-ink-900/40 to-ink-900/10"
      />
      <!-- Bottom gradient so text is always legible -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent"
      />
    </div>

    <!-- Organic orange blob accent — bottom right, very subtle -->
    <div
      class="absolute bottom-[-80px] right-[-60px] w-72 h-72 bg-orange-500/10 z-0 pointer-events-none"
      style="border-radius: 40% 60% 55% 45% / 45% 40% 60% 55%"
      aria-hidden="true"
    />

    <!-- Hero content — bottom-left layout, per Buyan reference -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pb-20 lg:pb-28 pt-40"
    >
      <div class="max-w-2xl">
        <!-- Eyebrow -->
        <p
          class="text-orange-400 text-xs font-bold tracking-[0.18em] uppercase mb-5"
        >
          Business Advisory &amp; Consulting
        </p>

        <!-- H1 — Fraunces serif, large, restrained -->
        <h1
          class="font-heading font-bold text-white leading-[1.08] text-4xl md:text-5xl lg:text-[3.4rem] mb-6"
        >
          <br class="hidden sm:block" />
          Engage Trusted<br />
          <em class="not-italic text-orange-400">Partners</em>
        </h1>

        <!-- Subheadline -->
        <p
          class="text-white/75 text-base lg:text-lg leading-relaxed mb-10 max-w-xl"
        >
          Willcoll Agencies helps individuals, SMEs, Corporates, and
          organisations achieve compliance, manage risks, and drive growth with
          expertise and personalized advice
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 items-center">
          <SharedButton to="/contact" size="lg">
            Book a Consultation
          </SharedButton>
          <SharedButton to="/services" variant="outline-white" size="lg">
            Explore Our Services
          </SharedButton>
        </div>
      </div>
    </div>

    <!-- Scroll cue -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60"
    >
      <span class="text-white text-xs tracking-widest uppercase animate-pulse"
        >Scroll</span
      >
      <div class="w-px h-10 bg-white/50 overflow-hidden relative">
        <div
          class="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line"
        />
      </div>
    </div>
  </section>
</template>
