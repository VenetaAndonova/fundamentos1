var Pajarito; //la abeja Maya

 

 

var misPajaros = [];

 

 

function setup() {

 

  createCanvas(400, 400);

 

  //frameRate(2);

 

 

 

                Pajarito = new Pajaro (200,200);

 

 

}

 

 

function draw() {

 

  background(189,183,107);

 

 

  //if(mouseIsPressed == true){

 

    //misAbejas [misAbejas.length] = new abeja (mouseX, mouseY); // dibija cuando el mouse está presionado y puede hacer muchs abejas

 

  //}

 

               

                if (frameCount % 30 == 0){ // cada 50 frames nace una abeja nueva

 

    misPajaros[misPajaros.length] = new Pajaro(random (0, width), random(0, height));

 

  }

 

 

                for (var i = 0; i < misPajaros.length; i = i + 1){

 

    misPajaros[i].dibujarse();

 

    misPajaros[i].moverse();

 

    if (misPajaros[i].edad > 510){

 

      misPajaros[i].morirse();

 

    }

 

 

    if (mouseIsPressed == true ) {

 

      if (dist(mouseX, mouseY, misPajaros[i].x, misPajaros[i].y) <40){

 

        misPajaros[i].morirse();

 

      }

 

    }

 

  }

 

 

                Pajarito.dibujarse();

 

  Pajarito.moverse();

 

  if(Pajarito.edad > 300){

 

    //maya.morirse();

 

  }

 

 

 

}

 

 

                function Pajaro (miX, miY){

 

                this.x = miX;

 

  this.y = miY;

 

  this.tam = 20;

 

  this.edad = 0;

 

  this.estaViva = true;

 

 

 

  //habilidades de la especie abejas

 

 

  this.dibujarse = function(){

 

    if(this.estaViva == true) {

 

arc(this.x, this.y, 80, 80, PI + QUARTER_PI, TWO_PI);

 

                arc(this.x+80, this.y,  80, 80, PI, PI +HALF_PI+QUARTER_PI);

 

                noFill();

 

                                               

                                               

                                               

                                               

    }

 

};

 

 

                  this.moverse = function(){

 

    this.x = this.x +3;

 

    this.y = this.y;

 

                                

    this.edad = this.edad + 1;

 

  };

 

 

  this.morirse = function(){

 

    this.estaViva1 = false;

 

  };

 

 

}

 

______________________________________________________________________________
 