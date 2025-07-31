import { urlFor } from "../libs/imageBuilder";

export default function PortableTextImage({ value }) {
  // Debug: Affiche les données reçues
  console.log("Image data received:", value);

  if (!value?.asset?.url) {
    console.error("Missing image asset", value);
    return (
      <div className="bg-red-100 text-red-800 p-4 my-4 rounded">
        Image manquante ou données incomplètes
      </div>
    );
  }

  return (
    <figure className="my-8 group">
      <img
        src={urlFor(value).width(1200).auto("format").quality(80).url()}
        alt={value.alt || "Image du contenu"}
        className="rounded-lg w-full h-auto transition-all duration-300 group-hover:shadow-xl"
        loading="lazy"
        width={1200}
        height={Math.round(1200 / value.asset.metadata.dimensions.aspectRatio)}
      />
      {value.caption && (
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
}
