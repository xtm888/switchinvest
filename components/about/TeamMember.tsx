"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"
import PlaceholderImage from "@/components/PlaceholderImage"

/**
 * Team Member Card Component
 * Premium card with hover effects, social links, and bio
 */

export interface TeamMemberData {
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  email?: string
  specialties?: string[]
}

interface TeamMemberProps {
  member: TeamMemberData
  index?: number
}

export default function TeamMember({ member, index = 0 }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-brand-beige/30 hover:border-brand-gold/50">
        {/* Image Container with Overlay */}
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-beige/20">
          <PlaceholderImage variant="team" category={member.role} />

          {/* Gradient Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-brand-teal/90 via-brand-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {/* Social Links - Appear on Hover */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-3 justify-center">
              {member.linkedin && (
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-brand-gold transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </motion.a>
              )}
              {member.email && (
                <motion.a
                  href={`mailto:${member.email}`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-brand-gold transition-colors"
                >
                  <Mail className="w-5 h-5 text-white" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-brand-teal mb-1 font-serif group-hover:text-brand-gold transition-colors">
            {member.name}
          </h3>
          <p className="text-sm font-semibold text-brand-gold mb-3">
            {member.role}
          </p>
          <p className="text-neutral-dark/80 text-sm leading-relaxed mb-4">
            {member.bio}
          </p>

          {/* Specialties Tags */}
          {member.specialties && member.specialties.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((specialty, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-brand-beige/50 text-brand-teal text-xs font-medium rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  )
}

/**
 * Team Section Wrapper Component
 */

interface TeamSectionProps {
  team: TeamMemberData[]
  title?: string
  subtitle?: string
}

export function TeamSection({
  team,
  title = "Notre Équipe",
  subtitle = "Des experts passionnés à votre service"
}: TeamSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-teal px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4 font-serif">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
