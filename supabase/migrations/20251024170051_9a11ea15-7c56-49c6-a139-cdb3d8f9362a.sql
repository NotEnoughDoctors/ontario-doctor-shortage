-- Add more comprehensive Ontario doctor data covering more cities
INSERT INTO public.doctors (cpso_number, first_name, last_name, specialty, address, city, postal_code, latitude, longitude, phone, accepting_patients) VALUES
-- Brampton doctors
('12366', 'Rajesh', 'Kumar', 'Family Medicine', '125 Main St N', 'Brampton', 'L6X 1N8', 43.7315, -79.7624, '905-555-1101', true),
('12367', 'Priya', 'Sharma', 'Pediatrics', '456 Queen St E', 'Brampton', 'L6V 1C4', 43.6866, -79.7624, '905-555-1102', true),
-- Markham doctors  
('12368', 'William', 'Zhang', 'Internal Medicine', '789 Highway 7', 'Markham', 'L3R 1N1', 43.8561, -79.3370, '905-555-1201', false),
('12369', 'Sophia', 'Liu', 'Dermatology', '321 Main St', 'Markham', 'L3P 1Y3', 43.8765, -79.2633, '905-555-1202', true),
-- Vaughan doctors
('12370', 'Anthony', 'Rossi', 'Cardiology', '654 Major Mackenzie Dr', 'Vaughan', 'L4H 4A5', 43.8361, -79.5084, '905-555-1301', true),
('12371', 'Maria', 'DeSousa', 'Family Medicine', '987 Weston Rd', 'Vaughan', 'L4L 8C3', 43.7767, -79.5633, '905-555-1302', true),
-- Oshawa doctors
('12372', 'Richard', 'Foster', 'Emergency Medicine', '147 King St E', 'Oshawa', 'L1H 1B9', 43.8971, -78.8658, '905-555-1401', false),
('12373', 'Elizabeth', 'Green', 'Family Medicine', '258 Simcoe St N', 'Oshawa', 'L1G 4T2', 43.8971, -78.8569, '905-555-1402', true),
-- St. Catharines doctors
('12374', 'George', 'Papadopoulos', 'Orthopedics', '369 Ontario St', 'St. Catharines', 'L2R 5L3', 43.1594, -79.2469, '905-555-1501', true),
('12375', 'Catherine', 'MacDonald', 'Family Medicine', '741 St. Paul St', 'St. Catharines', 'L2R 3M8', 43.1729, -79.2396, '905-555-1502', true),
-- Guelph doctors
('12376', 'Thomas', 'O''Brien', 'Psychiatry', '852 Wyndham St N', 'Guelph', 'N1H 4E8', 43.5448, -80.2482, '519-555-1601', true),
('12377', 'Margaret', 'Campbell', 'Family Medicine', '963 Gordon St', 'Guelph', 'N1G 2W1', 43.5312, -80.2279, '519-555-1602', true),
-- Cambridge doctors
('12378', 'Andrew', 'Singh', 'Neurology', '159 Hespeler Rd', 'Cambridge', 'N1R 6V6', 43.3616, -80.3144, '519-555-1701', false),
('12379', 'Patricia', 'Wang', 'Family Medicine', '753 Main St', 'Cambridge', 'N1R 1W5', 43.3971, -80.3114, '519-555-1702', true),
-- Sudbury doctors
('12380', 'Joseph', 'Leblanc', 'Family Medicine', '357 Elm St', 'Sudbury', 'P3C 1V3', 46.4917, -80.9930, '705-555-1801', true),
('12381', 'Nancy', 'Tremblay', 'Obstetrics', '486 Paris St', 'Sudbury', 'P3E 3C8', 46.4906, -80.9655, '705-555-1802', true),
-- Sault Ste. Marie doctors
('12382', 'Charles', 'Romano', 'General Surgery', '951 Great Northern Rd', 'Sault Ste. Marie', 'P6B 4Z9', 46.5122, -84.3255, '705-555-1901', false),
('12383', 'Linda', 'Peterson', 'Family Medicine', '357 Queen St E', 'Sault Ste. Marie', 'P6A 1Z3', 46.5152, -84.3468, '705-555-1902', true),
-- Peterborough doctors
('12384', 'Robert', 'Harrison', 'Family Medicine', '753 George St N', 'Peterborough', 'K9H 3T2', 44.3091, -78.3197, '705-555-2001', true),
('12385', 'Barbara', 'Mitchell', 'Pediatrics', '159 Hunter St W', 'Peterborough', 'K9H 2L1', 44.3007, -78.3256, '705-555-2002', true),
-- Sarnia doctors
('12386', 'Edward', 'Cooper', 'Cardiology', '357 Christina St N', 'Sarnia', 'N7T 5V5', 42.9745, -82.4066, '519-555-2101', true),
('12387', 'Dorothy', 'Bennett', 'Family Medicine', '486 East St N', 'Sarnia', 'N7T 6Y4', 42.9836, -82.4019, '519-555-2102', true),
-- North Bay doctors
('12388', 'Kenneth', 'Roy', 'Family Medicine', '951 McKeown Ave', 'North Bay', 'P1B 7K9', 46.3091, -79.4608, '705-555-2201', true),
('12389', 'Helen', 'Gagnon', 'Radiology', '357 Main St E', 'North Bay', 'P1B 1B2', 46.3091, -79.4469, '705-555-2202', false),
-- Niagara Falls doctors
('12390', 'Brian', 'Richards', 'Emergency Medicine', '753 Lundy''s Lane', 'Niagara Falls', 'L2H 1H4', 43.1041, -79.0647, '905-555-2301', true),
('12391', 'Susan', 'Murphy', 'Family Medicine', '159 Queen St', 'Niagara Falls', 'L2E 2L3', 43.0896, -79.0849, '905-555-2302', true),
-- Belleville doctors
('12392', 'Donald', 'Scott', 'Orthopedics', '357 Front St', 'Belleville', 'K8N 2Y8', 44.1628, -77.3832, '613-555-2401', false),
('12393', 'Sharon', 'Stewart', 'Family Medicine', '486 Dundas St E', 'Belleville', 'K8N 1E2', 44.1628, -77.3753, '613-555-2402', true),
-- Cornwall doctors
('12394', 'Gary', 'Dupont', 'Family Medicine', '951 Pitt St', 'Cornwall', 'K6J 3S2', 45.0275, -74.7300, '613-555-2501', true),
('12395', 'Carol', 'Rousseau', 'Psychiatry', '357 Second St W', 'Cornwall', 'K6J 1H4', 45.0207, -74.7389, '613-555-2502', true);