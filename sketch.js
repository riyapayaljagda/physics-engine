const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine
var world 
var ground
var ball
function setup() {
  createCanvas(400,400);
engine=Engine.create()
world=engine.world
var ground_options = {
  isStatic: true
}
var ball_options={
  restitution:1
}
ground=Bodies.rectangle(200,380,400,15, ground_options)
World.add(world,ground)
console.log(ground);
ball=Bodies.circle(100,100,20,ball_options)
World.add(world,ball)

}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,15);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
}  
