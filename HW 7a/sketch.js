var Florecitarosada;

 

var misFloresrosadas = [];

 

function setup() {

 createCanvas(400, 400);

 

 Florecitarosada = new Florrosada (200,200);

 

}

 

function draw() {

 background(220);

 

 if(mouseIsPressed == true){

   misFloresrosadas [misFloresrosadas.length] = new Florrosada (mouseX, mouseY);

 }

 for (var i = 0; i < misFloresrosadas.length; i = i + 1){

   misFloresrosadas[i].dibujarse();

   misFloresrosadas[i].moverse();

   if (misFloresrosadas[i].edad > 200){

     misFloresrosadas[i].morirse();

   }

 }

 

 Florecitarosada.dibujarse();

 Florecitarosada.moverse();

 if(Florecitarosada.edad > 200){

  

 }

 

 }

 

function Florrosada(miX, miY){

 this.x = miX;

 this.y = miY;

 this.tam = 20;

 this.edad = 0;

 this.estaViva = true;

 

 

 

 this.dibujarse = function(){

   if(this.estaViva == true) {

     fill(255,204,255)

    ellipse(miX, miY, 25, 25);

    ellipse (miX+10, miY-10, 25, 25);

    ellipse (miX+20, miY, 25, 25);

    ellipse (miX+10, miY+10, 25, 25)

    fill (255,255,0)

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

