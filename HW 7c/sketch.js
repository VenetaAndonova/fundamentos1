var maya; //la abeja Maya

 

var misAbejas = [];

 

function setup() {

  createCanvas(400, 400);

  //frameRate(4);

 

  maya = new abeja (200,200);

 

}

 

function draw() {

  background (189,183,107);

 

  //if(mouseIsPressed == true){

    //misAbejas [misAbejas.length] = new abeja (mouseX, mouseY); // dibija cuando el mouse está presionado y puede hacer muchs abejas

  //}

 

  if (frameCount % 50 == 0){ // cada 50 frames nace una abeja nueva

    misAbejas[misAbejas.length] = new abeja(random (0, width), random(0, height));

  }

   

  for (var i = 0; i < misAbejas.length; i = i + 1){

    misAbejas[i].dibujarse();

    misAbejas[i].moverse();

    if (misAbejas[i].edad > 510){

      misAbejas[i].morirse();

    }

   

    if (mouseIsPressed == true ) {

      if (dist(mouseX, mouseY, misAbejas[i].x, misAbejas[i].y) <40){

        misAbejas[i].morirse();

      }

    }

  }

 

  maya.dibujarse();

  maya.moverse();

  if(maya.edad > 200){

    //maya.morirse();

  }

 

  }

 

function mouseReleased() {

  //misAbejas[misAbejas.length] = new abeja(mouseX, mouseY);// dibuja cuando suelto el mouse

 

}

 

 

function abeja(miX, miY){ //caracteristicas de la especie abejas

  this.x = miX;

  this.y = miY;

  this.tam = 20;

  this.edad = 0;

  this.estaViva = true;

 

 

  //habilidades de la especie abejas

 

  this.dibujarse = function(){

    if(this.estaViva == true) {

  fill(255,51,51)

    ellipse(miX, miY, 40, 25);

    fill (0,0,0)

    ellipse(miX+10, miY,20, 20)

    noFill();

    }

};

 

  this.moverse = function(){

    this.x = this.x + random(-1, 1);

    this.y = this.y + random(-1, 1);

    this.edad = this.edad + 1;

  };

 

  this.morirse = function(){

    this.estaViva = false;

  };

}

 

