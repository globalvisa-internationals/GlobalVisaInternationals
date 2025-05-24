"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import Script from "next/script";
import './globals.css'

export default function RootLayout({ children }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Global Visa Internationals" />
        <meta name="theme-color" content="#ffffff" />
        
        <meta name="msvalidate.01" content="A072CF47F2758C51FB3601704F6EE229" />

        {/* Open Graph */}
        <meta property="og:site_name" content="Global Visa Internationals" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        
        <meta
          property="og:url"
          content="https://www.globalvisainternationals.com/"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://www.globalvisainternationals.com/globalvisainternationals.webp"
        />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />

        {/* Favicon */}
        <link
          rel="icon"
          href="/globalvisainternationals.webp"
          type="image/webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="p:domain_verify" content="eb589ecd94088c14d3f8566f395cf4b7"/>
      </head>
      <body className='body'>
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
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Google AdSense */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        {adsenseClient && (
          <Script id="adsense-init" strategy="afterInteractive">
            {`
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "${adsenseClient}",
                enable_page_level_ads: true
              });
            `}
          </Script>
        )}

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Global Visa Internationals",
              url: "https://www.globalvisainternationals.com",
              logo:
                "https://www.globalvisainternationals.com/globalvisainternationals.webp",
              description:
                "Visa and immigration consultants in Bangalore helping with study, work, and PR visas for Canada, USA, UK, Australia and more.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "KA",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7022213466",
                contactType: "Customer Support",
              },
              sameAs: [
                "https://www.facebook.com/globalvisainternationals/",
                "https://www.instagram.com/globalvisa_internationals/",
                "https://twitter.com/GlobalVisaIntern",
                "https://www.linkedin.com/company/global-visa-internationals/",
              ],
            }),
          }}
        />

        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          scriptProps={{ async: true, defer: true, appendTo: "head" }}
        >
          <NavBar />
          {children}
          <Footer />
        </GoogleReCaptchaProvider>
      </body>
    </html>
  );
}
