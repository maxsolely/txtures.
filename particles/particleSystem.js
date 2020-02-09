function ParticleSystem(mouseX, mouseY) {
  this.origin = createVector(mouseX, mouseY);
  this.numberOfParticles = 10;
  this.particles = []

  for (let i = 0; i < this.numberOfParticles; i++) {
    this.particles.push(new Particle(this.origin))
  }

  ////// METHODS

  this.addParticle = function () {
    this.particles.push(new Particle(this.origin))
  }

  this.run = function () {
    this.particles.forEach((particle, index) => {
      particle.update()
      particle.show()
      if (particle.isDead()) {
        this.particles.splice[index, 1]
      }
    })
  }


}