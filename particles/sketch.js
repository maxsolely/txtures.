let systems = []
let origin;

function setup() {
  createCanvas(800, 800, P2D);
}

function draw() {
  background(255);
  systems.forEach(system => {
    system.run()
    system.addParticle()
  })
}

function mouseClicked() {
  console.log('hello @', mouseX, mouseY);
  let ps = new ParticleSystem(mouseX, mouseY)
  systems.push(ps)
}