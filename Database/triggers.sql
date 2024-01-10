DELIMITER //
CREATE TRIGGER updatematerial
AFTER INSERT ON siteactivities
FOR EACH ROW
BEGIN
    UPDATE sitematerial
    SET qty = qty - (NEW.qty * NEW.unit);
END //
DELIMITER ;



DELIMITER //
CREATE TRIGGER giveorders
AFTER UPDATE ON sitematerial
FOR EACH ROW
BEGIN
    IF NEW.qty < 100 THEN
        INSERT INTO orders (odate, qty, pid, sid)
        SELECT CURDATE(), 200, NEW.pid, p.sid
        FROM product p
        WHERE p.pid = NEW.pid;
    END IF;
END;
//
DELIMITER ;



delimiter //
create trigger makepayment
after insert on orders
for each row
begin
	INSERT into transaction (oid,status,tdate)
	values (new.oid,"Successful",curdate());
end //
delimiter ;