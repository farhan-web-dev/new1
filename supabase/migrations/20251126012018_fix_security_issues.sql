/*
  # Fix Database Security Issues

  ## Changes

  1. **Add Missing Foreign Key Indexes**
    - Add index on `blog_post_categories.category_id`
    - Add index on `blog_post_tags.tag_id`

  2. **Remove Unused Indexes**
    - Drop unused indexes on `leads` table
    - Drop unused index on `blog_posts.published_at`

  3. **Fix Multiple Permissive RLS Policies**
    - Consolidate duplicate SELECT policies on blog tables
    - Remove redundant policies that cause conflicts

  4. **Fix Function Search Path Mutability**
    - Set explicit search_path on all functions to prevent role mutable issues
*/

-- 1. Add missing foreign key indexes for optimal query performance
CREATE INDEX IF NOT EXISTS idx_blog_post_categories_category_id ON blog_post_categories(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_post_tags_tag_id ON blog_post_tags(tag_id);

-- 2. Drop unused indexes to reduce overhead
DROP INDEX IF EXISTS idx_leads_email;
DROP INDEX IF EXISTS idx_leads_journey_type;
DROP INDEX IF EXISTS idx_leads_created_at;
DROP INDEX IF EXISTS idx_leads_status;
DROP INDEX IF EXISTS idx_blog_posts_published_at;

-- 3. Fix multiple permissive policies by consolidating them

-- Fix blog_posts policies
DROP POLICY IF EXISTS "Anyone can view published blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can view all posts" ON blog_posts;

CREATE POLICY "Public can view published posts, authenticated can view all"
  ON blog_posts FOR SELECT
  USING (
    CASE 
      WHEN auth.role() = 'authenticated' THEN true
      ELSE (status = 'published' AND published_at <= now())
    END
  );

-- Fix blog_categories policies
DROP POLICY IF EXISTS "Anyone can view categories" ON blog_categories;
DROP POLICY IF EXISTS "Authenticated users can manage categories" ON blog_categories;

CREATE POLICY "Public can view categories"
  ON blog_categories FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert categories"
  ON blog_categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update categories"
  ON blog_categories FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete categories"
  ON blog_categories FOR DELETE
  TO authenticated
  USING (true);

-- Fix blog_tags policies
DROP POLICY IF EXISTS "Anyone can view tags" ON blog_tags;
DROP POLICY IF EXISTS "Authenticated users can manage tags" ON blog_tags;

CREATE POLICY "Public can view tags"
  ON blog_tags FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert tags"
  ON blog_tags FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update tags"
  ON blog_tags FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete tags"
  ON blog_tags FOR DELETE
  TO authenticated
  USING (true);

-- Fix blog_post_categories policies
DROP POLICY IF EXISTS "Anyone can view post-category relationships" ON blog_post_categories;
DROP POLICY IF EXISTS "Authenticated users can manage post-category relationships" ON blog_post_categories;

CREATE POLICY "Public can view post-category relationships"
  ON blog_post_categories FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert post-category relationships"
  ON blog_post_categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update post-category relationships"
  ON blog_post_categories FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete post-category relationships"
  ON blog_post_categories FOR DELETE
  TO authenticated
  USING (true);

-- Fix blog_post_tags policies
DROP POLICY IF EXISTS "Anyone can view post-tag relationships" ON blog_post_tags;
DROP POLICY IF EXISTS "Authenticated users can manage post-tag relationships" ON blog_post_tags;

CREATE POLICY "Public can view post-tag relationships"
  ON blog_post_tags FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert post-tag relationships"
  ON blog_post_tags FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update post-tag relationships"
  ON blog_post_tags FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete post-tag relationships"
  ON blog_post_tags FOR DELETE
  TO authenticated
  USING (true);

-- 4. Fix function search path mutability

-- Recreate update_updated_at_column function with explicit search_path
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;