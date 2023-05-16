// TODO: Include packages needed for this application
const inquirer = require('inquirer'); //inquierer package for prompting the user with questions 
const fs = require('fs'); //allow us to read, write and manipulate files 
const generateMarkdown = require('./utils/generateMarkdown'); //this line imports the generateMarkdown function


// TODO: Create an array of questions for user input
//This array contain all the questions that the user will have to answer, according to his Readme objectives.
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input', 
    name: 'installation',
    message: 'Provide some installation details: '
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to test?',
    default: 'npm test', 
  }, 
];


// TODO: Create a function to write README file
//data argument contains an object with the information that will be used to generate the contents
function writeToFile(fileName, data) {
    //generateMarkdown is imported from the generateMarkdown.js passing the data as an argument 
    const markdown = generateMarkdown(data); 
    
    
    //if an error occurs while writing the file, it will be thrown 
    //writeFile method is used to write the generated mardown string
    fs.writeFile(fileName, markdown, (err) => {
      if (err) throw err;
      //if everything works as expected the following message will be shown
      console.log('README file has been successfully generated!');
    });
  }
  

// TODO: Create a function to initialize app

function init() {
    inquirer //inquirer will prompt the questions for the user 
        .prompt(questions) //questions is the array defined above 
        .then((answers) => { //then the answers are passed as an argument to the callback function 
      const fileName = 'README.md'; // set the output file name 
      const markdown = generateMarkdown(answers); //
      writeToFile(fileName, answers); //this function will write the Markdown content to the specified file 
    })
    .catch((err) => { //if an error ocurrs the catch method will catch the error 
        console.log(err); //and log it into the console 
    });
  }

// Function call to initialize app
init();









