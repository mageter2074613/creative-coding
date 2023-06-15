let rm = RiTa.markov(2);
let data;

function setup() {
  noCanvas();
  let sourceElement = select("#source");
  data = sourceElement.elt.innerText;
  rm.addText(data);

  let letter = select("#letter");
  letter.child(createP('My Dearest Harrington,'));

  let lines = rm.generate(6);
  for (let l = 0; l < lines.length; l++) {
    let paragraph = createP(lines[l]);
    letter.child(paragraph);
  }

  letter.child(createP('Sincerely,<br>Markov'));
}

function mousePressed() {
  let letter = select("#letter");
  letter.remove();
  letter = createDiv();
  letter.id("letter");
  letter.child(createP('My Dearest Harrington,'));

  let lines = rm.generate(6);
  for (let l = 0; l < lines.length; l++) {
    let paragraph = createP(lines[l]);
    letter.child(paragraph);
  }

  letter.child(createP('Sincerely,<br>Markov'));
}
