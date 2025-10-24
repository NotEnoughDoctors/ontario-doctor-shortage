-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create table for Ontario doctors
CREATE TABLE public.doctors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cpso_number TEXT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  specialty TEXT,
  address TEXT,
  city TEXT,
  postal_code TEXT,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  phone TEXT,
  accepting_patients BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.doctors ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (doctor directory is public information)
CREATE POLICY "Doctors are viewable by everyone" 
ON public.doctors 
FOR SELECT 
USING (true);

-- Create index for location-based queries
CREATE INDEX idx_doctors_location ON public.doctors(latitude, longitude);

-- Create index for city searches
CREATE INDEX idx_doctors_city ON public.doctors(city);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_doctors_updated_at
BEFORE UPDATE ON public.doctors
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();