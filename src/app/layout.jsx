import { Inter } from 'next/font/google';
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'; // Official Helper

// Custom Components
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ClientProviders from "@/Components/ClientProviders"; // The file we created in Step 1
import TrackingScripts from '@/Components/TrackingScripts'; // Your Meta/Clarity script
import GoogleAds from '@/Components/GoogleAds'; // The file we created in Step 2

import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

// NOW YOU CAN USE SEO METADATA
export const metadata = {
  title: "Your Website Title",
  description: "Your description here",
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  const swgProductId = process.env.NEXT_PUBLIC_SWG_PRODUCT_ID;
  const siteVerificationCode = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        {siteVerificationCode && (
          <meta name="google-site-verification" content={siteVerificationCode} />
        )}
      </head>

      <body className={`body ${inter.className}`}>

        {/* Client Logic Wrapper */}
        <ClientProviders>
          <NavBar />
          {children}
          <Footer />
        </ClientProviders>

        {/* --- TRACKING SECTION --- */}

        {/* 1. Google Analytics (Official - Only ONE instance) */}
        {gaId && <GoogleAnalytics gaId={gaId} />}

        {/* 2. Google Ads Config (If needed) */}
        <GoogleAds />

        {/* 3. Meta Pixel & Heatmaps */}
        <TrackingScripts />

        {/* 4. Subscribe with Google (SWG) */}
        <Script
          src="https://news.google.com/swg/js/v1/swg-basic.js"
          strategy="afterInteractive"
        />
        <Script id="swg-basic-init" strategy="afterInteractive">
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