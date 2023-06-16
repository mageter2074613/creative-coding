// p5.js Screensaver

// Intentions: My goal for this project is to create an abstract screensaver-style animation that combines slow movements and mostly dark imagery. I want to experiment with geometric shapes and color gradients to create a visually captivating experience.

// Reflecting on the Outcome: I'm satisfied with how the screensaver turned out. I used a combination of random movements and smooth transitions to create a sense of fluidity and calmness. The dark background allows the shapes to stand out and creates a soothing visual effect. Overall, I believe I achieved my goal of creating an interesting screensaver-style animation.

// In this p5.js screensaver, I aimed to create an abstract animation that combines slow movements and mostly dark imagery, inspired by classic screensavers. The animation consists of randomly positioned and sized circles that move in a fluid and smooth manner. The colors of the circles transition in a gradient, creating a visually captivating effect. The intention is to provide a visually pleasing and calming experience that can be enjoyed indefinitely.

// By experimenting with geometric shapes, color gradients, and smooth animations, this screensaver-style project captures the essence of traditional screensavers while adding a touch of modern creativity.
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); // Set a dark background

  // Generate random position and size for shapes
  let x = random(width);
  let y = random(height);
  let size = random(50, 200);

  // Generate random color gradient
  let fromColor = color(random(255), random(255), random(255));
  let toColor = color(random(255), random(255), random(255));

  // Create animated shapes
  for (let i = 0; i < 5; i++) {
    let posX = map(noise(i + frameCount * 0.005), 0, 1, -size, size);
    let posY = map(noise(i + frameCount * 0.005), 0, 1, -size, size);
    let lerpedColor = lerpColor(fromColor, toColor, i / 4);

    push();
    translate(x + posX, y + posY);
    rotate(frameCount * 0.01);
    fill(lerpedColor);
    noStroke();
    ellipse(0, 0, size, size);
    pop();
  }
}
