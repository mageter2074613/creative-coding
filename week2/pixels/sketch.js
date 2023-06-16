
let img;
function preload(){
  img = loadImage('c:\Users\malac\Downloads\desert-ge74263ace_1280.jpg');
}
//mageter2074613.github.io/creative-coding/week2/pixels/desert-ge74263ace_1280.jpg
function setup() {
  createCanvas(800, 800);
  img.loadPixels();
  
}

function draw() {
  background(220);

  // Manipulate and display the image pixels here
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      // Get the color of the pixel at (x, y)
      let pixelColor = img.get(x, y);

      // Example manipulation: invert the pixel color
      let invertedColor = color(255 - red(pixelColor), 255 - green(pixelColor), 255 - blue(pixelColor));

      // Set the manipulated color to the pixel at (x, y)
      img.set(x, y, invertedColor);
    }
  }

  // Update the modified image pixels
  img.updatePixels();

  // Display the modified image
  image(img, 0, 0);
}
// Additional functions and code