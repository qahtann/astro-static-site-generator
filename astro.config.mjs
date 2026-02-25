import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { rehypePrettyCode } from 'rehype-pretty-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-static-site-generator.vercel.app',
  output: 'hybrid',
  integrations: [
    mdx({
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: 'github-dark',
            keepBackground: true,
            onVisitLine(node) {
              if (node.children.length === 0) {
                node.children = [{ type: 'text', value: ' ' }];
              }
            },
            onVisitHighlightedLine(node) {
              node.properties.className = ['line--highlighted'];
            },
            onVisitHighlightedWord(node) {
              node.properties.className = ['word--highlighted'];
            },
          },
        ],
      ],
    }),
    react(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
