const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generatePage');
const {writeFile, copyFile} = require('./utils/generate-site');

function Team() {
    this.members = [];
    console.log(`Welcome to the Team Profile Generator. 
Provide the requested information after each prompt.
====================================================
`)
    Team.prototype.createManager = function() {
        return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter your manager's name.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter a name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Enter your manager's ID number.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter an ID!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter your manager's email address.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter an email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'office',
                    message: "What is your manager's office number?",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter an office!');
                            return false;
                        }
                    }
                }
            ])
            .then(data => {
                this.members.push(new Manager(data.name, data.id, data.email, data.office));
                return this.createEmployee();
            })
    };

    Team.prototype.createEngineer = function() {
        return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter the engineer's name.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter a name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Enter the engineer's ID number.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter an ID!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter the engineer's email address.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter an email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "Enter the engineer's GitHub account.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter a Github account!');
                            return false;
                        }
                    }
                }
            ])
            .then(data => {
                this.members.push(new Engineer(data.name, data.id, data.email, data.github));
                return this.createEmployee();
            })
    }

    Team.prototype.createIntern = function() {
        return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter the intern's name.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter a name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Enter the intern's ID number.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter an ID!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter the intern's email address.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter an email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "Enter the intern's school.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Enter a school!');
                            return false;
                        }
                    }
                }
            ])
            .then(data => {
                this.members.push(new Intern(data.name, data.id, data.email, data.school));
                return this.createEmployee();
            })
    }

    Team.prototype.createEmployee = function() {
        return inquirer.prompt([
            {
                type: 'confirm',
                name: 'addNew',
                message: 'Would you like to add a new team member?',
                default: false
            },
        ])
        .then(confirm => {
            if (confirm.addNew) {
                return inquirer.prompt([
                    {
                        type: 'list',
                        name: 'role',
                        message: 'What role are you assigning?',
                        choices: ['Engineer', 'Intern']
                    },
                ])
                .then(type => {
                    switch (type.role) {
                        case 'Engineer':
                            return this.createEngineer();
                            break;
                        case 'Intern':
                            return this.createIntern();
                            break;
                        default:
                            console.log('No selection');
                            break;
                    } 
                })
            } else {
                console.log(`
Your team has been created! You can access the HTML file in the dist folder.`);
                return this;
            }
        })
    }
};

new Team().createManager()
    .then(teamobj => {
        return generatePage(teamobj);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(err => {
        console.log(err);
    })