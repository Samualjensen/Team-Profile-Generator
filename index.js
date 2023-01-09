// node modules
const inquirer = require("inquirer");
const fs = require('fs');

// link to genrateHTML
const html = require('./src/generateHTML');

// team member profiles
// const Employee = require('./lib/employee');
const intern = require('./lib/intern');
const engineer = require('./lib/engineer');
const Manager = require('./lib/manager');

// team array
const teamArray = [];

// manager prompt
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Who is the manager of your team?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name.");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
            validate: nameInput => {
                if (NaN(nameInput)) {
                    console.log("Please enter the manager's ID.");
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            validate: email => {
                if (validateEmail.validate(email)) {
                    return true;
                } else {
                    console.log("Please enter the manager's email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's office number?",
            validate: nameInput => {
                if (NaN(nameInput)) {
                    console.log("Please enter the manager's office number.");
                } else {
                    return true;
                }
            }
        }
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
        })
};

// employee prompt
const addEmployee = () => {
    console.log(`Adding employees to the team.`);

    return inquirer.prompt([
        {
            type: 'list',
            role: 'role',
            message: 'What is the role of employee of this team?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            meassage: "What is the name of this employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number?",
            validate: nameInput => {
                if (NaN(nameInput)) {
                    console.log("Please enter the employee's ID number.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            meassage: "What is the employee's email?",
            validate: email => {
                if (validateEmail.validate(email)) {
                    return true;
                } else {
                    console.log("Please enter the employee's email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's Github username?",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's Github username?")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does this intern attend?',
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            meassage: 'Are there anymore employees you would like to add to this team?',
            default: false
        }
    ])
    .then(employeeData => {
        // employee type data

        let {name, id, email, role, github, school, confirmEmployee} = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new engineer (name, id, email, github);

            console.log(employee);
        } else if (role === "Intern") {
            employee = new intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

// function to generate html page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log("Success! Your team's profile has been created!");
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return html(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });

    