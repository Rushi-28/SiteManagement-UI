delimiter //
create procedure tables()
begin
	select * from siteactivities;
	select * from sitematerial;
	select * from orders;
	select tid,oid,calculateOrderCost(oid)'Total cost',status,tdate from transaction;
end //
delimiter ;


delimiter //
create procedure updatesm(mid int)
begin
	update sitematerial
	set qty=qty+200
	where smid=mid;
end //
delimiter ;


set global log_bin_trust_function_creators=1;
DELIMITER //

CREATE FUNCTION calculateOrderCost(order_id INT)
RETURNS DECIMAL(10, 2)
BEGIN
    DECLARE total_cost DECIMAL(10, 2);

    SELECT SUM(p.price * o.qty) INTO total_cost
    FROM orders o
    JOIN product p 
    ON o.pid = p.pid
    WHERE o.oid = order_id;

    RETURN total_cost;
END //

DELIMITER ;

