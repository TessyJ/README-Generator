// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;

  switch (license) {
    case "MIT":
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)] ";
      break;
    case "Apache":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)] ";
      break;
    case "GPL":
      licenseBadge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)] ";
      break;
    case "BSD":
      licenseBadge =
        "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)] ";
      break;
    default:
      licenseBadge = "";
      break;
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink; 
  switch (license) {
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "Apache":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license)+ ' '+renderLicenseLink(license)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return ` 
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contribution}
  
  ## Tests
  ${answers.tests}

  ## License
  ${renderLicenseSection(answers.license)} 
  
  ## Questions
  If you have any questions or comments, please contact me using the following methods:
  - [GitHub](https://github.com/${answers.github})
  - Email: ${answers.email}
  `;
  
}

module.exports = generateMarkdown;
