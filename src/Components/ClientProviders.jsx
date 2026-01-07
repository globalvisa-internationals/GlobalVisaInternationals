"use client";

import { useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import CookieProvider from "@/Components/CookieProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';

export default function ClientProviders({ children }) {
    // Logic to handle Google Ads Click ID (GCLID)
    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);
            const gclid = urlParams.get("gclid");

            if (gclid) {
                document.cookie = `gclid=${gclid}; path=/; max-age=${90 * 24 * 60 * 60}`;
            }
        }
    }, []);

    return (
        <CookieProvider>
            <GoogleReCaptchaProvider
                reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                scriptProps={{ async: true, defer: true, appendTo: "head" }}
            >
                {children}
                <Analytics />
                <SpeedInsights />
            </GoogleReCaptchaProvider>
        </CookieProvider>
    );
}