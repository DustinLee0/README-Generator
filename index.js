// require 3 packages: fs, inquirer, generateMarkdown
let inquirer = require('inquirer');
let { writeFile } = require('fs');
let generateMd = require('./Assets/utils/generateMarkdown');

//  questions for user input
const questions = [
    { 
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    { 
        type: 'input',
        message: 'Provide a succinct description for your project detailing what it does.',
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
    //  LICENSE: CREATES BADGE AT TOP OF README AND NOTICE ADDED
    // { 
    //     type: 'list',
    //     message: 'Which license would you like to use for your project?',
    //     name: 'license'
    // },
    {
        type: 'input',
        message: 'Enter your Github username.',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter your email address.',
        name: 'email'
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then( (response) => {
        console.log(response.title);
        console.log(response.description);
        console.log(response.install);
        const { title, description, install, instructions, contribution, test, license, github, email } = response;
        
        
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, () => {
        console.log(`Data written to ${fileName}`);
    });
}

//  Run init function when invoking index.js
init();