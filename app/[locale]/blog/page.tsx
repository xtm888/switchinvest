"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { m, LazyMotion, domAnimation } from "framer-motion"
import StructuredData from '@/components/structured-data'
import SectionDivider from '@/components/home/SectionDivider'
import { blogPosts, categories } from "@/lib/blog-data"
import { useTranslation } from "@/hooks/use-translation"
import PlaceholderImage from "@/components/PlaceholderImage"

export default function BlogPage() {
  const { t } = useTranslation()

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-brand-beige/20"
    >
      <StructuredData type="services" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-teal to-brand-teal/90 py-20 text-white overflow-hidden">
        {/* Floating Background Elements */}
        <m.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-16 right-16 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl"
        />
        <m.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-16 left-16 w-36 h-36 bg-white/5 rounded-full blur-2xl"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              <span className="bg-gradient-to-r from-white via-brand-gold to-white bg-clip-text text-transparent animate-gradient-shift">
                {t("home.blog.pageTitle") || "Blog & Real Estate News"}
              </span>
            </h1>
            <p className="text-xl text-brand-beige/90 max-w-2xl mx-auto">
              {t("home.blog.pageDescription") || "Expert advice, market analysis and practical guides to succeed with your real estate projects in Belgium"}
            </p>
          </m.div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="wave" />

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "Tous" || category === t("home.blog.categories.all") ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm ${
                  category === "Tous" || category === t("home.blog.categories.all")
                    ? "bg-brand-gold text-neutral-dark hover:bg-brand-gold/90"
                    : "border-brand-teal text-brand-teal hover:bg-brand-teal/10"
                }`}
              >
                {category === "Tous" ? t("home.blog.categories.all") || "All" : category}
              </Badge>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <m.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 border-brand-beige/30 hover:border-brand-gold/50 group">
                    <CardHeader className="p-0">
                      <div className="relative h-48 rounded-t-lg overflow-hidden">
                        <PlaceholderImage variant="blog" category={post.category} />
                        <Badge className="absolute top-4 left-4 bg-brand-gold text-neutral-dark z-10">
                          {post.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-neutral-dark/60 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('fr-BE', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <CardTitle className="text-xl font-serif text-brand-teal mb-3 group-hover:text-brand-gold transition-colors">
                        {post.title}
                      </CardTitle>

                      <p className="text-neutral-dark/80 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-brand-teal font-semibold group-hover:text-brand-gold transition-colors">
                        {t("home.blog.readArticle") || "Read more"}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </m.div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-brand-teal to-brand-teal/90 text-white border-none">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
                  {t("home.blog.newsletterTitle") || "Stay Informed About the Latest Real Estate News"}
                </h3>
                <p className="text-brand-beige/90 mb-6 max-w-2xl mx-auto">
                  {t("home.blog.newsletterDescription") || "Receive our market analysis, expert advice and investment opportunities directly in your inbox."}
                </p>
                <Link href="/contact">
                  <m.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(218, 165, 32, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-serif px-8 py-3 rounded-lg transition-colors font-semibold"
                  >
                    {t("home.blog.newsletterButton") || "Subscribe to Newsletter"}
                  </m.button>
                </Link>
              </CardContent>
            </Card>
          </m.div>
        </div>
      </section>
    </m.main>
  )
}
