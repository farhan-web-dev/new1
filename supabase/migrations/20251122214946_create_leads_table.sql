/*
  # Create Leads Table for Journey Tracking

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `email` (text, unique, required)
      - `journey_type` (text, required) - tracks which path they chose: 'chiropractic', 'holistic', 'pediatric'
      - `name` (text, optional)
      - `phone` (text, optional)
      - `created_at` (timestamptz, default now)
      - `updated_at` (timestamptz, default now)
      - `status` (text, default 'new') - tracks lead status: 'new', 'contacted', 'converted'
      - `notes` (text, optional)

  2. Security
    - Enable RLS on `leads` table
    - Add policy for service role to manage leads
    - No public access (leads are sensitive business data)

  3. Indexes
    - Index on email for fast lookups
    - Index on journey_type for filtering
    - Index on created_at for sorting
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  journey_type text NOT NULL CHECK (journey_type IN ('chiropractic', 'holistic', 'pediatric')),
  name text,
  phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted')),
  notes text
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage leads"
  ON leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_journey_type ON leads(journey_type);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
