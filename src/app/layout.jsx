import { Inter } from 'next/font/google';
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';

// Custom Components
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ClientProviders from "@/Components/ClientProviders";
import TrackingScripts from '@/Components/TrackingScripts';
import GoogleAds from '@/Components/GoogleAds';

import "./globals.css";

// 1. OPTIMIZED FONTS: Use variable fonts for better performance
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Allows usage via CSS variables
});

// 2. SEPARATE VIEWPORT (Next.js 14+ Best Practice)
export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Accessibility: Don't block zooming
};

// 3. ROBUST METADATA (SEO & Social)
// 3. ROBUST METADATA (SEO & Social)
export const metadata = {
  // 1. BASE URL: Resolves all relative links (like images) automatically
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.globalvisainternationals.com'),

  // 2. TITLE: Dynamic template for inner pages
  title: {
    default: "Global Visa Internationals | Trusted Visa & Immigration Consultants",
    template: "%s | Global Visa Internationals", // e.g., "Canada Student Visa | Global Visa Internationals"
  },

  // 3. DESCRIPTION: Crafted from your "Our Story" for high CTR
  description: "More than just consultants—we are your partners. Global Visa Internationals provides expert guidance for Tourist, Visitor, Student, and Business visas (Canada, UK, USA, Australia, Europe). We simplify documentation, minimize errors, and ensure stress-free travel planning.",

  // 4. KEYWORDS: Critical for ranking
  keywords: [
    "Global Visa Internationals",
    "Best Student Visa Consultants India",
    "Immigration Service Provider",
    "Canada Student Visa",
    "Schengen Visa Agents",
    "Australia Tourist Visa",
    "USA Study Visa",
    "UK Study Visa",
    "Visa Interview Training",
    "Visa Documentation Checklist"
  ],

  // 5. AUTHORS & CREATOR
  authors: [{ name: "Global Visa Internationals Team", url: "https://www.globalvisainternationals.com" }],
  creator: "Global Visa Internationals",
  publisher: "Global Visa Internationals",

  // 6. OPEN GRAPH (Facebook, LinkedIn, WhatsApp previews)
  openGraph: {
    type: 'website',
    locale: 'en_IN', // Targeted for India audience
    url: 'https://www.globalvisainternationals.com',
    siteName: 'Global Visa Internationals',
    title: "Global Visa Internationals | Your Journey Starts Here",
    description: "Expert guidance for Student, Tourist, and Work visas. We simplify the complex immigration process for Canada, UK, USA, Australia, and Europe.",
    images: [
      {
        url: '/GVI_Banner.webp', // Ensure this file is in your /public folder
        width: 1200,
        height: 630,
        alt: 'Global Visa Internationals - Trusted Immigration Partners',
      },
    ],
  },

  // 7. TWITTER CARD (X)
  twitter: {
    card: 'summary_large_image',
    title: "Global Visa Internationals | Visa Experts",
    description: "Achieve your travel goals with confidence. Certified consultants for Student, Tourist, and Work visas.",
    site: '@GLOBALVISA1505', // Your X handle
    creator: '@GLOBALVISA1505',
    images: ['/GVI_Banner.webp'],
  },

  // 8. ROBOTS (Google Indexing)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 9. VERIFICATION (Search Console)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  // 10. APP LINKS (Optional but good for mobile SEO)
  appleWebApp: {
    title: 'Global Visa',
    statusBarStyle: 'default',
    startupImage: [
      '/GVI_Banner.webp',
    ],
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  const swgProductId = process.env.NEXT_PUBLIC_SWG_PRODUCT_ID;

  // 4. ORGANIZATION SCHEMA (For AI Search Engines)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Your Brand Name',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
    sameAs: [
      'https://twitter.com/yourhandle',
      'https://linkedin.com/company/yourhandle'
    ]
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* 5. RESOURCE HINTS: Speed up 3rd party connections */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://news.google.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Inject Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="body antialiased">

        {/* 6. ACCESSIBILITY: Skip to Main Content */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black">
          Skip to content
        </a>

        <ClientProviders>
          <NavBar />

          {/* 7. SEMANTIC HTML: Wrap children in main */}
          <main id="main-content" className="min-h-screen flex flex-col">
            {children}
          </main>

          <Footer />
        </ClientProviders>

        {/* --- PERFORMANCE & TRACKING SECTION --- */}

        {/* Load GA after hydration to prioritize LCP */}
        {gaId && <GoogleAnalytics gaId={gaId} />}

        <GoogleAds />

        {/* Ensure this component handles Consent Mode v2 */}
        <TrackingScripts />

        {/* Subscribe with Google - Optimized Load Strategy */}
        <Script
          src="https://news.google.com/swg/js/v1/swg-basic.js"
          strategy="lazyOnload" // 8. Don't block the main thread
        />
        <Script id="swg-basic-init" strategy="lazyOnload">
          {`
            (self.SWG_BASIC = self.SWG_BASIC || []).push(basicSubscriptions => {
              basicSubscriptions.init({
                type: "NewsArticle",
                isPartOfType: ["Product"],
                isPartOfProductId: "${swgProductId}",
                clientOptions: { theme: "light", lang: "en-GB" },
              });
            });
          `}
        </Script>

      </body>
    </html>
  );
}