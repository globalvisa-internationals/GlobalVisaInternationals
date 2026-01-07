"use client";
import Script from "next/script";

export default function GoogleAds() {
    const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    const tagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

    if (!adsId && !tagId) return null;

    return (
        <Script
            id="google-ads-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          ${tagId ? `gtag('config', '${tagId}');` : ''}
          ${adsId ? `gtag('config', '${adsId}');` : ''}
        `,
            }}
        />
    );
}