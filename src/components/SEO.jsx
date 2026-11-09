import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../data/company';

/**
 * Reusable SEO Component for React + Vite
 * Automatically manages <title>, <meta>, canonical <link>, Open Graph, Twitter Cards,
 * and JSON-LD Structured Data in document.head.
 */
export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  structuredData,
  noindex = false
}) {
  const location = useLocation();
  const baseUrl = COMPANY_INFO.website;

  const resolvedCanonical = canonical
    ? (canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`)
    : `${baseUrl}${location.pathname}`;

  const resolvedOgImage = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`)
    : `${baseUrl}/images/hero-transmission-sunset.jpg`;

  useEffect(() => {
    // 1. Document Title
    if (title) {
      document.title = title;
    }

    // Helper: set or create meta tag
    const setMetaTag = (attributeName, attributeValue, content) => {
      if (!content) return;
      let element = document.head.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper: set or create link tag
    const setLinkTag = (rel, href) => {
      if (!href) return;
      let element = document.head.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Primary Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }
    setMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('name', 'author', 'Pavan Sai Power Lines | Developed by Pusala Siddhartha');

    // 3. Canonical URL
    setLinkTag('canonical', resolvedCanonical);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', resolvedCanonical);
    setMetaTag('property', 'og:image', resolvedOgImage);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', COMPANY_INFO.name);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', resolvedOgImage);

    // 6. JSON-LD Structured Data
    const scriptId = 'pspl-page-structured-data';
    let scriptElement = document.getElementById(scriptId);

    if (structuredData) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      const dataToInject = Array.isArray(structuredData)
        ? { '@context': 'https://schema.org', '@graph': structuredData.filter(Boolean) }
        : structuredData;
      scriptElement.text = JSON.stringify(dataToInject);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    return () => {
      // Clean up dynamic structured data script on unmount
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [
    title,
    description,
    keywords,
    resolvedCanonical,
    resolvedOgImage,
    ogType,
    structuredData,
    noindex
  ]);

  return null;
}

