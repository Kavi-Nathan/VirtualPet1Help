//Create variables here
var database;
var dog,happyDog, database,foodStock;
var dogSitting, dogStanding;
var dog;
var foodVal, foodVal02;

function preload()
{
  //load images here

  dogStanding = loadImage('images/dogImg.png');
  dogSitting = loadImage('images/dogImg1.png');

}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock),
  
  dog = createSprite(250, 300, 50, 50);
  dog.addImage(dogSitting);
  dog.scale = 0.2;

  
}


function draw() {  

  background(46, 139, 87);

  if(keyDown(UP_ARROW)){
    writeStock(foodVal);
    dog.addImage(dogStanding);
  }

  if(foodVal02 == 0){
    console.log(foodVal02);
    textSize(30);
    text("YOU RAN OUT OF FOOD", 250, 200);
  }
  drawSprites();
  //add styles here

  textSize(20);
  fill ("black");
  text("Press the Up Arrow Key to feed your dog", 75, 50);
}

function readStock(foodData){
  foodVal = foodData.val();
  console.log(foodVal);
}

function writeStock(foodVal02){
  if (foodVal02 > 0){
    foodVal02 = foodVal02-1;
  }
  else {
    foodVal02 = 0;
    text("YOU RAN OUT OF FOOD", 250, 200);
  }

  database.ref('/').update({
    Food:foodVal02
  });
}




