"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';
import { useEffect } from "react";
import "./globals.css";
import CookieProvider from "@/Components/CookieProvider";


import "./globals.css";

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  const siteVerificationCode = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const gclid = urlParams.get("gclid");

    if (gclid) {
      document.cookie = `gclid=${gclid}; path=/; max-age=${90 * 24 * 60 * 60}`;
    }
  }, []);

  const swgProductId = process.env.NEXT_PUBLIC_SWG_PRODUCT_ID;
  return (
    <html lang="en">
      <head>


        {/* NewsArticle */}
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
                clientOptions: {
                  theme: "light",
                  lang: "en-GB"
                },
              });
            });
          `}
        </Script>

        {/* Google Site Verification */}
        {siteVerificationCode && (
          <meta
            name="google-site-verification"
            content={siteVerificationCode}
          />
        )}

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
            {/* Google Ads tracking code */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}`}
              strategy="afterInteractive"
            />

            <Script id="gtag-init" strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}');
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');
          `}
            </Script>
          </>
        )}
      </head>

      <body className="body">
        <CookieProvider>
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
        </CookieProvider>
      </body>
    </html>
  );
}
