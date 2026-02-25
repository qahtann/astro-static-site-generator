# 🚀 Astro Static Site Generator

<div align="center">

![Astro](https://img.shields.io/badge/Astro-4.0+-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A high-performance, modern Astro-based static site generator with dynamic components, excellent SEO, and hybrid rendering**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Deployment](#-deployment)

</div>

---

## ✨ Features

- 🎯 **Hybrid Rendering** - Static generation with dynamic islands for optimal performance
- ⚡ **High Performance** - Lighthouse 95+ scores with minimal JavaScript
- 🔍 **Excellent SEO** - Auto-generated sitemaps, structured data, Open Graph tags
- 📝 **MDX Support** - Write content in MDX with syntax highlighting
- 🌙 **Dark Mode** - Theme toggle with localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design that works everywhere
- ♿ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- 🏝️ **Islands Architecture** - React components for interactivity where needed
- 🎨 **Modern UI** - Clean, typography-focused design with Tailwind CSS v4
- 🔒 **Type Safety** - TypeScript strict mode throughout

## 🛠️ Tech Stack

### Core
- **[Astro 4+](https://astro.build/)** - The web framework for content-driven websites
- **[TypeScript](https://www.typescriptlang.org/)** - Strict mode for type safety
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework

### Integrations
- **[MDX](https://mdxjs.com/)** - Markdown with JSX components
- **[React](https://react.dev/)** - For interactive islands
- **[Shiki](https://shiki.matsu.io/)** - Syntax highlighting for code blocks
- **[Astro SEO](https://github.com/jonasmerlin/astro-seo)** - SEO optimization
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon library

### Features
- Content Collections with type-safe schemas
- Automatic sitemap generation
- Image optimization
- RSS feed support (via Astro)
- Robots.txt configuration

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/astro-static-site-generator.git
   cd astro-static-site-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Preview the production build:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 📁 Project Structure

```
astro-static-site-generator/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro
│   │   ├── ThemeToggle.tsx  # React island
│   │   ├── SearchIsland.tsx  # React island
│   │   └── CommentsIsland.tsx # React island
│   ├── content/            # Content collections
│   │   ├── blog/           # Blog posts (MDX)
│   │   └── config.ts       # Collection schemas
│   ├── layouts/            # Page layouts
│   │   └── BaseLayout.astro
│   ├── lib/                # Utilities and helpers
│   │   ├── config.ts       # Site configuration
│   │   ├── seo.ts          # SEO utilities
│   │   ├── types.ts        # TypeScript types
│   │   └── utils.ts        # Helper functions
│   ├── pages/              # File-based routing
│   │   ├── index.astro     # Home page
│   │   ├── blog/
│   │   │   ├── index.astro # Blog listing
│   │   │   └── [slug].astro # Blog post
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css      # Global styles
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## 📞 Support

- telegram: https://t.me/qahtan_n
- twitter:  https://x.com/qahtann_
