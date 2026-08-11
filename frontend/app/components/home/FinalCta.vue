<template>
  <!-- Final CTA: full-bleed photo background with dark gradient overlay -->
  <section class="relative overflow-hidden" aria-label="Final call to action">
    <!-- Background image with fixed attachment for premium parallax scroll effect -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
      style="
        background-image: url(&quot;https://images.unsplash.com/photo-1611348524140-53c9a25263d6?auto=format&fit=crop&w=2400&q=80&quot;);
      "
      aria-hidden="true"
    />

    <!-- Multi-stop dark overlay: deeper at top & bottom, lighter in centre so image breathes -->
    <div
      class="absolute inset-0"
      style="
        background: linear-gradient(
          160deg,
          rgba(10, 10, 10, 0.88) 0%,
          rgba(17, 17, 17, 0.72) 50%,
          rgba(10, 10, 10, 0.92) 100%
        );
      "
      aria-hidden="true"
    />

    <!-- Warm orange tint wash (subtle brand colour bleed) -->
    <div
      class="absolute inset-0 opacity-20 pointer-events-none"
      style="
        background: radial-gradient(
          ellipse 70% 60% at 50% 100%,
          #f37321 0%,
          transparent 70%
        );
      "
      aria-hidden="true"
    />

    <!-- Decorative blob — top right -->
    <div
      class="absolute top-[-60px] right-[-80px] w-80 h-80 bg-orange-500/10 pointer-events-none"
      style="border-radius: 40% 60% 55% 45% / 45% 40% 60% 55%"
      aria-hidden="true"
    />
    <!-- Decorative blob — bottom left -->
    <div
      class="absolute bottom-[-60px] left-[-60px] w-56 h-56 bg-orange-500/8 pointer-events-none"
      style="border-radius: 55% 45% 40% 60% / 60% 55% 45% 40%"
      aria-hidden="true"
    />

    <!-- Content -->
    <div
      class="relative z-10 py-20 lg:py-36 max-w-7xl mx-auto px-6 lg:px-10 text-center"
    >
      <p
        class="text-orange-400 text-xs font-bold tracking-[0.15em] uppercase mb-5"
      >
        Get Started
      </p>
      <h2
        class="font-heading font-bold text-3xl lg:text-5xl xl:text-6xl text-white leading-tight max-w-2xl mx-auto mb-6"
      >
        Let's Solve Your Next Business Problem.
      </h2>
      <p
        class="text-white/65 text-base lg:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
      >
        Whether it's compliance, risk, strategy, or your next transaction, book
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
