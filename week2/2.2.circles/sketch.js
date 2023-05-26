function setup() {
  createCanvas(900, 900);
  noLoop();
}

function draw() {
  background(220);
  translate(100, 100);

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      push();
      translate(x * 100, y * 100);

      // Modify the circles using functions like stroke(), fill(), strokeWeight()
      stroke(0);
      fill(255);
      strokeWeight(2);
      ellipse(0, 0, 100, 100);

      pop();
    }
  }
}