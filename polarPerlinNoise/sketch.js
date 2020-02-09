let inc = 0.1
// let noiseMax = 10
let slider;

function setup() {
  createCanvas(500, 500)
  slider = createSlider(0, 10, 0, 0.1)
}

function draw() {
  background(0)
  translate(width / 2, height / 2)
  beginShape()
  stroke(255)
  noFill()
  let noiseMax = slider.value()
  for (a = 0; a < TWO_PI; a += 0.1) {
    // we add the 1 so that we are only in the poistive region of our graph
    // since sin and cos go from -1 to 1
    // or we map it so it never gets below 0
    // let xoff = cos(a) + 1
    // let yoff = sin(a) + 1
    let xoff = map(cos(a), -1, 1, 0, noiseMax)
    let yoff = map(sin(a), -1, 1, 0, noiseMax)
    let r = map(noise(xoff, yoff), 0, 1, 100, 200)
    let x = r * cos(a)
    let y = r * sin(a)
    vertex(x, y)
    // xoff += inc
    // yoff += inc
  }
  endShape(CLOSE)
}