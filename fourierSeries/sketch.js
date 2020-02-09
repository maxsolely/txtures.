let time = 0;
let wave = []
function setup() {
  createCanvas(600, 400)
}

function draw() {
  background(0)

  translate(200, 200)
  let x = 0
  let y = 0

  for (let k = 0; k < 3; k++) {
    //saving the prevy and prevx for large circles
    let prevx = x
    let prevy = y
    let n = k * 2 + 1
    let radius = 50 * (4 / (n * PI))
    x += radius * cos(n * time)
    y += radius * sin(n * time)


    stroke(255, 100)
    noFill()
    ellipse(prevx, prevy, radius * 2)

    stroke(255)
    line(prevx, prevy, x, y)
    // ellipse(x, y, 8)
  }
  // add new y to the front of the array
  wave.unshift(y)

  // the line from the end of the circle to the start of the wave
  translate(200, 0)
  line(x - 200, y, 0, wave[0])


  beginShape()
  stroke(255)
  noFill()
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i])
  }
  endShape()


  if (wave.length > 250) {
    wave.pop()
  }
  time += 0.05
}