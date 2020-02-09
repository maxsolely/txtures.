// stroke(colors[floor(random(colors.length))]);
// let colors = ["#916953", "#CF8E80", "#FCB5B5", "#FCDDF2", "#FAF6F6", "#FFFFFF"]
var angle = 0.0;
var amplitude = 120;
var waveLengthOne = 90;
var waveLengthTwo = 155;
var pointCount = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (pointCount > 100000) {
    noLoop()
  }

  translate(width / 2, height / 2);
  noFill();
  strokeWeight(1);
  stroke('#71EEB8');
  beginShape();
  for (var i = 0; i < pointCount; i++) {
    angle = i / waveLengthOne * TWO_PI;
    var y = sin(angle) * amplitude;

    angle = i / waveLengthTwo * TWO_PI;
    var x = sin(angle) * amplitude;
    vertex(x, y)
  }
  endShape();
  pointCount++;
}







// Really Cool lightning effect

  // var x = 0;
  // var y = 0;

  // background(45, 43, 100);
  // stroke(255);
  // beginShape(LINES);
  // while (x < width && y < height) {
  //   vertex(x, y);
  //   x += random(10);
  //   y += random(10);
  // }
  // endShape();

   // background(255);
  // for (var i = 0; i < xPos.length; i++) {
  //   fill(255, 68, 68, 150);
  //   rect(xPos[i], yPos[i], 300, 250)
  // }

  // colorMode(HSB, 360, 50, 50)
  // background(mouseX % 360, 50, 50);
  // noStroke();
  // fill(mouseY - 360, 50, 50);
  // rect(width / 2, height / 2, mouseX + 1, mouseY + 1)

  // translate(frameCount % width, frameCount % height);
  // rotate(radians(frameCount))
  // fill(0, 0, 0, 4)
  // rect(0, 0, 40, 40)

  // background(200);
  // noStroke()
  // translate(width / 2, height / 2);
  // fill(0);
  // rotate(radians(frameCount));
  // for (var i = 0; i < 8; i++) {
  //   push()
  //   rotate(TWO_PI * i / 8);;
  //   fill(random(255), random(255), random(255));
  //   rect(frameCount % (width / 4), 0, 40, 40);
  //   pop();
  // }


// ********************** LISSAJOUS CURVE ****************
//   var angle = 0.0;
// var amplitude = 120;
// var waveLengthOne = 90;
// var waveLengthTwo = 155;
// var pointCount = 0;


// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   if (pointCount > 100000) {
//     noLoop()
//   }

//   translate(width / 2, height / 2);
//   noFill();
//   strokeWeight(1);
//   stroke('#71EEB8');
//   beginShape();
//   for (var i = 0; i < pointCount; i++) {
//     angle = i / waveLengthOne * TWO_PI;
//     var y = sin(angle) * amplitude;

//     angle = i / waveLengthTwo * TWO_PI;
//     var x = sin(angle) * amplitude;
//     vertex(x, y)
//   }
//   endShape();
//   pointCount++;
// }