function setup() {
  createCanvas(800, 800); 
  noLoop();
}

function draw() {
  background(255);
  angleMode(DEGREES);

  

  // Loop for tiling the quilt pattern
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      push();
      translate(x * 100, y * 100);

      // Tile drawing code here
      if ((x + y) % 2 === 0) {
        
        drawTileA();
      } else {
        
        drawTileB();
      }

      pop();
    }
  }
}

function drawTileA() {

  fill(255, 0, 0); // Red color
  rect(0, 0, 100, 100); // Square tile
}

function drawTileB() {
  
  fill(0, 0, 255); // Blue color
  ellipse(50, 50, 80, 80); // Circle tile
}

