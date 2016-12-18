var drops = [];
var img;
var song;
var snowing = true;
function preload() {
  img = loadImage("HoloxTristan.png");
  song = loadSound("JingleBells.mp3");
}
function Drop() {
  this.x = random(width);
  this.y = random(-500,-50);
  this.z = random(0,20);
  this.yspeed = map(this.z,0,20,1,3);
  //this.size = map(this.z,0,20,1,5) //this is for the ellipse
  
  this.fall = function() {
    this.y = this.y + this.yspeed;
    if (snowing) {
      if (this.y > height) {
        this.y = random(-200, -100);
        this.x = random(width);
        }
      }
    }
  
  this.show = function() {
    var thick = map(this.z,0,20,1,3);
    strokeWeight(thick);
    stroke(175,255,240);
    fill(175,255,240)
    line(this.x,this.y,this.x+1,this.y+1); //<---comment this out to add ellipse
    //ellipse(this.x,this.y,this.size);
  }
}

function setup() {
  createCanvas(640, 480);
  frameRate(60)
  for (i = 0; i < 500; i++) { //Number of Snowflakes that are created
    drops[i] = new Drop();
  }
  song.play();
}
/*function mouseClicked() { //If you want to be able to turn off snow
  if (snowing) {
    snowing = false;
  } else {
    snowing = true;
  }
}*/

function draw() {
  background(50);
  image(img,-330,-150)
  for (i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}