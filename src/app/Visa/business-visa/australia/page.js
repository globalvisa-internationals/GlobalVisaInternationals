import BusinessVisaPage from "@/Components/BusinessVisaPage";
import { buildMetadata } from "@/Components/buildMetadata";
import data from "@/Components/BusinessVisa/data/australia";

export const metadata = buildMetadata(data);

export default function Page() {
  return <BusinessVisaPage data={data} />;
}
