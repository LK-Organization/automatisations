// src/lib/sanityClient.ts
import { createClient, type SanityClient } from "@sanity/client";

export const sanityClient: SanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2025-02-06",
});
console.log(import.meta.env.PUBLIC_SANITY_PROJECT_ID); // devrait afficher 'x83z7c4c'
