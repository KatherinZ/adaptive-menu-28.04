let box = {
  x: 0,
  y: 0,
}
let extraCanvas;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  box.x = width / 2
  box.y = height / 2
  extraCanvas = createGraphics(width, height)
  extraCanvas.clear()
}

function draw() {
  background(0);

  rectMode(CENTER)
  rect(box.x, box.y, 20, 20)
  box.x = box.x + random(-5, 5)
  box.y = box.y + random(-5, 5)

  if (mouseIsPressed) {
    extraCanvas.ellipse(mouseX, mouseY, 50, 50)
  }
image(extraCanvas, 0, 0)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
