const { title } = require('process');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if(license === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else
  if(license === "GPLv3") {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else
  if(license === "LGPLv3") {
    licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  }
}
let licenceTag = "#license";
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if(license === "MIT") {
    licenseLink = "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else
  if(license === "GPLv3") {
    licenseLink = "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else
  if(license === "LGPLv3") {
    licenseLink = "https://img.shields.io/badge/License-LGPL_v3-blue.svg";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    console.log(`${licenseSection}`)
    return (licenseTag);
  } else{return ""};
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  # Table of Contents
  -'What was the motiv?'(#whatMotiv);
  -'Why was the app made?'(#why);
  -'What did the app solve?'](#whatSolved);
  -'What was learned?'(#whatLearned);
  -'Run instructions'(#runInstructions);
  -'License of app:'(${licenceTag});
  

 
    ${data.whatMotiv}
##whatMotiv:

    ${data.why}
##why:

    ${data.whatSolved}
##whatSolved:

    ${data.whatLearned}
##whatLearned:

    ${data.runInstructions}
##runInstructions:

    ${data.license}
    ${licenseBadge}
##license:
  `;
}

module.exports = generateMarkdown;
