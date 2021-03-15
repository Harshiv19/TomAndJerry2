var cat,mouse;
var cat1 , cat2 , cat3 , cat4;
var mouse1 , mouse2 , mouse3 , mouse4;
var garden;
function preload() {
    //load the images here
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat3 = loadImage("images/cat4.png");    

    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3 = loadImage("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(300,300,600,600);

    cat = createSprite(100,100,50,50);
    mouse = createSprite(50,50,25,25);

    cat.addAnimation("sleeping",cat1);
    mouse.addAnimation("standing",mouse2);

    cat.scale = 0.2;
    mouse.scale = 0.15;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){ 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", cat3);
        cat.x =300;
        cat.scale=0.2;
       
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", cat3);
        mouse.scale=0.14;
        mouse.changeAnimation("mouseLastImage");
        }
        keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.addAnimation("catRunning", cat2);
    cat.changeAnimation("catRunning");
    
    mouse.addAnimation("mouseTeasing", mouse2);
    mouse.changeAnimation("mouseTeasing");
    }
}