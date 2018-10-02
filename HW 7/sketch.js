var Florecitarosada;

 

var misFloresrosadas = [];

 

var pajaro1;

 

function setup() {

  createCanvas(400, 400);

 

  Florecitarosada = new Florrosada(200, 200);

 

  pajaro1 = new Pajaro(0, 200);

 

}

 

 

 

function draw() {

 

  background(189,183,107);

 

  pajaro1.dibujarse();

  pajaro1.moverse();

 

  if (mouseIsPressed == true) {

    misFloresrosadas[misFloresrosadas.length] = new Florrosada(mouseX, mouseY);

 

  }

 

  for (var i = 0; i < misFloresrosadas.length; i = i + 1) {

 

    misFloresrosadas[i].dibujarse();

 

    misFloresrosadas[i].moverse();

 

    if (misFloresrosadas[i].edad > 200) {

 

      misFloresrosadas[i].morirse();

 

    }

 

  }

 

 

 

  Florecitarosada.dibujarse();

 

  Florecitarosada.moverse();

 

  if (Florecitarosada.edad > 200) {

 

 

 

  }

 

 

 

}

 

 

// especie

function Florrosada(miX, miY) {

            // caracteristicas

  this.x = miX;

 

  this.y = miY;

 

  this.tam = 20;

 

  this.edad = 0;

 

  this.estaViva = true;

 

 

            //habilidades

  this.dibujarse = function() {

 

    if (this.estaViva == true) {

 

      fill(255, 204, 255)

 

      ellipse(this.x, this.y, 25, 25);

 

      ellipse(this.x + 10, this.y - 10, 25, 25);

 

      ellipse(this.x + 20, this.y, 25, 25);

 

      ellipse(this.x + 10, this.y + 10, 25, 25)

 

      fill(255, 255, 0)

 

      ellipse(this.x + 10, this.y, 20, 20)

 

      noFill();

      fill(255,51,51)
    ellipse(this.x-20, this.y, 40, 25); 
    fill (0,0,0)
    ellipse(this.x-10, this.y,20, 20)
    noFill();
 
      fill(255, 104, 104);

                                                //noStroke();

                arc(this.x+40, this.y-20, 50, 50, 0, HALF_PI);

                arc(this.x+40, this.y-20, 50, 50, PI, PI + HALF_PI);

                                                noFill();

                                                fill(255,255,0)

                                                ellipse(this.x +30, this.y-30, 10, 10);

                                                ellipse(this.x +50, this.y-10, 10, 10);

                noFill();

      
    }

 

  };

 

 

 

  this.moverse = function() {

    this.x = this.x + random(-1, 1);

 

    this.y = this.y + random(-1, 1);

 

    this.edad = this.edad + 1;

  };

 

 

 

  this.morirse = function() {

    this.estaViva = false;

  };

 

}

 

 

 

function Pajaro(miX, miY) {

 

 

  this.x = miX;

  this.y = miY;

  this.tam = 20;

  this.edad = 0;

  this.estaViva = true;

 

 

 

  //habilidades de la especie abejas

 

  this.dibujarse = function() {

 

 

 

    if (this.estaViva == true) {

 

 

 

      arc(this.x, this.y, 80, 80, PI + QUARTER_PI, TWO_PI);

 

 

 

      arc(this.x + 80, this.y, 80, 80, PI, PI + HALF_PI + QUARTER_PI);

 

 

 

      noFill();
      
      

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

  };

 

 

 

 

 

  this.moverse = function() {

 

 

 

    this.x = this.x + 3;
    this.x1 = this.x  +5 
    

   

    if(this.x > 500){

      this.x = (-100);

      this.y = random(0,height/2) && random(0, height); 

    }

 if(this.x1 > 500){

      this.x1 = (-100);

      this.y = random(0,height);

    }

 

 

    this.y = this.y;

 

 

 

 

 

    this.edad = this.edad + 1;

 

 

 

  };

 

 

 

 

 

  this.morirse = function() {

 

 

 

    this.estaViva1 = false;

 

 

 

  };

 

 

 

 

 

}