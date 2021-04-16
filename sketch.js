
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var CrumbledPaper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	CrumbledPaper = new Paper (300,300,50)

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(230);
 
 

  groundObject.display();
  dustbinObj.display();
  CrumbledPaper.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(CrumbledPaper.body, CrumbledPaper.body.position, {x:130, y:-145})
	}
}