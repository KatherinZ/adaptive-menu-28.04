let extraCanvas
function setup() {
  createCanvas(1440, 900);
    background(0);
  extraCanvas = createGraphics(width, height)
  extraCanvas.clear()
}

function draw() {

  stroke(255)
  line(mouseX, mouseY, width/2, height/2)
    if (mouseIsPressed) {
      stroke(255, 0, 0)
      fill(255, 0, 0)
    extraCanvas.ellipse(mouseX, mouseY, 50, 50)
  }
  image(extraCanvas, 0, 0)
}
