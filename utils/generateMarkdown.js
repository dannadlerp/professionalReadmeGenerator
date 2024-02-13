const { title } = require('process');
let licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";

  if (license === "unlicense") {
    return "";
  } else if (license === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "GPLv3") {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license === "LGPLv3") {
    licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPLv3-blue.svg)";
  }

  return licenseBadge;
}
let licenceTag = "#license";
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
//  let licenseLink = "";
  if(license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else
  if(license === "GPLv3") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else
  if(license === "LGPLv3") {
    return "https://img.shields.io/badge/License-LGPL_v3-blue.svg";
  } else
  if(license === "unlicense") {
    return "";
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
  renderLicenseBadge(data.license)
  return `
${data.title}
# Table of Contents
- [Motivation](#motivation)
- [Purpose](#purpose)
- [Solution](#solution)
- [Learnings](#learnings)
- [Run Instructions](#run-instructions)
- [Github Repository](#gitHub)
- [Email](#email)
- [License](#license)

## Motivation
${whatMotiv}

## Purpose
${why}

## Solution
${whatSolved}

## Learnings
${whatLearned}

## Run Instructions
${runInstructions}

# GitHub
${gitHub}

# Email
${email}

## License
  ${license}${licenseBadge}
  
  `;
}
// export {generateMarkdown};    //using import/export

 //using require/module.exports
module.exports = {renderLicenseBadge, renderLicenseLink, generateMarkdown};

