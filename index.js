// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { argv } = require('process');

// TODO: Create a function to initialize app
function init() {
    
//let answers = [];
inquirer
.prompt([
    {
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        name: 'whatMotiv',
        message: 'What was the motiv for the project?',
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

.then(answers => { //assigns variables to each answer that is prompted
    
    title = `App Title: ${answers.title}`;
    whatMotiv = `Motivation for the project: ${answers.whatMotiv}`;
    why = `The reason for developement: ${answers.why}`;
    whatSolved = `What did the App resolve? ${answers.whatSolved}`;
    whatLearned = `What was learned from the App development: ${answers.whatLearned}`;
    runInstructions = `Instructions to run App: ${answers.runInstructions}`;
    licence = `App Licence: ${answers.licence}`;
    
    //below creates an array with all answers so it can be displayed in the new file
    const questions = [title, whatMotiv, why, whatSolved, whatLearned, runInstructions, licence];
    //below uses JSON to turn the array from [2] into a string
    const jsonStringData = JSON.stringify(questions, null, 2);
    const fileName = "newfile.txt";
    console.log(fileName);
    
    // TODO: Create a function to write README file
    fs.writeFileSync('./newfile.txt', jsonStringData), (err) =>
    err ? console.error(err) : console.log('Success!') //logs any errors
    
    console.log('Answers:', answers);
});

// TODO: Create an array of questions for user input
/* const questions = [title. whatMotiv, why, WhatSolved, WhatLearned, runInstructions, licence]; */


function writeToFile(fileName, data) {
    /* fs.writeFile('README.md', process.argv)[2], (err) =>
    err ? console.error(err) : console.log("hello") */
    
}

}

// Function call to initialize app
init();
