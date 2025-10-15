import { HeroSkeleton } from "@/components/loading/SkeletonCard"
import { ServiceCardSkeleton } from "@/components/loading/SkeletonCard"

export default function ServicesLoading() {
  return (
    <main className="min-h-screen bg-brand-beige/20">
      {/* Hero Skeleton */}
      <HeroSkeleton />

      {/* Services Grid Skeleton */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <ServiceCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
