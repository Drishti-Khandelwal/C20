var R1;
var R2;
var R3;
var R4;
function setup() {
  createCanvas(800,400);
  R1 = createSprite(200, 300, 50, 50);
  R2 = createSprite(700,100,50,50);
  R3 = createSprite(700,300,50,50);
  R4 = createSprite(200,100,50,50);
  R2.velocityX= -5;
  R4.velocityX=5;
}

function draw() {
  background(255,255,255);
  
  R1.x = World.mouseX;
  R1.y = World.mouseY;

  //algorithm1:finding out logic to check whether two rectangles are touching each other or not
  if(R1.x-R3.x<=(R1.width+R3.width)/2 &&
  R3.x-R1.x<=(R1.width+R3.width)/2 &&
  R1.y-R3.y<=(R1.height+R3.height)/2 &&
  R3.y-R1.y<=(R1.width+R3.width)/2
  ){
  R1.shapeColor = "red";
  R3.shapeColor = "yellow";

  }
  else {
    R1.shapeColor = "grey";
    R3.shapeColor = "grey";

  }

  /*algorithm2: if 2 moving rectangles are touching each other 
  they should move in the opposite direction*/
  R2.shapeColor = "green";
  R4.shapeColor = "blue";


  if(R2.x-R4.x<=(R2.width+R4.width)/2 &&
  R4.x-R2.x<=(R2.width+R4.width)/2 &&
  R2.y-R4.y<=(R2.height+R4.height)/2 &&
  R4.y-R2.y<=(R2.width+R4.width)/2
  ){
  
    R2.velocityX= (-1)*  R2.velocityX;
    R4.velocityX=(-1)*  R4.velocityX;
  }

  drawSprites();
}