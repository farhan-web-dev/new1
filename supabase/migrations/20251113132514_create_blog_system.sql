/*
  # Blog System for Revival Family Chiropractic

  ## Overview
  Complete blog system optimized for SEO with categories, tags, and rich content support.

  ## New Tables
  
  ### `blog_posts`
  Core blog post table with full SEO support
  - `id` (uuid, primary key) - Unique identifier
  - `slug` (text, unique) - URL-friendly identifier for SEO
  - `title` (text) - Post title
  - `excerpt` (text) - Short description for previews and meta descriptions
  - `content` (text) - Full blog post content (supports markdown/HTML)
  - `featured_image` (text) - URL to featured image
  - `author` (text) - Author name
  - `status` (text) - Publication status (draft, published, scheduled)
  - `published_at` (timestamptz) - Publication date
  - `meta_title` (text) - SEO meta title (optional override)
  - `meta_description` (text) - SEO meta description (optional override)
  - `meta_keywords` (text) - SEO keywords
  - `read_time` (integer) - Estimated reading time in minutes
  - `view_count` (integer) - Number of views
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `blog_categories`
  Categories for organizing blog posts
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text, unique) - Category name
  - `slug` (text, unique) - URL-friendly identifier
  - `description` (text) - Category description
  - `created_at` (timestamptz) - Creation timestamp

  ### `blog_tags`
  Tags for blog posts
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text, unique) - Tag name
  - `slug` (text, unique) - URL-friendly identifier
  - `created_at` (timestamptz) - Creation timestamp

  ### `blog_post_categories`
  Many-to-many relationship between posts and categories
  - `post_id` (uuid, foreign key) - Reference to blog_posts
  - `category_id` (uuid, foreign key) - Reference to blog_categories

  ### `blog_post_tags`
  Many-to-many relationship between posts and tags
  - `post_id` (uuid, foreign key) - Reference to blog_posts
  - `tag_id` (uuid, foreign key) - Reference to blog_tags

  ## Security
  - Enable RLS on all tables
  - Public read access for published posts
  - Admin-only write access (implement auth later)

  ## SEO Features
  - URL slugs for clean URLs
  - Meta tags support
  - Publication dates for freshness signals
  - Read time for user engagement metrics
  - View count for popularity signals
*/

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  featured_image text,
  author text NOT NULL DEFAULT 'Dr. Bryan',
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'scheduled')),
  published_at timestamptz,
  meta_title text,
  meta_description text,
  meta_keywords text,
  read_time integer DEFAULT 5,
  view_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Categories Table
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Tags Table
CREATE TABLE IF NOT EXISTS blog_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Post-Category Junction Table
CREATE TABLE IF NOT EXISTS blog_post_categories (
  post_id uuid REFERENCES blog_posts(id) ON DELETE CASCADE,
  category_id uuid REFERENCES blog_categories(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

-- Post-Tag Junction Table
CREATE TABLE IF NOT EXISTS blog_post_tags (
  post_id uuid REFERENCES blog_posts(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES blog_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);
CREATE INDEX IF NOT EXISTS idx_blog_tags_slug ON blog_tags(slug);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_tags ENABLE ROW LEVEL SECURITY;

-- RLS Policies for blog_posts
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (status = 'published' AND published_at <= now());

CREATE POLICY "Authenticated users can view all posts"
  ON blog_posts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for blog_categories
CREATE POLICY "Anyone can view categories"
  ON blog_categories FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage categories"
  ON blog_categories FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for blog_tags
CREATE POLICY "Anyone can view tags"
  ON blog_tags FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage tags"
  ON blog_tags FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for junction tables
CREATE POLICY "Anyone can view post-category relationships"
  ON blog_post_categories FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage post-category relationships"
  ON blog_post_categories FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can view post-tag relationships"
  ON blog_post_tags FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage post-tag relationships"
  ON blog_post_tags FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert default categories
INSERT INTO blog_categories (name, slug, description) VALUES
  ('Chiropractic Care', 'chiropractic-care', 'Articles about chiropractic treatments and techniques'),
  ('Personal Injury', 'personal-injury', 'Recovery tips and information for injury patients'),
  ('Pediatric Health', 'pediatric-health', 'Children''s health and wellness information'),
  ('Prenatal Care', 'prenatal-care', 'Pregnancy and prenatal chiropractic care'),
  ('Nutrition & Wellness', 'nutrition-wellness', 'Holistic health and nutrition guidance'),
  ('Pain Relief', 'pain-relief', 'Natural pain management strategies')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample blog post
INSERT INTO blog_posts (
  slug,
  title,
  excerpt,
  content,
  author,
  status,
  published_at,
  meta_title,
  meta_description,
  meta_keywords,
  read_time
) VALUES (
  'benefits-of-chiropractic-care-charlotte',
  'The Life-Changing Benefits of Chiropractic Care in Charlotte',
  'Discover how holistic chiropractic care can transform your health and well-being. From pain relief to improved nervous system function, learn why Charlotte families choose Revival Family Chiropractic.',
  E'<article>\n<h2>Why Chiropractic Care Matters</h2>\n<p>Chiropractic care is more than just treating back pain—it''s about optimizing your nervous system for whole-body health. At Revival Family Chiropractic, we''ve helped hundreds of Charlotte families achieve lasting wellness through natural, holistic care.</p>\n\n<h2>Top Benefits of Regular Chiropractic Adjustments</h2>\n<ul>\n<li><strong>Pain Relief:</strong> Natural relief from back pain, neck pain, headaches, and migraines</li>\n<li><strong>Improved Mobility:</strong> Enhanced range of motion and flexibility</li>\n<li><strong>Better Sleep:</strong> Many patients report improved sleep quality</li>\n<li><strong>Stress Reduction:</strong> Lower cortisol levels and improved stress response</li>\n<li><strong>Stronger Immune System:</strong> Better nervous system function supports immunity</li>\n<li><strong>Enhanced Athletic Performance:</strong> Optimal alignment improves physical performance</li>\n</ul>\n\n<h2>What Makes Our Approach Different</h2>\n<p>At Revival Family Chiropractic, we focus on nervous system-centered care combined with functional nutrition. This holistic approach addresses the root causes of health issues, not just symptoms.</p>\n\n<h2>Who Can Benefit?</h2>\n<p>Everyone! From newborns to seniors, our gentle techniques are safe and effective for all ages. We specialize in:</p>\n<ul>\n<li>Families seeking preventative care</li>\n<li>Car accident and personal injury recovery</li>\n<li>Pregnant women preparing for birth</li>\n<li>Children with developmental concerns</li>\n<li>Athletes optimizing performance</li>\n</ul>\n\n<h2>Ready to Experience the Benefits?</h2>\n<p>Schedule your consultation today and discover how chiropractic care can transform your family''s health. Located in Oakhurst, serving all of Charlotte and surrounding areas.</p>\n</article>',
  'Dr. Bryan',
  'published',
  now(),
  'Benefits of Chiropractic Care | Revival Family Chiropractic Charlotte',
  'Discover the life-changing benefits of chiropractic care for Charlotte families. Natural pain relief, improved wellness, and holistic health solutions.',
  'chiropractic benefits, charlotte chiropractor, holistic health, pain relief, natural wellness, family chiropractic',
  7
) ON CONFLICT (slug) DO NOTHING;

-- Link sample post to categories
INSERT INTO blog_post_categories (post_id, category_id)
SELECT 
  (SELECT id FROM blog_posts WHERE slug = 'benefits-of-chiropractic-care-charlotte'),
  id
FROM blog_categories
WHERE slug IN ('chiropractic-care', 'pain-relief')
ON CONFLICT DO NOTHING;
