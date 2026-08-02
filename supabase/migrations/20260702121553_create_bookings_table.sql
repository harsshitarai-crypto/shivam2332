/*
# Create bookings table (single-tenant, no auth)

1. New Tables
- `bookings`
- `id` (uuid, primary key)
- `name` (text, not null) — requester's full name
- `email` (text, not null) — contact email
- `phone` (text) — contact phone
- `event_type` (text) — e.g. Classical Concert, Wedding, Workshop
- `location` (text) — event location/city
- `event_date` (text) — requested date (free text)
- `message` (text) — additional details
- `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `bookings`.
- Allow anon + authenticated INSERT only (public booking form). No SELECT/UPDATE/DELETE for anon to keep submissions private.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  event_type text,
  location text,
  event_date text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings" ON bookings FOR INSERT
TO anon, authenticated WITH CHECK (true);
