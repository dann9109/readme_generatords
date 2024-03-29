const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter the license of your project:',
        choices: ['MIT', 'Apache', 'GPL'],
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation steps of your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage of your project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributing guidelines for your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide information about the tests of your project:',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter any questions about the project:',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email:',
    },

];

// Function to prompt the user for their README details
function getUserInput() {
    return inquirer.prompt(questions);
}

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README file generated successfully!');
        }
    });
}

// Function to initialize app
function init() {
    getUserInput()
        .then((data) => {
            const markdownContent = generateMarkdown(data);
            writeToFile('README.md', markdownContent);
        })
        .catch((err) => {
            console.error(err);
        });
}

// Function call to initialize app
init();