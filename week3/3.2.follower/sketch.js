let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0;
let y = 0;
let followerImage;

function preload() {
  followerImage = loadImage('follower.png');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  
  // Calculate the distance between mouse pointer and follower
  let distance = dist(x, y, mouseX, mouseY);

  // Check if the distance is small enough to register as a catch
  if (distance < 50) {
    // Reset the position of the follower
    x = random(width);
    y = random(height);
  } else {
    // Move the follower towards the mouse pointer
    if (mouseX > x) {
      x = x + xspeed;
    } else if (mouseX < x) {
      x = x - xspeed;
    }
    if (mouseY > y) {
      y = y + yspeed;
    } else if (mouseY < y) {
      y = y - yspeed;
    }
  }

  // Draw the follower image centered at (x, y)
  imageMode(CENTER);
  image(followerImage, x, y);
}