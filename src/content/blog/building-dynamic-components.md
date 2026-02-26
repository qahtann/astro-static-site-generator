---
title: Building Dynamic Components with Astro Islands
description: Learn how to add interactivity to your Astro site using component islands
publishDate: 2024-03-05
tags: ['Astro', 'React', 'Components', 'Islands']
category: 'Tutorial'
image: '/images/islands.jpg'
author: 'Astro Team'
readingTime: 6
---

# Building Dynamic Components with Astro Islands

Astro's islands architecture allows you to add interactivity exactly where you need it, without shipping unnecessary JavaScript. Let's explore how to build dynamic components.

## Understanding Islands

An "island" is an interactive component that's hydrated on the client. The rest of your page remains static HTML, resulting in minimal JavaScript.

## Client Directives

Astro provides several client directives to control when components hydrate:

### `client:load`

Hydrates immediately when the page loads:

```astro
---
import MyComponent from './MyComponent.tsx';
---

<MyComponent client:load />
```

### `client:idle`

Hydrates when the browser is idle (recommended for most cases):

```astro
<MyComponent client:idle />
```

### `client:visible`

Hydrates when the component enters the viewport:

```astro
<MyComponent client:visible />
```

### `client:media`

Hydrates based on a media query:

```astro
<MyComponent client:media="(max-width: 768px)" />
```

## React Components

Here's a simple React counter component:

```tsx
// src/components/Counter.tsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

Use it in an Astro page:

```astro
---
import Counter from '../components/Counter.tsx';
---

<Counter client:load />
```

## Vue Components

Astro also supports Vue:

```vue
<!-- Counter.vue -->
<template>
  <div>
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>
```

## Passing Props

You can pass props to island components:

```astro
---
import SearchBar from './SearchBar.tsx';
const posts = await getCollection('blog');
---

<SearchBar client:load posts={posts} />
```

## Best Practices

1. **Use `client:idle` by default**: Better performance than `client:load`
2. **Lazy load when possible**: Use `client:visible` for below-the-fold content
3. **Keep islands small**: Only include the interactive parts
4. **Prefer static HTML**: Only use islands when interactivity is needed

## Real-World Example

A search component that only loads when needed:

```tsx
// SearchIsland.tsx
import { useState } from 'react';

export default function SearchIsland({ posts }) {
  const [query, setQuery] = useState('');
  const results = posts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map(post => (
          <li key={post.slug}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Performance Impact

Islands architecture means:

- **Smaller bundles**: Only load what you need
- **Faster initial load**: Most content is static HTML
- **Better UX**: Progressive enhancement approach

## Conclusion

Astro islands give you the flexibility to add interactivity where needed while maintaining excellent performance. Use them wisely, and your site will be both fast and interactive.
