/*
  # Fix Published Timestamps for Blog Posts

  1. Changes
    - Update existing posts to have published_at in the past
    - Add default value to published_at column to prevent future timestamp issues
    - Create trigger to automatically set published_at to current time when status changes to 'published'
  
  2. Purpose
    - Ensures blog posts are always queryable immediately after creation
    - Eliminates timezone and timestamp comparison issues
    - Automatically handles published_at when posts are published
*/

-- Update any existing posts with future dates to current timestamp
UPDATE blog_posts 
SET published_at = NOW()
WHERE status = 'published' AND published_at > NOW();

-- Create a function to automatically set published_at when status becomes 'published'
CREATE OR REPLACE FUNCTION set_published_at()
RETURNS TRIGGER AS $$
BEGIN
  -- If status is changing to 'published' and published_at is null or in the future
  IF NEW.status = 'published' AND (OLD.status IS NULL OR OLD.status != 'published') THEN
    IF NEW.published_at IS NULL OR NEW.published_at > NOW() THEN
      NEW.published_at = NOW();
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to run before insert or update
DROP TRIGGER IF EXISTS set_published_at_trigger ON blog_posts;
CREATE TRIGGER set_published_at_trigger
  BEFORE INSERT OR UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION set_published_at();

-- Alter the default value for published_at to be NOW()
ALTER TABLE blog_posts 
  ALTER COLUMN published_at SET DEFAULT NOW();