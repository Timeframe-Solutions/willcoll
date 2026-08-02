<template>
  <!-- Mid-page CTA banner: white bg, restrained orange accent line, strong heading + CTA -->
  <section class="py-16 lg:py-20 bg-white" aria-label="Book a consultation">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div
        class="relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 px-8 py-12 lg:px-16 lg:py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        style="box-shadow: 0 12px 32px rgba(17, 17, 17, 0.06)"
      >
        <!-- Orange blob accent — purely decorative -->
        <div
          class="absolute top-[-40px] right-[-40px] w-48 h-48 bg-orange-500/8 pointer-events-none"
          style="border-radius: 40% 60% 55% 45% / 45% 40% 60% 55%"
          aria-hidden="true"
        />
        <!-- Orange left-border accent line -->
        <div
          class="absolute left-0 top-8 bottom-8 w-1 bg-orange-500 rounded-full"
          aria-hidden="true"
        />

        <div class="max-w-xl pl-4 lg:pl-6">
          <h2
            class="font-heading font-bold text-2xl lg:text-3xl text-ink-900 leading-tight mb-3"
          >
            Not Sure Where to Start?
          </h2>
          <p class="text-gray-500 text-base leading-relaxed">
            Tell us the problem you're facing we'll tell you exactly which
            practice area addresses it, in a free initial consultation.
          </p>
        </div>

        <div class="flex-shrink-0 pl-4 lg:pl-0">
          <SharedButton to="/contact" size="lg">
            Book a Free Consultation
          </SharedButton>
        </div>
      </div>
    </div>
  </section>
</template>
