// components/TrackingScripts.jsx
'use client' // This must be a client component to handle window events

import Script from 'next/script'

export default function TrackingScripts() {
    return (
        <>
            {/* --- META PIXEL (Facebook) --- */}
            <Script
                id="fb-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_META_PIXEL_ID'); // <--- REPLACE THIS
            fbq('track', 'PageView');
          `,
                }}
            />

            {/* --- MICROSOFT CLARITY (Heatmaps) --- */}
            <Script
                id="microsoft-clarity"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID"); // <--- REPLACE THIS
          `,
                }}
            />

            {/* --- DATA ENRICHMENT (Example: Clearbit) --- */}
            {/* Most enrichment tools work the same way. Paste their script here. */}
            {/* <Script id="clearbit" ... /> */}
        </>
    )
}