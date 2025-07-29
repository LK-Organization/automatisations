import type { PortableTextBlock, Reference } from "sanity";

export interface LocaleString {
  en: string;
  fr: string;
}
export interface LocaleBlockContent {
  en: PortableTextBlock[];
  fr: PortableTextBlock[];
}
export interface Author {
  _id: string;
  name: string;
  // add other fields if you query them
}

/**
 * A minimal Category type:
 */
export interface Category {
  _id: string;
  title: string;
}
export interface PostItem {
  _id: string;
  title: LocaleString;
  slug: { current: string };
  author: Author; // or replace with `Author` if you populate it
  mainImage: ImageMetadata;
  categories: Category[];
  publishedAt: string;
  body: LocaleBlockContent;
}
