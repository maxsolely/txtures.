let r = 150
let a = 20
let vel = 0;
let acell = 0.01;
let multiplier = 1;
let colors = ['#643173', '#7D5BA6', '#86A59C', '#89CE94']


function setup() {
  createCanvas(windowWidth, windowHeight)
  background('#333333')
  // frameRate(30)
}

function draw() {
  // background(0);
  translate(width / 2, height / 2)
  x = r * cos(a)
  y = r * sin(a)

  if (r < 200) {
    fill('#333333')
    noStroke()
  } else {
    fill(random(colors))
  }
  // stroke(0)
  // line(0, 0, x, y)
  ellipse(x, y, 20, 20)

  if (vel > 0.6) {
    multiplier = -1
  }

  if (vel < -0.6) {
    multiplier = 1
  }

  r += (multiplier * noise(vel)) + (multiplier * random(15))
  a += vel
  vel += acell * multiplier
  // console.log(r)
  // console.log
}