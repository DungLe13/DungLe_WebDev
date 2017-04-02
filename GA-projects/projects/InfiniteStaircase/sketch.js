var agents = [];
var r = 255;
var opaque = 10;
var a = 0.5;


function setup() {
  createCanvas(1000, 540);
  background(0);
  //rectMode(CENTER);
  
  for (var i=0; i<1; i++) {
    var a = new Agent(random(width), random(height), random(-.25, .25), random(-.25, .25), 100);
    agents.push(a);
  }
  //frameRate = 80;
}

function draw() {
  // for each agent
  for (var i=0; i<agents.length; i++) {
    
    agents[i].update();
    
    agents[i].draw();
  }
}

function Agent(x_, y_, vx_, vy_, size) {
  this.position = {x:x_, y:y_};   // position of the agent
  this.velocity = {x:vx_, y:vy_}; // velocity (speed) of the agent
  this.Size = size;              // height/width of the agent
  //this.active = true;
  this.angle = 0;
  
  // add velocity to the position to move the circle
  this.update = function() {
    this.position.x += this.velocity.x*map(noise(0.03*frameCount), 0, 1, 0, 10);
    this.position.y += this.velocity.y*map(cos(HALF_PI*frameCount), 0, 1, 6, 10);
    
    this.col();
    this.wrap();
  }
  
  // changing the color while moving
  this.col = function() {
    r -= a;
    opaque += a;
    if (r < 1 && opaque > 50) {
      a = a*(-1);
    }
    else if (r > 255 && opaque < 10) {
      a = a*(-1);
    }
  }
  
  // wrapping function to wrap the agent around the screen
  // if it goes off of it
  this.wrap = function() {
    if (this.position.x > width) {
      this.position.x = random(width/4, 3*width/4);
      this.position.y = random(height/4, 3*height/4);
    }
    if (this.position.x < 0) {
      //this.position.x = width;
      this.position.x = random(width/3, width);
      this.position.y = random(height);
    }
    if (this.position.y > height) {
      //this.position.y = 0;
      this.position.x = random(20, 3*width/4);
      this.position.y = random(50, 3*height/4);
    }
    if (this.position.y < 0) {
      //this.position.y = height;
      this.position.x = random(width);
      this.position.y = random(height/3, height);
    }
  }
  
  // draw the agent
  this.draw = function() {
    if (frameCount % 30 == 0){
      fill(r, r, r, 50);
      stroke(0);
      push();
      translate(this.position.x, this.position.y);

      this.angle += random(0.1, 0.25);
      rotate(this.angle);

      rect(0, 0, this.Size, this.Size);
      pop();
    }
  }
}