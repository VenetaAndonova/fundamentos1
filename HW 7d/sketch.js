var Mariposita; //la abeja Maya

 

 

var misMariposas = [];

 

 

function setup() {

 

  createCanvas(400, 400);

 

  //frameRate(2);

 

 

  Mariposita = new Mariposa (200,200);

 

 

}

 

 

function draw() {

 

  background(189,183,107);

 

 

  //if(mouseIsPressed == true){

 

    //misAbejas [misAbejas.length] = new abeja (mouseX, mouseY); // dibija cuando el mouse está presionado y puede hacer muchs abejas

 

  //}

 

 

  if (frameCount % 50 == 0){ // cada 50 frames nace una abeja nueva

 

    misMariposas[misMariposas.length] = new Mariposa(random (0, width), random(0, height));

 

  }

 

 

  for (var i = 0; i < misMariposas.length; i = i + 1){

 

    misMariposas[i].dibujarse();

 

    misMariposas[i].moverse();

 

    if (misMariposas[i].edad > 510){

 

      misMariposas[i].morirse();

 

    }

 

 

    if (mouseIsPressed == true ) {

 

      if (dist(mouseX, mouseY, misMariposas[i].x, misMariposas[i].y) <40){

 

        misMariposas[i].morirse();

 

      }

 

    }

 

  }

 

 

  Mariposita.dibujarse();

 

  Mariposita.moverse();

 

  if(Mariposita.edad > 100){

 

    //maya.morirse();

 

  }

 

 

  }

 

 

function mouseReleased() {

 

  //misAbejas[misAbejas.length] = new abeja(mouseX, mouseY);// dibuja cuando suelto el mouse

 

 

}

 

 

 

function Mariposa(miX, miY){ //caracteristicas de la especie abejas

 

  this.x = miX;

 

  this.y = miY;

 

                this.x1 = miX;

 

                this.y1 = miY;

 

  this.tam = 20;

 

  this.edad = 0;

 

  this.estaViva = true;

 

 

 

  //habilidades de la especie abejas

 

 

  this.dibujarse = function(){

 

    if(this.estaViva == true) {

 

  fill(255, 104, 104);

 

                                                noStroke();

 

                arc(this.x, this.y, 50, 50, 0, HALF_PI);

 

                arc(this.x, this.y, 50, 50, PI, PI + HALF_PI);

 

                                                noFill();

 

                                                fill(255,255,0)

 

                                                ellipse(this.x -10, this.y-10, 10, 10);

 

                                                ellipse(this.x +10, this.y+10, 10, 10);

 

                noFill();

 

                                               

    }

 

};

 

 

  this.moverse = function(){

 

    this.x = this.x +random(-1, 1);

 

    this.y = this.y + random(-1, 1);

 

                                

    this.edad = this.edad + 1;

 

  };

 

 

  this.morirse = function(){

 

    this.estaViva = false;

 

  };

 

}

 

 