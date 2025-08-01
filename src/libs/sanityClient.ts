// src/lib/sanityClient.ts
import { createClient, type SanityClient } from "@sanity/client";

export const sanityClient: SanityClient = createClient({
  projectId: "x83z7c4c", // <— remplace par ton ID
  dataset: "production", // <— ton dataset
  // <— date ISO pour la version de l’API
  useCdn: false, // true pour activer le CDN si tu veux
  // token: import.meta.env.SANITY_TOKEN // décommente si nécessaire
});
