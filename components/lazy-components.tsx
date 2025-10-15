'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Loading placeholders
const MapLoadingPlaceholder = () => (
  <div className="h-[50vh] w-full flex items-center justify-center bg-gray-100 rounded-lg animate-pulse">
    <p className="text-gray-500">Loading map...</p>
  </div>
);

const StatisticsLoadingPlaceholder = () => (
  <div className="w-full h-32 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
    <p className="text-gray-500">Loading statistics...</p>
  </div>
);

const TrustIndicatorsLoadingPlaceholder = () => (
  <div className="w-full py-10 border-t border-brand-gold/30 animate-pulse">
    <div className="h-8 w-48 bg-gray-100 mx-auto mb-6 rounded"></div>
    <div className="flex flex-wrap justify-center gap-6">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="h-6 w-32 bg-gray-100 rounded"></div>
      ))}
    </div>
  </div>
);

const ServiceModulesLoadingPlaceholder = () => (
  <div className="w-full py-12 animate-pulse">
    <div className="h-10 w-64 bg-gray-100 mx-auto mb-10 rounded"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="h-48 bg-gray-100 rounded-lg"></div>
      ))}
    </div>
  </div>
);

const InnovationPillarsLoadingPlaceholder = () => (
  <div className="w-full py-12 animate-pulse">
    <div className="h-10 w-64 bg-gray-100 mx-auto mb-10 rounded"></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {[1, 2, 3].map(i => (
        <div key={i} className="h-64 bg-gray-100 rounded-lg"></div>
      ))}
    </div>
  </div>
);

const CTALoadingPlaceholder = () => (
  <div className="w-full py-12 animate-pulse bg-gray-100 rounded-lg">
    <div className="h-10 w-64 mx-auto mb-6 bg-gray-200 rounded"></div>
    <div className="h-6 w-96 mx-auto mb-8 bg-gray-200 rounded"></div>
    <div className="h-10 w-32 mx-auto bg-gray-200 rounded"></div>
  </div>
);

// Type for the dynamic imports to fix TypeScript errors
type ComponentImport = () => Promise<{
  default: React.ComponentType<any>;
}>;

// Dynamically import heavy components with lazy loading
export const LazyLeafletMap = dynamic(
  () => import('@/components/leaflet-map'),
  {
    loading: MapLoadingPlaceholder,
    ssr: false, // Don't render on server side
  }
);

export const LazyStatistics = dynamic(
  () => import('@/components/statistics').then(mod => ({ default: mod.Statistics })),
  {
    loading: StatisticsLoadingPlaceholder,
  }
);

export const LazyTrustIndicators = dynamic(
  () => import('@/components/trust-indicators').then(mod => ({ default: mod.TrustIndicators })),
  {
    loading: TrustIndicatorsLoadingPlaceholder,
  }
);

export const LazyServiceModules = dynamic(
  () => import('@/components/service-modules').then(mod => ({ default: mod.ServiceModules })),
  {
    loading: ServiceModulesLoadingPlaceholder,
  }
);

export const LazyInnovationPillars = dynamic(
  () => import('@/components/innovation-pillars').then(mod => ({ default: mod.InnovationPillars })),
  {
    loading: InnovationPillarsLoadingPlaceholder,
  }
);

export const LazyCallToAction = dynamic(
  () => import('@/components/cta').then(mod => ({ default: mod.CallToAction })),
  {
    loading: CTALoadingPlaceholder,
  }
);

const FAQLoadingPlaceholder = () => (
  <div className="w-full py-12 animate-pulse">
    <div className="h-10 w-64 bg-gray-100 mx-auto mb-10 rounded"></div>
    <div className="space-y-4 max-w-4xl mx-auto">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="h-20 bg-gray-100 rounded-lg"></div>
      ))}
    </div>
  </div>
);

export const LazyFAQ = dynamic(
  () => import('@/components/faq').then(mod => ({ default: mod.FAQ })),
  {
    loading: FAQLoadingPlaceholder,
  }
);

const TestimonialsLoadingPlaceholder = () => (
  <div className="w-full py-12 animate-pulse bg-brand-beige/30">
    <div className="h-10 w-64 bg-gray-100 mx-auto mb-10 rounded"></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[1, 2, 3].map(i => (
        <div key={i} className="h-64 bg-white rounded-lg"></div>
      ))}
    </div>
  </div>
);

export const LazyTestimonials = dynamic(
  () => import('@/components/testimonials').then(mod => ({ default: mod.Testimonials })),
  {
    loading: TestimonialsLoadingPlaceholder,
  }
);

// Helper component for lazy loading images below the fold
interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const LazyImage = ({ src, alt, width, height, className }: LazyImageProps) => {
  return (
    <Suspense fallback={<div className={`bg-gray-100 animate-pulse ${className}`} style={{ width, height }}></div>}>
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        loading="lazy" 
        className={className}
      />
    </Suspense>
  );
};

// Helper component for lazy loading sections that are below the fold
export const LazySection = ({ children, threshold = 0.1 }: { children: React.ReactNode; threshold?: number }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={sectionRef}>
      {isVisible ? children : <div className="min-h-[200px]" />}
    </div>
  );
};
