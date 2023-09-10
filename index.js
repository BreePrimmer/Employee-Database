const inquirer = require('inquirer');
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

// data for the inquirer prompt to show the db menu.
const dbMenu = [
    {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ['View All Employees',
                  'Add Employees', 
                  'Update Employee Role', 
                  'View All Roles', 
                  'Add Role', 
                  'View All Departments', 
                  'Add Department',
                  'Quit']
    }
]

// function to view the employee table
viewAllEmployees = () => {
    db.query('SELECT a.id, a.first_name, a.last_name, department.name as department, role.title as title, role.salary as salary, b.first_name as manager FROM employee a LEFT JOIN employee b on a.manager_id = b.id JOIN role on a.role_id = role.id JOIN department on role.department_id = department.id', function (err, results) {
        if (err) {
            console.log(err);
        } else {
            console.table(results);  
            startMenu();
        }
    })
}


// function to add an employee to the table
addEmployees = () => {
    console.log('Would you like to add an employee?')
}

// function to start the menu and run the functions based on the response.
const startMenu = () => {
    inquirer.prompt(dbMenu).then((response) => {
        console.log(response.menu)
        if (response.menu == 'View All Employees') {
            viewAllEmployees()
        } else if (response.menu == 'Add Employees') {
            addEmployees()
        } else {
            return
        }

})
}

startMenu()

