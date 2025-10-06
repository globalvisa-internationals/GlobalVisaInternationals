/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Standard Next.js page extensions
  pageExtensions: ['js', 'jsx'],

  // ✅ Production-friendly redirects for SEO consistency
  async redirects() {
    return [
      // Redirect non-www → www
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
      // Redirect HTTP → HTTPS
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
      // Redirect dashed domain → canonical www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'globalvisa-internationals.com',
          },
        ],
        destination: 'https://www.globalvisainternationals.com/:path*',
        permanent: true,
      },
    ];
  },

  // ✅ Allow remote images (for Google profile avatars, etc.)
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'avatars.githubusercontent.com',
    ],
  },
};

export default nextConfig;
