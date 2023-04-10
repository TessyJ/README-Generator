// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What\'s the title of your project',
        name:'title'
    }
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
     //generateMarkdown()
}

// Function call to initialize app
init();
