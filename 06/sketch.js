var miFotico;
var miFuenteRoboto;
var miCancionsita;

var miAmplitud;

var miMicrofono;

var miTamano

var posX

var posY

var s = 400; // coordinate hoop 
var t = 300; // coordinate hoop 
var dir1 = 1; // direction of the hoop 
var vel1 = 3; // speed of the hoop 

function preload() {
  miFotico = loadImage('assets/Smallsky.jpeg');
  //miFuenteRoboto = loadFont('assets/Roboto-Bold.ttf');
  miCancionsita = loadSound('assets/Bach.mp3');
}

function setup() {
  createCanvas(400, 400);
  //textFont(miFuenteRoboto);
  //textSize(25);

  miAmplitud = new p5.Amplitude();
  miAmplitud.setInput(miCancionsita);

  //miMicrofono = new p5.AudioIn();
  //miMicrofono.start();
  //miCancionsita.play();
}

function draw() {

  if (miCancionsita.isPlaying() == false) {
    //miCancionsita.play();
    var tTotal = miCancionsita.duration();
    //miCancionsita.jump(tTotal/2);
    miCancionsita.play();
  }

  var miVol = map(mouseY, height, 0, 0, 1);
  miCancionsita.setVolume(miVol);

  var miPan = map(mouseX, 0, width, -1, 1);
  miCancionsita.pan(miPan);

  //var miTamano = map(miAmplitud.getLevel(), 0, 1, 0, 400);
  //fill(255, 102, 102); 
  //rect(width / 2, height / 2, miTamano*100, miTamano*100);
  //noFill(); 

var miTamano = map (miAmplitud.getLevel(), 0, 1, 0, 400); 
 rect (width/2, height/2, miTamano, miTamano); 



    background(102, 102, 255);


    if (miCancionsita.currentTime() >= 0 && miCancionsita.currentTime() <=20 ) {
      tint(255, 255, 255);
      image(miFotico, 0, 0, width, height);
    }

      if (miCancionsita.currentTime() > 20 && miCancionsita.currentTime() <=40) {
        tint(255, 204, 153);
        image(miFotico, 0, 0, width, height);
      }

        if (miCancionsita.currentTime() > 40 && miCancionsita.currentTime() <= 60 ) {
          tint(255, 102, 102);
          image(miFotico, 0, 0, width, height);
        }
  
  if (miCancionsita.currentTime() > 60 && miCancionsita.currentTime() <= 80 ) {
          tint(255, 255, 204);
          image(miFotico, 0, 0, width, height);
        }

  if (miCancionsita.currentTime() > 80 && miCancionsita.currentTime() <= 100 ) {
          tint(153, 0, 0);
          image(miFotico, 0, 0, width, height);
        }
  
       
        text("", 150, 200);


        var miTamano = map(miAmplitud.getLevel(), 0, 1, 0, 400);
        //ellipse(width/2, height/2, miTamano, miTamano);   
 if(miTamano > 40 && miTamano < 50 ){
   for(var  i = 0; i < miTamano; i = i +1){ // cunado baja el tamaño hay menos circulos
     var posX = random (0, width);
     var posY = random (0, height); 
     fill (0, 0, 0);
     ellipse (posX, posY, 100, 100);
     noFill(); 
     fill (102, 102, 255);
     rect (posX, posY, 100, 100);
     noFill();
   }
 }
           
   var miTamano = map(miAmplitud.getLevel(), 0, 1, 0, 400);
        //ellipse(width/2, height/2, miTamano, miTamano); 
 if(miTamano > 10 && miTamano < 40 && miCancionsita.currentTime() > 100){
   for(var  i = 0; i < miTamano; i = i +1){ // cunado baja el tamaño hay menos circulos
     var posX = random (0, width);
     var posY = random (0, height); 
     fill(0, 0, 0)
    ellipse(width/2, height/2, miTamano*10, miTamano*10); 
     noFill(); 
     //rect (posX, posY, 100, 100);
   }
 }  
  
var miTamano = map(miAmplitud.getLevel(), 0, 1, 0, 400);
      //ellipse(width/2, height/2, miTamano, miTamano);   
 if(miTamano > 10 && miTamano < 40){
   for(var  i = 0; i < miTamano; i = i +1){ // cunado baja el tamaño hay menos circulos
     var posX = random (0, width);
     var posY = random (0, height); 
     rect (posX, posY, 100, 100);
   }
 }   

     
}