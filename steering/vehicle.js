function Vehicle() {
  this.location = createVector(100, 100)
  this.velocity = createVector(0, 0)
  this.acceleration = createVector(0, 0)
  this.maxSpeed = 4
  this.maxForce = 0.1


  this.update = function () {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed)
    this.location.add(this.velocity)
    this.acceleration.mult(0)
  }

  this.steer = function (mouseX, mouseY) {
    let target = createVector(mouseX, mouseY);
    let desired = p5.Vector.sub(target, this.location)
    desired.mag(this.maxSpeed)
    let steering = p5.Vector.sub(desired, this.velocity)
    steering.limit(this.maxForce)
    this.acceleration.add(steering)
    this.update()
  }

  this.draw = function () {
    stroke(0)
    strokeWeight(2)
    fill("#edab9a")
    ellipse(this.location.x, this.location.y, 20, 20)
  }
}