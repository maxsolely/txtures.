function RainDrop() {
  this.pos = createVector(random(0, width), random(-400, -100), random(100))
  this.vel = createVector(0, 0)
  this.acc = createVector(0, 0)

  this.fall = function () {
    let { vel, pos, acc } = this
    vel.y = map(pos.z, 0, 100, 3, 7)
    vel.add(acc)
    pos.add(vel);
    acc.mult(0)

    if (pos.y > height) {
      pos.y = 0
    }
  }

  this.addWind = function (force) {
    this.acc.add(force)
  }

  this.wrapRain = function () {
    let { pos } = this
    if (pos.y > height) pos.y = 0
    if (pos.x < 0) pos.x = width
    if (pos.x > width) pos.x = 0
    if (pos.z < 30 && pos.y > 0.85 * height) pos.y = 0
  }

  this.show = function () {
    let { pos } = this
    let weight = map(pos.z, 0, 100, 0.5, 3)
    stroke('#50514F')
    strokeWeight(weight)
    line(pos.x, pos.y, pos.x, pos.y + 10)
  }
}