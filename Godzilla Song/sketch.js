var diameter;
var angle = 0;
var scalar = 70;
var angle1 = 0;
var angle2 = 0;
var totalPts = 300;
var steps = totalPts + 1;
var colorStroke = 51;
var colorBack = 51;
var multio, multii;

let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('Assets/Akira.mp3');
}

function setup() {

  createCanvas(700, 700);
  frameRate(30);
}

function mouseClicked() {
    if (mySound.isPlaying()) {
    // .isPlaying() returns a boolean
  mySound.stop();
  } else {
  mySound.play();
    }
}
function draw() {

  tiempo = millis();

  if (tiempo > 45000) {
    colorBack = colorBack + 204;
  } else {
    colorBack = 51;
  }

  background(colorBack);

  text('tap here to play', 10, 20);
  
  //Puntos Random

  if (tiempo > 0 && tiempo < 3500) {
    colorStroke = 255;
  } else {
    colorStroke = 51;
  }
  var rand = 0;
  for (var i = 1; i < steps; i++) {
    stroke(colorStroke);
    point((width / steps) * i, (height / 2) + random(-rand, rand));
    rand += random(-5, 5);
  }

  if (tiempo > 37500 && tiempo < 50000) {
    colorStroke = 255;
  } else {
    colorStroke = 51;
  }
  rand = 0;
  for (var i = 1; i < steps; i++) {
    stroke(colorStroke);
    point((width / steps) * i, (height / 4) + random(-rand, rand));
    rand += random(-11, 11);
  }
  for (var i = 1; i < steps; i++) {
    stroke(colorStroke);
    point((width / steps) * i, ((height * 3) / 4) + random(-rand, rand));
    rand += random(-11, 11);
  }

  //Círculos cambio de escala 1er fragmento

  if (tiempo > 3500 && tiempo < 10700) {
    diameter = height - 550
    var d1 = 10 + (sin(angle) * diameter / 2) + diameter / 2;
    var d2 = 10 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    rand += random(-2, 2);
  } else {
    d1 = 0;
    d2 = 0;
  }

  fill(255, 204, 0);

  ellipse(width / 3, height / 2, d1, d1);
  ellipse((width * 2) / 3, height / 2, d2, d2);

  angle += rand * 0.1;

  //Círculos cambio de escala 2do fragmento

  if (tiempo > 10700 && tiempo < 18700) {
    diameter = height - 450
    d1 = 7 + (sin(angle) * diameter / 2) + diameter / 2;
    d2 = 7 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    var d3 = 7 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    rand += random(-2, 2);
  } else {
    d1 = 0;
    d2 = 0;
    d3 = 0;
  }

  fill(153, 255, 51);

  ellipse(width / 3, height / 2, d1, d1);
  ellipse((width * 2) / 3, height / 2, d2, d2);
  ellipse(width / 2, height / 3, d3, d3);

  angle += rand * 0.1;

  //Círculos cambio de escala 3er fragmento

  if (tiempo > 18700 && tiempo < 25700) {
    diameter = height - 350
    d1 = 10 + (sin(angle) * diameter / 2) + diameter / 2;
    d2 = 10 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    d3 = 10 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    var d4 = 10 + (sin(angle + PI / 4) * diameter / 2) + diameter / 2;
    rand += random(-2, 2);
  } else {
    d1 = 0;
    d2 = 0;
    d3 = 0;
    d4 = 0;
  }

  fill(102, 178, 255);

  ellipse(width / 3, height / 2, d1, d1);
  ellipse((width * 2) / 3, height / 2, d2, d2);
  ellipse(width / 2, height / 3, d3, d3);
  ellipse(width / 2, (height * 3) / 4, d4, d4);

  angle += rand * 0.1;

  //Círculos cambio de escala 4to fragmento

  if (tiempo > 25700 && tiempo < 33700) {
    diameter = height - 250
    d1 = 10 + (sin(angle) * diameter / 2) + diameter / 2;
    d2 = 10 + (sin(angle + PI / 4) * diameter / 2) + diameter / 2;
    d3 = 10 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    d4 = 10 + (sin(angle + PI / 4) * diameter / 2) + diameter / 2;
    var d5 = 10 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    rand += random(-1, 1);
  } else {
    d1 = 0;
    d2 = 0;
    d3 = 0;
    d4 = 0;
    d5 = 0;
  }

  fill(255, 204, 153);

  ellipse(width / 3, height / 2, d1, d1);
  ellipse((width * 2) / 3, height / 2, d2, d2);
  ellipse(width / 2, height / 3, d3, d3);
  ellipse(width / 2, (height * 3) / 4, d4, d4);
  ellipse(width / 2, height / 2, d5, d5);

  angle += rand * 0.1;

  //Círculos cambio de escala 5to fragmento

  if (tiempo > 33700 && tiempo < 37700) {
    diameter = height - 250
    d1 = 10 + (sin(angle) * diameter / 2) + diameter / 2;
    d2 = 10 + (sin(angle + PI / 4) * diameter / 2) + diameter / 2;
    d3 = 10 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    d4 = 10 + (sin(angle + PI / 4) * diameter / 2) + diameter / 2;
    d5 = 10 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    var d6 = 14 + (sin(angle) * diameter / 2) + diameter / 2;
    rand += random(-1, 1);
  } else {
    d1 = 0;
    d2 = 0;
    d3 = 0;
    d4 = 0;
    d5 = 0;
    d6 = 0;
  }

  fill(255, 255, 255);

  ellipse(width / 3, height / 2, d1, d1);
  ellipse((width * 2) / 3, height / 2, d2, d2);
  ellipse(width / 2, height / 3, d3, d3);
  ellipse(width / 2, (height * 3) / 4, d4, d4);
  ellipse(width / 2, height / 2, d5, d5);

  fill(0, 0, 0);
  ellipse(width / 2, height / 2, d6, d6);

  angle += rand * 0.1;

  //Fondo Random 1er fragmento

  if (tiempo > 3500 && tiempo < 4000) {
    multio = 1;
  } else {
    multio = -1;
  }

  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r, r, r, 35);
    line(i, 0, i * multio, height * multio);
  }

  //Fondo Random 2do fragmento

  if (tiempo > 10500 && tiempo < 11000) {
    multio = 1;
  } else {
    multio = -1;
  }

  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r, r, r, 55);
    line(i, 0, i * multio, height * multio);
  }

  //Fondo Random 3er fragmento

  if (tiempo > 18500 && tiempo < 19000) {
    multio = 1;
  } else {
    multio = -1;
  }

  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r, r, r, 77);
    line(i, 0, i * multio, height * multio);
  }

  //Fondo Random 4to fragmento

  if (tiempo > 25500 && tiempo < 26000) {
    multio = 1;
  } else {
    multio = -1;
  }

  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r, r, r, 100);
    line(i, 0, i * multio, height * multio);
  }

  //Fondo Random 5to fragmento

  if (tiempo > 33500 && tiempo < 34000) {
    multio = 1;
  } else {
    multio = -1;
  }

  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r, r, r, 200);
    line(i, 0, i * multio, height * multio);
  }

  //Fondo Random fragmento final

  if (tiempo > 37500 && tiempo < 38000) {
    multio = 1;
  } else {
    multio = -1;
  }

  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r, r, r, 350);
    line(i, 0, i * multio, height * multio);
  }

  //Cuadrados 1era parte

  if (tiempo > 45000 && tiempo < 52700) {
    diameter = height - 550
    d1 = 10 + (sin(angle) * diameter / 2) + diameter / 2;
    d2 = 10 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    rand += random(-50, 50);
  } else {
    d1 = 0;
    d2 = 0;
  }

  fill(255, 204, 0);

  rect(width / 3 + rand, rand + (height / 2), d1, d1);
  rect(((width * 2) / 3) + rand, rand + (height / 2), d2, d2);

  angle += rand * 0.1;

  //Cuadrados 2da parte

  if (tiempo > 52700 && tiempo < 60700) {
    diameter = height - 550
    d1 = 7 + (sin(angle) * diameter / 2) + diameter / 2;
    d2 = 7 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    d3 = 7 + (sin(angle + PI / 4) * diameter / 2) + diameter / 2;
    rand += random(-50, 50);
  } else {
    d1 = 0;
    d2 = 0;
    d3 = 0;
  }

  fill(153, 255, 51);

  rect(width / 3 + rand, rand + (height / 2), d1, d1);
  rect(((width * 2) / 3) + rand, rand + (height / 2), d2, d2);
  rect((width / 4) + rand, rand + (height / 4), d3, d3);
  angle += rand * 0.1;

  //Cuadrados 3ra parte

  if (tiempo > 60700 && tiempo < 67700) {
    diameter = height - 550
    d1 = 10 + (sin(angle) * diameter / 2) + diameter / 2;
    d2 = 10 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    d3 = 10 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    d4 = 10 + (sin(angle + PI) * diameter / 2) + diameter / 2;
    rand += random(-25, 25);
  } else {
    d1 = 0;
    d2 = 0;
    d3 = 0;
    d4 = 0;
  }

  fill(102, 178, 255);

  rect(width / 3 + rand, rand + (height / 2), d1, d1);
  rect(((width * 2) / 3) + rand, rand + (height / 2), d2, d2);
  rect((width / 4) + rand, rand + (height / 4), d3, d3);
  rect(50 + rand, rand + 77, d4, d4);

  angle += rand * 0.1;

  //Cuadrados 4ta parte

  if (tiempo > 67700 && tiempo < 75700) {
    diameter = height - 550
    d1 = 14 + (sin(angle + PI / 4) * diameter / 2) + diameter / 2;
    d2 = 14 + (sin(angle) * diameter / 2) + diameter / 2;
    d3 = 14 + (sin(angle + PI) * diameter / 2) + diameter / 2;
    d4 = 14 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    d5 = 14 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    rand += random(-10, 10);
  } else {
    d1 = 0;
    d2 = 0;
    d3 = 0;
    d4 = 0;
    d5 = 0;
  }

  fill(255, 204, 153);

  rect(width / 3 + rand, rand + (height / 2), d1, d1);
  rect(((width * 2) / 3) + rand, rand + (height / 2), d2, d2);
  rect((width / 4) + rand, rand + (height / 4), d3, d3);
  rect(50 + rand, rand + 77, d4, d4);
  rect(width / 2, height / 2, d5, d5)

  angle += rand * 0.1;

  //Cuadrados 5ta parte

  if (tiempo > 75700 && tiempo < 79700) {
    diameter = height - 550
    d1 = 21 + (sin(angle + PI / 2) * diameter / 2) + diameter / 2;
    d2 = 21 + (sin(angle) * diameter / 2) + diameter / 2;
    d3 = 21 + (sin(angle + PI) * diameter / 2) + diameter / 2;
    d4 = 21 + (sin(angle + PI / 4) * diameter / 2) + diameter / 2;
    d5 = 21 + (sin(angle) * diameter / 2) + diameter / 2;
    d6 = 35 + (sin(angle) * diameter / 2) + diameter / 2;
    rand += random(-5, 5);
  } else {
    d1 = 0;
    d2 = 0;
    d3 = 0;
    d4 = 0;
    d5 = 0;
    d6 = 0;
  }

  fill(0);

  rect(width / 3 + rand, rand + (height / 2), d1, d1);
  rect(((width * 2) / 3) + rand, rand + (height / 2), d2, d2);
  rect((width / 4) + rand, rand + (height / 4), d3, d3);
  rect(50 + rand, rand + 77, d4, d4);
  rect(width - 60, height - 77, d5, d5)

  fill(255);
  rect(width / 2, height / 2, d6, d6)

  angle += rand * 0.1;

  //Fondo Random 1er fragmento 2

  if (tiempo > 44800 && tiempo < 45300) {
    multio = 1;
  } else {
    multio = -1;
  }

  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r, r, r, 35);
    line(i, 0, i * multio, height * multio);
  }

  //Fondo Random 2do fragmento 2

  if (tiempo > 52500 && tiempo < 53000) {
    multio = 1;
  } else {
    multio = -1;
  }

  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r, r, r, 55);
    line(i, 0, i * multio, height * multio);
  }

  //Fondo Random 3er fragmento 2

  if (tiempo > 60500 && tiempo < 61000) {
    multio = 1;
  } else {
    multio = -1;
  }

  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r, r, r, 77);
    line(i, 0, i * multio, height * multio);
  }

  //Fondo Random 4to fragmento 2

  if (tiempo > 67500 && tiempo < 68000) {
    multio = 1;
  } else {
    multio = -1;
  }

  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r, r, r, 100);
    line(i, 0, i * multio, height * multio);
  }

  //Fondo Random 5to fragmento 2

  if (tiempo > 75500 && tiempo < 76000) {
    multio = 1;
  } else {
    multio = -1;
  }

  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r, r, r, 200);
    line(i, 0, i * multio, height * multio);
  }

  //Fondo Random fragmento final 2

  if (tiempo > 79500 && tiempo < 80000) {
    multio = 1;
  } else {
    multio = -1;
  }

  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r, r, r, 350);
    line(i, 0, i * multio, height * multio);
  }

}