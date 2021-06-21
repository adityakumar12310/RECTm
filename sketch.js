
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  fixedRect2 =createSprite(1000,100,50,50);
  fixedRect2.shapeColor = "red";
  fixedRect3 = createSprite(500,100,50,50);
  fixedRect4 = createSprite(700,300,50,50)
  fixedRect5 = createSprite(500,400,50,50)
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor ="red";
    fixedRect2.shapeColor = "yellow";
  }
  else if(isTouching(movingRect,fixedRect3)){
    movingRect.shapeColor = "red";
    fixedRect3.shapeColor = "orange";
  }
  else if(isTouching(movingRect,fixedRect4)){
    movingRect.shapeColor = "red";
    fixedRect4.shapecolor = "white";
  }
  else if(isTouching(movingRect,fixedRect5)){
    fixedRect5.y = 80;
  }
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
    fixedRect2.shapeColor = "green"
    fixedRect3.shapeColor = "green"
    

    
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

