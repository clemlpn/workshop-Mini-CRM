INSERT INTO users (email, password_hash, role)
VALUES
('admin@example.com', 'hashed_password_admin', 'admin'),
('user1@example.com', 'hashed_password_user1', 'user'),
('user2@example.com', 'hashed_password_user2', 'user');
 
INSERT INTO contacts (first_name, last_name, email, phone, company, status)
VALUES
('Alice', 'Dupont', 'alice.dupont@example.com', '+33123456789', 'TechCorp', 'client'),
('Bob', 'Martin', 'bob.martin@example.com', '+33698765432', 'DesignCo', 'prospect'),
('Claire', 'Durand', 'claire.durand@example.com', '+33765432109', 'InnovateX', 'lead'),
('David', 'Lemoine', NULL, NULL, 'BuildRight', 'prospect'),
('Élise', 'Moreau', 'elise.moreau@example.com', '+33912345678', 'Marketing360', 'client');