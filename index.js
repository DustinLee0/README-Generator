// require 3 packages: fs, inquirer, generateMarkdown
const inquirer = require('inquirer');
const { writeFile } = require('fs');
const markdown = require('./utils/generateMarkdown');
//  questions for user input
const questions = [
    { 
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    { 
        type: 'input',
        message: 'Provide a description for your project detailing what problem it solves, what your motivation was, and what was learned.',
        name: 'description'
    },
    { 
        type: 'input',
        message: 'Provide installation instructions for your project.(Installation commands will be asked next)',
        name: 'install'
    },
    { 
        type: 'input',
        message: 'Provide installation commands to enter in the CLI.',
        name: 'commands'
    },
    { 
        type: 'input',
        message: 'Provide instructions on how to use the app/project. Provide examples if needed.',
        name: 'instructions'
    },
    { 
        type: 'input',
        message: 'Contribution guidelines',
        name: 'contribution'
    },
    { 
        type: 'input',
        message: 'Provide instructions on how to test your project.',
        name: 'test'
    },
    { 
        type: 'list',
        message: 'Which license would you like to use for your project?',
        choices: ['Apache License 2.0', 'Boost Software License 1.0', 'MIT License', 'Mozilla Public License 2.0', 'None'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter your Github username.',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter your email address.',
        name: 'email'
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then( (response) => {
        const { title } = response;
        const projectName = `${title}-README.md`;
        writeToFile(projectName, response)
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMe = markdown(data);
    writeFile(fileName, readMe, (err) => {
        if (err) throw err;
        console.log('A readme file was generated!');
        console.log(`Data written to ${fileName}`);
    });
}

//  Run init function when invoking index.js
init();