import { HeroSkeleton, TeamMemberSkeleton, TimelineEventSkeleton } from "@/components/loading/SkeletonCard"
import { Skeleton } from "@/components/ui/skeleton"

export default function AboutLoading() {
  return (
    <main className="min-h-screen bg-brand-beige/20">
      {/* Hero Skeleton */}
      <HeroSkeleton />

      {/* Company Story Skeleton */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <div className="space-y-4 mt-8">
                <Skeleton className="h-32 w-full rounded-xl" />
                <Skeleton className="h-32 w-full rounded-xl" />
              </div>
            </div>
            <Skeleton className="aspect-video w-full rounded-xl" />
          </div>
        </div>
      </section>

      {/* Timeline Skeleton */}
      <section className="py-16 md:py-24 bg-brand-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {[...Array(4)].map((_, i) => (
              <TimelineEventSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Skeleton */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <TeamMemberSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
