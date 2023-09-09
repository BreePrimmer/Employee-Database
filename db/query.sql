-- SELECT employee.first_name, employee.last_name, role.title
-- FROM employee
-- JOIN role ON employee.role_id = role.id,
-- JOIN employee ON employee.manager_id = employee.first_name;

-- SELECT employee.first_name, employee.last_name, employee.manager_id
-- FROM employee
-- JOIN employee ON employee.manager_id = employee.first_name;

SELECT a.first_name, b.manager_id, b.first_name
FROM employee a, employee b
WHERE b.first_name = a.manager_id;
