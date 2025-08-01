import React, { useState, useEffect } from "react";
import { sanityClient } from "../libs/sanityClient";
import { urlFor } from "../libs/imageBuilder";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface SanityAsset {
  _id: string;
  url: string;
  metadata?: {
    dimensions?: {
      width: number;
      height: number;
      aspectRatio: number;
    };
    lqip?: string;
  };
}

interface Category {
  title: string;
}

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage?: {
    asset: SanityAsset;
    alt?: string;
  };
  excerpt?: string;
  publishedAt: string;
  categories?: Category[];
}

const HomeBlogSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch only 3 latest articles
        const query = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc)[0..2] {
          title,
          slug,
          _id,
          mainImage {
            asset-> {
              _id,
              url,
              metadata {
                dimensions,
                lqip
              }
            },
            alt
          },
          excerpt,
          publishedAt,
          categories[]->{ title }
        }`;

        const data: Post[] = await sanityClient.fetch(query);
        setPosts(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Échec du chargement des articles");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6 } },
  };

  if (loading)
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center py-12">
          Chargement des articles...
        </div>
      </section>
    );

  if (error)
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center py-12 text-red-500">
          Erreur : {error}
        </div>
      </section>
    );

  return (
    <motion.section
      className="py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-12" variants={fadeIn}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Derniers Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos dernières analyses, tutoriels et perspectives
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {posts.map((post) => (
            <motion.article
              key={post._id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={item}
              whileHover={{ y: -10 }}
            >
              {post.mainImage?.asset?._id && (
                <motion.div
                  className="relative h-48 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src={urlFor(post.mainImage).width(600).url()}
                    alt={post.mainImage?.alt || post.title || ""}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundImage: post.mainImage.asset.metadata?.lqip
                        ? `url(${post.mainImage.asset.metadata.lqip})`
                        : "",
                      backgroundSize: "cover",
                    }}
                  />
                </motion.div>
              )}

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories?.map((category, index) => (
                    <motion.span
                      key={`${category.title}-${index}`}
                      className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {category.title}
                    </motion.span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2">
                  <motion.a
                    href={`/blog/${post.slug.current}`}
                    className="hover:text-blue-600 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {post.title}
                  </motion.a>
                </h3>
                {post.publishedAt && (
                  <p className="text-gray-500 text-sm mb-4">
                    {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}

                {post.excerpt && (
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                )}

                <motion.a
                  href={`/blog/${post.slug.current}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Lire l'article
                  <ArrowRight
                    size={18}
                    className="ml-1 transition-transform group-hover:translate-x-1"
                  />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="/blog"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            whileHover={{
              scale: 1.05,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tous les articles
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeBlogSection;
