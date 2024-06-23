const inquirer = require('inquirer');
const generateSVG = require('./lib/generateSvg');

async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: input => input.length <= 3 || 'Text must be up to three characters long.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):'
    }
  ]);

  generateSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
}

promptUser();
