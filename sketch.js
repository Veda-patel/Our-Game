var Bg1,Bg2,gameOver,form,system,code,security;
var score=0;

function preload() {
  Bg1 = loadImage("Bg1.jpeg");
  Bg2 = loadImage("Bg2.jpeg");
  gameOver = loadImage("Mario-GameOver.webp");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(Bg1);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 2) {
    clear()
    background(gameOver)
    fill("black")
    textSize(40);
    text("You Won!",250, 200);
  }

  drawSprites()
}