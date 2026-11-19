import { SITE } from '@/data/refusal/_shared';
import { CAREER } from '@/data/career';
import { abs, orgNode } from '@/Components/RefusalPage/seo';

const URL = () => abs('/career');

export function buildCareerMetadata() {
  const url = URL();
  const image = abs(CAREER.ogImage);
  return {
    title: { absolute: CAREER.seoTitle },
    description: CAREER.seoDescription,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website', url, siteName: SITE.name, locale: 'en_IN',
      title: CAREER.seoTitle, description: CAREER.seoDescription,
      images: [{ url: image, width: 1200, height: 630, alt: "Careers at Global Visa Internationals - We're hiring" }],
    },
    twitter: { card: 'summary_large_image', site: SITE.twitter, title: CAREER.seoTitle, description: CAREER.seoDescription, images: [image] },
  };
}

const li = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

export function buildCareerJsonLd() {
  const url = URL();
  const jobs = CAREER.roles.map((r) => ({
    '@type': 'JobPosting',
    '@id': `${url}#${r.id}`,
    title: r.title,
    description: `<p>${r.overview}</p><p>Responsibilities:</p>${li(r.responsibilities)}<p>Requirements:</p>${li(r.requirements)}`,
    identifier: { '@type': 'PropertyValue', name: SITE.name, value: r.id },
    datePosted: CAREER.datePosted,
    ...(r.validThrough && { validThrough: r.validThrough }),
    employmentType: 'FULL_TIME',
    directApply: true,
    hiringOrganization: { '@type': 'Organization', name: SITE.name, sameAs: SITE.url, logo: abs(SITE.logo) },
    jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', ...SITE.address } },
    // numbers here match the salary text shown on the page
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: { '@type': 'QuantitativeValue', minValue: r.salary.min, maxValue: r.salary.max, unitText: r.salary.unit },
    },
  }));

  const graph = [
    orgNode(),
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: CAREER.seoTitle, description: CAREER.seoDescription, inLanguage: 'en-IN', breadcrumb: { '@id': `${url}#breadcrumb` } },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Careers' },
      ],
    },
    ...jobs,
  ];
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}
