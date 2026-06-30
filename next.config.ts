// next.config.ts
// Production-ready Next.js 15 configuration for ANITIO
// Optimized for: Core Web Vitals, SEO, Security Headers, Image Optimization

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ── Image Optimization ──────────────────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000, // 30 days
    dangerouslyAllowSVG: false,
    remotePatterns: [
      // Remove Unsplash — use only local images
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      // },
      // Allow only your own domain
      {
        protocol: 'https',
        hostname: 'www.anitioinstitute.com',
      },
    ],
  },

  // ── Compression ─────────────────────────────────────────────────────────
  compress: true,

  // ── Power Headers ───────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers (also help with E-E-A-T signals)
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache fonts
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Sitemap and robots should not be cached too long
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=43200, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },

  // ── Permanent Redirects ─────────────────────────────────────────────────
  // These complement middleware.ts redirects for static slug fixes
  async redirects() {
    return [
      // Old course URLs → new clean URLs (301 Permanent)
      {
        source: '/courses/adca_course',
        destination: '/courses/adca',
        permanent: true,
      },
      {
        source: '/courses/bcc_course',
        destination: '/courses/bcc',
        permanent: true,
      },
      {
        source: '/courses/tally_prime_gst_accounting',
        destination: '/courses/tally-prime',
        permanent: true,
      },
      {
        source: '/courses/advanced_excel_mis_reporting_course',
        destination: '/courses/advanced-excel',
        permanent: true,
      },
      {
        source: '/courses/Excel_PowerBI',
        destination: '/courses/excel-power-bi',
        permanent: true,
      },
      {
        source: '/courses/python_programming_certification',
        destination: '/courses/python-programming',
        permanent: true,
      },
      {
        source: '/courses/data_analytics',
        destination: '/courses/data-analytics',
        permanent: true,
      },
      {
        source: '/courses/graphic_designing',
        destination: '/courses/graphic-designing',
        permanent: true,
      },
      {
        source: '/courses/digital_marketing',
        destination: '/courses/digital-marketing',
        permanent: true,
      },
      {
        source: '/courses/skill_development_job_oriented_training',
        destination: '/courses/skill-development',
        permanent: true,
      },
      {
        source: '/courses/full_stack_web_development',
        destination: '/courses/full-stack-web-development',
        permanent: true,
      },
    ]
  },

  // ── Output ──────────────────────────────────────────────────────────────
  // Use 'standalone' for Docker/custom server, or omit for Vercel
  // output: 'standalone',

  // ── Experimental ────────────────────────────────────────────────────────
  experimental: {
    // Enable optimizeCss for production (requires critters package)
    // optimizeCss: true,
    // Optimize package imports
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // ── TypeScript ──────────────────────────────────────────────────────────
  typescript: {
    ignoreBuildErrors: false,
  },

  // ── ESLint ──────────────────────────────────────────────────────────────
  eslint: {
    ignoreDuringBuilds: false,
  },

  // ── Power Options ───────────────────────────────────────────────────────
  poweredByHeader: false, // Remove X-Powered-By header (security)
  reactStrictMode: true,
}

export default nextConfig
