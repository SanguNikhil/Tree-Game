
var obj,  plant ,tree;
var water;
var foodS, waterStock;
var fedTime, lastFed, feed;    

function preload(){
  plant=loadImage("Plant.png");
  tree=loadImage("Tree.png");

}

function setup() {
  database = firebase.database()
  createCanvas(1000,400);
  
  water = new Water();
  water.visibility = 'hidden';
  waterStock = database.ref('Food');
  waterStock.on("value", readStock);

  obj=createSprite(800,200,150,150);
  obj.addImage(plant);
  obj.scale=0.3;

  feed = createButton("Water the plant");
  feed.position(700,95);
  feed.mousePressed(feedDog);

}

function draw() {
  background(37,196,249);

  water.display();

  fedTime = database.ref('FeedTime');
  fedTime.on("value", function (data){
    lastFed = data.val();
  })

  fill(255,255,254);
  textSize(15);
  if (lastFed >= 12) {
    text("Last Watered: " + lastFed %12 + "PM", 320, 30);
  }
  else if(lastFed == 0) {
    text("Last Watered: 12AM ", 320, 30);
  }
  else {
    text("Last Watered:  " + lastFed + "AM", 320, 30);
  }

  drawSprites();

}

//function to read Stock
function readStock(data){
  foodS = data.val();
  water.updateWaterStock(foodS);
}

//function to update food stock and last fed time
  function feedDog() {
    obj.addImage(tree);
    obj.scale = 1;

    water.updateWaterStock(water.getWaterStock()-1);
    database.ref('/').update({
      Food: water.getWaterStock(),
      FeedTime : hour()
    })
  }
