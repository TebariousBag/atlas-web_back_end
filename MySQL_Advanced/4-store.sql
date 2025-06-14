-- trigger that decreases the quantity of an item after adding a new order

DELIMITER //

DROP TRIGGER IF EXISTS update_qty;

CREATE TRIGGER update_qty AFTER INSERT
ON orders FOR EACH ROW
BEGIN
UPDATE items
SET items.quantity = items.quantity - NEW.number
WHERE name = NEW.item_name;
END //
DELIMITER ;
