import { siteData } from '~/data/site-data';

export type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  ogImage?: string;
  noindex?: boolean;
};

export const buildTitle = (title?: string) =>
  title ? `${title} — GTY` : `${siteData.name} — ${siteData.tagline}`;

export const canonical = (pathname: string) =>
  new URL(pathname, siteData.url).toString();

export const localBusinessJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteData.name,
  url: siteData.url,
  email: siteData.contact.email,
  telephone: siteData.contact.phone,
  description: siteData.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteData.contact.address.street,
    postalCode: siteData.contact.address.postal,
    addressLocality: siteData.contact.address.city,
    addressCountry: 'NL',
  },
  areaServed: 'NL',
  foundingDate: String(siteData.business.foundedYear),
});

export const serviceJsonLd = (service: { name: string; description: string; url: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  name: service.name,
  description: service.description,
  url: service.url,
  provider: {
    '@type': 'ProfessionalService',
    name: siteData.name,
    url: siteData.url,
  },
  areaServed: 'NL',
});

export const faqJsonLd = (items: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.question,
    acceptedAnswer: { '@type': 'Answer', text: i.answer },
  })),
});

export const breadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
