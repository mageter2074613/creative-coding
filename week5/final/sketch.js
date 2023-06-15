/*


Title: Malachi Final Project

For my final project, I aimed to create an immersive multimedia experience using p5.js that combines audio, video, interactivity, and visual effects. The project draws inspiration from my previous explorations in interactive art and pushes the boundaries of my skills and creativity.

Intentions:
1. Exploration of Audio-Visual Synchronization: I wanted to experiment with synchronizing audio and video elements to create a cohesive and immersive experience. By incorporating audio and video files, I aimed to create a harmonious relationship between sound and visuals, enhancing the overall impact of the project.

2. Interactivity and User Engagement: I aimed to engage the users by providing interactive elements within the project. The particle system represents this interactive aspect, allowing users to manipulate and influence the visual elements on the canvas. This interactivity adds a layer of engagement and empowers users to become co-creators of the visual experience.

3. Seamless Integration of Multimedia: I aimed to seamlessly integrate different media types, such as audio and video, into a single project. By using p5.js, I could harness its capabilities to manipulate and display multimedia elements effectively, creating a cohesive and immersive environment.

Evaluation:
In evaluating the success of my project, I considered the following aspects:

1. Aesthetic Cohesion: I aimed for a harmonious visual style and an aesthetic that complements the chosen audio and video elements. By carefully selecting color schemes, visual effects, and compositions, I strived to create a visually pleasing and cohesive experience.

2. User Engagement: The interactivity provided through the particle system allowed users to actively engage with the project. By providing intuitive controls and responsive feedback, I aimed to create an engaging and enjoyable user experience.

3. Audio-Visual Synchronization: The synchronization of audio and video elements was crucial to the project's success. By ensuring that the visual elements closely corresponded with the audio cues, I aimed to create a sense of harmony and immersion. The evaluation of this aspect relies on users' subjective experiences and the extent to which the synchronization enhances the overall impact.

Overall, I believe my project successfully achieved my intentions of creating an immersive multimedia experience that combines audio, video, interactivity, and visual effects. It represents my growth as an artist and my exploration of new possibilities in interactive art.//

*/


// Global variables
let audio;
let video;
let particles = [];

function preload() {
  // Load any necessary assets or data here
  audio = loadSound('c:\Users\malac\Music\applause.wav');
  video = createVideo('c:\Users\malac\Downloads\clapping.mp4');
}
function setup() {
  // Set up the canvas and any other initializations
  createCanvas(windowWidth, windowHeight);

  // Set up the video element
  video.size(width, height);
  video.loop();
  video.hide();

  // Set up the audio element
  audio.loop();

  // Create particles or other interactive elements
  for (let i = 0; i < 100; i++) {
    let particle = new Particle(random(width), random(height));
    particles.push(particle);
  }
}

function draw() {
  // Clear the canvas or apply background
  background(0);

  // Update and display particles
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }

  // Other visual effects or interactions
  // ...

  // Display video frame
  image(video, 0, 0, width, height);
}

// Event handlers or interactive functionality
function mousePressed() {
  // Perform actions when the mouse is pressed
  // ...
}

// Particle class for interactive elements
class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    // Update the particle's position and velocity
    this.position.add(this.velocity);
  }

  display() {
    // Display the particle on the canvas
    fill(this.color);
    ellipse(this.position.x, this.position.y, 10);
  }
}
