// Artwork Emulation: Robert Mallary
// Emulating the artwork "3-Color Computer Graphic"
// Link: http://dada.compart-bremen.de/item/artwork/742

function setup() {
  
  createCanvas(600, 600); 
  
  background("#ffffff"); 
  

  noLoop();
}

function draw() {
  // the "3-Color Computer Graphic" artwork
  
  var color1 = color("#ff0000"); // Red
  var color2 = color("#00ff00"); // Green
  var color3 = color("#0000ff"); // Blue
  
  // Divide into a grid
  var gridSize = 20;
  for (var x = 0; x < width; x += gridSize) {
    for (var y = 0; y < height; y += gridSize) {
      // a random color from the colors
      var randomColor = random([color1, color2, color3]);
      
      // Draw rectangle with the color
      fill(randomColor);
      rect(x, y, gridSize, gridSize);
    }
  }
}

