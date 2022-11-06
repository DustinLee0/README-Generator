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
  } else if (license === 'Eclipse Public License 1.0') {
    const eclipse = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    return eclipse;
  } else if (license === 'Mozilla Public License 2.0') {
    const mozilla = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    return mozilla;
  } else {
    const license = '';
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
  } else if (license === 'Eclipse Public License 1.0') {
    const eclipse = 'https://opensource.org/licenses/EPL-1.0';
    return eclipse;
  } else if (license === 'Mozilla Public License 2.0') {
    const mozilla = 'https://opensource.org/licenses/MPL-2.0';
    return mozilla;
  } else {
    const license = '';
    return license;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  [${license}](${renderLicenseLink(license)})
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Contributions](#contribution)
- [Test](#test)

## Installation Instructions
${data.install}

## Usage
${data.instructions}

## Contributions
${data.contribution}

## Tests
${data.test}

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
