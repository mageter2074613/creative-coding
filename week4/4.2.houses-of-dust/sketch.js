let poem;
let grammar = tracery.createGrammar({
   "origin": "A HOUSE OF #material#\n#place#\nUSING #light_source#\nINHABITED BY #inhabitants#",
   "material": ["Bricks", "Glass", "Wood", "Concrete", "Steel"],
   "place": ["On a hill", "By the sea", "In the forest", "In the city", "In the desert"],
   "light_source": ["Sunlight", "Lamps", "Candles", "Fire", "LEDs"],
   "inhabitants": ["Dreamers", "Artists", "Wanderers", "Spirits", "Creatures"]
});

function setup() {
  createCanvas(400, 400);
  noLoop(); // Disable the drawing loop
}

function draw() {
  background(220);
  
  for (let i = 0; i < 4; i++) { // Generate four quattrains
    poem = grammar.flatten("#origin#");
    textSize(16);
    textAlign(CENTER);
    text(poem, width/2, 50 + i*100); // Adjust y position to fit multiple quattrains
  }
}
