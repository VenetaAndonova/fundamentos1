var x = [];
var y = [];



function setup() {
  createCanvas(400, 400);

  for (var i = 0; i < 400; i = i + 1) { // esto debe ser en el setup 
    x[i] = random(0, width);
    y[i] = random(0, height);
  }

  //frameRate(1);
}

function draw() {
  background(189,183,107);

  //text (x.length, 200, 200);

  for (var i = 0; i < x.length; i = i + 1) { // reporta el numero de posiciones en el arrey 
    //ellipse(x[i], y[i], 20, 20); 
    //triangle(x[i]-10, y[i],x[i]+5, y[i] - 10,x[i], y[i]+ 10,)
    miAbejita(x[i], y[i]);

    //x[i] = x[i]+ 1;  // los circulos se mueven a la derecha 

    x[i] = x[i] + random(-1, 1); //hace que los circulos vibran o se mueven dependiendo del rango de la varianza 

    y[i] = y[i] + random(-1, 1);

    miAbejita(100, 100); // los numeros represenan las coordenadas de la posición de la funcion, miX y miY  

  }
}
  function miAbejita(miX, miY) {

    fill(153,255,255)
    ellipse(miX, miY, 25, 25); 
    ellipse (miX+10, miY-10, 25, 25);
    ellipse (miX+20, miY, 25, 25);
    ellipse (miX+10, miY+10, 25, 25)
    fill (204,204,0)
    ellipse(miX+10, miY,20, 20)
    noFill();
  }