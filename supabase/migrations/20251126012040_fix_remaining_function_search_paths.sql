/*
  # Fix Remaining Function Search Path Issues

  ## Changes
  - Update `set_published_at` function with explicit search_path
  - Update `increment_view_count` function with explicit search_path

  ## Purpose
  - Prevents role mutable search_path security warnings
  - Ensures functions always execute in the public schema context
*/

-- Fix set_published_at function
CREATE OR REPLACE FUNCTION set_published_at()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status = 'published' AND (OLD.status IS NULL OR OLD.status != 'published') THEN
    IF NEW.published_at IS NULL OR NEW.published_at > NOW() THEN
      NEW.published_at = NOW();
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Fix increment_view_count function
CREATE OR REPLACE FUNCTION increment_view_count(post_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE blog_posts
  SET view_count = view_count + 1
  WHERE id = post_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;