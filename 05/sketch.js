var miAno;
var miMes;
var miDia;

var miHora;
var miMinuto;
var miSegundo;

var anguloGrados = 0;

function setup() {
	createCanvas(400, 400);
	
	var a = 0
for (a = 0; a <= 200; a = a+ 16,33) {
	line(a, 0, a, 5); 
	
	a = a + 16,33;
}
}

function draw() {
	background(204, 255, 255);
	
	
	
	
	

	miHora = hour();
	miMinuto = minute();
	miSegundo = second();



	anguloGrados = anguloGrados + 1;



	push()
	
//translate(width/2, height/2);
	var miNuevaHora = map(miHora, 0, 11, 0, 359);
	var anguloRadianesHora = radians(miNuevaHora);
	var AmplifiedAnguloRadianesHora = (anguloRadianesHora)*30;
	//translate (400, 400); 
	noStroke(); 
	rotate(anguloRadianesHora);
	fill(153, 255, 204);
	ellipse(0, 0, AmplifiedAnguloRadianesHora, AmplifiedAnguloRadianesHora);
	noFill();

	pop();


	push()

	translate(width / 2, height / 2);
	var miNuevoSegundo = map(miSegundo, 0, 59, 0, 359);
	var anguloRadianesSeg = radians(miNuevoSegundo);
	var AmplifiedAnguloRadianesSegundo = (anguloRadianesSeg) * 63;
	noStroke();
	rotate(anguloRadianesSeg);
	fill(204, 204, 255);
	ellipse(0, 0, AmplifiedAnguloRadianesSegundo, AmplifiedAnguloRadianesSegundo);
	noFill();
	pop();

		push();
	 translate(width, height);
	var miNuevoMinuto = map (miMinuto, 0, 59, 0, 359);
	var anguloRadianesMinuto = radians(miNuevoMinuto);
	var AmplifiedAnguloRadianesMinuto = (anguloRadianesMinuto)*67;
	noStroke();
	rotate (anguloRadianesMinuto);
	fill (255, 204, 255);
	ellipse(0,0, AmplifiedAnguloRadianesMinuto, AmplifiedAnguloRadianesMinuto);
	noFill(); 
	
	pop();
	
	

	

	line(0,16.67, 5, 16.67);
	line(0, 33.32, 5, 33.32);
	line(0, 50, 5, 50);
	line(0,66.72, 5, 66.72);
	line(0, 83.39, 5, 83.39);
	line (0, 100, 10, 100);
	line (0, 116.67, 5, 116.67);
	line (0,133, 5, 133);
	line (0, 149.7, 5, 149.7);
	line (0, 166.4, 5, 166.4);
	line (0, 183, 5, 183); 
	line(0, 200, 10, 200);
	

	
line(395, 383.3, 400, 383.3);
line(395, 366.6, 400, 366.6);
line(390, 350, 400, 350); 
	line(395, 333, 400, 333);
	line (395, 316, 400, 316); 
	line(390, 299.8, 400, 299.8);
	line(395, 283, 400, 283);
	line(395, 266.4, 400, 266.4);
	line(390, 249.7, 400, 249.7);
	line(395, 233, 400, 233);
	line(395, 216.3, 400, 216.3);
	line(390, 200, 400, 200);
	
	

}