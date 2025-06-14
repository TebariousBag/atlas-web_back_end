-- script that creates a stored procedure AddBonus that adds a new correction for a student

DELIMITER //
CREATE PROCEDURE Addbonus(
	IN user_id INT
)

BEGIN
DECLARE result FLOAT;
SELECT AVG(score) INTO result
FROM corrections
WHERE corrections.user_id = user_id;
UPDATE users
SET average_score = result
WHERE id = user_id;
END; //
DELIMITER ;
