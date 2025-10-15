"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Square, Calendar, ArrowRight } from "lucide-react"
import type { ProjectData } from "./ProjectLightbox"
import PlaceholderImage from "@/components/PlaceholderImage"

/**
 * Project Card Component
 * Premium card with hover effects for portfolio grid
 */

interface ProjectCardProps {
  project: ProjectData
  index: number
  onClick: () => void
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-brand-beige/30 hover:border-brand-gold/50 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-beige/20">
          <PlaceholderImage variant="property" category={project.type} />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                project.category === "residential"
                  ? "bg-brand-teal/90 text-white"
                  : project.category === "commercial"
                  ? "bg-blue-600/90 text-white"
                  : "bg-purple-600/90 text-white"
              }`}
            >
              {project.category === "residential" ? "Résidentiel" : project.category === "commercial" ? "Commercial" : "Mixte"}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                project.status === "completed"
                  ? "bg-green-600/90 text-white"
                  : project.status === "in-progress"
                  ? "bg-yellow-500/90 text-white"
                  : "bg-brand-gold/90 text-white"
              }`}
            >
              {project.status === "completed" ? "Terminé" : project.status === "in-progress" ? "En Cours" : "Actif"}
            </span>
          </div>

          {/* View Details Button - Appears on Hover */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-center gap-2 text-brand-teal font-semibold">
              <span>Voir les détails</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-neutral-dark/60 mb-3">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <Square className="w-4 h-4" />
              {project.size}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-brand-teal mb-2 font-serif group-hover:text-brand-gold transition-colors">
            {project.title}
          </h3>

          {/* Type */}
          <p className="text-sm font-semibold text-brand-gold/80 mb-3">{project.type}</p>

          {/* Description */}
          <p className="text-neutral-dark/80 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">{project.description}</p>

          {/* Investment Metrics */}
          {(project.investment || project.roi) && (
            <div className="flex gap-4 pt-4 border-t border-brand-beige/30">
              {project.investment && (
                <div>
                  <div className="text-xs text-neutral-dark/60">Investissement</div>
                  <div className="font-bold text-brand-teal">{project.investment}</div>
                </div>
              )}
              {project.roi && (
                <div>
                  <div className="text-xs text-neutral-dark/60">ROI</div>
                  <div className="font-bold text-brand-gold">{project.roi}</div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  )
}
