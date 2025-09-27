/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  // Basic configuration
  reactStrictMode: true,
  swcMinify: true,
  
  // Internationalization disabled for now
  // i18n: {
  //   locales: ['ar', 'en'],
  //   defaultLocale: 'ar',
  //   localeDetection: false,
  // },

  // Images optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'new-damietta-moving.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3002',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          // SEO headers
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1',
          },
        ],
      },
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
        source: '/videos/(.*)', 
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      }
    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Redirect old URL patterns to new structure
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/damietta-moving',
        destination: '/damietta',
        permanent: true,
      },
      {
        source: '/new-damietta-moving',
        destination: '/new-damietta',
        permanent: true,
      },
      // Redirect English paths to Arabic equivalents
      {
        source: '/furniture-moving',
        destination: '/damietta/furniture-moving',
        permanent: true,
      },
      {
        source: '/packing-services',
        destination: '/damietta/packing',
        permanent: true,
      }
    ]
  },

  // Rewrites for SEO-friendly URLs
  async rewrites() {
    return [
      // Support for Arabic URLs (optional)
      {
        source: '/نقل-عفش-دمياط',
        destination: '/damietta',
      },
      {
        source: '/نقل-عفش-دمياط-الجديدة',
        destination: '/new-damietta',
      }
    ]
  },

  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize for Arabic fonts
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    // Add support for MDX files in content directory
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
      ],
    });

    return config;
  },

  // Experimental features
  experimental: {
    // Enable app directory when ready
    optimizePackageImports: ['@tailwindcss/typography'],
  },

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://new-damietta-moving.com',
    SITE_NAME: 'شركة نقل عفش دمياط',
    COMPANY_PHONE: '+20572345678',
    COMPANY_WHATSAPP: '+201234567890',
    COMPANY_EMAIL: 'info@new-damietta-moving.com',
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Output configuration for static export if needed
  // trailingSlash: true,
  // distDir: 'dist',

  // Performance optimizations
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = withBundleAnalyzer(nextConfig)
