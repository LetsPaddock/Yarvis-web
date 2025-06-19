/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    // Disable optimization for problematic webp files
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Add loader configuration for better error handling
    loader: 'default',
  },
  // Optimize bundle size
  swcMinify: true,
  // Add experimental features for better image handling
  experimental: {
    // Better memory management for images
    largePageDataBytes: 128 * 1000, // 128KB
  },
}

module.exports = nextConfig 