import { urlFor } from "../libs/imageBuilder";

export default function PortableTextImage({ value }: any) {
  return (
    <figure className="my-8">
      <img
        src={urlFor(value).width(800).url()}
        alt={value.alt || ""}
        className="rounded-lg mx-auto"
      />
      {value.caption && (
        <figcaption className="text-sm text-center text-gray-500">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
}
