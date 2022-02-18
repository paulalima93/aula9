var caixa;

function setup() {

  createCanvas(400,400);

  caixa = createSprite(200,200,25,25);

}

function draw() {
  background(30);

if(keyIsDown(LEFT_ARROW)){
caixa.x -= 2;
}


if(keyIsDown(RIGHT_ARROW)){
  caixa.x += 2;
}

if(keyIsDown(UP_ARROW)){
  caixa.y -= 2;
}

if(keyIsDown(DOWN_ARROW)){
  caixa.y += 2;
}


  drawSprites();

}




