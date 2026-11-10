import { COMPANY_INFO } from '../data/company.js';

const SITE_URL = `${COMPANY_INFO.website}/`;

// LocalBusiness / WholesaleStore structured data using verified company details.
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'WholesaleStore'],
    '@id': `${SITE_URL}#localbusiness`,
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    description: COMPANY_INFO.description,
    url: SITE_URL,
    telephone: COMPANY_INFO.contact.primaryPhone,
    email: COMPANY_INFO.contact.primaryEmail,
    image: `${SITE_URL}images/hero-transmission-sunset.jpg`,
    logo: `${SITE_URL}favicon.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.location.street,
      addressLocality: COMPANY_INFO.location.city,
      addressRegion: COMPANY_INFO.location.state,
      postalCode: COMPANY_INFO.location.pincode,
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.contact.primaryPhone,
      contactType: 'sales',
      areaServed: ['IN', 'Telangana', 'Andhra Pradesh'],
      availableLanguage: ['English', 'Telugu', 'Hindi']
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Hyderabad' },
      { '@type': 'AdministrativeArea', name: 'Secunderabad' },
      { '@type': 'AdministrativeArea', name: 'Telangana' },
      { '@type': 'AdministrativeArea', name: 'Andhra Pradesh' },
      { '@type': 'Country', name: 'India' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical Transmission & Distribution Materials',
      itemListElement: COMPANY_INFO.categories.map((cat, idx) => ({
        '@type': 'OfferCatalog',
        name: cat.name,
        position: idx + 1
      }))
    }
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}favicon.svg`,
    image: `${SITE_URL}images/hero-transmission-sunset.jpg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.contact.primaryPhone,
      contactType: 'sales',
      areaServed: ['IN', 'Telangana', 'Andhra Pradesh']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.location.street,
      addressLocality: COMPANY_INFO.location.city,
      addressRegion: COMPANY_INFO.location.state,
      postalCode: COMPANY_INFO.location.pincode,
      addressCountry: 'IN'
    }
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}products?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function getBreadcrumbSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${COMPANY_INFO.website}${item.url}`
    }))
  };
}

export function getProductSchema(product) {
  if (!product) return null;

  const productUrl = `${COMPANY_INFO.website}/products/${product.id}`;
  const imageUrl = product.image
    ? product.image.startsWith('http')
      ? product.image
      : `${COMPANY_INFO.website}${product.image}`
    : `${SITE_URL}images/hero-transmission-sunset.jpg`;

  const additionalProperty = product.specifications
    ? Object.entries(product.specifications).map(([key, val]) => ({
        '@type': 'PropertyValue',
        name: key,
        value: val
      }))
    : [];

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name: product.name,
    image: imageUrl,
    description: product.shortDescription || product.fullDescription,
    sku: product.id,
    mpn: product.id,
    category: product.category,
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'INR',
      description: 'Commercial project and contractor pricing available upon enquiry',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: COMPANY_INFO.name
      }
    },
    ...(additionalProperty.length > 0 ? { additionalProperty } : {})
  };
}

export function getItemListSchema(products = [], categoryName = 'Electrical Materials') {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${categoryName} Catalog - ${COMPANY_INFO.name}`,
    description: `Verified inventory of ${categoryName} supplied by ${COMPANY_INFO.name}, Secunderabad, Telangana.`,
    numberOfItems: products.length,
    itemListElement: products.map((prod, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: prod.name,
      url: `${COMPANY_INFO.website}/products/${prod.id}`
    }))
  };
}

export function getFAQSchema(faqs = []) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
