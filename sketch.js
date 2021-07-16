var jakeImg, jake;
var subway, subwayImg ,left_boundary, right_boundary;
var pathImg, pathImg ;
var  coin, coinImg;
function preload(){
 
  jakeImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
  subwayImg=loadImage("path.png");
  coinImg=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  jake=createSprite(180,340,50,170);
  jake.addAnimation("running", jakeImg);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  subway=createSprite(200,80,100,100);
  subway.addImage(subwayImg);
  coin=createSprite(400,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  coin=createSprite(400,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  coin=createSprite(500,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  //let the path move infintely
  
  if(path.y<0){
    path.y=path.height/2
    }
  jake.collide(left_boundary);
  jake.collide(right_boundary);
  edges=createEdgeSprites();
  jake.collide(edges[3]);
drawSprites();
}
  


