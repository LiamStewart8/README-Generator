// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'license',
        choices: ['MIT', 'Apache'],
    },
    {
        type: 'input',
        message: 'Give a thorough description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',

    },
    {
        type: 'input',
        message: 'Provide instructions for use.',
        name: 'usage',
    }

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
            const filename = 'README.md';
            const fileData = 
`# ${data.title} 

![license](https://img.shields.io/badge/license-${data.license}-green)

## ${data.description}






## ${installation}









`
            fs.writeFile(filename, fileData, (err) =>
                err ? console.log(err) : console.log('Success!'))
        })

}

// Function call to initialize app
init();
