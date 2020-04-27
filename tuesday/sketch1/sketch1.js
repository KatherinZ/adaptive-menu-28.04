let extraCanvas
let words = ['I am', 'nearly', 'dying', 'wanna', 'get', 'some', 'sleep']
let index = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  extraCanvas = createGraphics(width, height)
  extraCanvas.clear()
}

function draw() {
  fill(255)
  textSize(40)
  text('01:38 am', 120, 150)
  text('PRESS', width/2 - 50, height/2)
  text(words [index], mouseX, mouseY)
      if (mouseIsPressed && mouseX > 100) {
        strokeWeight(4)
      stroke(0)
      fill(255, 0, 0)
    extraCanvas.text()
  }
}

function mousePressed(){
  index += 1

  if (index === words.length){
  index = 0
  }
   image(extraCanvas, 0, 0)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
