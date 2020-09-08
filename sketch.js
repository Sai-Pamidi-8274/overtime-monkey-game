var END=0;
var PLAY=1;
var gamestate = PLAY;



var monkey,monkey1, banana,backGround,backGround1, stumpedYourToe,sidewalk,sidewalk1, junkFood, ouch;

function preload(){
   monkey=loadAnimation("Monkey_01.png", "Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  backGround=loadImage("YEET.jpeg");
  banana=loadImage("banana.png");
  stumpedYourToe=loadImage("stone.png");
  
}


function setup() {
  createCanvas(800, 600);
  backGround1=createSprite(0,0,8,600)
  backGround1.scale=7;
  backGround1.addAnimation("skyBlock", backGround);
  monkey1=createSprite(70,516,10,30);
  monkey1.addAnimation("oof", monkey);
  monkey1.scale=0.15;
  sidewalk=createSprite(400,520,800,10);
  sidewalk.visible=false;
  sidewalk.velocityX=-1;
  backGround1.velocityX=-4
  junkFood=new Group();
  ouch=new Group();
}





function draw() {
  
  background(220);
  
  monkey1.collide(sidewalk);
  if(backGround1.x<0){
  backGround1.x=backGround1.width/2;
  }
  
  if(sidewalk.x<0){
  sidewalk.x=sidewalk.width/2;
  }

spawnBanana();
  spawnObstacles();
  
  if(keyDown("space")){
      monkey1.velocityY = -20;
        
  
  }
  
  monkey1.velocityY = monkey1.velocityY + 0.8;
    
  
  drawSprites();
}

function spawnBanana() {
if (frameCount % 200 === 0) {
    var bananas = createSprite(800,500,40,10);
    bananas.y = random(250,320);
    bananas.addImage(banana);
    bananas.scale = 0.05;
    bananas.velocityX = -2;
    
     //assign lifetime to the variable
    bananas.lifetime = 400;
    
    //adjust the depth
    bananas.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    junkFood.add(bananas);
  }
}


function spawnObstacles() {
  if(frameCount % 200 === 0) {
    var obstacle = createSprite(800,500,10,40);
    obstacle.velocityX = -2;
    obstacle.addImage(stumpedYourToe);
    
    //generate random obstacles
    
    
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.15;
    obstacle.lifetime = 400;
    //add each obstacle to the group
    ouch.add(obstacle);
  }
}
