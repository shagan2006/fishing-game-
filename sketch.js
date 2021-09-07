var boat
var score=0

function preload(){
  backgroundImg=loadImage("background1.jpg")
  fish1Img=loadImage("images/fish1.png");
  fish2Img=loadImage("images/fish2.png");
  fish3Img=loadImage("images/fish3.png");
  fish4Img=loadImage("images/fish4.png");
  fish5Img=loadImage("images/fish5.png");
  fish6Img=loadImage("images/fish6.png");
  hookImg=loadImage("images/hook.png");
}

function setup() {
  createCanvas(1500,800);
  boat1=new Boat()
  hook=new Hook(boat1.body.x , boat1.body.y)

  fish1=new Fish()
  fishGroup=new Group()
  fishGroup.add(fish1.body)
}

function draw() {
  background(backgroundImg);  
  drawSprites();

  if(keyDown("right")){
  boat1.body.x+=5
}

if(keyDown("left")){
  boat1.body.x-=5
}
if(frameCount%100===0){
  fish1= new Fish()
  fishGroup.add(fish1.body)
     }

if(keyDown("space")&& hook.body.visible=== false){
 hook.body.visible=true;
 hook.body.velocityY=5 ;
 hook.body.velocityX=0;
 hook.body.y=boat1.body.y;
hook.body.x=boat1.body.x;
console.log(hook.body.y)
}
 hook.body.collide(fishGroup,catches);
 
 if(hook.body.y> height){
hook.body.y=100
hook.body.visible= false
 }
 textSize(20)
 fill ("white")
 text("fishCaught" + score,100,50)
}

function catches(hook, fish){
  fish.destroy();
  hook.velocityY=0;
  hook.y=100;
  hook.visible=false;
  score++
}

  
