-- returns employee table
SELECT a.id, a.first_name, a.last_name, department.name as department, role.title as title, role.salary as salary, b.first_name as manager FROM employee a
LEFT JOIN employee b on
a.manager_id = b.id
JOIN role on 
a.role_id = role.id
JOIN department on 
role.department_id = department.id;

-- adds employee to table

-- updates employee role

-- returns role table
SELECT role.id, role.title, department.name as department, role.salary FROM role
JOIN department on 
role.department_id = department.id;


-- adds role to table

-- returns department table

-- adds department to table