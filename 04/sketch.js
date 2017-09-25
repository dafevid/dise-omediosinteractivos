// Colores

var boton1x = 0;
var boton1y = 0;
var boton1Tam = 35;
var boton2x = 0;
var boton2y = 35;
var boton2Tam = 35;
var boton15x = 0;
var boton15y = 70;
var boton15Tam = 35;
var boton16x = 0;
var boton16y = 105;
var boton16Tam = 35;
var boton17x = 52.5;
var boton17y = 122.5;
var boton17Tam = 35;

// Agrandar o disminuir

var boton3x = 35;
var boton3y = 0;
var boton3Tam = 49;
var boton4x = 84;
var boton4y = 0;
var boton4Tam = 21;

// Herramientas

var boton5x = 17.5;
var boton5y = 175;
var boton5Tam = 35;
var boton6x = 0;
var boton6y = 205;
var boton6Tam = 35;
var boton14x = 106;
var boton14y = 0;
var boton14Tam = 35;
var boton18x = 141;
var boton18y = 0;
var boton18Tam = 35;
var boton19x = 176;
var boton19y = 0;
var boton19Tam = 35;
var boton20x = 211;
var boton20y = 0;
var boton20Tam = 35;
var boton21x = 246;
var boton21y = 0;
var boton21Tam = 35;
var boton22x = 281;
var boton22y = 0;
var boton22Tam = 35;
var boton23x = 316;
var boton23y = 0;
var boton23Tam = 35;


// Agrandar en X o en Y

var boton7x = 0;
var boton7y = 260;
var boton7Tam = 28;
var boton8x = 0;
var boton8y = 300;
var boton8Tam = 28;
var boton9x = 35;
var boton9y = 260;
var boton9Tam = 28;
var boton10x = 35;
var boton10y = 300;
var boton10Tam = 28;

// Resets

var boton11x = 0;
var boton11y = 340;
var boton11Tam = 21;
var boton12x = 0;
var boton12y = 366;
var boton12Tam = 21;
var boton13x = 0;
var boton13y = 392;
var boton13Tam = 21;

// Variables herramientas

var diametro = 1;

var multiX = 0;
var multiY = 0;

var color1 = 1;
var colRed = 150;
var colGreen = 0;
var colBlue = 0;

var herramienta = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {

  // INTERFAZ Y BOTONES

  // Botones cambiar color

  strokeWeight(1.1);
  stroke(255);
  fill(200,200,200);
  rect(boton1x, boton1y, boton1Tam, boton1Tam);
  fill(0);
  rect(boton2x, boton2y, boton2Tam, boton2Tam);
  fill(colRed,colGreen,colBlue);
  rect(boton16x, boton16y, boton16Tam, boton16Tam);
  ellipse(boton17x, boton17y, boton17Tam, boton17Tam);
  stroke(150,150,150)
  fill(255);
  rect(boton15x, boton15y, boton15Tam, boton15Tam);

  // Botones cambiar tamaño

  fill(177);
  stroke(255);
  rect(boton3x, boton3y, boton3Tam, boton3Tam);
  rect(boton4x, boton4y, boton4Tam, boton4Tam);

  // Botones herramientas

  ellipse(boton5x, boton5y, boton5Tam, boton5Tam);
  rect(boton6x, boton6y, boton6Tam, boton6Tam);
  rect(boton14x, boton14y, boton14Tam, boton14Tam);
  rect(boton18x, boton18y, boton18Tam, boton18Tam);
  rect(boton19x, boton19y, boton19Tam, boton19Tam);
  rect(boton20x, boton20y, boton20Tam, boton20Tam);
  rect(boton21x, boton21y, boton21Tam, boton21Tam);
  rect(boton22x, boton22y, boton22Tam, boton22Tam);
  rect(boton23x, boton23y, boton23Tam, boton23Tam);

  // Botones cambiar tamaño en X o en Y

  rect(boton7x, boton7y, boton7Tam, boton7Tam);
  rect(boton8x, boton8y, boton8Tam, boton8Tam);
  rect(boton9x, boton9y, boton9Tam, boton9Tam);
  rect(boton10x, boton10y, boton10Tam, boton10Tam);

  // Resets

  rect(boton11x, boton11y, boton11Tam, boton11Tam);
  fill(0);
  rect(boton12x, boton12y, boton12Tam, boton12Tam);
  stroke(0);
  fill(255);
  rect(boton13x, boton13y, boton13Tam, boton13Tam);

  // ICONOS

  noFill();
  strokeWeight(3);
  stroke(150,150,150);
  arc(boton1x + 21, boton1y + 17.5, boton1Tam - 7, boton1Tam - 11, HALF_PI, PI + HALF_PI);
  arc(boton2x + 21, boton2y + 17.5, boton2Tam - 7, boton2Tam - 11, HALF_PI, PI + HALF_PI);
  arc(boton15x + 21, boton15y + 17.5, boton15Tam - 7, boton15Tam - 11, HALF_PI, PI + HALF_PI);
  arc(boton16x + 21, boton16y + 17.5, boton16Tam - 7, boton16Tam - 11, HALF_PI, PI + HALF_PI);
  
  strokeWeight(1);
  stroke(0);

  line(boton18x + (boton18Tam / 2), boton18y + (boton18Tam / 2), boton18x + 4, boton18y + 4);
  line(boton18x + (boton18Tam / 2), boton18y + (boton18Tam / 2), boton18x + 4, boton18y + 8);
  line(boton18x + (boton18Tam / 2), boton18y + (boton18Tam / 2), boton18x + 4, boton18y + 12);
  line(boton18x + (boton18Tam / 2), boton18y + (boton18Tam / 2), boton18x + 4, boton18y + 16);
  line(boton18x + (boton18Tam / 2), boton18y + (boton18Tam / 2), boton18x + 4, boton18y + 20);
  line(boton18x + (boton18Tam / 2), boton18y + (boton18Tam / 2), boton18x + 4, boton18y + 24);
  line(boton18x + (boton18Tam / 2), boton18y + (boton18Tam / 2), boton18x + 4, boton18y + 28);
  line(boton18x + (boton18Tam / 2), boton18y + (boton18Tam / 2), boton18x + 8, boton18y + 28);
  line(boton18x + (boton18Tam / 2), boton18y + (boton18Tam / 2), boton18x + 12, boton18y + 28);
  line(boton18x + (boton18Tam / 2), boton18y + (boton18Tam / 2), boton18x + 16, boton18y + 28);
  line(boton18x + (boton18Tam / 2), boton18y + (boton18Tam / 2), boton18x + 20, boton18y + 28);
  line(boton18x + (boton18Tam / 2), boton18y + (boton18Tam / 2), boton18x + 24, boton18y + 28);

  line(boton19x + 4, boton19y + 4, boton19x + 4, boton19y + (boton19Tam - 4));
  line(boton19x + 10, boton19y + 4, boton19x + 10, boton19y + (boton19Tam - 4));
  line(boton19x + 14, boton19y + 4, boton19x + 14, boton19y + (boton19Tam - 4));
  line(boton19x + 21, boton19y + 4, boton19x + 21, boton19y + (boton19Tam - 4));
  line(boton19x + 24, boton19y + 4, boton19x + 24, boton19y + (boton19Tam - 4));
  line(boton19x + 27, boton19y + 4, boton19x + 27, boton19y + (boton19Tam - 4));
  line(boton19x + 30, boton19y + 4, boton19x + 30, boton19y + (boton19Tam - 4));
  line(boton19x + 7, boton19y + 4, boton19x + 7, boton19y + (boton19Tam - 4));

  line(boton20x + 4, boton20y + 4, boton20x + (boton20Tam - 4), boton20y + 4);
  line(boton20x + 4, boton20y + 6, boton20x + (boton20Tam - 4), boton20y + 6);
  line(boton20x + 4, boton20y + 12, boton20x + (boton20Tam - 4), boton20y + 12);
  line(boton20x + 4, boton20y + 21, boton20x + (boton20Tam - 4), boton20y + 21);
  line(boton20x + 4, boton20y + 27, boton20x + (boton20Tam - 4), boton20y + 27);
  line(boton20x + 4, boton20y + 31, boton20x + (boton20Tam - 4), boton20y + 31);
  line(boton20x + 4, boton20y + 15, boton20x + (boton20Tam - 4), boton20y + 15);
  line(boton20x + 4, boton20y + 9, boton20x + (boton20Tam - 4), boton20y + 9);

  line(boton21x + 4, boton21y + 31, boton21x + 5, boton21y + 4);
  line(boton21x + 7, boton21y + 31, boton21x + 9, boton21y + 4);
  line(boton21x + 9, boton21y + 31, boton21x + 14, boton21y + 4);
  line(boton21x + 3, boton21y + 31, boton21x + 18, boton21y + 4);
  line(boton21x + 6, boton21y + 31, boton21x + 25, boton21y + 4);
  line(boton21x + 11, boton21y + 31, boton21x + 28, boton21y + 4);
  line(boton21x + 14, boton21y + 31, boton21x + 31, boton21y + 4);
  line(boton21x + 21, boton21y + 31, boton21x + 33, boton21y + 4);

  ellipse(boton22x + 17.5, boton22y + 17.5, 6, 6);
  ellipse(boton22x + 8, boton22y + 8, 6, 6);
  ellipse(boton22x + 9, boton22y + 18, 6, 6);
  ellipse(boton22x + 15, boton22y + 21, 6, 6);
  ellipse(boton22x + 26, boton22y + 11, 6, 6);
  ellipse(boton22x + 31, boton22y + 30, 6, 6);
  ellipse(boton22x + 11, boton22y + 24, 6, 6);
  
  beginShape();
  vertex(boton7x + 7, boton7y + 7);
  vertex(boton7x + 2, boton7y + 14);
  vertex(boton7x + 7, boton7y + 21);
  vertex(boton7x + 2, boton7y + 14);
  vertex(boton7x + 26, boton7y + 14);
  vertex(boton7x + 21, boton7y + 7);
  vertex(boton7x + 26, boton7y + 14);
  vertex(boton7x + 21, boton7y + 21);
  endShape()

  beginShape();
  vertex(boton8x + 2, boton8y + 7);
  vertex(boton8x + 7, boton8y + 14);
  vertex(boton8x + 2, boton8y + 21);
  vertex(boton8x + 7, boton8y + 14);
  vertex(boton8x + 21, boton8y + 14);
  vertex(boton8x + 26, boton8y + 7);
  vertex(boton8x + 21, boton8y + 14);
  vertex(boton8x + 26, boton8y + 21);
  endShape()

  beginShape();
  vertex(boton9x + 7, boton9y + 7);
  vertex(boton9x + 14, boton9y + 2);
  vertex(boton9x + 21, boton9y + 7);
  vertex(boton9x + 14, boton9y + 2);
  vertex(boton9x + 14, boton9y + 26);
  vertex(boton9x + 7, boton9y + 21);
  vertex(boton9x + 14, boton9y + 26);
  vertex(boton9x + 21, boton9y + 21);
  endShape()

  beginShape();
  vertex(boton10x + 7, boton10y + 2);
  vertex(boton10x + 14, boton10y + 7);
  vertex(boton10x + 21, boton10y + 2);
  vertex(boton10x + 14, boton10y + 7);
  vertex(boton10x + 14, boton10y + 21);
  vertex(boton10x + 7, boton10y + 26);
  vertex(boton10x + 14, boton10y + 21);
  vertex(boton10x + 21, boton10y + 26);
  endShape()

  beginShape();
  vertex(boton11x + 2, boton11y + 2);
  vertex(boton11x + 19, boton11y + 19);
  vertex(boton11x + 10.5, boton11y + 10.5);
  vertex(boton11x + 19, boton11y + 2);
  vertex(boton11x + 2, boton11y + 19);
  endShape()

  beginShape();
  vertex(boton13x + 2, boton13y + 2);
  vertex(boton13x + 19, boton13y + 19);
  vertex(boton13x + 10.5, boton13y + 10.5);
  vertex(boton13x + 19, boton13y + 2);
  vertex(boton13x + 2, boton13y + 19);
  endShape()

  strokeWeight(2);
  beginShape();
  vertex(boton3x + 7, boton3Tam / 2);
  vertex(boton3x + (boton3Tam - 7), boton3Tam / 2);
  vertex(boton3x + (boton3Tam / 2), boton3y + boton3Tam / 2);
  vertex(boton3x + (boton3Tam / 2), boton3y + 7);
  vertex(boton3x + (boton3Tam / 2), boton3Tam -7);
  endShape()

  line(boton4x + 7, boton4Tam / 2, boton4x + (boton4Tam - 7), boton4Tam / 2)

  point(boton14x + 6, boton14y + 2);
  point(boton14x + 7, boton14y + 29);
  point(boton14x + 3, boton14y + 15);
  point(boton14x + 20, boton14y + 5);
  point(boton14x + 7, boton14y + 22);
  point(boton14x + 32, boton14y + 18);
  point(boton14x + 21, boton14y + 27);
  point(boton14x + 29, boton14y + 24);
  point(boton14x + 14, boton14y + 15);
  point(boton14x + 9, boton14y + 9);
  point(boton14x + 17, boton14y + 17);
  point(boton14x + 21, boton14y + 14);

  stroke(255);
  beginShape();
  vertex(boton12x + 2, boton12y + 2);
  vertex(boton12x + 19, boton12y + 19);
  vertex(boton12x + 10.5, boton12y + 10.5);
  vertex(boton12x + 19, boton12y + 2);
  vertex(boton12x + 2, boton12y + 19);
  endShape()

  fill(0);
  noStroke();
  ellipse(boton5x,boton5y,18,18);
  rect(boton6x + 8,boton6y + 8,18,18);

  beginShape();
  fill(0);
  vertex(boton23x + 2, boton23y);
  vertex(boton23x + (boton23Tam / 2), boton23y + 14);
  vertex(boton23x + (boton23Tam - 2), boton23y)
  endShape()

  // ACCIONES DE DIBUJO

  if (mouseIsPressed) {

    if (color1 == 1) {
      stroke(200, 200, 200)
      fill(200, 200, 200);
    }
    if (color1 == 2) {
      stroke(0, 0, 0)
      fill(0, 0, 0);
    }
    if (color1 == 3) {
      stroke(255,255,255)
      fill(255,255,255);
    }
    if (color1 == 4) {
      stroke(colRed,colGreen,colBlue)
      fill(colRed,colGreen,colBlue);
    }


    // Resets

    if (mouseX > boton11x && mouseX < boton11x + boton11Tam &&
      mouseY > boton11y && mouseY < boton11y + boton11Tam) {
      multiX = 0;
      multiY = 0;
    } else if (mouseX > boton12x && mouseX < boton12x + boton12Tam &&
      mouseY > boton12y && mouseY < boton12y + boton12Tam) {
      background(0, 0, 0);
    } else if (mouseX > boton13x && mouseX < boton13x + boton13Tam &&
      mouseY > boton13y && mouseY < boton13y + boton13Tam) {
      background(255, 255, 255);

      // Colores

    } else if (mouseX > boton1x && mouseX < boton1x + boton1Tam &&
      mouseY > boton1y && mouseY < boton1y + boton1Tam) {
      color1 = 1;
    } else if (mouseX > boton2x && mouseX < boton2x + boton2Tam &&
      mouseY > boton2y && mouseY < boton2y + boton2Tam) {
      color1 = 2;
    } else if (mouseX > boton15x && mouseX < boton15x + boton15Tam &&
      mouseY > boton15y && mouseY < boton15y + boton15Tam) {
      color1 = 3;
    } else if (mouseX > boton16x && mouseX < boton16x + boton16Tam &&
      mouseY > boton16y && mouseY < boton16y + boton16Tam) {
      color1 = 4;
    } else if (mouseX > boton17x - 17.5 && mouseX < (boton17x - 17.5) + boton17Tam &&
      mouseY > boton17y - 17.5 && mouseY < (boton17y - 17.5) + boton17Tam) {
      colRed = random(255);
      colGreen = random(255);
      colBlue = random(255);

      // Tamaño

    } else if (mouseX > boton3x && mouseX < boton3x + boton3Tam &&
      mouseY > boton3y && mouseY < boton3y + boton3Tam) {
      diametro++;
    } else if (mouseX > boton4x && mouseX < boton4x + boton4Tam &&
      mouseY > boton4y && mouseY < boton4y + boton4Tam) {
      if (diametro >= 0) {
        diametro--;
      }

      // Tamaño en X o en Y

    } else if (mouseX > boton7x && mouseX < boton7x + boton7Tam &&
      mouseY > boton7y && mouseY < boton7y + boton7Tam) {
      multiX++;
    } else if (mouseX > boton8x && mouseX < boton8x + boton8Tam &&
      mouseY > boton8y && mouseY < boton8y + boton8Tam) {
      multiX--;
    } else if (mouseX > boton9x && mouseX < boton9x + boton9Tam &&
      mouseY > boton9y && mouseY < boton9y + boton9Tam) {
      multiY++;
    } else if (mouseX > boton10x && mouseX < boton10x + boton10Tam &&
      mouseY > boton10y && mouseY < boton10y + boton10Tam) {
      multiY--;

      // Selección Herramientas

    } else if (mouseX > boton5x - 17.5 && mouseX < (boton5x - 17.5) + boton5Tam &&
      mouseY > boton5y - 17.5 && mouseY < (boton5y - 17.5) + boton5Tam) {
      herramienta = 0;
    } else if (mouseX > boton6x && mouseX < boton6x + boton6Tam &&
      mouseY > boton6y && mouseY < boton6y + boton6Tam) {
      herramienta = 1;
    } else if (mouseX > boton14x && mouseX < boton14x + boton14Tam &&
      mouseY > boton14y && mouseY < boton14y + boton14Tam) {
      herramienta = 2;
    } else if (mouseX > boton18x && mouseX < boton18x + boton18Tam &&
      mouseY > boton18y && mouseY < boton18y + boton18Tam) {
      herramienta = 3;
    } else if (mouseX > boton19x && mouseX < boton19x + boton19Tam &&
      mouseY > boton19y && mouseY < boton19y + boton19Tam) {
      herramienta = 4;
    } else if (mouseX > boton20x && mouseX < boton20x + boton20Tam &&
      mouseY > boton20y && mouseY < boton20y + boton20Tam) {
      herramienta = 5;
    } else if (mouseX > boton21x && mouseX < boton21x + boton21Tam &&
      mouseY > boton21y && mouseY < boton21y + boton21Tam) {
      herramienta = 6;
    } else if (mouseX > boton22x && mouseX < boton22x + boton22Tam &&
      mouseY > boton22y && mouseY < boton22y + boton22Tam) {
      herramienta = 7;
    } else if (mouseX > boton23x && mouseX < boton23x + boton23Tam &&
      mouseY > boton23y && mouseY < boton23y + boton23Tam) {
      herramienta = 8;

      // ACCIONES DE DIBUJO AL HACER CLICK

    } else {

      if (herramienta == 0) {
        noStroke();
        ellipse(mouseX, mouseY, diametro + multiX, diametro + multiY);
      }

      if (herramienta == 1) {
        noStroke();
        rect(mouseX - diametro, mouseY - diametro, diametro + multiX, diametro + multiY);
      }

      if (herramienta == 2) {
        strokeWeight(2);
        var numRand = random(-diametro, diametro);

        point(mouseX + numRand, mouseY + numRand);
        point(mouseX + numRand, mouseY + numRand);
        point(mouseX + numRand, mouseY + numRand);
        point(mouseX + numRand, mouseY + numRand);
        point(mouseX + numRand, mouseY + numRand);
        point(mouseX + numRand, mouseY + numRand);
        point(mouseX + numRand, mouseY + numRand);
      }

      if (herramienta == 3) {
        strokeWeight(diametro);
        line((windowWidth / 2), (windowHeight / 2), mouseX, mouseY);
      }

      if (herramienta == 4) {
        strokeWeight(diametro);
        line(mouseX, 0, mouseX, height);
      }
      if (herramienta == 5) {
        strokeWeight(diametro);
        line(0, mouseY, width, mouseY);
      }
      if (herramienta == 6) {
        strokeWeight(diametro);
        line(mouseX - mouseY, mouseY - mouseX, width, mouseX + mouseY, mouseY + mouseX);
      }
      if (herramienta == 7) {
        var numRand2 = random(-diametro, diametro);
        strokeWeight(1);
        noFill();
        ellipse(mouseX,mouseY,diametro + multiX,diametro + multiY);
        ellipse(mouseX - numRand2,mouseY - numRand2,diametro + multiX,diametro + multiY);
        ellipse(mouseX - numRand2,mouseY - numRand2,diametro + multiX,diametro + multiY);
      }
      if (herramienta == 8) {
      noStroke();
      beginShape();
      vertex(0,0);
      vertex(mouseX,mouseY);
      vertex(mouseX + 11,mouseY);
      vertex(width,0);
      endShape();
      }
    }
  }
}