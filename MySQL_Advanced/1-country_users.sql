-- creates a user table with specific requirements

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id),
	email VARCHAR(255) NOT NULL,
	UNIQUE (email),
	name VARCHAR(255),
	country ENUM('US', 'CO', 'TN') NOT NULL
);
