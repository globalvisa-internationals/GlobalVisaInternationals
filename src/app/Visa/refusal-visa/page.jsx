// Optional hub page at /Visa/refusal-visa. Skip this file if you already have one.
import RefusalHub from '@/Components/RefusalPage/RefusalHub';
import { buildHubMetadata } from '@/Components/RefusalPage/seo';

export const metadata = buildHubMetadata();

export default function Page() {
  return <RefusalHub />;
}
