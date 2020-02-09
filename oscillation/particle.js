function Particle() {
  this.xAmplitude = random(100, 255)
  this.xPeriod = random(100, 600)
  this.yAmplitude = random(100, 255)
  this.yPeriod = random(100, 600)

  this.draw = function () {
    var x = this.xAmplitude * sin((frameCount / this.xPeriod) * TWO_PI)
    var y = this.yAmplitude * sin((frameCount / this.yPeriod) * TWO_PI)
    var noise =

      stroke(0)
    line(0, 0, x, y);
    fill(0)
    ellipse(x, y, 30, 30);
  }
}