---
title: Implementing Dark Mode in Astro
description: A guide to adding dark mode support to your Astro site with theme persistence
publishDate: 2024-04-12
tags: ['Astro', 'CSS', 'Dark Mode', 'UX']
category: 'Tutorial'
image: '/images/dark-mode.jpg'
author: 'Astro Team'
readingTime: 5
---

# Implementing Dark Mode in Astro

Dark mode has become a standard feature in modern web applications. Let's implement a robust dark mode solution for your Astro site with theme persistence.

## CSS Variables Approach

Using CSS variables makes theme switching simple and performant:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1f2937;
  --border: #e5e7eb;
}

.dark {
  --bg-primary: #111827;
  --text-primary: #f3f4f6;
  --border: #374151;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
```

## Tailwind CSS Configuration

If using Tailwind, configure dark mode:

```javascript
// tailwind.config.mjs
export default {
  darkMode: 'class',
  // ...
}
```

## Theme Toggle Component

Create a React component for the toggle:

```tsx
// ThemeToggle.tsx
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light';
    setTheme(stored);
    document.documentElement.classList.toggle('dark', stored === 'dark');
  }, []);

  const toggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button onClick={toggle}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

## Preventing Flash

Add an inline script to prevent flash of unstyled content:

```astro
<script is:inline>
  (function() {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  })();
</script>
```

## System Preference Detection

Respect user's system preference:

```tsx
useEffect(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const stored = localStorage.getItem('theme');
  const initialTheme = stored || (prefersDark ? 'dark' : 'light');
  
  setTheme(initialTheme);
  document.documentElement.classList.toggle('dark', initialTheme === 'dark');
}, []);
```

## Best Practices

1. **Persist preference**: Use localStorage to remember user choice
2. **Prevent flash**: Load theme before page render
3. **Smooth transitions**: Add CSS transitions for theme changes
4. **Accessible**: Ensure sufficient color contrast in both modes

## Conclusion

Dark mode implementation in Astro is straightforward with CSS variables and a simple toggle component. Your users will appreciate the option!
