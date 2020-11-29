var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  
  speed=random(22,321);
  weight=random(30,52)
  thickness=random(22,83)


  bullet=createSprite(50,200,50,50)
  wall=createSprite(1300,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)


  bullet.velocityX=speed;
}

function draw() {
  background(0);  


  if(wall.x-bullet.x<(wall.width+bullet.width)/2)
  {
    
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

    console.log(damage)

    if(damage >10)
    {
      bullet.shapeColor="red"
    }
    else if(damage<100)
    {
      bullet.shapeColor="green"
    }

  }
  drawSprites();
}