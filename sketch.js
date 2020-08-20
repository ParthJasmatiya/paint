const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var form;
var database;
var engine, world;
var gameState=0;
var bg,bgimg;
var drawing=[];
var currentPath=[];
var isDrawing = false;
var refresh;
function preload(){
  bgimg=loadImage("bg.png");
  
}
function setup() {
  canvas = createCanvas(1345,640);
   canvas.mousePressed(start);
  canvas.mouseReleased(end);
  engine = Engine.create();
    database = firebase.database()
  world = engine.world;
  
  form = new Form();
  
  form.display();
 bg=createSprite(600,50,200,540);
 bg.addImage("bg",bgimg);

}

function draw() {
  background('#F4E8FF');
  Engine.update(engine);
   if(isDrawing){
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentPath.push(point);
  }
   strokeWeight(4);
  noFill();
  stroke("black");
 
  for(var i=0; i<drawing.length;i++){
    var path=drawing[i];
    beginShape();
    for(var j=0;j<path.length;j++){
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }
  form.button2.mousePressed(() => {
    saveDrawing();
    
});
  form.button3.mousePressed(() => {
  clearDrawing();
  
});
  if(gameState===2){
    bg.visible=false;
  }
  drawSprites();
}
function saveDrawing(){
  var ref = database.ref('drawing');
  var data={
      name: form.name,
      drawing :drawing
  }
  var result = ref.push(data,dataSent);
  console.log(result.key);

  function dataSent(status){
    console.log(status);
  }
}
function start(){
  isDrawing = true;
  currentPath=[];
  drawing.push(currentPath);
}
function end (){
  isDrawing = false;
}
function clearDrawing(){
  drawing=[];
  var ref = database.ref('drawing');
  ref.remove();
}