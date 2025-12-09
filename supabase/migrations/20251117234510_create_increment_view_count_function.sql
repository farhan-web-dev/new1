/*
  # Create increment_view_count function

  1. New Function
    - `increment_view_count(post_id)` - Atomically increments view count for a blog post
  
  2. Purpose
    - Provides efficient, race-condition-free view count incrementing
    - Avoids read-then-write pattern which can lose updates under concurrent access
*/

CREATE OR REPLACE FUNCTION increment_view_count(post_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE blog_posts
  SET view_count = view_count + 1
  WHERE id = post_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;