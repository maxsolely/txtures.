var cells = [];
var colors = ["#BD5A97", "#907F9F", "#A4A5AE", "#B0C7BD", "#B8EBD0"]
var amountOfCells = 25;

function setup() {
  createCanvas(600, 600)
  for (var x = 0; x < amountOfCells; x++)
    cells.push(new Cell(createVector(random(width), random(height)), 80, colors[floor(random(colors.length))]));
}

function draw() {
  background(255);
  for (var i = 0; i < cells.length; i++) {
    cells[i].move()
    cells[i].show();
  }
}

function mousePressed() {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].clicked(mouseX, mouseY)) {
      var cellA = cells[i].mitosis()
      var cellB = cells[i].mitosis()

      cells.push(cellA);
      cells.push(cellB);
    }
  }
}

function keyPressed() {
  if (keyCode == 32) { // space
    saveFrame("mitosis" + hour() + "-" + minute() + "-" + second() + ".png");
  }
}