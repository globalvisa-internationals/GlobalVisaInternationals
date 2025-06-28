'use client';
import {
  BreadcrumbJsonLd,
  LocalBusinessJsonLd,
  WebPageJsonLd,
} from 'next-seo';

export default function SeoSchemaUSA() {
  return (
    <>
      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'Home', item: 'https://www.globalvisainternationals.com' },
          { position: 2, name: 'Tourist Visa', item: 'https://www.globalvisainternationals.com/visa/tourist-visa' },
          { position: 3, name: 'USA', item: 'https://www.globalvisainternationals.com/visa/tourist-visa/usa' },
        ]}
      />
      <LocalBusinessJsonLd
        type="TravelAgency"
        id="https://www.globalvisainternationals.com"
        name="Global Visa Internationals"
        description="Trusted USA Visa & Immigration Consultants in Bangalore since 2017."
        url="https://www.globalvisainternationals.com"
        telephone="+91-7022213466"
        address={{
          streetAddress: 'MG Road',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          postalCode: '560025',
          addressCountry: 'IN',
        }}
        geo={{ latitude: 12.9716, longitude: 77.5946 }}
        sameAs={[
          "https://www.facebook.com/globalvisainternationals/",
          "https://www.instagram.com/globalvisa_internationals/",
          "https://www.linkedin.com/company/global-visa-internationals/",
          "https://x.com/GLOBALVISA1505",
          "https://www.youtube.com/@globalVisaInternationals",
        ]}
        openingHours={[
          {
            opens: '10:00',
            closes: '18:00',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          },
        ]}
      />
      <WebPageJsonLd
        description="Complete guide to USA B-2 Tourist Visa application from India. Steps, costs, documentation, and expert help from Global Visa Internationals."
        id="https://www.globalvisainternationals.com/visa/tourist-visa/usa"
      />
    </>
  );
}
