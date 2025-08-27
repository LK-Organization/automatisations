import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

import sanity from "@sanity/astro";

export default defineConfig({
  output: "server",
  trailingSlash: "always",
  site: "https://www.automatisons.fr",
  adapter: netlify(),
  integrations: [
    react(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: {
          fr: "https://www.automatisons.fr",
          en: "https://www.automatisons.fr/en",
        },
      },
    }),
    sanity({
      projectId: "83z7c4c",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      studioBasePath: "/studio",
    }),
  ],
  vite: {
    define: {
      // Les variables VITE_ sont automatiquement disponibles côté client
    },
  },
});
