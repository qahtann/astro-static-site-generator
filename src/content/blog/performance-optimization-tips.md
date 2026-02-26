---
title: Performance Optimization Tips for Astro Sites
description: Advanced techniques to maximize your Astro site's performance and achieve perfect Lighthouse scores
publishDate: 2024-05-20
tags: ['Performance', 'Astro', 'Optimization', 'Lighthouse']
category: 'Guide'
image: '/images/performance.jpg'
author: 'Astro Team'
readingTime: 10
---

# Performance Optimization Tips for Astro Sites

Performance is one of Astro's core strengths. Let's explore advanced techniques to push your site's performance even further and achieve perfect Lighthouse scores.

## Image Optimization

Images are often the largest assets. Optimize them properly:

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<Image 
  src={heroImage}
  alt="Hero image"
  formats={['avif', 'webp']}
  loading="lazy"
/>
```

## Code Splitting

Astro automatically code-splits, but you can optimize further:

- Use dynamic imports for heavy components
- Lazy load islands with `client:visible`
- Split vendor bundles when needed

## Critical CSS

Inline critical CSS for above-the-fold content:

```astro
---
import '../styles/critical.css';
---

<style>
  /* Critical styles here */
</style>
```

## Preloading Resources

Preload important resources:

```astro
<head>
  <link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="prefetch" href="/blog" />
</head>
```

## Minimize JavaScript

- Use `client:idle` instead of `client:load` when possible
- Only hydrate what's necessary
- Consider using Preact instead of React for smaller bundles

## Font Optimization

Optimize web fonts:

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap;
  font-weight: 400;
}
```

## Caching Strategy

Set proper cache headers:

```javascript
// For static assets
Cache-Control: public, max-age=31536000, immutable

// For HTML
Cache-Control: public, max-age=0, must-revalidate
```

## Bundle Analysis

Analyze your bundles:

```bash
npm run build
npx astro build --analyze
```

## Performance Checklist

✅ Optimize images (WebP, AVIF, lazy loading)  
✅ Minimize JavaScript (islands architecture)  
✅ Use efficient fonts (font-display: swap)  
✅ Enable compression (gzip/brotli)  
✅ Set proper cache headers  
✅ Minimize CSS (remove unused styles)  
✅ Use CDN for static assets  
✅ Enable HTTP/2 or HTTP/3  

## Monitoring

Track performance in production:

- Google Analytics Core Web Vitals
- Real User Monitoring (RUM)
- Lighthouse CI
- WebPageTest

## Conclusion

Astro already provides excellent performance out of the box. With these optimizations, you can achieve near-perfect Lighthouse scores and provide an exceptional user experience.
