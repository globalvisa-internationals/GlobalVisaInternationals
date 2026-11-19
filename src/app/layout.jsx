import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ClientProviders from "@/Components/ClientProviders";
import TrackingScripts from "@/Components/TrackingScripts";
import GoogleAds from "@/Components/GoogleAds";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.globalvisainternationals.com";

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Best Visa Consultants in Bangalore | Global Visa Internationals",
    template: "%s | Global Visa Internationals",
  },
  description:
    "Explore student, tourist, business and immigration visa assistance from Global Visa Internationals in Bangalore. Get guidance on eligibility, documentation and application steps for destinations worldwide.",
  applicationName: "Global Visa Internationals",
  authors: [{ name: "Global Visa Internationals", url: SITE_URL }],
  creator: "Global Visa Internationals",
  publisher: "Global Visa Internationals",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Global Visa Internationals",
    title: "Global Visa Internationals | Visa Guidance in Bangalore",
    description:
      "Visa application guidance for students, travellers, professionals and families. Explore destinations and get help understanding documentation and next steps.",
    images: [
      {
        url: "/GVI_Banner.webp",
        width: 1200,
        height: 630,
        alt: "Global Visa Internationals visa consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Visa Internationals | Visa Guidance in Bangalore",
    description:
      "Explore student, tourist, business and immigration visa assistance from Bangalore.",
    images: ["/GVI_Banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  const swgProductId = process.env.NEXT_PUBLIC_SWG_PRODUCT_ID;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Global Visa Internationals",
    url: SITE_URL,
    logo: `${SITE_URL}/gvilogo.png`,
    telephone: "+91-7022213466",
    email: "operations@globalvisainternationals.com",
    sameAs: [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-3 focus:text-slate-900"
        >
          Skip to content
        </a>

        <ClientProviders>
          <NavBar />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ClientProviders>

        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        <GoogleAds />
        <TrackingScripts />

        {swgProductId ? (
          <>
            <Script
              src="https://news.google.com/swg/js/v1/swg-basic.js"
              strategy="lazyOnload"
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
          </>
        ) : null}
      </body>
    </html>
  );
}
