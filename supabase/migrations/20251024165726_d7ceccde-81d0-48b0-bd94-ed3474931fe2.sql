-- Insert sample doctor data for Ontario cities
INSERT INTO public.doctors (cpso_number, first_name, last_name, specialty, address, city, postal_code, latitude, longitude, phone, accepting_patients) VALUES
-- Toronto doctors
('12345', 'Sarah', 'Johnson', 'Family Medicine', '123 University Ave', 'Toronto', 'M5G 1X8', 43.6532, -79.3832, '416-555-0101', true),
('12346', 'Michael', 'Chen', 'Cardiology', '456 Bay Street', 'Toronto', 'M5H 2Y4', 43.6481, -79.3809, '416-555-0102', false),
('12347', 'Emily', 'Patel', 'Pediatrics', '789 Yonge Street', 'Toronto', 'M4W 2G8', 43.6708, -79.3899, '416-555-0103', true),
-- Ottawa doctors
('12348', 'David', 'Leblanc', 'Family Medicine', '321 Wellington St', 'Ottawa', 'K1A 0A6', 45.4215, -75.6972, '613-555-0201', true),
('12349', 'Jennifer', 'Smith', 'Dermatology', '654 Bank Street', 'Ottawa', 'K1S 3T9', 45.4111, -75.6896, '613-555-0202', true),
-- Mississauga doctors
('12350', 'Robert', 'Wong', 'Internal Medicine', '987 Hurontario St', 'Mississauga', 'L5G 3H5', 43.5890, -79.6441, '905-555-0301', false),
('12351', 'Amanda', 'Martinez', 'Family Medicine', '147 City Centre Dr', 'Mississauga', 'L5B 1M5', 43.5933, -79.6424, '905-555-0302', true),
-- Hamilton doctors
('12352', 'James', 'Thompson', 'Orthopedics', '258 Main Street E', 'Hamilton', 'L8N 1H4', 43.2557, -79.8711, '905-555-0401', false),
('12353', 'Lisa', 'Anderson', 'Family Medicine', '369 King St E', 'Hamilton', 'L8N 1C1', 43.2501, -79.8660, '905-555-0402', true),
-- London doctors
('12354', 'Christopher', 'Brown', 'Psychiatry', '741 Richmond St', 'London', 'N6A 3H7', 42.9849, -81.2453, '519-555-0501', true),
('12355', 'Michelle', 'Davis', 'Family Medicine', '852 Dundas St', 'London', 'N5W 3A1', 42.9762, -81.2389, '519-555-0502', true),
-- Kingston doctors
('12356', 'Daniel', 'Wilson', 'Emergency Medicine', '963 Princess St', 'Kingston', 'K7L 1H3', 44.2312, -76.4860, '613-555-0601', false),
('12357', 'Rachel', 'Taylor', 'Family Medicine', '159 King St E', 'Kingston', 'K7L 2Z9', 44.2353, -76.4807, '613-555-0602', true),
-- Kitchener doctors
('12358', 'Kevin', 'Lee', 'Neurology', '753 King St W', 'Kitchener', 'N2G 1E2', 43.4516, -80.4925, '519-555-0701', true),
('12359', 'Nicole', 'Garcia', 'Family Medicine', '951 Victoria St N', 'Kitchener', 'N2B 3C3', 43.4643, -80.4920, '519-555-0702', true),
-- Windsor doctors
('12360', 'Paul', 'Miller', 'General Surgery', '357 Ouellette Ave', 'Windsor', 'N9A 1A3', 42.3149, -83.0364, '519-555-0801', false),
('12361', 'Jessica', 'Moore', 'Family Medicine', '486 Wyandotte St E', 'Windsor', 'N9A 3H6', 42.3168, -83.0289, '519-555-0802', true),
-- Barrie doctors
('12362', 'Steven', 'Martin', 'Family Medicine', '159 Dunlop St E', 'Barrie', 'L4M 1A6', 44.3894, -79.6903, '705-555-0901', true),
('12363', 'Laura', 'Clark', 'Obstetrics', '753 Yonge St', 'Barrie', 'L4N 4E1', 44.3667, -79.6827, '705-555-0902', true),
-- Thunder Bay doctors
('12364', 'Mark', 'White', 'Family Medicine', '951 Memorial Ave', 'Thunder Bay', 'P7B 3Y7', 48.4073, -89.2466, '807-555-1001', true),
('12365', 'Karen', 'Young', 'Radiology', '357 Red River Rd', 'Thunder Bay', 'P7B 1A4', 48.4285, -89.2107, '807-555-1002', false);