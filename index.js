// require 3 packages: fs, inquirer, generateMarkdown
let inquirer = require('inquirer');
let { writeFile } = require('fs');
let markdown = require('./utils/generateMarkdown');
//  questions for user input
const questions = [
    { 
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    { 
        type: 'input',
        message: 'Provide a description for your project detailing what it does.',
        name: 'description'
    },
    { 
        type: 'input',
        message: 'Provide installation instructions for your project.',
        name: 'install'
    },
    { 
        type: 'input',
        message: 'Provide instructions on how to use the app/project.',
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
    //  Apache License 2.0, Boost Software License 1.0, MIT License, Eclipse Public License 1.0, Mozilla Public License 2.0
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
        const { title, description, install, instructions, contribution, test, license, github, email } = response;
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