<template>
  <div class="min-h-screen flex flex-col">
    <LayoutNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useHead } from '#imports';

// Base URL definition for technical canonical mapping
const BASE_URL: string = 'https://willcoll.co.ke';

/**
 * Strict technical SEO URL normalization helper function.
 * Ensures no trailing slashes (except for root homepage) and prevents double-slash mutations.
 * 
 * @param base The base domain (e.g., https://willcoll.co.ke)
 * @param rawPath The raw route path (e.g., /services//event-production/)
 * @returns Fully normalized canonical URL string
 */
const normalizeCanonicalUrl = (base: string, rawPath: string): string => {
  // 1. Remove duplicate internal slashes: "//" -> "/"
  let cleanPath: string = rawPath.replace(/\/+/g, '/');

  // 2. Strip trailing slash unless the path is exactly "/"
  if (cleanPath.endsWith('/') && cleanPath !== '/') {
    cleanPath = cleanPath.slice(0, -1);
  }

  // 3. Ensure base doesn't end with slash, then concatenate
  const sanitizedBase: string = base.replace(/\/+$/, '');
  
  return `${sanitizedBase}${cleanPath}`;
};

const route = useRoute();

// Apply structural reactive canonical link tag to ensure one single truth for web crawlers
useHead(() => {
  const canonicalUrl: string = normalizeCanonicalUrl(BASE_URL, route.path);

  return {
    link: [
      {
        rel: 'canonical',
        href: canonicalUrl,
      },
    ],
  };
});

// Structured data — Organization identity across the site
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Willcoll Agencies',
        url: 'https://willcoll.co.ke',
        logo: 'https://willcoll.co.ke/images/logo/willcoll logo.webp',
        description:
          'Independent commercial media partner helping Kenyan businesses plan, place and manage advertising, recruitment, publications and corporate subscriptions.',
        email: 'info@willcoll.co.ke',
        telephone: '+254722550893',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '10th Floor, Pension Towers, Loita Street',
          addressLocality: 'Nairobi',
          addressCountry: 'KE',
        },
      }),
    },
  ],
});
</script>
