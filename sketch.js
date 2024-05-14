function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}function setup() {
  createCanvas(500, 500);
  background("black")
}

function draw() {
  stroke("blue");
  fill("white");

  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 10, 25);
  }
}
