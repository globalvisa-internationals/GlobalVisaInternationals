"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

export default function RootLayout({ children }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  return (
    <html lang="en">

      <body className='body'>
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
