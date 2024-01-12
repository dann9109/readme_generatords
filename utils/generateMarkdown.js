// Function to return the license link based on the license
function renderLicenseLink(license) {
  if (license) {
    // Define the license links based on the licenses you want to support
    const licenseLinks = {
      MIT: 'https://opensource.org/licenses/MIT',
      Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
      GPL: 'https://www.gnu.org/licenses/gpl-3.0.en.html',
      // Add more licenses as needed
    };

    return `[License]( ${licenseLinks[license]} )`;
  } else {
    return '';
  }
}

// Function to return the license section of the README
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. ${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

// Function to generate markdown for the README
function generateMarkdown(data) {
  return `
# ${data.title}

## License

${data.license}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact me:

GitHub: [${data.GitHub}](https://github.com/${data.GitHub})

Email: ${data.email}
`;
}

module.exports = generateMarkdown;



