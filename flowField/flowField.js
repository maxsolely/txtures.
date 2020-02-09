function FlowField() {
  // a flow field is a 2D array of vectors
  this.field = []
  this.resolution = 15 // how large each 'cell' of the flow field is
  this.cols = 800 / this.resolution
  this.rows = 800 / this.resolution

  this.createField = function () {
    // this.cols = width / resolution;
    // this.rows = height / resolution;
    this.init()
  }

  this.init = function () {
    //Reseed noise so we get a new field everytime
    let xoff = 0;
    for (let i = 0; i < this.cols; i++) {
      let yoff = 0;
      for (let j = 0; j < this.rows; j++) {
        let theta = map(noise(xoff, yoff), 0, 1, 0, TWO_PI)
        let vector = p5.Vector.fromAngle(theta);
        stroke(0);
        push()
        translate(i * this.resolution, j * this.resolution)
        rotate(vector.heading())
        line(0, 0, this.resolution, 0)
        pop()
        yoff += 0.1;
      }
      xoff += 0.1
    }
  }

}