import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  future: {
    compatibilityVersion: 4,
  },

  runtimeConfig: {
    zohoHost: process.env.ZOHO_HOST,
    zohoPort: Number(process.env.ZOHO_PORT),
    zohoUser: process.env.ZOHO_USER,
    zohoPass: process.env.ZOHO_PASS,
    contactEmail: process.env.CONTACT_EMAIL,

    public: {},
  },

  devtools: { enabled: true },

  // Modules registration including icon library, sitemap generation, and robots compliance
  modules: [
    "@nuxt/icon",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots"
  ],

  // Unified canonical site configuration
  site: {
    url: "https://willcoll.co.ke",
  },

  // Technical SEO Sitemap Configuration
  sitemap: {
    autoLastmod: true,
    // Auto-discovers pages under app/pages/ in Nuxt 4 compatibility mode
    discoverImages: true,
  },

  // Robots.txt specifications configuration
  robots: {
    rules: [
      // 1. Explicitly allow mainstream search engines to crawl all public pathways
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      // 2. Globally block high-volume generative AI scrapers and crawlers
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        disallow: "/",
      },
      {
        userAgent: "Google-Extended",
        disallow: "/",
      },
      {
        userAgent: "AnthropicAI",
        disallow: "/",
      },
      {
        userAgent: "Claude-Web",
        disallow: "/",
      },
      {
        userAgent: "ClaudeBot",
        disallow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        disallow: "/",
      },
      {
        userAgent: "cohere-ai",
        disallow: "/",
      },
      {
        userAgent: "PerplexityBot",
        disallow: "/",
      },
    ],
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title:
        "Willcoll Agencies | Commercial Media Partner for Kenyan Businesses",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Willcoll helps Kenyan businesses plan, place and manage advertising, recruitment campaigns, public notices and corporate subscriptions through one commercial media partner.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
