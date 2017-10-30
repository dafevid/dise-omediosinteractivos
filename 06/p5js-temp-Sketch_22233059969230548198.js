var numCruces = 100;

//ARRAY [] o Arreglo
var lasCruces = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < numCruces; i = i+1) {
    lasCruces[i] = new Crucecita();

    elPulsar = new Pulsar();
  }
}

function draw() {

  background(255, 255, 255);

  for (var i = 0; i < numCruces; i = i+1) {
    lasCruces[i].dibujarse();
    lasCruces[i].moverse();
    lasCruces[i].crecer();

    var distDiametro = dist(elPulsar.x, elPulsar.y, lasCruces[i].x, lasCruces[i].y);

    if (distDiametro < (elPulsar.tamano/2) + 35) {
      lasCruces[i].morir();
    }
  }
  if (mouseIsPressed) {
    elPulsar.x = mouseX;
    elPulsar.y = mouseY;
    elPulsar.dibujarse();
    elPulsar.crecer();
  } else{
    elPulsar.tamano = 1;
  }
}

function Crucecita() {

  //CARACTERISTICAS

  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 14;
  this.viva = true;

  //HABILIDADES

  this.dibujarse = function() {
    if (this.viva == true) {
      line(this.x, this.y-this.tamano, this.x, this.y+this.tamano);
      line(this.x-this.tamano, this.y, this.x+this.tamano, this.y);
    }
  }

  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3 + 0.6);
  }

  this.morir = function() {
    this.viva = false;
  }

  //SEGUNDA ESPECIE
}
function Pulsar() {

  //CARACTERISTICAS

  this.x = 0;
  this.y = 0;
  this.tamano = 1;

  //HABILIDADES

  this.dibujarse = function() {
    stroke(0, 0, 0);
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.tamano, this.tamano);
  }

  this.crecer = function() {
    this.tamano = this.tamano + 1;
  }
}
