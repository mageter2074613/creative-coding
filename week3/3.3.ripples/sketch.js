let ripplers = []; // Array to store rippler objects

class Rippler {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 0;
  }

  draw() {
    this.diameter += 5; // Increase diameter
    noFill();
    stroke(0, 100); // Opacity of circles
    strokeWeight(2); // Thickness of circles
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

function setup() {
  createCanvas(800, 600);
  background(0, 100, 200); // Set background color to resemble water
}

function draw() {
  // Logic to reflect ripples off the sides of the sketch
  for (let i = 0; i < ripplers.length; i++) {
    ripplers[i].draw();

    // Check if ripple hits the sides
    if (
      ripplers[i].x + ripplers[i].diameter / 2 >= width ||
      ripplers[i].x - ripplers[i].diameter / 2 <= 0
    ) {
      ripplers[i].x = mouseX; // Reset x coordinate to follow mouse
    }
    if (
      ripplers[i].y + ripplers[i].diameter / 2 >= height ||
      ripplers[i].y - ripplers[i].diameter / 2 <= 0
    ) {
      ripplers[i].y = mouseY; // Reset y coordinate to follow mouse
    }
  }
}

function mousePressed() {
  // Create a new rippler object at the mouse click position
  let newRippler = new Rippler(mouseX, mouseY);
  ripplers.push(newRippler);
}