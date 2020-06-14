var king;
var kinganimation,kingimage,kinganimation2,kinganimation3,kinganimation4;
var ground;
var ObstaclesGroup,Obstacles;
var bg,bg1;

//Animations and Images
function preload(){
kinganimation =loadAnimation("Images/MY GAME FILES/ninja1.png","Images/MY GAME FILES/ninja2.png","Images/MY GAME FILES/ninja3.png","Images/MY GAME FILES/ninja4.png","Images/MY GAME FILES/ninja5.png","Images/MY GAME FILES/ninja6.png");
kingimage = loadImage("Images/MY GAME FILES/ninja7.png")
kinganimation2 = loadAnimation("Images/MY GAME FILES/ninja8.png");
kinganimation3 = loadAnimation("Images/MY GAME FILES/ninja17.png","Images/MY GAME FILES/ninja16.png");
Obstacles = loadAnimation("Images/MY GAME FILES/nonpc1.png");
bg1 = loadImage("Images/MY GAME FILES/bg7.png");
}

function setup() {
  createCanvas(1600,600);
  bg = createSprite(800,300,20,20);
  king = createSprite(200, 500, 50, 50);
  ground=createSprite(600,590,2000,10);
bg.addImage("bg",bg1);
bg.scale = 1.6;
  king.addImage("king",kingimage);
  king.scale =1.5;
}

function draw() {
  background("white"); 
  edges = createEdgeSprites();
// Obstacles.velocityX = -10;
  // if(keyDown("space") && trex.y >= 359){
  //   trex.velocityY = -12 ;
  //   playSound("jump.mp3");
  // }

  // Moving of the king
  if(keyWentDown(RIGHT_ARROW)){
    king.addAnimation("king",kinganimation);
    // king.velocityX = 10;
king.scale =0.9;
  }

  if(keyWentUp(RIGHT_ARROW)){
    //  king.velocityX = 0;
    king.addImage("king",kingimage);
    king.scale = 1.5;
  } 
  //  Jumping of the king
  if(keyWentDown(UP_ARROW)&& king.collide(ground)){ 
    king.velocityY = -20;
    king.addAnimation("king",kinganimation2);
 king.scale =1.5;
 
  }

if(keyWentUp(UP_ARROW) && king.collide(ground)){
  king.addImage("king",kingimage);
  king.scale = 1.5;
}
  console.log(king.y);
  //Attacking of the king
  if(keyWentDown("space")){
    // king.velocityX = 100;
    // king.position.y = 579;
  king.addAnimation("king",kinganimation3)
  king.scale = 2.5;
}
if(keyWentUp("space")){
  king.velocityX = 0;
  king.addAnimation("king",kingimage);
  king.scale = 1.5;
}

// if(keyDown(UP_ARROW)){
//   king.velocityY = -10;
// }
  // edges = createEdgeSprites();

  // Collide with the ground
  king.collide(ground);
 // king.bounceOff(edges[3]);

 //Gravity 
 king.velocityY = king.velocityY +  0.7; 
 spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(World.frameCount % 100===0){
    Obstacles=createSprite(1500,560,60,60);
    // ObstaclesGroup.addAnimation("nonpc1",Obstacles);
    Obstacles.velocityX = -10;
  }
}