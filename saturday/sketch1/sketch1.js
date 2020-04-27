function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //webgl отвечает за 3д
  frameRate(8); //отвечает за скорость анимации
}

function draw() {
  background(0);

  rotateZ(frameCount* 0.01)
  rotateX(frameCount* 0.01)
  rotateY(frameCount* 0.01)
  noFill()


  let mapX = map(mouseX, 0, width, 500, 10)
  for(let i = 0; i < 100; i++){

    stroke(random(0, 255), random(0, 55), random(0, 255))
    ellipse(random(-10, 10), random(-10, 10), 10 * i + 10)
  }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
