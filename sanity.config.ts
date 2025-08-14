import { defineConfig, defineArrayMember } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { table } from "@sanity/table";
export default defineConfig({
  name: "default",
  title: "Automatisons",

  projectId: "x83z7c4c",
  dataset: "production",
  apiVersion: "2025-02-06",
  plugins: [structureTool(), visionTool(), table()],
  useCdn: false,
  schema: {
    types: schemaTypes,
  },
});
