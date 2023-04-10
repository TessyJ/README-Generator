// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What's the title of your project",
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
    name: "installaton",
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
    name: "test",
  },
  {
    type: "input",
    message: "Please provide the questions that may be asked this project",
    name: "questions",
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data),(err)=>{
        (err) ? console.log(err) : console.log('Readme generated')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>{
        writeToFile(answers.title+'.md',answers)
    }) 
}

// Function call to initialize app
init();
