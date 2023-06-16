let x = 0;
let y = 0;
let xspeed = 1;
let yspeed = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Check for collision with left and right edge
  if (x < 0 || x > width) {
    xspeed *= -1; // Reverse the x direction
  }

  // Check for collision with top and bottom edge
  if (y < 0 || y > height) {
    yspeed *= -1; // Reverse the y direction
  }

  x += xspeed; // Iterate x
  y += yspeed; // Iterate y

  // Draw a circle
  circle(x, y, 50);
}

function mouseClicked() {
  // Add a new bouncing object at the mouse position
  let newObject = {
    x: mouseX,
    y: mouseY,
    xspeed: random(-2, 2),
    yspeed: random(-2, 2)
  };
  objects.push(newObject);
}
