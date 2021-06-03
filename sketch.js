const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball; 
var building1, building2, building3, building4, building5, building6, building7, building8, building9, building10;
var ground, rope;

function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
  
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600,height,1200,10);

    building1 = new Building(700,500,50,50);
    building2 = new Building(700,475,50,50);
    building3 = new Building(700,450,50,50);
    building4 = new Building(700,400,50,50);
    building5 = new Building(700,350,50,50);
    building6 = new Building(700,300,50,50);
    building7 = new Building(700,250,50,50);
    building8 = new Building(700,200,50,50);
    building9 = new Building(700,150,50,50);
    building10 = new Building(700,100,50,50);
   
    ball = new Ball(400,400,100);
    rope = new Rope(ball.body, {x: 400, y: 50});
}


function draw(){
    background("White");
   
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    building1.display();
    building2.display();
    building3.display();
    building4.display();
    building5.display();
    building6.display();
    building7.display();
    building8.display();
    building9.display();
    building10.display();

    ball.display();
        rope.display();
}


function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
       rope.attach(ball.body);
    }
}

