import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, Filter } from 'lucide-react';
import { getPublishedPosts, BlogPost } from '../lib/supabase';
import { useSEO, breadcrumbSchema, faqSchema } from '../utils/seo';
import FAQ from '../components/FAQ';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const faqs = [
    {
      question: 'What topics do you cover in your blog?',
      answer: 'Our blog covers a wide range of topics including chiropractic care techniques, personal injury recovery, pediatric health, prenatal wellness, functional nutrition, chronic condition management, and holistic healing approaches. We share patient success stories, educational articles, and practical health tips.',
    },
    {
      question: 'Can chiropractic care help with autoimmune conditions?',
      answer: 'Yes! We take a holistic approach to autoimmune conditions by addressing root causes through functional nutrition, gut health restoration, and nervous system optimization. Many patients with conditions like Crohn\'s disease, rheumatoid arthritis, and other autoimmune disorders have seen significant improvements with our comprehensive care approach.',
    },
    {
      question: 'How does functional nutrition support chiropractic care?',
      answer: 'Functional nutrition complements chiropractic adjustments by addressing internal stressors that affect your nervous system and overall health. By identifying food sensitivities, nutrient deficiencies, and gut health issues, we can optimize your body\'s healing response and achieve better long-term results.',
    },
  ];

  useSEO({
    title: 'Chiropractic Blog | Health Tips & Wellness Advice | Revival Family Chiropractic Charlotte',
    description: 'Expert insights on chiropractic care, personal injury recovery, pediatric health, prenatal wellness, and natural pain relief. Your trusted source for holistic health information in Charlotte, NC.',
    keywords: 'chiropractic blog, health tips charlotte, wellness advice, pain relief tips, chiropractic articles, holistic health blog, charlotte wellness',
    canonical: 'https://revivalfamilychiropractic.com/blog',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]),
        faqSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Revival Family Chiropractic Blog',
          description: 'Expert insights on chiropractic care, holistic health, and natural wellness',
          url: 'https://revivalfamilychiropractic.com/blog',
          publisher: {
            '@id': 'https://revivalfamilychiropractic.com/#organization',
          },
        },
      ],
    },
  });

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    try {
      const data = await getPublishedPosts();
      setPosts(data);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  const allFilters = useMemo(() => {
    const filters = new Set<string>();
    posts.forEach((post) => {
      post.categories?.forEach((cat) => filters.add(cat.name));
      post.tags?.forEach((tag) => filters.add(tag.name));
    });
    return Array.from(filters).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (selectedFilter === 'all') return posts;

    return posts.filter((post) => {
      const hasCategory = post.categories?.some((cat) => cat.name === selectedFilter);
      const hasTag = post.tags?.some((tag) => tag.name === selectedFilter);
      return hasCategory || hasTag;
    });
  }, [posts, selectedFilter]);

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50" role="main" aria-label="Blog">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Health & Wellness Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights on chiropractic care, holistic health, and natural wellness from Charlotte's trusted chiropractor
          </p>
        </div>

        {!loading && posts.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Filter size={20} className="text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-900">Filter by Topic</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`inline-flex items-center gap-1 px-4 py-2 rounded-full font-medium transition-all ${
                  selectedFilter === 'all'
                    ? 'bg-green-700 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                All Articles
                <span className="text-xs opacity-75">({posts.length})</span>
              </button>
              {allFilters.map((filter) => {
                const count = posts.filter((post) => {
                  const hasCategory = post.categories?.some((cat) => cat.name === filter);
                  const hasTag = post.tags?.some((tag) => tag.name === filter);
                  return hasCategory || hasTag;
                }).length;

                return (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`inline-flex items-center gap-1 px-4 py-2 rounded-full font-medium transition-all ${
                      selectedFilter === filter
                        ? 'bg-green-700 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <Tag size={14} />
                    {filter}
                    <span className="text-xs opacity-75">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
            <p className="mt-4 text-gray-600">Loading articles...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <p className="text-gray-600 text-lg">No blog posts available yet. Check back soon!</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <p className="text-gray-600 text-lg">No articles found for "{selectedFilter}". Try a different filter.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {post.featured_image && (
                  <div className="aspect-video overflow-hidden bg-gray-200">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  {((post.categories && post.categories.length > 0) || (post.tags && post.tags.length > 0)) && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories?.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedFilter(category.name)}
                          className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full hover:bg-green-200 transition-colors cursor-pointer"
                        >
                          <Tag size={12} />
                          {category.name}
                        </button>
                      ))}
                      {post.tags?.map((tag) => (
                        <button
                          key={tag.id}
                          onClick={() => setSelectedFilter(tag.name)}
                          className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full hover:bg-green-200 transition-colors cursor-pointer"
                        >
                          <Tag size={12} />
                          {tag.name}
                        </button>
                      ))}
                    </div>
                  )}

                  <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-green-700 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {formatDate(post.published_at)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {post.read_time} min
                      </span>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-green-700 font-medium hover:text-green-800 transition-colors"
                  >
                    Read More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        <section className="mt-16 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our holistic approach to health and wellness
            </p>
          </div>
          <FAQ items={faqs} />
        </section>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles on chiropractic care, wellness tips, and exclusive health insights delivered to your inbox.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition-all transform hover:scale-105 font-medium text-lg shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
