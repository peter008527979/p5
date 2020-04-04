var max_distance;

function setup() {
  createCanvas(1280, 720); 
  noStroke();
  max_distance = dist(0,0, width, height);
}

function draw() {
  background(0);

  for(var i = 0; i <= width; i += 20) {
    for(var j = 0; j <= height; j += 20) {
      var size = dist(mouseX, mouseY, i, j);
      size = (max_distance*max_distance)/(size*size*30);
      var  nsize = constrain(size, 0, 10);
      fill(255);
      ellipse(i, j, nsize, nsize);
    }
  }
}