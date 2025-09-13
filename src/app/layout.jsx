"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';

import "./globals.css";

export default function RootLayout({ children }) {

  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}


      </head>

      <body className="body">
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          scriptProps={{ async: true, defer: true, appendTo: "head" }}
        >
          <NavBar />
          {children}
          <Analytics />
          <Footer />
          <SpeedInsights />
        </GoogleReCaptchaProvider>
      </body>
    </html>
  );
}
