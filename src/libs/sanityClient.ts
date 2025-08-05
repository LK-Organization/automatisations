// src/lib/sanityClient.ts
import { createClient, type SanityClient } from "@sanity/client";

export const sanityClient: SanityClient = createClient({
  projectId: "x83z7c4c",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-02-06",
});
console.log("x83z7c4c"); // devrait afficher '"x83z7c4c"'
