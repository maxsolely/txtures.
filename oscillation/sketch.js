let numberOfWaves = 4;
let w
let xSpacing = 8
let theta = 0.0

let amplitude = []
let dx = []
let yvalues = []
let yvaluesLength = 124

function setup() {
  createCanvas(1000, 1000)
  w = width + 16
  for (let i = 0; i < numberOfWaves; i++) {
    amplitude.push(random(10, 30))
    let period = random(100, 300);
    dx.push((TWO_PI / period) * xSpacing)
  }
}

function draw() {
  background(255);
  calculateWave()
  renderWave(30)
  // renderWave(90)
  // renderWave(120)
}

function calculateWave() {
  theta += 0.05

  for (let i = 0; i < yvaluesLength; i++) {
    yvalues[i] = 0
  }
  for (let j = 0; j < numberOfWaves; j++) {
    let x = theta
    for (let i = 0; i < yvaluesLength; i++) {
      // Every other wave is cosine instead of sine
      if (j % 2 == 0) yvalues[i] += sin(x) * amplitude[j];
      else yvalues[i] += cos(x) * amplitude[j];
      x += dx[j];
    }
  }
}

function renderWave(yOffset) {
  noStroke()
  fill(155, 50);
  ellipseMode(CENTER);
  for (var x = 0; x < yvaluesLength; x++) {
    ellipse(x * xSpacing, yOffset + (width / 2 + yvalues[x]), 16, 16)
  }
}
