const inquirer = require('inquirer');
const mysql = require('mysql2');

// importing the queries class (unused)
const queries = require('./queries.js');
const newQuery = new queries

// creating connection to database
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

// function that runs if the user doesn't type in an input.
const emptyString = (input) => {
    if (input == "") {
        console.log("You must enter a response.");
    } else {
        return true;
    }
}

// function that runs if the user doesn't type in a number.
const emptyInt = (input) => {
    if (input == "") {
        console.log('You must enter a response.');
    } else if (isNaN(input)) {
        console.log('Please enter a number.');
    } else {
        return true;
    }
}

// function to view the employee table
const viewAllEmployees = () => {
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
const addEmployees = () => {
    console.log('Currently unable to add an employee );');
    startMenu();
}

// function to update employee role
const updateEmployeeRole = () => {
    console.log('Currently unable to update employee role. );');
    startMenu();
}

// function to view all roles
const viewAllRoles = () => {
    db.query(
        'SELECT role.id, role.title, department.name as department, role.salary FROM role JOIN department on role.department_id = department.id;', function (err, results) {
            if (err) {
                console.log(err);
            } else {
                console.table(results);  
                startMenu();
            }
        }
    )
}

// function to add role
const addRole = () => {
    // let departments = [];
    // let departmentdata;
    // db.query(
    //     'SELECT * FROM department;', function (err, results){
    //         if (err) throw err;
    //         let departmentdata = results;
    //         console.log(departmentdata);

    //         results.forEach((department) => departments.push(department.name))
    //         console.log(departments);   
    //     });
    // await inquirer.prompt([
    //     {
    //         type: 'input',
    //         name: 'newRole',
    //         message: 'Please enter the name of the role you would like to add.',
    //         validate: emptyString
    //     },
    //     {
    //         type: 'input',
    //         name: 'newSalary',
    //         message:'Please enter the salary of the role.',
    //         validate: emptyString
    //     },
    //     {
    //         type: 'list',
    //         name: 'newDepartment',
    //         message: 'Which department does this role belong to?',
    //         choices: departments
    //     }
    // ]).then((roleadd) => {
    //     let departmentId = departmentdata.find(dept => dept.name === roleadd.newDepartment);
    //     console.log(departmentId)

    //     db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${roleadd.newRole}', ${roleadd.newSalary}, ${departmentId.id})`, function (err, results) {
    //         if (err) throw err;
    //         console.table(results);
    //     })
    //     // db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${roleadd.newRole}', ${roleadd.newSalary}, ${roleadd.newDepartment} );`);
    //     // db.query(`INSERT INTO department (name) VALUES ('${roleadd.newDepartment}')`)
    // });
    console.log('Currently unable to add a role. );');
    startMenu();
};

// function to view all departments
const viewAllDepartments = () => {
    db.query('SELECT * FROM department', function (err, results) {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
            startMenu()
        }
    })
}

// function to add department
const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'Please enter the name of the departent you would like to add.',
            validate: emptyString
        }
    ]).then((response) => {
        db.query(
            `INSERT INTO department (name) VALUES ('${response.department}');`
        );
        console.log(`Successfully added ${response.department} to the department table!`);
        viewAllDepartments();
    })
}


// function to start the menu and run the functions based on the response.
const startMenu = async () => {
    await inquirer.prompt(dbMenu).then((response) => {
        console.log(response.menu)
        if (response.menu == 'View All Employees') {
            viewAllEmployees();
        } else if (response.menu == 'Add Employees') {
            addEmployees();
        } else if (response.menu == 'View All Departments') {
            viewAllDepartments();
        } else if(response.menu == 'Add Department') {
            addDepartment();
        } else if (response.menu == 'View All Roles') {
            viewAllRoles();
        } else if (response.menu == 'Add Role') {
            addRole();
        } else if (response.menu == 'Update Employee Role') {
            updateEmployeeRole();
        } else if (response.menu == 'Quit') {
            console.log('Good Bye! (:');
            process.exit()
        } else {
            return
        };
    });
};

startMenu();

