/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Properly configure CSS optimization with critters now that it's installed
  experimental: {
    optimizeCss: true,
    // Ensure critters is used correctly
    craCompression: false
  },
  // Ensure CSS modules are properly processed
  webpack: (config) => {
    // Ensure CSS modules are properly processed
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    // Add any necessary webpack configurations here
    
    return config;
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '**',
      },
    ],
    // Enable optimization for production, but allow unoptimized images during development
    unoptimized: process.env.NODE_ENV !== 'production',
    // Minimize image revalidation during builds
    minimumCacheTTL: 60,
  },
  // Enable performance optimization features
  reactStrictMode: true,
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Optimize CSS for faster loading
    optimizeCss: true,
  },
}

export default nextConfig
