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
    recaptchaSecretKey: process.env.NUXT_RECAPTCHA_SECRET_KEY || process.env.RECAPTCHA_SECRET_KEY,

    public: {
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
    },
  },

  devtools: { enabled: true },

  // Modules registration including icon library, sitemap generation, and robots compliance
  modules: ["@nuxt/icon", "@nuxtjs/sitemap", "@nuxtjs/robots"],

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
    groups: [
      // 1. Explicitly allow mainstream search engines to crawl all public pathways
      {
        userAgent: ["Googlebot", "Bingbot"],
        allow: "/",
      },
      // 2. Globally block high-volume generative AI scrapers and crawlers
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "AnthropicAI",
          "Claude-Web",
          "ClaudeBot",
          "Applebot-Extended",
          "cohere-ai",
          "PerplexityBot",
        ],
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
      title: "Willcoll Agencies | Media Planning & Buying Partner in Kenya",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Independent media planning, buying and execution for Kenyan organizations. Plan, compare, buy, execute, manage and report your advertising through one commercial partner.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
