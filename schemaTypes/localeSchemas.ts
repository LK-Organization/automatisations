// schemaTypes/localeSchemas.ts
import { defineType, defineField } from "sanity";

export const localeString = defineType({
  name: "localeString",
  title: "Localized string",
  type: "object",
  fields: [
    defineField({ name: "en", title: "English", type: "string" }),
    defineField({ name: "fr", title: "Français", type: "string" }),
  ],
  options: { collapsible: true, collapsed: false },
});

export const localeText = defineType({
  name: "localeText",
  title: "Localized text",
  type: "object",
  fields: [
    defineField({ name: "en", title: "English", type: "text" }),
    defineField({ name: "fr", title: "Français", type: "text" }),
  ],
});

export const localeBlockContent = defineType({
  name: "localeBlockContent",
  title: "Localized block content",
  type: "object",
  fields: [
    defineField({ name: "en", title: "English", type: "blockContent" }),
    defineField({ name: "fr", title: "Français", type: "blockContent" }),
  ],
});
