<template>
  <section class="relative overflow-hidden" aria-label="Final call to action">
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url(&quot;https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=80&quot;); background-attachment: fixed;" aria-hidden="true" />
    <div class="absolute inset-0" style="background: linear-gradient(160deg, rgba(10,10,10,0.9) 0%, rgba(17,17,17,0.75) 50%, rgba(10,10,10,0.94) 100%)" aria-hidden="true" />

    <div class="relative z-10 py-20 lg:py-36 max-w-7xl mx-auto px-6 lg:px-10 text-center">
      <p class="text-orange-400 text-xs font-bold tracking-[0.15em] uppercase mb-5">Get started</p>
      <h2 class="font-heading font-bold text-3xl lg:text-5xl xl:text-6xl text-white leading-tight max-w-2xl mx-auto mb-6">
        Tell us what you're trying to achieve.
      </h2>
      <p class="text-white/65 text-base lg:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
        We'll help you find the right media mix or coordinate your corporate event production.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <SharedButton to="/contact" size="lg">Get a Media Quote</SharedButton>
        <SharedButton to="/contact" variant="outline-white" size="lg">Plan Event Production</SharedButton>
      </div>
    </div>
  </section>
</template>
