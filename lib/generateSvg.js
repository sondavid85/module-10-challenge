const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes');

function generateSVG(text, textColor, shape, shapeColor) {
  let shapeInstance;

  switch(shape) {
    case 'Triangle':
      shapeInstance = new Triangle();
      break;
    case 'Circle':
      shapeInstance = new Circle();
      break;
    case 'Square':
      shapeInstance = new Square();
      break;
    default:
      throw new Error('Invalid shape');
  }

  shapeInstance.setColor(shapeColor);
  const { x, y } = shapeInstance.getTextPosition();

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="${x}" y="${y}" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

module.exports = generateSVG;
