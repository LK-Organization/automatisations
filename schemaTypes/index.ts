import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import { localeString, localeBlockContent } from "./localeSchemas";
export const schemaTypes = [
  localeString,
  localeBlockContent,
  author,
  category,
  blockContent,
  post,
];
