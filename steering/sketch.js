let vehicle

function setup() {
  createCanvas(800, 800)
  vehicle = new Vehicle()
}

function draw() {
  background(255);
  vehicle.steer(mouseX, mouseY);
  // vehicle.update();
  vehicle.draw()
}