import { COMPANY_INFO } from '../data/company.js';

/**
 * Generate LocalBusiness / WholesaleStore JSON-LD Schema
 * Strictly conforming to verified company information:
 * - Real NAP: Pavan Sai Power Lines, 6-6-269/159, Bansilalpet Road, Secunderabad
 * - Verified Phone: +91 97004 49684
 * - Verified Email: pavansaipowerlines@gmail.com
 * - ZERO invented ratings, reviews, opening hours, price ranges, or fake coordinates.
 */
export function getLocalBusinessSchema() {
  const baseUrl = COMPANY_INFO.website;

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'WholesaleStore'],
    '@id': `${baseUrl}/#localbusiness`,
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    description: COMPANY_INFO.description,
    url: baseUrl,
    telephone: COMPANY_INFO.contact.primaryPhone,
    email: COMPANY_INFO.contact.primaryEmail,
    image: `${baseUrl}/images/hero-transmission-sunset.jpg`,
    logo: `${baseUrl}/favicon.svg`,
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

/**
 * Generate Organization Schema
 */
export function getOrganizationSchema() {
  const baseUrl = COMPANY_INFO.website;

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    url: baseUrl,
    logo: `${baseUrl}/favicon.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.contact.primaryPhone,
      contactType: 'commercial desk',
      areaServed: ['Telangana', 'Andhra Pradesh', 'India']
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

/**
 * Generate WebSite Schema with SearchAction
 */
export function getWebSiteSchema() {
  const baseUrl = COMPANY_INFO.website;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/products?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

/**
 * Generate BreadcrumbList Schema
 * @param {Array<{name: string, url: string}>} items
 */
export function getBreadcrumbSchema(items = []) {
  const baseUrl = COMPANY_INFO.website;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  };
}

/**
 * Generate Product Schema for individual product pages
 */
export function getProductSchema(product) {
  if (!product) return null;
  const baseUrl = COMPANY_INFO.website;
  const productUrl = `${baseUrl}/products/${product.id}`;
  const imageUrl = product.image 
    ? (product.image.startsWith('http') ? product.image : `${baseUrl}${product.image}`) 
    : `${baseUrl}/images/hero-transmission-sunset.jpg`;

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
    brand: {
      '@type': 'Brand',
      name: COMPANY_INFO.name
    },
    manufacturer: {
      '@type': 'Organization',
      name: COMPANY_INFO.name
    },
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

/**
 * Generate ItemList Schema for Product Catalog
 */
export function getItemListSchema(products = []) {
  const baseUrl = COMPANY_INFO.website;

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Electrical Transmission & Distribution Materials Catalog',
    description: 'High-Tension & Low-Tension electrical hardware inventory by Pavan Sai Power Lines, Secunderabad.',
    numberOfItems: products.length,
    itemListElement: products.map((prod, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: prod.name,
      url: `${baseUrl}/products/${prod.id}`
    }))
  };
}
