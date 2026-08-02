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

  modules: ["@nuxt/icon"],

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
