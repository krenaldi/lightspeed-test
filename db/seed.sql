USE lightspeed_db;

INSERT INTO member (first_name)
VALUES ('Stuart'),
('Tyler'),
('Adam'),
('Lan');

-- Insert rows into table 'Project'
INSERT INTO project
( -- columns to insert data into
 title
)
VALUES ('E-Commerce Website'), 
('Websocket Updates'), 
('Angular Upgrade');


-- Insert rows into table 'Tasks'
INSERT INTO tasks
(task_name, duration, project_id, employee_id)
VALUES
('Product Pages', 5, 1, 3),
( 'Shopping Cart', 10, 1, 2),
( 'My Account', 5, 1, 3),
( 'Add to Socket.IO', 2, 2, 1),
( 'Enable Broadcasting', 5, 2, 1),
( 'Adjust Interface', 3, 2, 1),
( 'Upgrade Angular', 15, 1, 4),
( 'Fix Broken Things', 10, 1, 1),
( 'Test', 10, 1, 4);