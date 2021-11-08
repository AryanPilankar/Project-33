var bgImg,snowImg;snowFlake;
function preload (){
  bgImg = loadImage("snow2.jpg");
  snowImg = loadImage ("snow4.webp");

}


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgImg); 
  snowFlake() ;
  drawSprites();
}

function snowFlake (){
  if(frameCount% 20 == 0 ){
    snowFlake = createSprite (random(0,800))
    snowFlake.addImage(snowImg);
    snowFlake.velocityY = 5;
    snowFlake.scale = 0.1;
  }
}



