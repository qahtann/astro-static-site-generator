import { useState, FormEvent } from 'react';
import { Send, MessageCircle } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

interface CommentsIslandProps {
  postSlug: string;
}

export default function CommentsIsland({ postSlug }: CommentsIslandProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newComment: Comment = {
      id: Date.now().toString(),
      author: formData.name,
      content: formData.comment,
      date: new Date().toISOString(),
    };

    setComments([...comments, newComment]);
    setFormData({ name: '', email: '', comment: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="mt-12 space-y-6">
      <div className="flex items-center gap-2">
        <MessageCircle className="text-primary" size={24} />
        <h2 className="text-2xl font-bold text-text-primary">Comments</h2>
        {comments.length > 0 && (
          <span className="text-sm text-text-secondary">({comments.length})</span>
        )}
      </div>

      {comments.length > 0 && (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 rounded-lg border border-border bg-bg-secondary"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-text-primary">{comment.author}</span>
                <time className="text-sm text-text-secondary">
                  {new Date(comment.date).toLocaleDateString()}
                </time>
              </div>
              <p className="text-text-primary">{comment.content}</p>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-lg border border-border bg-bg-secondary">
        <h3 className="text-lg font-semibold text-text-primary">Leave a comment</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-bg-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-bg-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-text-primary mb-1">
            Comment *
          </label>
          <textarea
            id="comment"
            required
            rows={4}
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-border bg-bg-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={18} />
          {isSubmitting ? 'Submitting...' : 'Post Comment'}
        </button>
      </form>
    </div>
  );
}
