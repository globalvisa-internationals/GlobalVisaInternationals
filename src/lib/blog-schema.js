// src/lib/blog-schema.js
// JSON-LD builders. Uses a single @graph per page with stable @ids.
import { SITE, absoluteUrl } from './blog-config';

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;

export function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: { '@type': 'ImageObject', url: SITE.logo },
    sameAs: SITE.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-7022-213-466',
      contactType: 'customer service',
      email: 'operations@globalvisainternationals.com',
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'GF-9, Business Point, Brigade Road',
      addressLocality: 'Bangalore',
      postalCode: '560025',
      addressCountry: 'IN',
    },
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: SITE.locale,
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbNode(items, pageUrl) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function buildListGraph({ posts }) {
  const url = `${SITE.url}/blog`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationNode(),
      websiteNode(),
      {
        '@type': 'CollectionPage',
        '@id': `${url}#webpage`,
        url,
        name: `Blog | ${SITE.name}`,
        isPartOf: { '@id': SITE_ID },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        inLanguage: SITE.locale,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: posts.slice(0, 12).map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${url}/${p.slug}`,
            name: p.title,
          })),
        },
      },
      breadcrumbNode(
        [
          { name: 'Home', url: SITE.url },
          { name: 'Blog', url },
        ],
        url
      ),
    ],
  };
}

export function buildPostGraph({ post, slug }) {
  const url = `${SITE.url}/blog/${slug}`;
  const image = absoluteUrl(post.image);
  const keywords = Array.isArray(post.keywords) ? post.keywords.join(', ') : post.keywords;
  const isOrgAuthor = !post.author || post.author === SITE.name;

  const graph = [
    organizationNode(),
    websiteNode(),
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: post.title,
      isPartOf: { '@id': SITE_ID },
      primaryImageOfPage: { '@type': 'ImageObject', url: image },
      breadcrumb: { '@id': `${url}#breadcrumb` },
      inLanguage: SITE.locale,
    },
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      headline: post.title,
      description: post.excerpt || post.description || '',
      image: [image],
      author: isOrgAuthor
        ? { '@id': ORG_ID }
        : { '@type': 'Person', name: post.author },
      publisher: { '@id': ORG_ID },
      ...(post.date && { datePublished: post.date }),
      ...((post.updatedAt || post.date) && { dateModified: post.updatedAt || post.date }),
      ...(keywords && { keywords }),
      articleSection: post.category || 'Blog',
      inLanguage: SITE.locale,
    },
    breadcrumbNode(
      [
        { name: 'Home', url: SITE.url },
        { name: 'Blog', url: `${SITE.url}/blog` },
        { name: post.title, url },
      ],
      url
    ),
  ];

  if (Array.isArray(post.faq) && post.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: post.faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
