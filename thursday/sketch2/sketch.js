let cloud = {
  x1: 100,
  x2: 150,
  x3: 130,
  x4: 120,
  speed: 5
}



let balloon1 = {
  x: 150,
  y: 250,
  xspeed: 10,
  yspeed: 7
}
let balloon2 = {
  x: 400,
  y: 400,
  xspeed: 18,
  yspeed: 13
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  noStroke()
  fill(6, 0, 59)
  rect(0, 0, width, height)
  fill(0, 255, 229)
  rect(0, 350, width, height)


  //sun
  let sunX = map(mouseX, 0, width, width, 0)

  fill(241, 219, 76)
  ellipse(sunX, 100, 75)

  //balloons
  fill(99, 43, 200)
  ellipse(balloon1.x, balloon1.y, 40, 50)
  fill(22, 214, 216)
  ellipse(balloon2.x, balloon2.y, 40, 50)

  balloon1.x = balloon1.x + balloon1.xspeed
  balloon1.y = balloon1.y + balloon1.yspeed

  if (balloon1.x > width || balloon1.x < 0) {
    balloon1.xspeed = balloon1.xspeed * -1
  }
  if (balloon1.y > height || balloon1.y < 0) {
    balloon1.yspeed = balloon1.yspeed * -1
  }
  balloon2.x = balloon2.x + balloon2.xspeed
  balloon2.y = balloon2.y + balloon2.yspeed

  if (balloon2.x > width || balloon2.x < 0) {
    balloon2.xspeed = balloon2.xspeed * -1
  }
  if (balloon2.y > height || balloon2.y < 0) {
    balloon2.yspeed = balloon2.yspeed * -1
  }


  // cloud
  fill(250)
  ellipse(cloud.x1, 60, 80, 50)
  ellipse(cloud.x2, 60, 80, 50)
  ellipse(cloud.x3, 65, 80, 50)
  ellipse(cloud.x4, 50, 80, 50)

  cloud.x1 = cloud.x1 + cloud.speed
  cloud.x2 = cloud.x2 + cloud.speed
  cloud.x3 = cloud.x3 + cloud.speed
  cloud.x4 = cloud.x4 + cloud.speed


  if (cloud.x1 > width || cloud.x2 < 0) {
    cloud.speed = cloud.speed * random(0, 5, 1, 5)
  }

  houseBuild(50, 50, 5)
  houseBuild(90, 20, 100)
}

function houseBuild(x, y, size) {
  fill(0)
  translate(x, y)
  scale(size)
  rect(200, 300, 100, 60)
  triangle(250, 250, 190, 300, 310, 300)
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
