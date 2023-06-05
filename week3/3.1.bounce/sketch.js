let cx = 0; 
let cy = 0; 

// width and height of circle
let cw = 40; 
let ch = 40; 

// horizontal and vertical speeds
let hspeed = Math.random() * 40;
let vspeed = Math.random() * 40;

// how much stretching to do
let vstretch = 30;
let hstretch = 30;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50); 
  noStroke();

  // circle color
  fill(250);

  // shift drawing plane to the center of the sketch
  translate(400,400);
  
  // check for horizontal collisions, reverse h direction
  if (cx > width/2 - 40 || cx < -width/2 + 40){
    hspeed = -hspeed;
  }
  
  // check for vertical collisions, reverse v direction
  if (cy > height/2 - 40 || cy < -height/2 + 40){
    vspeed = -vspeed;
  }
  
  // adjust the x and y positions by the h and v factors
  cx += hspeed;
  cy += vspeed;
  
  // checking for nearness to the x edges
  let reach = ch;
  if (abs(cx) > 110){
    // adjust the stretch linearly as circle approaches edge
    reach = map(abs(cx),110,160,ch, ch + vstretch)
  }
}