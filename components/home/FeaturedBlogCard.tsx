"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, TrendingUp } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { useTranslation } from "@/hooks/use-translation"
import PlaceholderImage from "@/components/PlaceholderImage"

/**
 * Featured Blog/Resource Card Section
 * Features:
 * - Fetches latest blog posts from centralized data
 * - Image optimization with next/image
 * - Animated card lifts on hover
 * - SEO-optimized structure
 * - Responsive grid layout
 */

export default function FeaturedBlogCard() {
  const { t } = useTranslation()

  // Get the 3 most recent blog posts
  const featuredPosts = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-beige/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-teal px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">{t("home.blog.badge") || "Guides & Resources"}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4 font-serif">
            {t("home.blog.title") || "Stay Informed About the Real Estate Market"}
          </h2>
          <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            {t("home.blog.subtitle") || "Expert analysis, practical guides and Belgian market trends"}
          </p>
        </motion.div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-brand-beige/30 hover:border-brand-gold/50 transition-all duration-300"
                >
                  {/* Featured Image */}
                  <div className="relative h-56 overflow-hidden">
                    <PlaceholderImage variant="blog" category={post.category} />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-brand-gold text-neutral-dark text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Information */}
                    <div className="flex items-center gap-4 text-sm text-neutral-dark/60 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('fr-BE', {
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-brand-teal group-hover:text-brand-gold transition-colors mb-3 line-clamp-2 font-serif">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-neutral-dark/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center text-brand-teal group-hover:text-brand-gold font-semibold text-sm">
                      <span>{t("home.blog.readMore") || "Read Article"}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>

                    {/* Keywords */}
                    <div className="mt-4 pt-4 border-t border-brand-beige/50">
                      <div className="flex flex-wrap gap-2">
                        {post.keywords.slice(0, 3).map((keyword, i) => (
                          <span
                            key={i}
                            className="text-xs text-neutral-dark/50 bg-brand-beige/30 px-2 py-1 rounded"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Indicator */}
                  <div className="h-1 bg-gradient-to-r from-brand-teal to-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA to Blog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-brand-teal to-cyan-600 hover:from-brand-gold hover:to-yellow-500 text-white font-serif px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              {t("home.blog.viewAll") || "View All Articles"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
