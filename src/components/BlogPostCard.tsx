import React, { useState } from "react";
import BlogPostCard from "./BlogPostCard";
import CategoryFilter from "./CategoryFilter";
import Pagination from "./Pagination";
import type { PostItem, Category } from "../libs/PostItem";

export default function BlogList({
  posts,
  categories,
  currentPage,
  totalPages,
}: {
  posts: [];
  categories: Category[];
  currentPage: number;
  totalPages: number;
}) {
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const filtered = selectedCat
    ? posts.filter((p) => p.categories.some((c) => c._id === selectedCat))
    : posts;

  return (
    <>
      <CategoryFilter
        categories={categories}
        selected={selectedCat}
        onSelect={setSelectedCat}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
