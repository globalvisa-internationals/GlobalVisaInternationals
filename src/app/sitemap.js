// app/sitemap.js

export async function GET() {
  const urls = [
    {
      loc: 'https://www.globalvisainternationals.com/',
      lastmod: '2025-05-15',
      changefreq: 'weekly',   // all lowercase
      priority: 1.0,
    },
    {
      loc: 'https://www.globalvisainternationals.com/about-us',
      lastmod: '2025-05-24',
      changefreq: 'monthly', 
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/tourist-visa/canada',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/tourist-visa/australia',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/tourist-visa/usa',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/tourist-visa/uk',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/tourist-visa/europe',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/tourist-visa/japan',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/tourist-visa/dubai',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/tourist-visa/new-zealand',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/tourist-visa/singapore',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/student-visa/canada',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/student-visa/australia',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/student-visa/usa',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/student-visa/uk',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/student-visa/europe',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/student-visa/new-zealand',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/permanent-residency-visa/canada',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/permanent-residency-visa/australia',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/refusal-visa/canada',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/refusal-visa/australia',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/refusal-visa/usa',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/refusal-visa/uk',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/student-visa/europe',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/Visa/refusal-visa/new-zealand',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/blog',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/blog/us-green-card-2025-rules',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/blog/English-language-requirements-for-The-UK',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/blog/Schengen-Visa-Cascade',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/blog/Basava-Jayanti-2025',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/blog/Visa-Fee-Hack-for-Indian-Travelers',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/blog/Australia-PR-Visa',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/career',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/contact',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://www.globalvisainternationals.com/blog/uk-student-visa-rules-2025',
      lastmod: '2025-06-07',
      changefreq: 'monthly',
      priority: 1,
    },

    {
      loc: 'https://www.globalvisainternationals.com/blog/US-Visa-got-rejected-dont-wory',
      lastmod: '2025-06-07',
      changefreq: 'monthly',
      priority: 1,
    },
    {
      loc: 'https://www.globalvisainternationals.com/blog/10-Plus-Countries-You-Can-Visit-With-A-USA-Visa',
      lastmod: '2025-06-07',
      changefreq: 'monthly',
      priority: 1,
    },
    {
      loc: 'https://www.globalvisainternationals.com/blog/uk-evisa-digital-visa-replacement-2025',
      lastmod: '2025-06-18',
      changefreq: 'monthly',
      priority: 1,
    },
    {
      loc: 'https://www.globalvisainternationals.com/blog/germany-steady-harbor-indian-students',
      lastmod: '2025-06-18',
      changefreq: 'monthly',
      priority: 1,
    },
    {
      loc: 'https://www.globalvisainternationals.com/blog/US-Introduces-Sweeping-New-Rules-for-Foreign-Students-What-Indians-Need-to-Know',
      lastmod: '2025-06-23',
      changefreq: 'monthly',
      priority: 1,
    },
    {
      loc: 'https://www.globalvisainternationals.com/blog/UK-Family-Visa-Tax-on-Love-2025',
      lastmod: '2025-06-25',
      changefreq: 'monthly',
      priority: 1,
    },
    {
      loc: 'https://www.globalvisainternationals.com/blog/Canada-Plans-to-Introduce-New-Permanent-Residency-Program-in-2025/',
      lastmod: '2025-06-30',
      changefreq: 'monthly',
      priority: 1,
    },

  ];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls
      .map(
        ({ loc, lastmod, changefreq, priority }) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
      )
      .join('')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });

}