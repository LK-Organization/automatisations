import React, { useState } from "react";
import BlogPostCard from "./BlogPostInteractions";

export default function CategoryFilter({ posts, categories }) {
  const [selected, setSelected] = useState<string | null>(null);

  const filteredPosts = selected
    ? posts.filter((post) =>
        post.categories?.some((cat: any) => cat.slug.current === selected)
      )
    : posts;

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setSelected(null)}>Tous</button>
        {categories.map((cat) => (
          <button key={cat._id} onClick={() => setSelected(cat.slug.current)}>
            {cat.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPosts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
