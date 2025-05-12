"use client"

import { useState } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import StructuredData from '@/components/structured-data'
import { 
  ChevronRight, 
  MapPin, 
  Building2, 
  ArrowRight, 
  Square,
  Filter, 
  Search,
  Home,
  Euro 
} from "lucide-react"

export default function PortfolioPage() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Enhanced portfolio items with additional properties for filtering
  const portfolioItems = [
    {
      title: t("portfolio.items.0.title"),
      description: t("portfolio.items.0.description"),
      image: "/images/portfolio/1.jpg",
      location: t("portfolio.items.0.location"),
      type: t("portfolio.items.0.type"),
      category: "residential",
      size: t("portfolio.items.0.size"),
      year: "2023",
      status: "completed"
    },
    {
      title: t("portfolio.items.1.title"),
      description: t("portfolio.items.1.description"),
      image: "/images/portfolio/2.jpg",
      location: t("portfolio.items.1.location"),
      type: t("portfolio.items.1.type"),
      category: "commercial",
      size: t("portfolio.items.1.size"),
      year: "2024",
      status: "active"
    },
    {
      title: t("portfolio.items.2.title"),
      description: t("portfolio.items.2.description"),
      image: "/images/portfolio/3.jpg",
      location: t("portfolio.items.2.location"),
      type: t("portfolio.items.2.type"),
      category: "mixed-use",
      size: t("portfolio.items.2.size"),
      year: "2022",
      status: "completed"
    },
    {
      title: t("portfolio.items.3.title"),
      description: t("portfolio.items.3.description"),
      image: "/images/portfolio/4.jpg",
      location: t("portfolio.items.3.location"),
      type: t("portfolio.items.3.type"),
      category: "residential",
      size: t("portfolio.items.3.size"),
      year: "2024",
      status: "in-progress"
    }
  ]

  // Filter categories for the portfolio
  const filterCategories = [
    { id: "all", label: t("portfolio.filters.all") || "All Projects" },
    { id: "residential", label: t("portfolio.filters.residential") || "Residential" },
    { id: "commercial", label: t("portfolio.filters.commercial") || "Commercial" },
    { id: "mixed-use", label: t("portfolio.filters.mixed") || "Mixed Use" }
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
    <>
      {/* Hero section with breadcrumb navigation and decorative elements */}
      <section className="relative min-h-[50vh] bg-gradient-to-b from-brand-teal to-brand-teal/90 pt-24 pb-16 overflow-hidden text-white">
        {/* Add a gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/20 to-transparent opacity-70"></div>
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="/images/pattern-bg-new.png"
            alt="Background pattern"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb navigation */}
          <div className="flex items-center justify-center md:justify-start text-sm mb-6 text-white font-medium">
            <Link href="/" className="text-white/90 hover:text-white transition-colors group flex items-center">
              <span className="inline-block transform group-hover:-translate-x-1 transition-transform duration-300">
                {t("common.home") || "Home"}
              </span>
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="font-medium">
              {t("portfolio.title") || "Exemplary Assets Under Management"}
            </span>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mt-28">
            {/* Visual indicator line */}
            <motion.div 
              className="w-20 h-1 bg-brand-gold mb-6 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            
            {/* Main section heading */}
            <motion.h1 
              className="text-4xl md:text-5xl font-bold font-serif tracking-tight max-w-4xl leading-tight mx-auto text-shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t("portfolio.title") || "Exemplary Assets Under Management"}
            </motion.h1>
            
            <motion.p 
              className="text-lg text-white/90 max-w-2xl mt-6 font-serif mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("portfolio.subtitle") || "A selection of our successfully managed and developed properties across Belgium"}
          </motion.p>
          
          {/* Explore work button with enhanced aesthetics */}
          <div className="mt-10 flex justify-center">
            <button
              className="bg-brand-gold text-white px-12 py-3.5 text-base font-medium min-w-[200px] hover:bg-brand-gold/90 transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group"
              onClick={() => {
                const filtersSection = document.getElementById('portfolio-filters');
                if (filtersSection) {
                  filtersSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>{t("portfolio.explore") || "Explore Our Work"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio section with filters */}
      <section className="bg-brand-beige py-16 md:py-24 relative overflow-hidden">
        {/* Removed decorative elements as requested */}
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Section title */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-serif font-bold text-neutral-dark mb-1">
              {t("portfolio.filterTitle") || "Filter by Property Category"}
            </h2>
          </div>
          
          {/* Filter controls - exactly matching screenshot */}
          <div id="portfolio-filters" className="max-w-5xl mx-auto mb-10 border border-gray-200 bg-white rounded-none">
            <div className="flex flex-wrap items-center">
              {/* Filter tabs */}
              <div className="flex flex-wrap">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-4 py-2 text-sm font-medium ${activeFilter === "all" ? "bg-brand-teal text-white" : "hover:bg-gray-100"}`}
                >
                  All Projects
                </button>
                <button
                  onClick={() => setActiveFilter("residential")}
                  className={`px-4 py-2 text-sm font-medium ${activeFilter === "residential" ? "bg-brand-teal text-white" : "hover:bg-gray-100"}`}
                >
                  Residential
                </button>
                <button
                  onClick={() => setActiveFilter("commercial")}
                  className={`px-4 py-2 text-sm font-medium ${activeFilter === "commercial" ? "bg-brand-teal text-white" : "hover:bg-gray-100"}`}
                >
                  Commercial
                </button>
                <button
                  onClick={() => setActiveFilter("mixed-use")}
                  className={`px-4 py-2 text-sm font-medium ${activeFilter === "mixed-use" ? "bg-brand-teal text-white" : "hover:bg-gray-100"}`}
                >
                  Mixed Use
                </button>
              </div>
              
              {/* Search input */}
              <div className="relative ml-auto w-full md:w-64 px-2">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-200 bg-white focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </div>
          
          {/* Results count - exactly as in screenshot */}
          <div className="text-sm text-gray-600 mb-8">
            {`${filteredItems.length} properties`}
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredItems.length > 0 ? (
                <>
                  {filteredItems.map((item, index) => (
                    <div key={index} className="bg-white mb-16 h-full border border-gray-100 p-6 relative">
                      {/* Status badge - top right, no longer tied to image */}
                      <div className="absolute top-0 right-0">
                        <span className={`text-xs uppercase py-1 px-3 inline-block ${
                          item.status === 'completed' ? 'bg-neutral-800 text-white' :
                          item.status === 'in-progress' ? 'bg-brand-teal text-white' :
                          'bg-blue-600 text-white'
                        }`}>
                          {item.status === 'completed' ? 'COMPLETED' :
                           item.status === 'in-progress' ? 'IN PROGRESS' :
                           'ACTIVE'}
                        </span>
                      </div>
                      
                      {/* Category badge at top */}
                      <div className="flex gap-1 mb-5 mt-2">
                        <span className="text-xs py-1 px-2 font-medium bg-brand-gold text-white inline-flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block mr-1"></span>
                          {item.category === 'residential' ? 'Residential' :
                           item.category === 'commercial' ? 'Commercial' :
                           'Mixed Use'}
                        </span>
                        <span className="text-xs py-1 px-2 font-medium bg-white text-gray-800 border border-gray-100">{item.year}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-serif text-brand-teal font-bold mb-2">
                        {item.title}
                      </h3>
                      
                      {/* Location */}
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <MapPin className="w-3.5 h-3.5 mr-1" />
                        {item.location}
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm leading-normal text-gray-700 mb-6 border-b border-gray-100 pb-6">
                        {item.description}
                      </p>
                      
                      {/* Bottom row with size and view details */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center">
                          <Square className="w-3.5 h-3.5 mr-1 text-gray-700" />
                          <span className="text-sm font-medium">{item.size}</span>
                        </div>
                        
                        {/* View Details */}
                        <a href="#" className="text-sm text-brand-teal font-medium flex items-center group">
                          View Details
                          <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <motion.div 
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
                  <button 
                    onClick={() => {setActiveFilter("all"); setSearchQuery("")}}
                    className="mt-6 bg-brand-teal text-white px-6 py-2 rounded-md font-medium hover:bg-brand-teal/90 transition-colors"
                  >
                    {t("portfolio.noResults.reset") || "Reset filters"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      {/* Call to action section - matching design from Image 1 */}
      <section className="bg-brand-teal text-white py-16 relative overflow-hidden">
        <StructuredData type="portfolio" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-center mb-2">
              <div className="inline-block px-3 py-1 bg-white/10 text-sm font-medium">
                Investment Opportunities
              </div>
            </div>
            
            <h2 className="text-3xl font-serif font-bold mb-4">
              Interested in investing with us?
            </h2>
            
            <p className="text-base text-white/90 max-w-2xl mx-auto mb-8">
              Our expertise in the Belgian real estate market allows us to identify and develop
              high-potential properties. Contact us to discuss investment opportunities.
            </p>
            
            <div className="flex justify-center gap-5 mb-12">
              <Link 
                href="/contact" 
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-teal px-8 py-2.5 font-medium transition-colors inline-flex items-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              
              <Link 
                href="/services" 
                className="bg-white/10 border border-white/30 text-white px-8 py-2.5 font-medium hover:bg-white/20 transition-colors inline-flex items-center gap-2"
              >
                Our Services
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <div className="text-sm text-white/70">Trusted by</div>
              <div className="font-serif text-base font-semibold">IMMOBEL</div>
              <div className="font-serif text-base font-semibold">WDP</div>
              <div className="font-serif text-base font-semibold">ATENOR</div>
              <div className="font-serif text-base font-semibold">COFINIMMO</div>
              <div className="font-serif text-base font-semibold">Aedifica</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
