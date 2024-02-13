const inquirer = require("inquirer");
const fs = require("fs");
const { argv } = require("process");
//import { generateMarkdown} from "./utils/generateMarkdown.js";  //only use with export in module, not require
const {generateMarkdown, renderLicenseBadge} = require("./utils/generateMarkdown.js");

const init = () => {
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
      whatMotiv = answers.whatMotiv;
      why = answers.why;
      whatSolved = answers.whatSolved;
      whatLearned = answers.whatLearned;
      runInstructions = answers.runInstructions;
      gitHub = answers.gitHub;
      email = answers.email;
      license = answers.license;
      /* 
      const defineLicense = (answers) => {
        console.log(`licenses: ${answers.license}`);
      }; */
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
const licenseBadgeData = renderLicenseBadge(answers.license);
/*       const markdownLicenseBadge = generateMarkdown.renderLicenseBadge(license);
      const markdownLicenseLink = generateMarkdown.renderLicenseLink(license);

      const markdownAnswers = generateMarkdown.generateMarkdown(answers); */

/*       const selectedLicenses = answers.license;
      console.log("Selected licenses:", selectedLicenses); */

      //below uses JSON to turn the array from [2] into a string
      const jsonStringData = JSON.stringify(
        generateMarkdown(answers, licenseBadgeData), null, 2);
      const fileName = "GeneratedREADME.md";
      console.log(`Generated file: ${fileName}`);
      //defineLicense;
      
      fs.writeFileSync(`./${fileName}`, JSON.parse(jsonStringData)),
        (err) => (err ? console.error(err) : console.log("Success!")); //logs any errors

      console.log("Answers:", answers);
    });

    function writeToFile(fileName, data) {
  
  }
}
// Function call to initialize app
init();
