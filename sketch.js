let XBolinha = 300;
let YBolinha = 175;
let Diametro = 25;

let VelocidadeX = 6;
let VelocidadeY = 6;

let RaqueteX = 3.5;
let RaqueteY = 150;
let RaqueteC = 10;
let RaqueteA = 90;

let raio = Diametro / 2;

let XRival = 585;
let YRival = 150;

let YVR;
let C = false

let meuspontos = 0;
let rivalpontos = 0;

//musica

let Ratequetada;
let ponto;
let Miku;

function preload(){
 Miku = loadSound ("Anamanaguchi - Miku (Instrumental) (128).mp3");
  ponto = loadSound ("ponto.mp3");
  Raquetada = loadSound ("raquetada.mp3");
  Pipipipi = loadSound ("Pipipipi.mp3")
}

    
function setup() {
  createCanvas(600, 400);
  Miku.loop();
  //Pipipipi.loop();
}

function draw() {
  background(0);
  Bolinha();
  MBolinha();
  VBC();
  Raquete(RaqueteX,RaqueteY);
  RaqueteM();
  //VCCR();
  RaqueteR(XRival,YRival);
  MRival();
  CCR(RaqueteX,RaqueteY);
  CCR(XRival, YRival);
  Placar();
  Marca();
  DRival();
}

function Bolinha (){
  stroke(0);
  fill(186,85,211)
  circle(XBolinha,YBolinha,Diametro);
}

function MBolinha (){
  XBolinha += VelocidadeX;
  YBolinha += VelocidadeY;
}

function VBC (){
   if (XBolinha + raio> width || XBolinha - raio < 0) {
    VelocidadeX *= -1;
  }
  
  if (YBolinha + raio> height || YBolinha -raio < 0){
    VelocidadeY *= -1;
  }
}

function Raquete (x,y){
  fill(255,105,180)
  rect(x,y,RaqueteC,RaqueteA);
}


function RaqueteR (){
  rect(XRival,YRival,RaqueteC,RaqueteA);
}



function RaqueteM (){
  if (keyIsDown(UP_ARROW)){
    RaqueteY -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    RaqueteY += 10;
  }
  
}

function VCCR (){
  if (XBolinha - raio < RaqueteX + RaqueteC && YBolinha - raio < RaqueteY + RaqueteA && YBolinha + raio > RaqueteY){
     VelocidadeX *= -1;
    Raquetada.play();
  } 

  
}

function DRival (){
   if (keyIsDown(87)){
    YRival -= 10;
  }
  if (keyIsDown(83)){
    YRival += 10;
  }
}
  
function MRival (){
  YVR = YBolinha - YRival - RaqueteC / 2 - 30;
  YRival += YVR
}

function CCR (x,y){
  C = 
  collideRectCircle(x,y, RaqueteC, RaqueteA, XBolinha, YBolinha, raio);
  if (C){
    VelocidadeX *= -1;
    Raquetada.play();
  }
}

function Placar (){
  textAlign(CENTER);
  textSize(20);
  fill (186,85,211)
  stroke(250);
  rect(250,10,30,20);
  fill (300,300,300)
  text(meuspontos,265,26);
  fill (186,85,211)
  rect(305,10,30,20);
  fill (300,300,300)
  text(rivalpontos,321,26);
}

function Marca(){
 if (XBolinha > 585){
   meuspontos += 1;
   ponto.play();
 }
  if (XBolinha < 13){
    rivalpontos += 1;
    ponto.play();
  }
}