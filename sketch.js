const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var engine,world;

var bulletImg,boardImg,gunImg;

function preload(){
  bulletImg = loadImage("./assets/bullet.png");
  boardImg = loadImage("./assets/board.png");
  gunImg = loadImage("./assets/gun.jpg");
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
}

function draw(){
  background(80);

  Engine.update(engine)
}