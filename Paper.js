class Paper{
    constructor(x,y,radius){
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.x = x;
      this.y = y;
        this.radius = radius;
      this.body = Bodies.circle(this.x,this.y,this.radius,options);
      this.image = loadImage("images/paper.png");
      World.add(world,this.body); 
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      fill("white");
      imageMode(CENTER);
      image(this.image,0,0,this.radius/2,this.radius/2);
      pop();
    }
}