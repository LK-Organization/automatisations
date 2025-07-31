// libs/imageBuilder.ts
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanityClient";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  // Gestion spéciale pour les images dans le portable text
  if (source?._type === "image" && source?.asset) {
    return builder.image(source.asset);
  }

  // Cas standard pour les autres images
  return builder.image(source);
}
