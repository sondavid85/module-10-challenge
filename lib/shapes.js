class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error('Render method should be implemented in derived classes');
  }

  getTextPosition() {
    throw new Error('getTextPosition method should be implemented in derived classes');
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }

  getTextPosition() {
    return { x: 150, y: 150 };  // Centered horizontally and towards the lower part of the triangle
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }

  getTextPosition() {
    return { x: 150, y: 110 };  // Centered horizontally and slightly below the vertical center
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }

  getTextPosition() {
    return { x: 150, y: 115 };  // Centered horizontally and vertically within the square
  }
}

module.exports = { Triangle, Circle, Square };
