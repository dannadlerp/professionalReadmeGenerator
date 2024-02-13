const inquirer = require("inquirer");
const fs = require("fs");
const { argv } = require("process");
//import { generateMarkdown} from "./utils/generateMarkdown.js";  //only use with export in module, not require
const generateMarkdown = require("./utils/generateMarkdown.js");

function init() {
  inquirer
    .prompt([
      {
        name: "title",
        message: "What is the title of the project?",
      },

      {
        name: "whatMotiv",
        message: "What was the motiv for the project?",
      },

      {
        name: "why",
        message: "Why did you create the project?",
      },
      
      {
        name: "whatSolved",
        message: "What does this project solve?",
      },

      {
        name: "whatLearned",
        message: "What did you learn from this project?",
      },

      {
        name: "runInstructions",
        message: "How do you run the project?",
      },

      {
        name: "gitHub",
        message: "What is your gitHub profile URL?",
      },

      {
        name: "email",
        message: "Which email do you want people to contact you at?",
      },

      {
        type: "checkbox",
        name: "license",
        choices: ["MIT", "GPLv3", "LGPLv3"],
        message: "What kind of license does the project have?",
      },
    ])

    .then((answers) => {
      //assigns variables to each answer that is prompted

      title = `App Title: ${answers.title}`;
      whatMotiv = `Motivation for the project: ${answers.whatMotiv}`;
      why = `The reason for developement: ${answers.why}`;
      whatSolved = `What did the App resolve? ${answers.whatSolved}`;
      whatLearned = `What was learned from the App development: ${answers.whatLearned}`;
      runInstructions = `Instructions to run App: ${answers.runInstructions}`;
      gitHub = `Access my GitHub profile here: ${answers.gitHub}`;
      email = `Email me at: ${answers.email}`;
      license = `App License: ${answers.license}`;

      //below creates an array with all answers so it can be displayed in the new file
      const questions = [
        title,
        whatMotiv,
        why,
        whatSolved,
        whatLearned,
        runInstructions,
        gitHub,
        email,
        license,
      ];
      /* function markdownAnswers(data) {
        markdown.generateMarkdown(data)
    } */
      const markdownLicenseBadge = generateMarkdown.renderLicenseBadge(license);
      const markdownLicenseLink = generateMarkdown.renderLicenseLink(license);

      const markdownAnswers = generateMarkdown.generateMarkdown(answers);

      //console.log(markdownAnswers);
      //console.log(markdownLicenseBadge);
      //console.log(markdownLicenseLink);
      const LICENSE_ANSWER = answers.license;
      LICENSE_ANSWER.forEach((licenseType) => {
        console.log(licenseType);
      });

      //below uses JSON to turn the array from [2] into a string
      const jsonStringData = JSON.stringify(
        generateMarkdown.generateMarkdown(answers),
        null,
        2
      );
      const fileName = "GeneratedREADME.md";
      console.log(fileName);

      //writes README file
      //fs.writeFileSync(`./${fileName}`, jsonStringData), (err) =>
      fs.writeFileSync(`./${fileName}`, JSON.parse(jsonStringData)),
        (err) => (err ? console.error(err) : console.log("Success!")); //logs any errors

      console.log("Answers:", answers);
    });

  /* const questions = [title. whatMotiv, why, WhatSolved, WhatLearned, runInstructions, licence]; */

  function writeToFile(fileName, data) {
    /* fs.writeFile('README.md', process.argv)[2], (err) =>
    err ? console.error(err) : console.log("hello") */
  }
}
// Function call to initialize app
init();
