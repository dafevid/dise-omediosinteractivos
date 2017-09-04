var posY = 28;
var posi = 0;
var cont = 0;

function setup() { 
  createCanvas(1111,1520);
  background(211,188,163);

  for (var posX = 28; posX <= 248; posX = posX+44) {
    
		mod = cont % 2;
    if (mod == 0){
    noStroke();
    fill(39,32,41);
    rect(posX, posY, 44, 14);
    }
    if (mod == 1){
    noStroke();
    fill(75,77,131);
    rect(posX, posY, 44, 14);
    }
    cont++;
  }  

  
  for (var numCirc = 1; numCirc < 11; numCirc = numCirc+1) {
    
		noFill();
    strokeWeight(1);
    stroke(0,0,0);
    ellipse(350, 350, numCirc*20, numCirc*20);
    
  }  

}