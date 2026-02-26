import type { SEOProps } from './types';
import { siteConfig } from './config';

export function generateSEOTags(props: SEOProps = {}, currentUrl?: string) {
  const {
    title = siteConfig.title,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    type = 'website',
    publishedTime,
    modifiedTime,
    tags = [],
  } = props;

  const fullTitle = title === siteConfig.title ? title : `${title} | ${siteConfig.title}`;
  const fullImage = image?.startsWith('http') ? image : `${siteConfig.url}${image || siteConfig.ogImage}`;
  const pageUrl = currentUrl || siteConfig.url;

  return {
    title: fullTitle,
    description,
    canonical: pageUrl,
    openGraph: {
      title: fullTitle,
      description,
      url: pageUrl,
      siteName: siteConfig.title,
      images: [{ url: fullImage }],
      locale: 'en_US',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      image: fullImage,
      creator: siteConfig.twitterHandle,
    },
  };
}

export function generateStructuredData(type: 'Article' | 'WebSite' | 'Blog', data?: Record<string, unknown>) {
  const base = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  if (type === 'Article' && data) {
    return {
      ...base,
      headline: data.headline,
      description: data.description,
      image: data.image,
      datePublished: data.datePublished,
      dateModified: data.dateModified || data.datePublished,
      author: {
        '@type': 'Person',
        name: data.author || siteConfig.author,
      },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.title,
      },
    };
  }

  if (type === 'WebSite') {
    return {
      ...base,
      name: siteConfig.title,
      description: siteConfig.description,
      url: siteConfig.url,
    };
  }

  return base;
}
