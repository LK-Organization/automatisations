// src/components/BlogListing.tsx
import React, { useState, useMemo } from "react";
import type { PostItem } from "../libs/PostItem";
import { motion } from "framer-motion";
interface BlogListingProps {
  posts?: PostItem[];
  itemsPerPage: number;
}

const BlogListing: React.FC<BlogListingProps> = ({
  posts = [],
  itemsPerPage,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Extraire catégories uniques en naviguant en toute sécurité
  const categories = useMemo(() => {
    const titles = posts.flatMap(
      (p) => p.categories?.map((c) => c.title) ?? []
    );
    return Array.from(new Set(titles));
  }, [posts]);

  // Filtrer par recherche et catégorie
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const titleFr = post.title?.fr ?? "";
      const titleEn = post.title?.en ?? "";
      const matchesSearch =
        titleFr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        titleEn.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        !selectedCategory ||
        post.categories?.some((c) => c.title === selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage) || 1;
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Utility: extract plain text from Sanity Portable Text
  function getPlainText(blocks: any[] = []): string {
    return blocks
      .map((block) => {
        if (block._type !== "block" || !block.children) return "";
        return block.children.map((child: any) => child.text).join("");
      })
      .join("\n");
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Barre de recherche et filtre 
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0 ">
        <input
          type="text"
          placeholder="Rechercher un article..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded"
        />

        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full md:w-1/4 p-2 border border-gray-300 rounded"
        >
          <option value="">Toutes catégories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos articles recents
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez les dernières tendances de l’automatisation
          </p>
        </motion.div>
        {/* Grille d'articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map((post) => (
            <article
              key={post._id}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 hover:shadow-lg transition"
            >
              <a href={`/blog/${post.slug.current}/`}>
                <img
                  src={post.mainImage?.asset?.url}
                  alt={post.title || post.title.en}
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p>{post.categories?.map((c) => c.title).join(", ")}</p>
                <h2 className="text-xl  font-semibold mb-2">
                  {post.title || post.title.en}
                </h2>
              </a>
              {post.publishedAt && (
                <p className="text-gray-500  text-sm mb-4">
                  Publié le{" "}
                  {new Date(post.publishedAt).toLocaleDateString("fr-FR")}
                </p>
              )}

              <p className="text-gray-500 text-sm line-clamp-3">
                {getPlainText(post.body)}
              </p>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-full border border-gray-300 ${
                  page === currentPage
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogListing;
