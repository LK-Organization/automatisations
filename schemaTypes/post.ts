// schemaTypes/post.ts
import { defineField, defineType } from "sanity";
import { localeString, localeText, localeBlockContent } from "./localeSchemas";

export default defineType({
  name: "post",
  title: "Article", // Titre du document principal
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "localeString",
    }),
    defineField({
      name: "metaDescription",
      title: "descritption meta",
      type: "localeString",
    }),
    defineField({
      name: "slug",
      title: "Identifiant (slug)",
      type: "slug",
      options: { source: "title.fr", maxLength: 96 },
    }),

    defineField({
      name: "author",
      title: "Auteur",
      type: "reference",
      to: [{ type: "author" }],
    }),

    defineField({
      name: "mainImage",
      title: "Image principale",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "altImage",
      title: "Alt de l'image",
      type: "localeString",
    }),
    defineField({
      name: "categories",
      title: "Catégories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),

    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
    }),

    defineField({
      name: "body",
      title: "Contenu",
      type: "localeBlockContent",
    }),
  ],

  preview: {
    select: {
      title: "title.fr",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author, title } = selection;
      return {
        title: title,
        subtitle: author ? `par ${author}` : "",
        media: selection.media,
      };
    },
  },
});
