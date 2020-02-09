let inc = 0.1
// this is to scale pixels, so we don't have a vector at every pixel, 
// but rather every 20 pixels
let scale = 10
let cols, rows;
let zoff = 0;
let particles = []
let flowField;

function setup() {
  createCanvas(windowWidth / 2, windowHeight / 2)
  colorMode(HSB, 255);
  cols = floor(width / scale)
  rows = floor(height / scale)
  pixelDensity(1)

  flowField = new Array(cols * rows)

  for (let i = 0; i < 500; i++) {
    particles[i] = new Particle();
  }

  // ice color
  background('#284b63');
  // background(240)
}

function draw() {
  let xoff = 0;
  for (let x = 0; x < cols; x++) {
    var yoff = 0;
    for (let y = 0; y < rows; y++) {
      let index = (x + y * cols)
      // the * 4 makes it go 360 degrees, otherwise it is just going in one direction
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4
      let vec = p5.Vector.fromAngle(angle);
      //this is to decrease the magnitude of the vector so the velocity doesn't start so fast
      vec.setMag(1)
      flowField[index] = vec;
      // this draws the vectors on the canvas
      // stroke(0, 50)
      // push()
      // translate(x * scale, y * scale);
      // rotate(vec.heading())
      // strokeWeight(1)
      // line(0, 0, scale, 0)
      // pop()
      yoff += inc
    }
    xoff += inc
    zoff += 0.0003
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowField)
    particles[i].update()
    particles[i].edges()
    particles[i].show(i)
  }
}