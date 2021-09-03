class Fish{

constructor(){
  
  var rand= random([1,2,3,4,5,6])  
  switch(rand){
     
  case 1: this.body=createSprite(1400,random(200,700))
  this.body.addImage(fish1Img);
  this.body.velocityX=-5;
  this.body.scale=0.5;
  break;

  case 2:this.body=createSprite(0,random(200,700))
  this.body.addImage(fish2Img);
  this.body.velocityX=+5;
  this.body.scale=0.5;
  break;

  case 3:this.body=createSprite(1400,random(200,700))
  this.body.addImage(fish3Img);
  this.body.velocityX=-5;
  this.body.scale=0.5;
  break;

  case 4:this.body=createSprite(0,random(200,700))
  this.body.addImage(fish4Img);
  this.body.velocityX=+5;
  this.body.scale=0.5
  break;

  case 5:this.body=createSprite(1400,random(200,700))
  this.body.addImage(fish5Img);
  this.body.velocityX=-5;
  break;

  case 6:this.body=createSprite(1400,random(200,700))
  this.body.addImage(fish6Img);
  this.body.velocityX=-5;
  break;

  }
  
this.body.lifetime=200;

}
}
















