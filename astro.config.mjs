import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap"; // ← tu dois l'importer
import netlify from "@astrojs/netlify";

import sanity from "@sanity/astro";

export default defineConfig({
  output: "server",
  site: "https://www.automatisons.fr", // ← très important
  adapter: netlify(),
  integrations: [
    react(),
    tailwind(), // ← ici avec les autres
    sitemap(),
    sanity({
      projectId: "x83z7c4c",
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
