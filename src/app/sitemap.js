// app/sitemap.js

export default async function sitemap() {
  return [
    {
      url: 'https://www.globalvisainternationals.com/',
      lastModified: new Date('2025-05-15'),
      changefreq: 'weekly',   // all lowercase
      priority: 1.0,
    },
    {
      url: 'https://www.globalvisainternationals.com/career',
      lastModified: new Date('2025-04-24'),
      changefreq: 'monthly',
      priority: 0.8,
    },
    // add more URLs here
  ]
}
