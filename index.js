//  Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//  Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What's the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide the project description",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide an installation instructions for this project",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide an usage information for this project",
    name: "usage",
  },
  {
    type: "input",
    message: "Please provide the contribution guidelines for this project",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please provide the test instructions for this project",
    name: "tests",
  },
  {
    type: "input",
    message: "Please provide the questions that may be asked this project",
    name: "questions",
  },
  {
    type: "list",
    message: "Please choose a license:",
    name: "license",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },

  {
    type: "input",
    message: "Please provide your GitHub username:",
    name: "github",
  },
  {
    type: "input",
    message: "Please provide your email address:",
    name: "email",
  },
];

//  Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName.toUpperCase(), generateMarkdown(data), (err) => {
    err ? console.log(err) : console.log("Readme generated");
  });
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(answers.title + ".md", answers);
  });
}

// Function call to initialize app
init();
