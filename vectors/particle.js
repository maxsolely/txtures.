function Particle() {
  this.pos = createVector(random(width / 2), height / 2);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = random(1, 2)

  this.move = function () {
    // this.acc = mouse;

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    // this.vel.limit(5);
  }

  this.edges = function () {
    if (this.pos.x > width) {
      this.pos.x = 0;
    } else if (this.pos.x < 0) {
      this.pos.x = width
    } else if (this.pos.y > height) {
      this.pos.y = 0
    } else if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }

  this.bounce = function () {
    if (this.pos.x > width || this.pos.x < 0) {
      this.vel.x *= -1;
    }

    if (this.pos.y > height || this.pos.y < 0) {
      this.vel.y *= -1
    }
  }

  this.applyForce = function (force) {
    var f = p5.Vector.div(force, this.mass)
    this.acc.add(f);
  }

  this.show = function () {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.pos.x, this.pos.y, this.mass * 20, this.mass * 20);
  }
}