var xcor = 400;
var ycor = 400;
var xspeed = 5;
var yspeed = 8;
var cornerhits = 0;

function setup() {
  createCanvas(800, 800);
  background("black");
}

function draw() {
  rect(xcor, ycor, 50, 50);
  xcor += xspeed;
  ycor += yspeed;
  if (xcor >= width - 50 || xcor <= 0){
    xspeed *= random(-0.8, -1.2);
    console.log(xspeed);
  } else if (ycor >= height - 50 || ycor <= 0) {
    yspeed *= random(-0.8, -1.2);
    console.log(yspeed);
  }
  if (ycor == xcor && (xcor == 0 || xcor == width - 50)) {
    cornerhits += 1;
    console.log(cornerhits);
  }
  
  
}
