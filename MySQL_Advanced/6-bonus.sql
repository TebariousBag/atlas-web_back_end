-- creates a stored procedure AddBonus that adds a new correction for a student
DELIMITER //

CREATE PROCEDURE AddBonus(
IN user_id INT,
IN project_name VARCHAR(255),
IN score INT
)
BEGIN
INSERT IGNORE INTO projects (name) VALUES (project_name);
INSERT INTO corrections (user_id, project_id, score)
VALUES (
user_id,
(SELECT id FROM projects WHERE name = project_name),
score
);

UPDATE users
SET average_score = (
SELECT AVG(score)
FROM corrections
WHERE user_id = user_id
)
WHERE id = user_id;
END; //

DELIMITER ;
