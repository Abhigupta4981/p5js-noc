var prev;
var now;

function setup() {
  createCanvas(400, 400);
	background(51);
	now = createVector(width/2, height/2);
	prev = now.copy();
}

function draw() {
	stroke(255);
	strokeWeight(2);
	line(now.x, now.y, prev.x, prev.y);
	prev.set(now);
	var step = p5.Vector.random2D();
	var r = random(100);
	if(r<1)
		step.mult(random(25, 100));
	else
		step.setMag(3);
	now.add(step);
}