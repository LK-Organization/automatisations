import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [react(), tailwind()],

  // Configuration pour les variables d'environnement
  vite: {
    define: {
      // Les variables VITE_ sont automatiquement disponibles côté client
    },
  },

  adapter: netlify(),
});