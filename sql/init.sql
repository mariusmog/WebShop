CREATE TABLE product (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL
);

INSERT INTO product (name, description, price) VALUES 
('Les Misérables', 'Roman de Victor Hugo', 15.99),
('Madame Bovary', 'Roman de Gustave Flaubert', 12.50),
('Le Petit Prince', 'Roman de Antoine de Saint-Exupéry', 9.99),
('Germinal', 'Roman de Émile Zola', 14.75),
('Candide', 'Roman de Voltaire', 11.20),
('Le Rouge et le Noir', 'Roman de Stendhal', 13.45),
('Les Fleurs du Mal', 'Recueil de poèmes de Charles Baudelaire', 10.80),
('La Princesse de Clèves', 'Roman de Madame de La Fayette', 16.30),
("L'Étranger", 'Roman de Albert Camus', 11.90),
('Les Liaisons Dangereuses', 'Roman de Pierre Choderlos de Laclos', 18.25);