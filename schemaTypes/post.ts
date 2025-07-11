// schemaTypes/post.ts
import { defineField, defineType } from "sanity";
import { localeString, localeText, localeBlockContent } from "./localeSchemas";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localeString", // localized string
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title.en", maxLength: 96 },
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),

    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "localeBlockContent", // localized rich text
    }),
  ],

  preview: {
    select: {
      title: "title.en",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author, title } = selection;
      return {
        title: title,
        subtitle: author ? `by ${author}` : "",
        media: selection.media,
      };
    },
  },
});
