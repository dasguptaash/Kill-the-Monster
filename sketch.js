const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1 = [];
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

    for(var i = 0; i<6; i++){
    box1.push(new Box(900,100,70,70));
}

for(var i = 0; i<8; i++){
 box1.push(new Box(800,100,70,70));
}

for(var i = 0; i<6; i++){
 box1.push(new Box(700,100,70,70));
}

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  for(var i = 0; i<20; i++){
    box1[i].display();
}

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
  Matter.Body.setPosition(hero.body, {x:500, y:50});
  rope.attach(hero.body);
  }
}