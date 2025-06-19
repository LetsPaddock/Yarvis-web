/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
  },
  experimental: {
    // Reduce memory usage during build
    memoryBasedWorkers: true,
  },
  // Optimize bundle size
  swcMinify: true,
}

module.exports = nextConfig 