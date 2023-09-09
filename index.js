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
    console.log('You are now viewing the employees (:')
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results)
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

