INSERT INTO department (name)
VALUES ("Front End"),
       ("Backroom"),
       ("Grocery"),
       ("Style");

INSERT INTO role (title, salary, department_id)
VALUES ("Cashier", 20000, 1),
       ("Puller", 25000, 2),
       ("Produce Filler", 25000, 3),
       ("Sorter", 20000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rebecca", "S", 1, null),
       ("John", "D", 1, null),
       ("Matt", "M", 4, 1);
