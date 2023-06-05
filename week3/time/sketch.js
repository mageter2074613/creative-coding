let bgColor;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  // Set the background color based on the hour of the day
  let hourOfDay = hour();
  bgColor = map(hourOfDay, 0, 23, 0, 255);
  background(bgColor);

  // Set the fill color based on the minute of the hour
  let minuteOfHour = minute();
  let fillColor = map(minuteOfHour, 0, 59, 0, 255);
  fill(fillColor);

  // Draw a shape that changes size based on the second of the minute
  let secondOfMinute = second();
  let shapeSize = map(secondOfMinute, 0, 59, 0, width / 2);
  let shapeX = width / 2;
  let shapeY = height / 2;
  ellipse(shapeX, shapeY, shapeSize);
}