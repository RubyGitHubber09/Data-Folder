var box_1;

function setup() {
  createCanvas(400,400);
  box_1 = createSprite (200, 200, 30, 30)
}

function draw() 
{
  background(30);
if (keyIsDown (RIGHT_ARROW)) {
box_1.position.x = box_1.position.x +5;
}
if (keyIsDown (LEFT_ARROW)) {
box_1.position.x = box_1.position.x -5;
}

drawSprites ();
}




