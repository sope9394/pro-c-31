var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
 
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }


  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
  

  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  if(frameCount%90===0){
    particles.push(new Particle(random(0, 480), 0, 10, 10));
  }

  for(var a=0;a<particles.length;a++){
    particles[a].display();
    }
 

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
    }

  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
    }

  for(var j=0;j<plinkos.length;j++){
        plinkos[j].display();
    }

    for(var j=0;j<plinkos.length;j++){
      plinkos[j].display();
      }
  
    for(var j=0;j<plinkos.length;j++){
          plinkos[j].display();
      }

	
	}