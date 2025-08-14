// next.config.mjs

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'], // Include .mdx pages
  webpack: (config, { isServer }) => {
    config.cache = false;
    return config;
  },

  // ✅ Add proper 301 redirects
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'globalvisainternationals.com',
          },
        ],
        destination: 'https://www.globalvisainternationals.com/:path*',
        permanent: true,
      },
      // Redirect HTTP to HTTPS (extra safeguard)
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.globalvisainternationals.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
