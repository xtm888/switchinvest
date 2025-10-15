"use client"

interface PlaceholderImageProps {
  category?: string
  className?: string
  variant?: 'blog' | 'property' | 'team' | 'testimonial'
}

/**
 * Aesthetic placeholder image component with gradient patterns
 * Used when actual images are not available
 */
export default function PlaceholderImage({
  category = "General",
  className = "",
  variant = 'blog'
}: PlaceholderImageProps) {

  // Color schemes based on variant
  const colorSchemes = {
    blog: {
      gradient: "from-brand-teal/30 via-brand-gold/20 to-cyan-500/30",
      icon: "📰",
      pattern: "M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Z"
    },
    property: {
      gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
      icon: "🏠",
      pattern: "m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
    },
    team: {
      gradient: "from-purple-500/30 via-pink-500/20 to-rose-500/30",
      icon: "👤",
      pattern: "M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
    },
    testimonial: {
      gradient: "from-amber-500/30 via-orange-500/20 to-yellow-500/30",
      icon: "💬",
      pattern: "M6 7.5a1 1 0 0 1 1-1h5.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L12.586 8.5H7a1 1 0 0 1-1-1Z"
    }
  }

  const scheme = colorSchemes[variant]

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${scheme.gradient} animate-gradient-shift`}>
        {/* Grid pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-teal"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float-delayed" />

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl md:text-7xl opacity-20 mb-2 filter drop-shadow-lg">
              {scheme.icon}
            </div>
            <div className="text-white/40 font-serif text-sm tracking-widest uppercase">
              {category}
            </div>
          </div>
        </div>

        {/* Decorative SVG icon */}
        <div className="absolute bottom-4 right-4 opacity-10">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d={scheme.pattern} clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  )
}
