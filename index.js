const inquirer = require('inquirer')

inquirer.prompt ([
    {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ['View All Employees', 'Add Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All departments', 'Add Department']
    }
]);

