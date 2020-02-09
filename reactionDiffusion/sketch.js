var grid
var next


function setup() {
  createCanvas(600, 600)
  pixelDensity(1)
  grid = []
  next = []
  for (var x = 0; x < width; x++) {
    grid[x] = []
    next[x] = []
    for (var y = 0; y < height; y++) {
      grid[x][y] = { a: 0, b: 0 }
      next[x][y] = { a: 0, b: 0 }
    }
  }
}

function draw() {
  background(51)
  loadPixels()
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
    }
  }
  updatePixels()
}