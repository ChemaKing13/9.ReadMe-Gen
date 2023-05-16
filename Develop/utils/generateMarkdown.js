// TODO: Create a function that returns a license badge based on which license is passed in
//the badges represent the respective license type and can be clicked to provide more info
//this function provides a license badge image, based on the provided license 
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }
  else if (license === 'Apache 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  }
  else if (license === 'GPL 3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  else if (license === 'BSD 3') {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  }
  else {
    return '';  // If there is no license, return an empty string
  }
}

// TODO: Create a function that returns the license link
// this function uses a switch statement to check the value of the license parameter and return 
//the corresponding license link
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[Apache License, Version 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)';
    case 'BSD 3':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
//generate Markdown content based on the provided data
function generateMarkdown(data) {
  const { title, description, github, email, license, installation, test } = data;  

  //genarate license badge, link and section 

  const licenseBadge = renderLicenseBadge(license); 
  const licenseLink = renderLicenseLink(license); 
  


  //generate table of contents 
  //table o contents variable with anchor links to each section of the Readme 
  const tableOfContents = `## Table of Contents\n
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)
  `; 

  //add tittle and license badge at the very top of the file 
  const markdown = `# ${title} ${licenseBadge}

  ## Decription 
  ${description}

  ${tableOfContents}

  ## Installation 
  ${installation}

  ## Usage
  ${test ? `To run the tests, use the following command:\n\`\`\`\n${test}\n\`\`\`\n` : ''}


  ## Contributing 

  ## Questions 
  If you have any questions, you can reach me at [Github](https://github.com/${github}) or by email at ${email}.
  

  ## License 
  ${licenseLink}`;  

  //exit the function and provide the generated markdpwn content as the functions output
  return markdown; 
}


//this line of code exports the generateMarkdown function so it can be used in other files 
module.exports = generateMarkdown;


















