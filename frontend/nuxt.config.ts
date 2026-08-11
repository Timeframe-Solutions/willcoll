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
    // Dynamic runtime routing configuration: Fetch dynamic content URLs during build time
    urls: async () => {
      // Production-grade async dynamic route resolution
      try {
        // Fetch dynamic blog posts/insights slugs from internal API or external CMS
        const response = await fetch("https://api.willcoll.co.ke/insights-sitemap-feed");
        if (!response.ok) {
          throw new Error("Sitemap feed response was not OK");
        }
        interface InsightFeedItem {
          slug: string;
          updatedAt: string;
        }
        const data = await response.json() as InsightFeedItem[];
        return data.map((item) => ({
          loc: `/insights/${item.slug}`,
          lastmod: item.updatedAt,
          changefreq: "weekly",
          priority: 0.7,
        }));
      } catch (error) {
        // Resilient fallback endpoints list if the build-time API fetch fails
        console.warn("Failed to fetch dynamic sitemap URLs, using standard fallback routes:", error);
        return [
          {
            loc: "/insights/building-a-compliance-ready-business-in-kenya",
            lastmod: new Date().toISOString(),
            changefreq: "weekly",
            priority: 0.8,
          },
        ];
      }
    },
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
        "Willcoll Agencies | Business Advisory & Corporate Consulting in Kenya",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Willcoll Agencies helps Kenyan SMEs, corporates, and organizations achieve compliance, manage risk, and execute strategic growth. Book a free consultation today.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
