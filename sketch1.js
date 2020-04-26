let dots = []
let count
let speed
let cellSize = 40
//переменные видны и в draw и в set up
function setup() {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL)
  cnv.style('display', 'block')
  frameRate(15)

  let xCellsCount = width / cellSize
  let yCellsCount = height / cellSize

  count = xCellsCount * yCellsCount
  for (let yCount = 0; yCount < yCellsCount; yCount++) {
    for (let xCount = 0; xCount < xCellsCount; xCount++) {
      dots.push(createDot({
        xCount: xCount,
        yCount: yCount
      }))
    }
  }
}

function draw() {
  background(0);
    let mapColor = map(mouseX, 0, width, 0, 255)

  for (let i = 0; i < count; i++) {
    dots[i].move()
      rotateZ(frameCount* 0.1)
  rotateX(frameCount* 0.1)
  rotateY(frameCount* 0.01)
    fill(mapColor, random(0, 255), random(0, 255))
    dots[i].display()
  }
}

function createDot({
  xCount,
  yCount,
  d = 6,
  speed = random(0.04, 0.8)

}) {
    let mapColor = map(mouseX, 0, width, width, 0)
  let paddingX = cellSize / 2
  let paddingY = cellSize / 2
  let directionX = 1
  let directionY = 1

  return {
    move() {
      paddingX = paddingX + speed * directionX
      if (paddingX > cellSize || paddingX < 0) {
        directionX *= -1
        paddingY = paddingY + speed * directionY
      }

      if (paddingY > cellSize || paddingY < 0) {
        directionY *= -1
        paddingY = paddingY + speed * directionY
      }
    },
    display() {
      let x = xCount * cellSize + paddingX
      let y = yCount * cellSize + paddingY
      ellipse(x, y, d)


      stroke(255, 50)
      line(mouseX, mouseY, x, y)
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
