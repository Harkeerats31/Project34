
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ball;
var airblower;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  airblower = new airBlower(width / 2 + 70, height / 2 + 20, 100, 90);

  button.mousePressed(blow);
}


function draw(){
 background(0)

  background(51);
  Engine.update(engine);
  
  ball.show()
  airblower.show()
}

function Blow() {
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
}