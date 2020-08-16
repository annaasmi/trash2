
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustbin1,dustbin2,dustbin3,paper;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	  ground = new Ground(800,690,1600,20);
    //dustbin1 = new Trash(1300,630,20,100);
    dustbin2 = new Trash(1400,500,200,350);
    //dustbin3 = new Trash(1500,630,20,100);
    paper = new Paper(150,680,70);
   console.log(paper.x);
   console.log(paper.y);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  ground.display();
  //dustbin1.display();
  dustbin2.display();
 // dustbin3.display();
  paper.display();
  keyPressed();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}

