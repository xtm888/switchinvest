"use client"

import { use } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft, ExternalLink, ChevronRight } from "lucide-react"
import Link from "next/link"
import { m, LazyMotion, domAnimation } from "framer-motion"
import { notFound } from "next/navigation"
import { blogPosts, getBlogPostWithContent } from "@/lib/blog-data"
import ReadingProgress from "@/components/blog/ReadingProgress"
import ShareButtons from "@/components/blog/ShareButtons"
import TableOfContents from "@/components/blog/TableOfContents"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Unwrap params Promise for Next.js 15 compatibility
  const { slug } = use(params)

  // Get post with content from centralized data
  const post = getBlogPostWithContent(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-brand-beige/20">
      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Floating Share Buttons */}
      <ShareButtons title={post.title} slug={slug} />

      {/* Floating Table of Contents */}
      {post.content && <TableOfContents content={post.content} />}

      {/* Hero Section - Enhanced */}
      <section className="bg-gradient-to-b from-brand-teal to-brand-teal/90 py-20 md:py-28 text-white relative overflow-hidden">
        {/* Floating Background Elements */}
        <m.div
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl"
        />
        <m.div
          animate={{
            y: [0, 18, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-beige/90 hover:text-white transition-colors mb-10 font-semibold group"
            >
              <m.div
                whileHover={{ x: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </m.div>
              Retour au blog
            </Link>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl"
          >
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="mb-6 bg-brand-gold text-neutral-dark px-4 py-1.5 text-sm font-semibold shadow-lg">
                {post.category}
              </Badge>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 font-serif leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-brand-beige to-white bg-clip-text text-transparent animate-gradient-shift">
                {post.title}
              </span>
            </m.h1>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-brand-beige/90 text-sm md:text-base"
            >
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5" />
                {new Date(post.date).toLocaleDateString('fr-BE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                {post.readTime} de lecture
              </span>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <m.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <Card className="border-brand-beige/30 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8 md:p-12 lg:p-16">
                  {post.content ? (
                    <div
                      className="prose prose-lg lg:prose-xl max-w-none
                        prose-headings:font-serif prose-headings:text-brand-teal prose-headings:tracking-tight
                        prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mb-8 prose-h2:mt-16 prose-h2:font-bold prose-h2:pb-3 prose-h2:border-b prose-h2:border-brand-gold/20
                        prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mb-6 prose-h3:mt-12 prose-h3:font-bold
                        prose-p:text-neutral-dark/90 prose-p:leading-loose prose-p:mb-8 prose-p:text-lg
                        prose-ul:my-8 prose-li:text-neutral-dark/90 prose-li:leading-relaxed prose-li:mb-3
                        prose-strong:text-brand-teal prose-strong:font-bold
                        prose-a:text-brand-teal prose-a:no-underline prose-a:font-semibold hover:prose-a:text-brand-gold prose-a:transition-colors
                        first-letter:text-5xl first-letter:font-bold first-letter:text-brand-teal first-letter:float-left first-letter:mr-3 first-letter:mt-1
                      "
                      dangerouslySetInnerHTML={{ __html: post.content.split('\n').map((line, index) => {
                        if (line.startsWith('## ')) {
                          const text = line.substring(3)
                          return `<h2 id="heading-${index}">${text}</h2>`
                        } else if (line.startsWith('### ')) {
                          const text = line.substring(4)
                          return `<h3 id="heading-${index}">${text}</h3>`
                        } else if (line.startsWith('- ')) {
                          return `<li>${line.substring(2)}</li>`
                        } else if (line.includes('**') && line.includes('**')) {
                          return `<p>${line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`
                        } else if (line.trim()) {
                          return `<p>${line}</p>`
                        }
                        return ''
                      }).join('') }}
                    />
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-lg text-neutral-dark/80 mb-6">
                        {post.excerpt}
                      </p>
                      <div className="bg-brand-beige/50 rounded-lg p-8 mb-6">
                        <h3 className="text-xl font-bold font-serif text-brand-teal mb-4">
                          Article en préparation
                        </h3>
                        <p className="text-neutral-dark/80">
                          Le contenu complet de cet article sera bientôt disponible. En attendant, consultez nos sources officielles ci-contre pour plus d'informations.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* CTA Section - Enhanced */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16"
              >
                <Card className="bg-gradient-to-br from-brand-teal via-brand-teal/95 to-brand-teal/90 text-white border-none shadow-2xl overflow-hidden relative">
                  {/* Animated background pattern */}
                  <m.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl"
                  />
                  <CardContent className="p-8 md:p-12 text-center relative z-10">
                    <m.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-2xl md:text-3xl font-bold mb-4 font-serif"
                    >
                      Besoin d'une Évaluation Rapide ?
                    </m.h3>
                    <m.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-brand-beige/90 mb-8 text-lg max-w-xl mx-auto"
                    >
                      Obtenez une offre transparente pour votre propriété en 24-48 heures
                    </m.p>
                    <Link href="/contact">
                      <m.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(218, 165, 32, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-gold hover:bg-yellow-500 text-neutral-dark font-serif px-10 py-4 rounded-lg transition-all font-bold text-lg shadow-xl"
                      >
                        Demander une Évaluation Gratuite
                      </m.button>
                    </Link>
                  </CardContent>
                </Card>
              </m.div>
            </m.article>

            {/* Sidebar */}
            <m.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4"
            >
              {/* Sources Section - Enhanced */}
              {post.sources && post.sources.length > 0 && (
                <Card className="border-brand-beige/30 mb-8 sticky top-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-lg flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold font-serif text-brand-teal">
                        Sources Officielles
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-dark/80 mb-6 leading-relaxed">
                      Cet article s'appuie sur des sources d'autorité du secteur immobilier belge :
                    </p>
                    <ul className="space-y-4">
                      {post.sources.map((source, index) => (
                        <m.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="flex items-start gap-3 text-sm text-brand-teal hover:text-brand-gold transition-colors group p-3 rounded-lg hover:bg-brand-teal/5"
                          >
                            <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all" />
                            <span className="line-clamp-2 font-medium">{source.title}</span>
                          </a>
                        </m.li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-brand-gold/20">
                      <p className="text-xs text-neutral-dark/60 leading-relaxed">
                        Les liens vers des sources externes sont fournis à titre informatif et ne constituent pas une approbation de leur contenu par SwitchInvest.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Keywords Section - Enhanced */}
              <Card className="border-brand-beige/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold font-serif text-brand-teal mb-5 flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-gold rounded-full" />
                    Mots-clés
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.map((keyword, index) => (
                      <m.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white transition-colors cursor-default px-3 py-1"
                        >
                          {keyword}
                        </Badge>
                      </m.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </m.aside>
          </div>
        </div>
      </section>

      {/* Related Posts Section - Enhanced with Animations */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-beige/30 relative overflow-hidden">
        {/* Background Decoration */}
        <m.div
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 right-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl"
        />
        <m.div
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-10 w-48 h-48 bg-brand-teal/5 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-teal px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold">Continuez Votre Lecture</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-teal mb-4">
              Articles Similaires
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Découvrez d'autres articles sur le même sujet
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts
              .filter(p => p.slug !== post.slug && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <m.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <m.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full border-brand-beige/30 hover:border-brand-gold/50 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                        <CardContent className="p-6 relative">
                          {/* Hover gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div className="relative z-10">
                            <Badge className="mb-4 bg-brand-gold text-neutral-dark group-hover:scale-105 transition-transform duration-300">
                              {relatedPost.category}
                            </Badge>
                            <h3 className="text-xl font-serif font-bold text-brand-teal mb-3 group-hover:text-brand-gold transition-colors line-clamp-2 leading-tight">
                              {relatedPost.title}
                            </h3>
                            <p className="text-sm text-neutral-dark/80 line-clamp-3 mb-4 leading-relaxed">
                              {relatedPost.excerpt}
                            </p>

                            {/* Read more link */}
                            <div className="flex items-center gap-2 text-brand-teal font-semibold text-sm group-hover:gap-3 transition-all">
                              <span>Lire l'article</span>
                              <m.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <ChevronRight className="w-4 h-4" />
                              </m.div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </m.div>
                  </Link>
                </m.div>
              ))}
          </div>

          {/* View All Articles CTA */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/blog">
              <m.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(15, 118, 110, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-brand-teal text-white rounded-lg font-semibold transition-all hover:bg-brand-teal/90 inline-flex items-center gap-2"
              >
                Voir Tous les Articles
                <ChevronRight className="w-5 h-5" />
              </m.button>
            </Link>
          </m.div>
        </div>
      </section>
    </main>
  )
}
