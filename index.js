// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMd = require ('./utils/generateMarkdown.js')

console.log(generateMd)
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is the title of your project?',
        name:'title'
    },
    {
        type:'input',
        message:'Please enter a one to two sentence description of your project.',
        name:'description'
    },
    {
        type:'input',
        message:'What modules need to be installed?',
        name:'installation'
    },
    {
        type:'input',
        message:'usage information',
        name:'usage'
    },
    {
        type:'input',
        message:'contribution guidelines',
        name:'contribution'
    },
    {
        type:'input',
        message:'test instructions',
        name:'test'
    },
    {
        type:'input',
        message:'What is your github username?',
        name:'github-username'
    },
    {
        type:'input',
        message:'What is a good email to contact you at?',
        name:'email'
    },
    {
        type:'list',
        message:'What type of license does your project use?',
        name:'license',
        choices:[
            'None',
            'Apache License 2.0', 
            'GNU General Public License 3.0', 
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License',
            'Creative Commons Zero 1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License 3.0',
            'GNU General Public License 2.0',
            'GNU Lesser General Public License 2.1',
            'Mozilla Public License 2.0',
            'The Unilicense'
        ]
    }
];
inquirer.prompt(questions)
.then ((response) => {
    console.log(response)
let content = `
# ${response.title}`
})


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err)
// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

generateMd("test")