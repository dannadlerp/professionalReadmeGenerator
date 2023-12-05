// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//let answers = [];
inquirer
.prompt([
    {
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        name: 'why',
        message: 'Why did you create the project?',
    },
    {
        name: 'whatSolved',
        message: 'What does this project solve?',
    },
    {
        name: 'whatLearned',
        message: 'What did you learn from this project?',
    },
    {
        name: 'runInstructions',
        message: 'How do you run the project?',
    },
    {
        name: 'licence',
        message: 'What kind of licence does the project have?',
    },
])

.then(answers => {
    answers.title = title;
    answers.why = why;
    answers.whatSolved = whatSolved;
    answers.whatLearned = whatLearned;
    answers.runInstructions = runInstructions;
    answers.licence = licence;
    console.log('Answers:', typeof(answers));
});

// TODO: Create an array of questions for user input
/* const questions = [title. whatMotiv, why, WhatSolved, WhatLearned, runInstructions, licence]; */


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
