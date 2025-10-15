import { HeroSkeleton } from "@/components/loading/SkeletonCard"
import { ProjectCardSkeleton } from "@/components/loading/SkeletonCard"
import { Skeleton } from "@/components/ui/skeleton"

export default function PortfolioLoading() {
  return (
    <main className="min-h-screen bg-brand-beige/20">
      {/* Hero Skeleton */}
      <HeroSkeleton />

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter Skeleton */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full" />
            ))}
          </div>

          {/* Search Bar Skeleton */}
          <div className="max-w-md mx-auto mb-12">
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>

          {/* Portfolio Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
