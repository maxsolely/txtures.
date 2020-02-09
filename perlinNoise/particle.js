function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0)
  this.acc = createVector(0, 0);
  this.maxSpeed = 2.5;
  this.h = 0

  this.update = function () {
    this.vel.add(this.acc)
    this.vel.limit(this.maxSpeed)
    this.pos.add(this.vel)
    this.acc.mult(0)
  }

  this.applyForce = function (force) {
    this.acc.add(force);
  }

  this.show = function (index) {
    // ice color
    stroke('rgba(217%,217%,217%,0.3)');

    if (index % 2 === 0) {
      stroke('rgba(60%,110%,113%,0.7)')
    }

    //rainbow
    // stroke(this.h, 255, 255, 30)
    // this.h += 1
    // if (this.h > 255) {
    //   this.h = 0
    // }

    strokeWeight(1)
    point(this.pos.x, this.pos.y)
  }

  this.edges = function () {
    if (this.pos.x > width) this.pos.x = 0
    if (this.pos.x < 0) this.pos.x = width
    if (this.pos.y > height) this.pos.y = 0
    if (this.pos.x < 0) this.pos.y = height
  }

  this.follow = function (arrayOfVectors) {
    let x = floor(this.pos.x / scale);
    let y = floor(this.pos.y / scale);
    let index = x + y * cols
    let force = arrayOfVectors[index]
    this.applyForce(force)
  }
}