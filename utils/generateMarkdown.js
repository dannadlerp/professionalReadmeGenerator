//const { title } = require('process');

// If there is no license, return an empty string
function renderLicenseBadge(licenseData) {
  let licenseBadge = "";

  if (licenseData === "") {
    return "";
  } else if (licenseData === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (licenseData === "GPLv3") {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (licenseData === "LGPLv3") {
    licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPLv3-blue.svg)";
  }

  return licenseBadge;
}
let licenceTag = "#license";
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseData) {
//  let licenseLink = "";
  if(licenseData === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else
  if(licenseData === "GPLv3") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else
  if(licenseData === "LGPLv3") {
    return "https://img.shields.io/badge/License-LGPL_v3-blue.svg";
  } else
  if(licenseData === "unlicense") {
    return "";
  }
}

function generateMarkdown(data) {
  console.log(`license data? ${data.license}`);
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
  ${data.license}
  
  `;
}
module.exports = {renderLicenseBadge, renderLicenseLink, generateMarkdown};

