// node modules
const inquirer = require("inquirer");
const fs = require('fs');
const validator = require('email-validator');

// link to genrateHTML
const generateHTML = require('./src/generateHTML');

// team member profiles
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// team array
const teamArray = [];

// prompt to choose employee role
const chooseEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What type of role would you like you like to add to this team?',
            choices: ['Manager', 'Engineer', 'Intern', 'Finish building team'],
        }
    ])
    // then add employee role based on input
    .then(input => {
        switch (input.role) {
            case 'Manager':
                addManager();
                break;
            case `Engineer`:
                addEngineer();
                break;
            case `Intern`:
                addIntern();
                break;
            default:
                writeFile();
        }
    })
}

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
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's id.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            validate: email => {
                if (validator.validate(email)) {
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
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number.");
                    return false;
                }
            }
        }
    ])
    // then create new manager
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

            teamArray.push(manager);
            console.log(manager);
            chooseEmployee();
        })
};

// engineer prompt
const addEngineer = () => {
    return inquirer.prompt([
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
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's ID number.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            meassage: "What is the employee's email?",
            validate: email => {
                if (validator.validate(email)) {
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
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's Github username?")
                    return false;
                }
            }
        }
    ])
    // then creat new engineer
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);

            teamArray.push(engineer);
            console.log(engineer);
            chooseEmployee();
        })
};

// intern prompt
const addIntern = () => {
    return inquirer.prompt([
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
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's ID number.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            meassage: "What is the employee's email?",
            validate: email => {
                if (validator.validate(email)) {
                    return true;
                } else {
                    console.log("Please enter the employee's email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does this intern attend?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school.")
                    return false;
                }
            }
        }
    ])
    // then create new intern 
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);

            teamArray.push(intern);
            console.log(intern);
            chooseEmployee();
        })
};

// function to generate html page
const writeFile = () => {
    fs.writeFile('./dist/index.html', generateHTML(teamArray), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Success! Your team's profile has been created!");
        }
    })
};

addManager()

