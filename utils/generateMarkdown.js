const { title } = require('process');
let licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "unlicense") {
    return "";
  } else
  if(license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    licenseBadge =  "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else
  if(license === "GPLv3") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    licenseBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else
  if(license === "LGPLv3") {
    return "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    licenseBadge =  "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  }
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
Table of Contents
  -What was the motiv?
  -Why was the app made?
  -What did the app solve?
  -What was learned?
  -Run instructions
  -License of app
  

 
  ${whatMotiv}
  

  ${why}
  

  ${whatSolved}
  

  ${whatLearned}
  

  ${runInstructions}
  

  ${license}${licenseBadge}
  
  `;
}
// export {generateMarkdown};    //using import/export

 //using require/module.exports
module.exports = {renderLicenseBadge, renderLicenseLink, generateMarkdown};

