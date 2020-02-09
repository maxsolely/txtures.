var particles = [];
var numberOfParticles = 5
function setup() {
  createCanvas(600, 600)
  for (var i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(255)
  var gravity = createVector(0, 0.3);
  particles.forEach(particle => {
    particle.show()
    particle.applyForce(gravity);
    particle.bounce();
    particle.move();
  })
  // particle.show();
  // // particle.applyForce(wind)
  // particle.applyForce(gravity)
  // // particle.edges();
  // particle.bounce();
  // particle.move();
}


function mousePressed() {
  var wind = createVector(2, 0.1);
  particles.forEach(particle => particle.applyForce(wind));
}
