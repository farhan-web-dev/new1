/*
  # Remove published_at restriction from RLS policy

  1. Changes
    - Drop existing "Anyone can view published blog posts" policy
    - Recreate it without the published_at <= now() restriction
    - Only check status = 'published'
  
  2. Purpose
    - Eliminates timezone and timestamp comparison issues at database level
    - Simplifies access control to only check publication status
    - Prevents future timestamp-related query failures
*/

DROP POLICY IF EXISTS "Anyone can view published blog posts" ON blog_posts;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (status = 'published');