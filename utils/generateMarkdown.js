// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //  Apache License 2.0, Boost Software License 1.0, MIT License, Eclipse Public License 1.0, Mozilla Public License 2.0
  if (license === 'Apache License 2.0') {
    const apache = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    return apache;
  } else if (license === 'Boost Software License 1.0') {
    const boost = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    return boost;
  } else if (license === 'MIT License') {
    const mit = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    return mit;
  } else if (license === 'Mozilla Public License 2.0') {
    const mozilla = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    return mozilla;
  } else if (license === 'None') {
    const license = "";
    return license;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    const apache = 'https://opensource.org/licenses/Apache-2.0';
    return apache;
  } else if (license === 'Boost Software License 1.0') {
    const boost = 'https://www.boost.org/LICENSE_1_0.txt';
    return boost;
  } else if (license === 'MIT License') {
    const mit = 'https://opensource.org/licenses/MIT';
    return mit;
  } else if (license === 'Mozilla Public License 2.0') {
    const mozilla = 'https://opensource.org/licenses/MPL-2.0';
    return mozilla;
  } else if (license === 'None') {
    license = "";
    return license;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let permit = license;
  if (permit === 'None') {
    console.log('No license');
    return;
  }
  return `## License
  This project is licensed under the [${license}](${renderLicenseLink(license)})
  `
}

function installCmd(commands) {
  let cmd = commands;
  if (cmd === "") {
    return;
  }
  return `\`\`\`
  ${cmd}
  \`\`\`
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, install, commands, instructions, contribution, test, license, github, email } = data;
  return `# ${title}
  
${renderLicenseBadge(license)}
## Description
${description}

## Table of Contents
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Contributions](#contributions)
- [Test](#tests)

## Installation Instructions
${install}
${installCmd(commands)}

## Usage
${instructions}

## Contributions
${contribution}

## Tests
${test}

${renderLicenseSection(license)}

## Questions
If there are any questions or issues about the repository, you can contact me at [${email}](${email}).\n
More of my work can be found on my Github repository at [${github}](https://github.com/${github}).
`;
}

module.exports = generateMarkdown;
