function Particle(origin) {
  this.pos = createVector(origin.x, origin.y)
  this.vec = createVector(random(-1, 1), random(-1, 1))
  this.acc = createVector(0, 0.05)
  this.lifespan = 255

  // this.applyForce = function (force) {
  //   this.acc.add(force)
  // }

  this.update = function () {
    this.vec.add(this.acc);
    this.pos.add(this.vec)
    this.lifespan -= 2
    // this.acc.mult(0)
  }

  this.isDead = function () {
    if (this.lifespan <= 0) {
      return true
    } else {
      return false
    }
  }
  this.show = function () {
    stroke(0, this.lifespan);
    strokeWeight(2)
    fill(0, this.lifespan)
    ellipse(this.pos.x, this.pos.y, 12, 12)
  }
}