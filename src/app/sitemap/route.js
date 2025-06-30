import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export async function GET() {
  const links = [
     {
      url: '/',
      lastmod: '2025-05-15',
      changefreq: 'weekly',   // all lowercase
      priority: 1.0,
    },
    {
      url: '/about-us',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/tourist-visa/canada',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/tourist-visa/australia',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/tourist-visa/usa',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/tourist-visa/uk',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/tourist-visa/europe',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/tourist-visa/japan',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/tourist-visa/dubai',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/tourist-visa/new-zealand',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/tourist-visa/singapore',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/student-visa/canada',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/student-visa/australia',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/student-visa/usa',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/student-visa/uk',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/student-visa/europe',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/student-visa/new-zealand',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/permanent-residency-visa/canada',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/permanent-residency-visa/australia',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/refusal-visa/canada',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/refusal-visa/australia',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/refusal-visa/usa',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/refusal-visa/uk',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/student-visa/europe',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/Visa/refusal-visa/new-zealand',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog/us-green-card-2025-rules',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog/English-language-requirements-for-The-UK',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog/Schengen-Visa-Cascade',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog/Basava-Jayanti-2025',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog/Visa-Fee-Hack-for-Indian-Travelers',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog/Australia-PR-Visa',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/career',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/contact',
      lastmod: '2025-05-24',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog/uk-student-visa-rules-2025',
      lastmod: '2025-06-07',
      changefreq: 'monthly',
      priority: 1,
    },
    
    {
      url: '/blog/US-Visa-got-rejected-dont-wory',
      lastmod: '2025-06-07',
      changefreq: 'monthly',
      priority: 1,
    },
  
    
    {
      url: '/blog/10-Plus-Countries-You-Can-Visit-With-A-USA-Visa',
      lastmod: '2025-06-07',
      changefreq: 'monthly',
      priority: 1,
    },
        {
      url: '/blog/uk-evisa-digital-visa-replacement-2025',
      lastmod: '2025-06-18',
      changefreq: 'monthly',
      priority: 1,
    },
        {
      url: '/blog/germany-steady-harbor-indian-students',
      lastmod: '2025-06-18',
      changefreq: 'monthly',
      priority: 1,
    },
        {
      url: '/blog/US-Introduces-Sweeping-New-Rules-for-Foreign-Students-What-Indians-Need-to-Know',
      lastmod: '2025-06-23',
      changefreq: 'monthly',
      priority: 1,
    },
        {
      url: '/blog/UK-Family-Visa-Tax-on-Love-2025',
      lastmod: '2025-06-25',
      changefreq: 'monthly',
      priority: 1,
    },
        {
      url: '/blog/Canada-Plans-to-Introduce-New-Permanent-Residency-Program-in-2025/',
      lastmod: '2025-06-30',
      changefreq: 'monthly',
      priority: 1,
    },
    
   ];
const stream = new SitemapStream({
    hostname: 'https://www.globalvisainternationals.com',
  });

  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}