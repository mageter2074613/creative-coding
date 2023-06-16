function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  
    let x = width / 2; // x-coordinate of the eyeball center
    let y = height / 2; // y-coordinate of the eyeball center
    let eyeSize = 100; // size of the eyeball
  
    // Calculate the distance between the center of the eyeball and the cursor
    let d = sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
  
    // Calculate the angle of rotation for the eyeball
    let ang;
    if (mouseX > x) {
      ang = asin((mouseY - y) / d);
    } else {
      ang = (90 - asin((mouseY - y) / d)) + 90;
    }
  
    // Translate the canvas to the position of the eyeball
    translate(x, y);
  
    // Rotate the canvas around the eyeball's center
    rotate(ang);
  
    // Draw the eyeball
    fill(255);
    ellipse(0, 0, eyeSize, eyeSize);
  
    // Draw the iris
    fill(0);
    let irisSize = eyeSize / 2; // size of the iris
    let irisOffset = eyeSize / 4; // vertical offset of the iris
    ellipse(0, -irisOffset, irisSize, irisSize);
  }
  