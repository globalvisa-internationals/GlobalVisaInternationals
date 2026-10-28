// Components/BusinessVisa/site.js
// ONE source of truth for business details used by every business-visa page.
// (Your old pages had different addresses, opening hours, logos and social links.
//  Edit here once and all pages update.)

export const SITE = {
  url: "https://www.globalvisainternationals.com",
  name: "Global Visa Internationals",
  phone: "+91-7022213466",
  phoneIntl: "+91-7022213466",
  whatsapp: "917022213466",
  email: "info@globalvisainternationals.com",
  foundingYear: 2016, // used only for the "N+ years" badge when a page doesn't set its own
  logo: "/gvilogo.png", // ⚠ some old pages used /logo.png: keep whichever file really exists in /public
  twitter: "@GLOBALVISA1505",
  address: {
    streetAddress: "GF-9, Business Point, MG Road",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560025",
    addressCountry: "IN",
  },
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "18:00",
  },
  geo: { lat: 12.9716, lng: 77.5946 },
  hasMap: "https://www.mappls.com/digipin/4P3-J4J-8849",
  sameAs: [
    "https://www.facebook.com/globalvisainternationals/",
    "https://www.instagram.com/globalvisa_internationals/",
    "https://www.linkedin.com/company/global-visa-internationals/",
    "https://x.com/GLOBALVISA1505",
    "https://www.youtube.com/@globalVisaInternationals",
    "https://www.google.com/maps/place/Global+Visa+Internationals",
  ],
};
