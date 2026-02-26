import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';

interface Post {
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

interface SearchIslandProps {
  posts: Post[];
}

export default function SearchIsland({ posts }: SearchIslandProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredPosts = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.description.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  }, [query, posts]);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Search posts..."
          className="w-full pl-10 pr-10 py-2 rounded-lg border border-border bg-bg-primary text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {isOpen && query && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 right-0 mt-2 max-h-96 overflow-y-auto rounded-lg border border-border bg-bg-primary shadow-lg z-50">
            {filteredPosts.length > 0 ? (
              <ul className="divide-y divide-border">
                {filteredPosts.map((post) => (
                  <li key={post.slug}>
                    <a
                      href={`/blog/${post.slug}`}
                      onClick={() => {
                        setQuery('');
                        setIsOpen(false);
                      }}
                      className="block p-4 hover:bg-bg-secondary transition-colors"
                    >
                      <h3 className="font-semibold text-text-primary mb-1">{post.title}</h3>
                      <p className="text-sm text-text-secondary line-clamp-2">{post.description}</p>
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 rounded bg-bg-secondary text-text-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-4 text-center text-text-secondary">
                <p>No posts found matching "{query}"</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
