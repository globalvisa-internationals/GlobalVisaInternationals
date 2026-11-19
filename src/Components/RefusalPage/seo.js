// All SEO output for the refusal pages lives here: Next.js metadata + JSON-LD.
import { SITE } from '@/data/refusal/_shared';

const abs = (p) => (!p ? undefined : p.startsWith('http') ? p : `${SITE.url}${p}`);
export const pagePath = (slug) => `${SITE.refusalBasePath}/${slug}`;

export function buildMetadata(d) {
  const url = abs(pagePath(d.slug));
  const image = abs(d.image);
  const title = d.ogTitle ?? d.seoTitle;
  return {
    // "absolute" stops a layout title template from appending the brand twice
    title: { absolute: d.seoTitle },
    description: d.seoDescription,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE.name,
      locale: 'en_IN',
      title,
      description: d.seoDescription,
      ...(image && { images: [{ url: image, alt: `${d.name} visa refusal help` }] }),
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE.twitter,
      title,
      description: d.seoDescription,
      ...(image && { images: [image] }),
    },
  };
}

export function buildHubMetadata() {
  const url = abs(SITE.refusalBasePath);
  const title = `Visa Refusal Help from India | ${SITE.name}`;
  const description =
    'Visa refused? Pick your destination to see why applications get refused, your options to reapply or appeal, and get a free case review.';
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { type: 'website', url, siteName: SITE.name, locale: 'en_IN', title, description },
  };
}

const orgNode = () => ({
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: abs(SITE.logo),
  telephone: SITE.phoneTel,
  address: { '@type': 'PostalAddress', ...SITE.address },
  geo: { '@type': 'GeoCoordinates', ...SITE.geo },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: SITE.hours.days, opens: SITE.hours.opens, closes: SITE.hours.closes },
  ],
  sameAs: SITE.sameAs,
});

export function buildJsonLd(d) {
  const url = abs(pagePath(d.slug));
  const graph = [
    orgNode(),
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: d.seoTitle,
      description: d.seoDescription,
      inLanguage: 'en-IN',
      dateModified: d.updated,
      breadcrumb: { '@id': `${url}#breadcrumb` },
      about: { '@id': `${url}#service` },
      ...(d.image && { primaryImageOfPage: { '@type': 'ImageObject', url: abs(d.image) } }),
    },
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      serviceType: `${d.name} visa refusal assistance`,
      name: `${d.name} visa refusal help`,
      description: d.seoDescription,
      url,
      provider: { '@id': `${SITE.url}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
        ...(SITE.hubEnabled ? [{ '@type': 'ListItem', position: 2, name: 'Visa refusal help', item: abs(SITE.refusalBasePath) }] : []),
        { '@type': 'ListItem', position: SITE.hubEnabled ? 3 : 2, name: d.name },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: d.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];
  // escape "<" so the JSON can never close the script tag
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}
