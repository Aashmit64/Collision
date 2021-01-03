function setup() {
  createCanvas(800,400);
  box=createSprite(400, 200, 50, 50);
  box.shapeColor="blue"
  box1=createSprite(350,250,40,50)
  box1.shapeColor="red"
}

function draw() {
  background("green");  
  drawSprites();
  box.x=mouseX
  box.y=mouseY
  if (box.x-box1.x<box1.width/2+box.width/2
    && box1.x-box.x<box1.width/2+box.width/2
    &&box.y-box1.y<box1.height/2+box.height/2
    && box1.y-box.y<box1.height/2+box.height/2 ){
    box.shapeColor="yellow"
    box1.shapeColor="cyan"
    }
    else{
    box.shapeColor="blue"
    box1.shapeColor="red"
    }
}