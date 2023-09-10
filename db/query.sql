-- returns first name, last name, and manager name.
SELECT a.id, a.first_name, a.last_name, department.name as department, role.title as title, role.salary as salary, b.first_name as manager FROM employee a
LEFT JOIN employee b on
a.manager_id = b.id
JOIN role on 
a.role_id = role.id
JOIN department on 
role.department_id = department.id