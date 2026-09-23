import { OFFICE_INFO } from "./data";

export function getLegalServiceSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://erthal-soares-advocacia.vercel.app";

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#legalservice`,
    name: OFFICE_INFO.name,
    alternateName: "Erthal Soares Advocacia",
    description:
      "Escritório de advocacia especializado em Direito Civil, Família, Consumidor, Previdenciário e Trabalhista em Curitiba/PR. Dra. Gisele Baptista Soares e Dra. Luiza Carolina Muniz Erthal.",
    url: siteUrl,
    telephone: `+${OFFICE_INFO.whatsappNumber}`,
    priceRange: "$$",
    image: `${siteUrl}/logo_sem_fundo_usarnomodoclaro.png`,
    logo: `${siteUrl}/logo_sem_fundo_usarnomodoclaro.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Paraná Office - Av. Paraná, 1755 - Sala 34 - Boa Vista",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "82510-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.3905,
      longitude: -49.2393,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      OFFICE_INFO.social.instagram,
    ],
  };
}