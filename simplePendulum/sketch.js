let length = 200;
let angle = 90
let aAcc = 0;
let aVel = 0;
let bob, origin

function setup() {
  createCanvas(800, 800)
  origin = createVector(0, 0)
  bob = createVector(0, length)
}

function draw() {
  background(255)
  translate(width / 2, height / 2)

  bob.x = length * sin(angle)
  bob.y = length * cos(angle)
  line(origin.x, origin.y, bob.x, bob.y)
  ellipse(bob.x, bob.y, 32, 32)

  aAcc = -0.01 * sin(angle)

  angle += aVel;
  aVel += aAcc;
  // damping... so it eventually stops
  aVel = aVel * 0.99;

}