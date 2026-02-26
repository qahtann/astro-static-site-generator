---
title: Optimizing SEO with Astro
description: A comprehensive guide to implementing SEO best practices in your Astro site
publishDate: 2024-02-10
tags: ['SEO', 'Astro', 'Performance']
category: 'Guide'
image: '/images/seo-guide.jpg'
author: 'Astro Team'
readingTime: 8
---

# Optimizing SEO with Astro

Search Engine Optimization (SEO) is crucial for any website. Astro makes it easy to implement SEO best practices with built-in features and excellent tooling. Let's explore how to maximize your site's search visibility.

## Meta Tags and Open Graph

Astro allows you to set meta tags per page easily:

```astro
---
const title = "My Page Title";
const description = "Page description";
---

<head>
  <title>{title}</title>
  <meta name="description" content={description} />
  
  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/og-image.jpg" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
</head>
```

## Structured Data (JSON-LD)

Structured data helps search engines understand your content:

```astro
---
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "datePublished": "2024-01-15",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  }
};
---

<script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
```

## Sitemap Generation

Astro's sitemap integration automatically generates sitemaps:

```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [sitemap()],
});
```

## Canonical URLs

Always include canonical URLs to avoid duplicate content issues:

```astro
<link rel="canonical" href={Astro.url.href} />
```

## Image Optimization

Use Astro's Image component for optimized images:

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/image.jpg';
---

<Image src={myImage} alt="Description" />
```

## Performance and SEO

Performance directly impacts SEO:

- **Core Web Vitals**: Fast loading improves rankings
- **Mobile-First**: Ensure responsive design
- **Accessibility**: Semantic HTML helps search engines understand content

## Best Practices Checklist

✅ Unique title and description for each page  
✅ Proper heading hierarchy (H1 → H2 → H3)  
✅ Alt text for all images  
✅ Semantic HTML elements  
✅ Fast page load times  
✅ Mobile-responsive design  
✅ HTTPS enabled  
✅ Clean URL structure  
✅ Internal linking strategy  

## Tools for Testing

- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema.org Validator](https://validator.schema.org/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/)

## Conclusion

SEO is an ongoing process, but Astro provides excellent foundations. Focus on quality content, technical SEO, and performance, and you'll see results.
