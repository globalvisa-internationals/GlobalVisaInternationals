// src/app/blog/layout.jsx
// No "use client" needed: next/script works in Server Components.
import Script from 'next/script';

export default function BlogLayout({ children }) {
  return (
    <>
      {/* Google Subscribe with Google (SWG) */}
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

      {/* div, not main: your root layout likely already renders <main> */}
      <div className="min-h-screen bg-slate-50/60">{children}</div>
    </>
  );
}
