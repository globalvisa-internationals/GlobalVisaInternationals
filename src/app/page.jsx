import HomeAbout from "@/Components/HomeAbout";

const SITE_URL = "https://www.globalvisainternationals.com";

export const metadata = {
  title: "Visa Consultants in Bangalore | Global Visa Internationals",
  description: "Get guidance for tourist, student, business and permanent residency visa applications from Global Visa Internationals in Bangalore. Understand requirements and prepare your documents.",
  alternates: { canonical: SITE_URL + "/" },
  openGraph: {
    title: "Visa Consultants in Bangalore | Global Visa Internationals",
    description: "Practical visa application guidance for travel, study, work and permanent residency.",
    url: SITE_URL + "/",
    siteName: "Global Visa Internationals",
    type: "website",
    images: [{ url: "/GVI_Banner.webp", width: 1200, height: 630, alt: "Global Visa Internationals visa guidance" }],
  },
};

export default function HomePage() {
  return <HomeAbout />;
}
