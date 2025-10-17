"use client"

import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, MapPin, Square, Calendar, TrendingUp, Building2, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

/**
 * Project Lightbox Component
 * Full-screen modal for viewing project details with image gallery
 */

export interface ProjectData {
  title: string
  description: string
  longDescription?: string
  images: string[]
  location: string
  type: string
  category: string
  size: string
  year: string
  status: string
  investment?: string
  roi?: string
  highlights?: string[]
}

interface ProjectLightboxProps {
  project: ProjectData | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectLightbox({ project, isOpen, onClose }: ProjectLightboxProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4">
              <m.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                >
                  <X className="w-6 h-6 text-neutral-dark" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[90vh] overflow-hidden">
                  {/* Left: Image Gallery */}
                  <div className="relative bg-neutral-dark h-[400px] lg:h-auto">
                    {/* Main Image */}
                    <div className="relative h-full w-full">
                      <Image
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Navigation Arrows */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                        >
                          <ChevronLeft className="w-6 h-6 text-neutral-dark" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                        >
                          <ChevronRight className="w-6 h-6 text-neutral-dark" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm">
                          {currentImageIndex + 1} / {project.images.length}
                        </div>
                      </>
                    )}

                    {/* Thumbnail Strip */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-16 left-0 right-0 px-4">
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          {project.images.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                idx === currentImageIndex
                                  ? "border-brand-gold scale-110"
                                  : "border-white/50 opacity-60 hover:opacity-100"
                              }`}
                            >
                              <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: Project Details */}
                  <div className="p-8 overflow-y-auto max-h-[600px] lg:max-h-none">
                    {/* Status Badge */}
                    <div className="flex gap-2 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === "completed"
                            ? "bg-green-100 text-green-700"
                            : project.status === "in-progress"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {project.status === "completed" ? "Terminé" : project.status === "in-progress" ? "En Cours" : "Actif"}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-gold/10 text-brand-gold">
                        {project.category === "residential" ? "Résidentiel" : project.category === "commercial" ? "Commercial" : "Mixte"}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-brand-teal mb-4 font-serif">{project.title}</h2>

                    {/* Meta Information */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-neutral-dark/60">Localisation</div>
                          <div className="font-semibold text-neutral-dark">{project.location}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Square className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-neutral-dark/60">Surface</div>
                          <div className="font-semibold text-neutral-dark">{project.size}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-neutral-dark/60">Année</div>
                          <div className="font-semibold text-neutral-dark">{project.year}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-neutral-dark/60">Type</div>
                          <div className="font-semibold text-neutral-dark">{project.type}</div>
                        </div>
                      </div>
                    </div>

                    {/* Investment Metrics */}
                    {(project.investment || project.roi) && (
                      <div className="bg-brand-beige/30 rounded-xl p-4 mb-6">
                        <div className="grid grid-cols-2 gap-4">
                          {project.investment && (
                            <div>
                              <div className="text-xs text-neutral-dark/60 mb-1">Investissement</div>
                              <div className="text-2xl font-bold text-brand-teal">{project.investment}</div>
                            </div>
                          )}
                          {project.roi && (
                            <div>
                              <div className="text-xs text-neutral-dark/60 mb-1">ROI</div>
                              <div className="text-2xl font-bold text-brand-gold flex items-center gap-1">
                                <TrendingUp className="w-5 h-5" />
                                {project.roi}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <div className="mb-6">
                      <h3 className="font-bold text-brand-teal mb-2">Description</h3>
                      <p className="text-neutral-dark/80 leading-relaxed">{project.longDescription || project.description}</p>
                    </div>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div>
                        <h3 className="font-bold text-brand-teal mb-3">Points Clés</h3>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-brand-gold mt-1">✓</span>
                              <span className="text-neutral-dark/80">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
