<template>
  <!-- Testimonial: gray-50 bg, centered large pull-quote -->
  <section class="py-16 lg:py-24 bg-gray-50" aria-label="Client testimonial">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="max-w-3xl mx-auto text-center">

        <!-- Orange quotation mark accent -->
        <div class="text-orange-500 text-6xl font-heading leading-none mb-4 select-none" aria-hidden="true">&ldquo;</div>

        <blockquote class="font-heading text-xl lg:text-2xl text-ink-900 leading-snug font-medium italic mb-8">
          Willcoll helped us navigate a compliance requirement that had stalled our operations for months. Their team was direct, thorough, and genuinely invested in getting it right.
        </blockquote>

        <div class="flex items-center justify-center gap-4">
          <!-- Placeholder avatar circle -->
          <div
            class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <Icon name="lucide:user" class="w-5 h-5 text-gray-400" />
          </div>
          <div class="text-left">
            <p class="text-sm font-bold text-ink-900">Client Name</p>
            <p class="text-xs text-gray-500">Director, [Company Placeholder]</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
