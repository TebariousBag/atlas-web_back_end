-- script that creates a stored procedure AddBonus that adds a new correction for a student

DELIMITER //
CREATE PROCEDURE Addbonus(
	IN the_user_id INT
)

BEGIN
DECLARE result FLOAT;
SELECT AVG(score) INTO result
FROM corrections
WHERE user_id = the_user_id;
UPDATE users
SET average_score = result
WHERE id = the_user_id;
END; //
DELIMITER ;
