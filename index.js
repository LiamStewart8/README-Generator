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
    },
    {
        type: 'input',
        message: 'Write some guidelines for other developers that would like to contribute',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide examples on how to run your tests.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter Github username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
    },

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


## Description
    ${data.description}



## Table of contents
1.[Installation](#installation)<br>
2.[Usage](#usage)<br>
3.[License](#license)<br>
4.[Contributing](#contributing)<br>
5.[Tests](#tests)<br>
6.[Questions](#questions)<br>


<a name="installation"></a>
##  Installation
    ${data.installation} 



<a name="usage"></a>
## Usage
    ${data.usage} 




<a name="contributing"></a>
## Contributing
    ${data.contributing} 




<a name="tests"></a>
## Tests
    ${data.tests} 



<a name="questions"></a>
## Questions 
    If you have any questions, you can reach me below at these links.
[Email](${data.email}) <br>
[GitHub](https://github.com/${data.github})
    


`
            fs.writeFile(filename, fileData, (err) =>
                err ? console.log(err) : console.log('Success!'))
        })

}

// Function call to initialize app
init();
