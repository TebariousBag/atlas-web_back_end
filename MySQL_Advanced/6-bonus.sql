-- script that creates a stored procedure AddBonus that adds a new correction for a student

DELIMITER //
CREATE PROCEDURE Addbonus(
	IN the_user_id int
)

BEGIN
DECLARE result float;
SELECT AVG(score) INTO result
FROM corrections
WHERE corrections.user_id = the_user_id;
UPDATE users
SET average_score = result
WHERE id = the_user_id;
END //
DELIMITER ;
