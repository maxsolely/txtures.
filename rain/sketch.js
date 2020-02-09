let raindrops = [];

function setup() {
  createCanvas(windowWidth, windowHeight)
  for (let i = 0; i < 800; i++) {
    raindrops[i] = new RainDrop()
  }
}

function draw() {
  background('#FFE066')
  raindrops.forEach(raindrop => {
    raindrop.fall()
    raindrop.wrapRain()
    raindrop.show()
  })
}

function mousePressed() {
  let wind = createVector(random(0, 2), random(0, 2))
  raindrops.forEach(raindrop => raindrop.addWind(wind))
}