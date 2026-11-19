import { notFound } from 'next/navigation';
import RefusalPage from '@/Components/RefusalPage/RefusalPage';
import { buildMetadata } from '@/Components/RefusalPage/seo';
import { COUNTRIES, getCountry } from '@/data/refusal';

// Every page is pre-rendered to static HTML at build time and served from the CDN.
// Unknown slugs return a real 404 instead of rendering an empty template.
export const dynamicParams = false;

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }) {
  const { country } = await params; // `await` is harmless on Next 14 and required on Next 15+
  const data = getCountry(country);
  return data ? buildMetadata(data) : {};
}

export default async function Page({ params }) {
  const { country } = await params;
  const data = getCountry(country);
  if (!data) notFound();
  return <RefusalPage data={data} />;
}
