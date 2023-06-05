
let img;
function preload(){
  img = loadImage('https://mageter2074613.github.io/creative-coding/week2/pixels/desert-ge74263ace_1280.jpg');
}
//mageter2074613.github.io/creative-coding/week2/pixels/desert-ge74263ace_1280.jpg
function setup() {
  createCanvas(800, 800);
  img.loadPixels();
  
}

function draw() {
  background(220);
}

// Additional functions and code