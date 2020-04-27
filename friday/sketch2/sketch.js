let recX = 0
let speed = 8

let bigx = 230
let bigy = 20
let bigr = 30

let arcX = -100

let circleColor = 255
let col = {
  r: 0,
  g: 0,
  b: 0
}

let arcColor



let rect2x = 70
let rect2y = 50
let init2 = 150
let rect3x = 0
let rect3y = 50
let init3 = 140

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  arcColor = color(220, 20, 60)
}

function draw() {
  col.r = random(0, 255)
  col.g = random(0, 255)
  col.b = random(0, 255)

  background(mouseY / 2)
  translate(200, 200)
  noStroke()
  ellipseMode(CENTER)
  fill(circleColor)
  circle(225, 100, 300, 300)

  rectMode(CENTER)
  rotate(20)
  fill(192, 192, 192)
  rect(150, 280, 35, 70)
  fill(78, 10, 166)
  rect(190, 80, 75, 20)
  fill(78, 10, 166)
  triangle(400, 150, 310, 60, 486, 90)

  if (overCircle(bigx, bigy, bigr) === true) {
    fill(0)
  } else {
    fill(255, 195, 0)
  }
  circle(bigx, bigy, bigr * 2, bigr * 2)


  fill(220, 20, 60)
  noStroke()
  rect(recX, 160, 50, 40)
  if (recX > 600) {
    speed = -8
  }
  if (recX < 0) {
    speed = 10
  }
  recX = recX + speed




  strokeWeight(6)
  noFill()
  strokeCap(SQUARE)
  noFill()
  stroke(220, 20, 60)
  arc(600, 100, 60, 60, 170, HALF_PI)

  rotate(40)
  noStroke()
  fill(78, 10, 166)
  rect(230, 240, 5, 90)
  rect(250, 250, 5, 90)
  rect(270, 260, 5, 90)

  rotate(-45)
  translate(rect2x, rect2y)
  fill(192, 192, 192)
  rect(150, init2, 20, 350)

  init2 = init2 - speed
  if (init2 > height) {
    speed = -10
  }

  translate(rect3x, rect3y)
  fill(78, 10, 166)
  rect(140, init3, 20, 350)

  init3 = init3 + speed / 2
  if (init3 > height) {
    speed = -10
  }

  translate(-100, -100)
  stroke(arcColor)
  noFill()
  ellipseMode(CORNER)

  if (rotate) {
    rotate(frameCount / 1)
  }
  arc(-100, -100, 200, 200, 200, HALF_PI)

  if (mouseY > 400 && mouseX > 600) {
    arcColor = color(15, 65, 250)
  } else {
    arcColor = color(220, 20, 60)
  }

}

function mousePressed() {
  if (circleColor === 255) {
    circleColor = color(15, 65, 250)
  } else {
    circleColor = 255
  }
}

function overCircle(x, y, r) {
  if (dist(x + 180, y + 280, mouseX, mouseY) < r) {
    return true
  } else {
    return false
  }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
