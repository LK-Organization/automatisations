import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap"; // ← tu dois l'importer
import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "server",
  site: "https://automatisons.fr", // ← très important
  adapter: netlify(),
  integrations: [
    react(),
    tailwind(),
    sitemap(), // ← ici avec les autres
  ],
  vite: {
    define: {
      // Les variables VITE_ sont automatiquement disponibles côté client
    },
  },
});
