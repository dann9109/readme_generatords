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
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
    },
    // Add more questions as needed
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