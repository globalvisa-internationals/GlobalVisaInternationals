"use client";

import Script from "next/script";

export default function BlogLayout({ children }) {
    return (
        <>
            {/* SWG Script */}
            <Script
                id="swg-basic"
                strategy="afterInteractive"
                src="https://news.google.com/swg/js/v1/swg-basic.js"
            />
            <Script id="swg-init" strategy="afterInteractive">
                {`
          (self.SWG_BASIC = self.SWG_BASIC || []).push(basicSubscriptions => {
            basicSubscriptions.init({
              type: "NewsArticle",
              isPartOfType: ["Product"],
              isPartOfProductId: "CAow9ObBDA:openaccess",
              clientOptions: { theme: "light", lang: "en-GB" },
            });
          });
        `}
            </Script>

            {children}
        </>
    );
}
