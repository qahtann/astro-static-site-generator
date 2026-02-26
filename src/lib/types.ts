export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  publishDate: Date;
  tags: string[];
  category: string;
  image?: string;
  author: string;
  readingTime?: number;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: string;
  twitterHandle?: string;
  ogImage?: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}
