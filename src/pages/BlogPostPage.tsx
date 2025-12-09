import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag, User } from 'lucide-react';
import { getPostBySlug, BlogPost } from '../lib/supabase';
import { useSEO, breadcrumbSchema, articleSchema } from '../utils/seo';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      loadPost(slug);
    }
  }, [slug]);

  async function loadPost(postSlug: string) {
    try {
      const data = await getPostBySlug(postSlug);
      if (data) {
        setPost(data);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error loading post:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  }

  useSEO({
    title: post?.meta_title || (post ? `${post.title} | Revival Family Chiropractic Blog` : 'Blog Post | Revival Family Chiropractic'),
    description: post?.meta_description || post?.excerpt || 'Read our latest insights on holistic chiropractic care and wellness.',
    keywords: post?.meta_keywords || '',
    canonical: post ? `https://revivalfamilychiropractic.com/blog/${post.slug}` : undefined,
    ogType: post ? 'article' : 'website',
    article: post ? {
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
      author: post.author,
      section: post.categories?.[0]?.name || 'Health & Wellness',
    } : undefined,
    schema: post ? {
      '@context': 'https://schema.org',
      '@graph': [
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` },
        ]),
        articleSchema({
          headline: post.title,
          description: post.excerpt,
          datePublished: post.published_at,
          dateModified: post.updated_at,
          author: post.author,
          section: post.categories?.[0]?.name || 'Health & Wellness',
          url: `https://revivalfamilychiropractic.com/blog/${post.slug}`,
          image: post.featured_image,
          wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
          keywords: [...(post.categories?.map(c => c.name) || []), ...(post.tags?.map(t => t.name) || [])],
        }),
      ],
    } : undefined,
  });

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  if (loading) {
    return (
      <main className="pt-20 min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </main>
    );
  }

  if (notFound || !post) {
    return (
      <main className="pt-20 min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50" role="main" aria-label="Blog post">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <span
                key={category.id}
                className="inline-flex items-center gap-1 text-sm font-medium text-green-700 bg-green-100 px-4 py-2 rounded-full"
              >
                <Tag size={14} />
                {category.name}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className="text-sm text-gray-700 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{post.read_time} min read</span>
          </div>
        </div>

        {post.featured_image && (
          <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-2xl">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Health?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience the benefits of holistic chiropractic care. Schedule your consultation today and discover how we can help you achieve optimal wellness.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition-all transform hover:scale-105 font-medium text-lg shadow-lg"
          >
            Schedule Your Visit
          </Link>
        </div>
      </article>
    </main>
  );
}
