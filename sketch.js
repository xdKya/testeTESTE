function preload() {
  aa = loadImage("a.gif");
}

function setup() {
  createCanvas(1000, 700);

  a = createSprite(200, 300, 10, 10);
  a.addImage(aa);
  a.scale = 0.5;
}

function draw() {
  background("white");

  drawSprites();
}
