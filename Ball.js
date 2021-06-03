class Ball {
    constructor(x, y, r){
    var options = {density: 1,
                   frictionAir: 0.005
                 }
     this.body = Bodies.circle(x,y,r,options);
     this.radius = r;
     World.add(world,this.body);
    }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill("Black");
    ellipse(0,0,this.radius, this.radius);
    pop();
  }
  };
  