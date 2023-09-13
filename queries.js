const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'redPenguin26',
        database: 'employee_db'
    },
    console.log('Connected to the employee_db database.')
);

class Queries {
    viewAllEmployees() {
        db.query('SELECT a.id, a.first_name, a.last_name, department.name as department, role.title as title, role.salary as salary, b.first_name as manager FROM employee a LEFT JOIN employee b on a.manager_id = b.id JOIN role on a.role_id = role.id JOIN department on role.department_id = department.id', function (err, results) {
            if (err) {
                console.log(err);
            } else {
                console.table(results);  
            }
        })
    };

    addEmployee() {

    };

    addRole() {
        db.query('')
    };
}

module.exports = Queries