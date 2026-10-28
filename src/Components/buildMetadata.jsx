// Components/BusinessVisa/buildMetadata.js
// Builds the Next.js metadata object from a country's data file.
import { SITE } from "./site";

export function buildMetadata(d) {
  const url = `${SITE.url}${d.pagePath}`;
  const img = `${SITE.url}${d.heroImg}`;
  return {
    metadataBase: new URL(SITE.url),
    title: d.meta.title,
    description: d.meta.description,
    keywords: d.meta.keywords,
    authors: [{ name: SITE.name }],
    robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
    alternates: { canonical: url },
    openGraph: {
      title: d.meta.og.title,
      description: d.meta.og.description,
      url,
      type: "website",
      siteName: SITE.name,
      locale: "en_IN",
      images: [{ url: img, width: 1200, height: 630, alt: d.meta.og.imageAlt || d.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: d.meta.tw.title,
      description: d.meta.tw.description,
      site: SITE.twitter,
      creator: SITE.twitter,
      images: [img],
    },
    other: {
      "geo.region": "IN-KA",
      "geo.placename": "Bengaluru",
      ICBM: `${SITE.geo.lat},${SITE.geo.lng}`,
    },
  };
}
