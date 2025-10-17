"use client"

import { useState } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import StructuredData from '@/components/structured-data'
import SectionDivider from '@/components/home/SectionDivider'
import ProjectCard from '@/components/portfolio/ProjectCard'
import ProjectLightbox, { ProjectData } from '@/components/portfolio/ProjectLightbox'
import {
  ChevronRight,
  Search
} from "lucide-react"

export default function PortfolioPage() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const openProject = (project: ProjectData) => {
    setSelectedProject(project)
    setIsLightboxOpen(true)
  }

  const closeProject = () => {
    setIsLightboxOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  // Enhanced portfolio items with additional properties for filtering
  const portfolioItems: ProjectData[] = [
    {
      title: "Résidence Les Jardins - Waterloo",
      description: "Projet résidentiel premium avec 24 appartements et 4 penthouses dans un cadre verdoyant.",
      longDescription: "Transformation complète d'un terrain industriel de 5000m² en une résidence moderne et écologique. Le projet comprend 24 appartements élégants, 4 penthouses avec terrasses panoramiques, des espaces verts paysagers, et des parkings souterrains. Tous les logements sont certifiés PEB A+ avec des finitions haut de gamme.",
      images: ["/images/portfolio/1.jpg", "/images/portfolio/1-2.jpg", "/images/portfolio/1-3.jpg"],
      location: "Waterloo, Brabant Wallon",
      type: "Développement Résidentiel",
      category: "residential",
      size: "5,000 m²",
      year: "2023",
      status: "completed",
      investment: "€4.8M",
      roi: "+22%",
      highlights: [
        "100% vendu avant achèvement des travaux",
        "Certification PEB A+ pour tous les logements",
        "Espaces verts paysagers de 1,200m²",
        "64 places de parking souterrain",
        "Finitions premium avec matériaux durables"
      ]
    },
    {
      title: "Business Center Louise",
      description: "Centre d'affaires premium au cœur de Bruxelles avec espaces de coworking et bureaux privés.",
      longDescription: "Rénovation complète d'un immeuble historique transformé en un centre d'affaires moderne de 3,200m². Le projet inclut des espaces de coworking flexibles, 25 bureaux privés, des salles de réunion équipées, et un rooftop lounge avec vue panoramique sur Bruxelles.",
      images: ["/images/portfolio/2.jpg", "/images/portfolio/2-2.jpg"],
      location: "Avenue Louise, Bruxelles",
      type: "Commercial & Coworking",
      category: "commercial",
      size: "3,200 m²",
      year: "2024",
      status: "active",
      investment: "€6.2M",
      roi: "+18%",
      highlights: [
        "95% de taux d'occupation maintenu",
        "Rooftop lounge de 400m²",
        "Équipements tech de pointe",
        "Certifié BREEAM Excellent",
        "25 entreprises hébergées"
      ]
    },
    {
      title: "Immeuble Mixte Grand-Place",
      description: "Rénovation patrimoniale d'un immeuble classé avec commerces et lofts de luxe.",
      longDescription: "Projet de rénovation respectueuse d'un bâtiment historique classé situé à proximité de la Grand-Place. Création de 3 commerces au rez-de-chaussée loués à des enseignes premium, et 12 lofts luxueux aux étages supérieurs avec poutres apparentes et volumes exceptionnels.",
      images: ["/images/portfolio/3.jpg", "/images/portfolio/3-2.jpg", "/images/portfolio/3-3.jpg"],
      location: "Centre-Ville, Bruxelles",
      type: "Mixte (Commercial + Résidentiel)",
      category: "mixed",
      size: "2,800 m²",
      year: "2022",
      status: "completed",
      investment: "€5.5M",
      roi: "+35%",
      highlights: [
        "Façade historique préservée",
        "Lofts vendus à €5,500/m²",
        "Commerces loués à des enseignes premium",
        "Volumes de 4.5m sous plafond",
        "Matériaux d'origine restaurés"
      ]
    },
    {
      title: "Villa Moderne - Uccle",
      description: "Villa contemporaine familiale avec architecture durable et domotique intégrée.",
      longDescription: "Construction d'une villa familiale ultra-moderne de 450m² sur un terrain arboré de 1,200m². Le projet intègre les dernières technologies de domotique, des panneaux solaires, une pompe à chaleur, et des finitions luxueuses. Grande baie vitrée donnant sur le jardin paysager.",
      images: ["/images/portfolio/4.jpg", "/images/portfolio/4-2.jpg"],
      location: "Uccle, Bruxelles",
      type: "Villa Familiale",
      category: "residential",
      size: "450 m²",
      year: "2024",
      status: "in-progress",
      investment: "€1.8M",
      highlights: [
        "Domotique complète intégrée",
        "Certification passive PEB A++",
        "Piscine intérieure chauffée",
        "Jardin paysager de 1,200m²",
        "Livraison prévue Q2 2024"
      ]
    }
  ]

  // Filter categories for the portfolio
  const filterCategories = [
    { id: "all", label: t("portfolio.filters.all") || "All Projects" },
    { id: "residential", label: t("portfolio.filters.residential") || "Residential" },
    { id: "commercial", label: t("portfolio.filters.commercial") || "Commercial" },
    { id: "mixed", label: t("portfolio.filters.mixed") || "Mixed Use" }
  ]

  // Filter portfolio items based on category and search query
  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = activeFilter === "all" || item.category === activeFilter
    const matchesSearch = !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <LazyMotion features={domAnimation} strict>
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-brand-beige/20"
    >
      <StructuredData type="portfolio" />

      {/* Hero Section - Modern design matching blog */}
      <section className="relative bg-gradient-to-b from-brand-teal to-brand-teal/90 py-20 text-white overflow-hidden">
        {/* Floating Background Elements */}
        <m.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-1/4 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"
        />
        <m.div
          animate={{
            y: [0, 25, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb navigation */}
          <div className="flex items-center justify-center md:justify-start text-sm mb-6 text-white/90 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              {t("common.home") || "Home"}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">
              {t("portfolio.title") || "Portfolio"}
            </span>
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              <span className="bg-gradient-to-r from-white via-brand-gold to-white bg-clip-text text-transparent animate-gradient-shift">
                {t("portfolio.title") || "Exemplary Assets Under Management"}
              </span>
            </h1>
            <p className="text-xl text-brand-beige/90 max-w-2xl mx-auto">
              {t("portfolio.subtitle") || "A selection of our successfully managed and developed properties across Belgium"}
            </p>
          </m.div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="wave" />

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter - Modern badge style matching blog */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {filterCategories.map((category) => (
              <Badge
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm ${
                  activeFilter === category.id
                    ? "bg-brand-gold text-neutral-dark hover:bg-brand-gold/90"
                    : "border-brand-teal text-brand-teal hover:bg-brand-teal/10"
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </Badge>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder={t("portfolio.searchPlaceholder") || "Search projects..."}
                className="w-full pl-10 pr-4 py-3 border border-brand-teal/30 rounded-lg focus:outline-none focus:border-brand-teal bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-teal/60 w-5 h-5" />
            </div>
          </div>

          {/* Portfolio Grid - Premium Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredItems.length > 0 ? (
                <>
                  {filteredItems.map((item, index) => (
                    <ProjectCard
                      key={index}
                      project={item}
                      index={index}
                      onClick={() => openProject(item)}
                    />
                  ))}
                </>
              ) : (
                <m.div
                  className="col-span-full flex flex-col items-center justify-center py-16 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gray-100 rounded-full p-4 mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    {t("portfolio.noResults.title") || "No projects found"}
                  </h3>
                  <p className="text-gray-500 max-w-md">
                    {t("portfolio.noResults.description") || "Try adjusting your search or filter criteria to find what you're looking for."}
                  </p>
                  <m.button
                    onClick={() => {setActiveFilter("all"); setSearchQuery("")}}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-brand-teal text-white px-6 py-2 rounded-md font-medium hover:bg-brand-teal/90 transition-colors"
                  >
                    {t("portfolio.noResults.reset") || "Reset filters"}
                  </m.button>
                </m.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Section - Modern design matching blog newsletter */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-brand-teal to-brand-teal/90 text-white border-none">
              <CardContent className="p-8 md:p-12 text-center">
                <Badge className="mb-4 bg-white/10 text-white border-white/20">
                  {t("portfolio.cta.label") || "Investment Opportunities"}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
                  {t("portfolio.cta.title") || "Interested in investing with us?"}
                </h3>
                <p className="text-brand-beige/90 mb-6 max-w-2xl mx-auto">
                  {t("portfolio.cta.description") || "Our expertise in the Belgian real estate market allows us to identify and develop high-potential properties. Contact us to discuss investment opportunities."}
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link href="/contact">
                    <m.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(218, 165, 32, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-serif px-8 py-3 rounded-lg transition-colors font-semibold"
                    >
                      {t("portfolio.cta.contactButton") || "Contact Us"}
                    </m.button>
                  </Link>
                  <Link href="/services">
                    <m.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 hover:bg-white/20 text-white font-serif px-8 py-3 rounded-lg transition-colors font-semibold border border-white/30"
                    >
                      {t("portfolio.cta.servicesButton") || "Our Services"}
                    </m.button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </m.div>
        </div>
      </section>

      {/* Project Lightbox */}
      <ProjectLightbox
        project={selectedProject}
        isOpen={isLightboxOpen}
        onClose={closeProject}
      />
    </m.main>
    </LazyMotion>
  )
}
