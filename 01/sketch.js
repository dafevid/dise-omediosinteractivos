function setup() {
  createCanvas(600, 419);
  background(248, 248, 220);

  //Figuras

  strokeWeight(0.2);
  stroke(0, 0, 0);
  fill(142, 169, 161);
  ellipse(329, 34, 16, 16);

  strokeWeight(1);
  stroke(0, 0, 0);
  fill(197, 204, 189);
  ellipse(398, 58, 21, 21);

  strokeWeight(0.1);
  stroke(255, 255, 255);
  fill(98, 123, 130);
  ellipse(398, 58, 15, 15);

  noStroke();
  fill(255, 247, 231);
  triangle(360, 7, 471, 388, 262, 368);

  fill(244, 199, 39);
  triangle(363, 51, 379, 30, 390, 51);

  stroke(0, 0, 0);
  strokeWeight(1);
  fill(255, 247, 231);
  ellipse(366, 102, 15, 15);

  noStroke();
  fill(145, 114, 171);
  ellipse(450, 321, 34, 34);

  noStroke(0, 0, 0);
  fill(240, 194, 101);
  triangle(477, 327, 529, 343, 515, 284);

  strokeWeight(0.42);
  stroke(0, 0, 0);
  fill(150, 155, 115, 170);
  ellipse(519, 352, 58, 58);

  strokeWeight(1);
  stroke(0, 0, 0);
  fill(136, 32, 27);
  rect(545, 367, 21, 21);
  
  //Poligonos
  
  noStroke();
  fill(87,79,67);
  beginShape();
  vertex(294,206);
  vertex(357,119);
  vertex(450,176);
  vertex(356,124);
  endShape(CLOSE);
  
  noStroke();
  fill(129,157,102);
  beginShape();
  vertex(294,206);
  vertex(357,128);
  vertex(450,176);
  vertex(356,124);
  endShape(CLOSE);
  
  noStroke();
  fill(49,44,52);
  beginShape();
  vertex(188,256);
  vertex(188,261);
  vertex(369,225);
  vertex(368,222);
  endShape(CLOSE);
  
  noStroke();
  fill(88,129,88);
  beginShape();
  vertex(406,168);
  vertex(413,163);
  vertex(454,226);
  vertex(423,226);
  endShape(CLOSE);
  
  noStroke();
  fill(169,127,56);
  beginShape();
  vertex(406,168);
  vertex(423,226);
  vertex(319,226);
  endShape(CLOSE);
  
  strokeWeight(0.5);
  stroke(0,0,0);
  fill(165,30,34);
  beginShape();
  vertex(185,280);
  vertex(347,233);
  vertex(349,235);
  vertex(182,284);
  endShape(CLOSE);
  
  noStroke();
  fill(73,90,106);
  ellipse(401,195,36,36);
  
  noStroke();
  fill(255,255,255);
  ellipse(401,195,29,29);
  
  noStroke();
  fill(58,64,33);
  ellipse(403,195, 5, 5);
  
  //Lineas Colores

  strokeWeight(3);
  stroke(198, 135, 112);
  line(306, 170, 408, 116);

  strokeWeight(3);
  stroke(235, 203, 91);
  line(377, 170, 426, 132);

  //Triángulo alto

  strokeWeight(1);
  stroke(0, 0, 0);
  line(360, 7, 471, 388);
  line(360, 7, 262, 368);

  line(200, 281, 515, 284);
  line(357, 262, 357, 419);

  line(246, 330, 300, 331);
  line(247, 343, 304, 343);

  line(408, 321, 504, 321);
  line(437, 367, 510, 368);

  //Seis lineas

  strokeWeight(1);
  stroke(0, 0, 0);
  line(341, 356, 408, 285);
  line(343, 358, 410, 286);
  line(346, 360, 412, 287);

  line(332, 319, 385, 265);
  line(334, 322, 394, 257);
  line(337, 323, 405, 249);

  //Mas lineas

  strokeWeight(1);
  stroke(0, 0, 0);
  line(305, 61, 407, 103);
  line(302, 35, 407, 103);

  line(360, 162, 425, 106);
  line(341, 192, 431, 108);

  line(310, 154, 374, 122);
  line(312, 155, 376, 124);

  line(306, 171, 408, 117);
  line(377, 169, 426, 131);

  line(558, 379, 574, 379);
  line(559, 375, 573, 375);
  
  //Arcos

  strokeWeight(2);
  stroke(212, 213, 197);
  noFill();
  arc(280, 282, 50, 50, PI, TWO_PI);
  
  strokeWeight(1);
  stroke(0, 0, 0);
  noFill();
  arc(280, 282, 50, 50, PI, TWO_PI);
  
  strokeWeight(2);
  stroke(242, 224, 160);
  noFill();
  arc(332, 282, 50, 50, PI, TWO_PI);
  
  strokeWeight(1);
  stroke(0, 0, 0);
  noFill();
  arc(332, 282, 50, 50, PI, TWO_PI);
  
  strokeWeight(1);
  stroke(179, 73, 38);
  noFill();
  arc(384, 282, 50, 50, PI, TWO_PI);
  
  strokeWeight(1);
  stroke(0, 0, 0);
  noFill();
  arc(436, 282, 50, 50, PI, TWO_PI);
  
  strokeWeight(1);
  stroke(0, 0, 0);
  noFill();
  arc(308, 310, 50, 50, PI, TWO_PI);
  
  strokeWeight(1);
  stroke(0, 0, 0);
  noFill();
  arc(361, 310, 50, 50, PI, TWO_PI);
  
  strokeWeight(1);
  stroke(0, 0, 0);
  noFill();
  arc(384, 342, 50, 50, PI, TWO_PI);
  
  strokeWeight(1);
  stroke(0, 0, 0);
  noFill();
  arc(409,372, 50, 50, PI, TWO_PI);
  
  //Arcos Rotados
  
  strokeWeight(2);
  stroke(181,100,92);
  noFill();
  arc(355, 180, 30, 30, PI*0.7, TWO_PI-PI*0.17);
  
  strokeWeight(2);
  stroke(181,100,92);
  noFill();
  arc(377, 159, 29, 29, PI*0.7, TWO_PI-PI*0.17);
  
    
  strokeWeight(2);
  stroke(181,100,92);
  noFill();
  arc(398, 140, 28, 28, PI*0.7, TWO_PI-PI*0.17);
  
  strokeWeight(2);
  stroke(181,100,92);
  noFill();
  arc(418, 126, 16, 16, PI*0.7, TWO_PI-PI*0.17);
  
  strokeWeight(1);
  stroke(0, 0, 0);
  noFill();
  arc(355, 180, 30, 30, PI*0.7, TWO_PI-PI*0.17);
  
  strokeWeight(1);
  stroke(0, 0, 0);
  noFill();
  arc(377, 159, 29, 29, PI*0.7, TWO_PI-PI*0.17);
  
    
  strokeWeight(1);
  stroke(0, 0, 0);
  noFill();
  arc(398, 140, 28, 28, PI*0.7, TWO_PI-PI*0.17);
  
  strokeWeight(1);
  stroke(0, 0, 0);
  noFill();
  arc(418, 126, 16, 16, PI*0.7, TWO_PI-PI*0.17);

  
}