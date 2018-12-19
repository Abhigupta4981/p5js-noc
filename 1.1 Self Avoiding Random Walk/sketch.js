function setup() {
	createCanvas(600, 600);
	w = new Walker();
}

function draw() {
	background(51);
	w.update();
	push();
	stroke(255);
	strokeWeight(2);
	for(var i in w.history) {
		var pos = w.history[i];
		point(pos.x, pos.y);
	}
	pop();
}

function Walker() {
	this.x = width/2;
	this.y = height/2;
	this.history = [];
	this.update = function() {
		const r = floor(random(4));
		switch(r) {
			case 0:
				this.y-=2;
				break;
			case 1:
				this.x+=2;
				break;
			case 2:
				this.y+=2;
				break;
			case 3:
				this.x-=2;
				break;
		}
		this.history.push(createVector(this.x, this.y));
	}
}