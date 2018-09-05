var posXbot1 = 30;

 

var posYbot1 = 10;

 

var tambot1 = 20;

 

 

var posXbot2 = 60;

 

var posYbot2 = 10;

 

var tambot2 = 20;

 

 

var posXbot3 = 90;

 

var posYbot3 = 10;

 

var tambot3 = 20

 

 

var posXbot4 = 130;

 

var posYbot4 = 10;

 

var tambot4 = 20;

 

 

var posXbot5 = 160;

 

var posYbot5 = 10;

 

var tambot5 = 20;

 

var posXbot6 = 190;

var posYbot6 = 10;

var tambot6 = 20;

 

var posXbot7 = 220; // boton 7 - definido

var posYbot7 = 10;

var tambot7 = 20;

 

var posXbot8 = 250; // boton 8 -- definido

var posYbot8 = 10;

var tambot8 = 20;

 

var posXbot9 = 280;

var posYbot9 = 10;

var tambot9 = 20;

 

var posXbot10 = 310;

var posYbot10 = 10;

var tambot10 = 20;

 

var posXbot11 = 340;

var posYbot11 = 10;

var tambot11 = 20;

 

var posXbot12 = 370;

var posYbot12 = 10;

var tambot12 = 20;

 

var posXbot13 = 400;

var posYbot13 = 10;

var tambot13 = 20;

 

var posXbot14 = 430;

var posYbot14 = 10;

var tambot14 = 20;

 

var posXbot15 = 460;

var posYbot15 = 10;

var tambot15 = 20;

 

var posXbot16 = 490;

var posYbot16 = 10;

var tambot16 = 20;

 

var posXbot17 = 520;

var posYbot17 = 10;

var tambot17 = 20;

 

var posXbot18 = 550;

var posYbot18 = 10;

var tambot18 = 20;

 

var posXbot19 = 580;

var posYbot19 = 10;

var tambot19 = 20;

 

var posXbot20 = 610;

var posYbot20 = 10;

var tambot20 = 20;

 

var posXbot21 = 640;

var posYbot21 = 10;

var tambot21 = 20;

 

var herramienta = 1;

 

var herramientaColor1 = 1;

 

 

function setup() {

 

                createCanvas(windowWidth, windowHeight);

 

                background(220);

 

 

}

 

 

 

 

function draw() {

 

 

                stroke(0, 0, 0);

                noFill();

 

                rect(posXbot1, posYbot1, tambot1, tambot1);

 

                rect(posXbot2, posYbot2, tambot2, tambot2);

 

                rect(posXbot3, posYbot3, tambot3, tambot3);

 

 

                rect(posXbot4, posYbot4, tambot4, tambot4);

 

                fill(0, 0, 255);

                rect(posXbot4, posYbot4, tambot4, tambot4);

                noFill();

 

 

                rect(posXbot5, posYbot5, tambot5, tambot5);

 

                fill(0, 255, 0);

                rect(posXbot5, posYbot5, tambot5, tambot5);

                noFill();

 

                rect(posXbot16, posYbot16, tambot16, tambot16);

 

                fill(255,0, 0);

                rect(posXbot16, posYbot16, tambot16, tambot16);

                noFill();

               

                rect(posXbot17, posYbot17, tambot17, tambot17);

 

                fill(255,215, 0);

                rect(posXbot17, posYbot17, tambot17, tambot17);

                noFill();

 

                rect(posXbot18, posYbot18, tambot18, tambot18);

 

                fill(255,0, 255);

                rect(posXbot18, posYbot18, tambot18, tambot18);

                noFill();

               

                rect(posXbot19, posYbot19, tambot19, tambot19);

 

                fill(128,128, 128);

                rect(posXbot19, posYbot19, tambot19, tambot19);

                noFill();

               

                rect(posXbot20, posYbot20, tambot20, tambot20);

 

                fill(139,69, 19);

                rect(posXbot20, posYbot20, tambot20, tambot20);

                noFill();

               

                rect(posXbot21, posYbot21, tambot21, tambot21);

 

                fill(0,0, 0);

                rect(posXbot21, posYbot21, tambot21, tambot21);

                noFill();

               

                ellipse(posXbot2 + 5, posYbot2 + 5, 6, 6); // dibujo sobre los botones - boton 2 horizontal

                rect(posXbot2 + 10, posYbot2 + 10, 5, 5);

 

 

                ellipse(posXbot2 + 2 * tambot2 + 5, posYbot2 + 5, 6, 6); // dibujo - boton 3 horizontal

                line(posXbot2 + 2 * tambot2, posYbot2 + 7, posXbot2 + 2 * tambot2 - 7, posYbot2 + 12);

 

                rect(posXbot6, posYbot6, tambot6, tambot6);

                line(190, 30, 200, 20);

                line(190, 30, 205, 25);

                line(190, 30, 195, 20);

 

                rect(posXbot7, posYbot7, tambot7, tambot7); // dibujo - boton 7 horizontal

                ellipse(posXbot7 + 10, posYbot7 + 10, 20, 10);

 

                rect(posXbot8, posYbot8, tambot8, tambot8); // dibujo boton 8 horizontal

                rect(posXbot8 + 2, posYbot8 + 5, tambot8 - 5, tambot8 - 15);

 

                rect(posXbot9, posYbot9, tambot9, tambot9);// dibujo boton 9 horizontal

                triangle(posXbot9, posYbot9 + 20, posXbot9 + 20, posYbot9 + 20, posXbot9 + 10, posYbot9)

 

                rect(posXbot10, posYbot10, tambot10, tambot10);// dibujo boton 10 horizontal

                rect(posXbot8 + 62, posYbot8 + 5, tambot8 - 5, tambot8 - 15);

triangle(posXbot9+30, posYbot9 + 20, posXbot9 + 50, posYbot9 + 20, posXbot10 + 10, posYbot10)

               

               

                rect(posXbot11, posYbot11, tambot11, tambot11);// dibujo boton 11

                ellipse(posXbot7 + 130, posYbot7 + 10, 20, 10);

                rect(posXbot8 + 92, posYbot8 + 2, tambot8 - 5, tambot8 - 15);

 

               

                rect(posXbot12, posYbot12, tambot12, tambot12);

                line(posXbot12, posYbot12+20, posXbot12 +10, posYbot12+10)

                line(posXbot12, posYbot12+20, posXbot12 +15, posYbot12+15)

                line(posXbot12, posYbot12+20, posXbot12 +5, posYbot12+10)

                ellipse(posXbot7 + 160, posYbot7 + 10, 20, 10);

               

                rect(posXbot13, posYbot13, tambot13, tambot13);

                line(posXbot13, posYbot13+20, posXbot13 +10, posYbot13+10)

                line(posXbot13, posYbot13+20, posXbot13 +15, posYbot13+15)

                line(posXbot13, posYbot13+20, posXbot13 +5, posYbot13+10)

                rect(posXbot13 + 3, posYbot13 + 2, tambot8 - 5, tambot8 - 15);

               

                rect(posXbot14, posYbot14, tambot14, tambot14);

                ellipse(posXbot14+10, posYbot14+10, tambot14, tambot14-10);

                triangle(posXbot14,posYbot14+20, posXbot14+20, posYbot14+20,posXbot14+10, posYbot14);

               

                rect(posXbot15, posYbot15, tambot15, tambot15);

                rect(posXbot15+2, posYbot15+2, tambot15-4, tambot15-4);

                triangle(posXbot15,posYbot15+20, posXbot15+20, posYbot15+20,posXbot15+10, posYbot15);

               

                rect(posXbot16, posYbot16, tambot16, tambot16);

               

                rect(posXbot17, posYbot17, tambot17, tambot17);

               

                rect(posXbot18, posYbot18, tambot18, tambot18);

               

                rect(posXbot19, posYbot19, tambot19, tambot19);

               

                rect(posXbot20, posYbot20, tambot20, tambot20);

               

                rect(posXbot21, posYbot21, tambot21, tambot21);

               

                //line(width/2, height/2. mouseX, mouseY);

 

 

                if (mouseIsPressed == true) {

 

                               if (herramientaColor1 == 1) {

 

                                               stroke(0, 0, 255);

 

                               }

 

                               if (herramientaColor1 == 2) {

 

                                               stroke(0, 255, 0);

 

                               }

                              

if (herramientaColor1 == 3) {

 

                                               stroke(255, 0, 0);

 

                               }

                              

                               if (herramientaColor1 == 4) {

 

                                               stroke(255, 215, 0);

 

                               }

                               if (herramientaColor1 == 5) {

 

                                               stroke(255, 0, 0);

 

                               }

                              

                               if (herramientaColor1 == 6) {

 

                                               stroke(255, 215, 0);

 

                               }

                              

                               if (herramientaColor1 == 7) {

 

                                               stroke(255, 0, 255);

 

                               }

                               if (herramientaColor1 == 8) {

 

                                               stroke(128, 128, 128);

 

                               }

                               if (herramientaColor1 == 9) {

 

                                               stroke(139, 69, 19);

 

                               }

                               if (herramientaColor1 == 10) {

 

                                               stroke(0, 0, 0);

 

                               }

                               if (herramienta == 1) {

 

                                               line(pmouseX, pmouseY, mouseX, mouseY)

                                               ellipse(pmouseX, pmouseY, 20, 20);

 

                               }

 

                               if (herramienta == 2) {

                                               ellipse(pmouseX, pmouseY, 20, 20);

                                               rect(pmouseX / 2, pmouseY / 2, 20, 20);

 

                                               //background(220);

                               }

 

                               if (herramienta == 3) {

                                               line(width / 2, height / 2, mouseX, mouseY);

                               }

 

                               if (herramienta == 4) {

                                               ellipse(width / 2, height / 2, mouseX, mouseY);

                               }

 

                               if (herramienta == 5) {

                                               rect(width / 2, height / 2, mouseX, mouseY);

                                               //triangle(width / 4, height / 4, width / 2, height / 2,mouseX, mouseY);

                               }

 

                               if (herramienta == 6) {

 

                                               triangle(width / 4, height / 4, width / 2, height / 2, mouseX, mouseY);

                               }

                              

                               if (herramienta == 7) {

                                               rect(width / 2, height / 2, mouseX, mouseY);

                                               triangle(width / 4, height / 4, width / 2, height / 2,mouseX, mouseY);

                               }

                               if (herramienta == 8) {

                                               rect(width / 2, height / 2, mouseX, mouseY);

                                               ellipse(width / 2, height / 2, mouseX, mouseY);

                               }

                              

                               if (herramienta == 9) {

                                               line(width / 2, height / 2, mouseX, mouseY);

                                               ellipse(width / 2, height / 2, mouseX, mouseY);

                               }

                              

                               if (herramienta == 10) {

                                               line(width / 2, height / 2, mouseX, mouseY);

                                               rect(width / 2, height / 2, mouseX, mouseY);

                               }

                              

                               if (herramienta == 11) {

                               ellipse(width / 2, height / 2, mouseX, mouseY);

                                               triangle(width / 4, height / 4, width / 2, height / 2,mouseX, mouseY);

                               }

                              

                               if (herramienta == 12) {

                                               rect(width/8 , height/8 , mouseX, mouseY);

                                               triangle(width / 4, height / 4, width / 2, height / 2,mouseX, mouseY);

                               }

                              

                               if (mouseX > posXbot1 && mouseX < posXbot1 + tambot1 &&

 

                                               mouseY > posYbot1 && mouseY < posYbot1 + tambot1) {

 

                                               background(220); // boton que borra

 

                               }

 

                              

 

 

                               if (mouseX > posXbot2 && mouseX < posXbot2 + tambot2 &&

 

                                               mouseY > posYbot2 && mouseY < posYbot2 + tambot2) {

 

                                               herramienta = 2;

 

                                               background(220);

 

                               }

 

 

                               if (mouseX > posXbot3 && mouseX < posXbot3 + tambot3 &&

 

                                               mouseY > posYbot3 && mouseY < posYbot3 + tambot3) {

 

                                               herramienta = 1;

                                               background(220);

 

                               }

 

                               if (mouseX > posXbot4 && mouseX < posXbot4 + tambot4 &&

 

                                               mouseY > posYbot4 && mouseY < posYbot4 + tambot4) {

 

                                               herramientaColor1 = 1;

                                               background(220);

 

                               }

 

                               if (mouseX > posXbot5 && mouseX < posXbot5 + tambot5 &&

 

                                               mouseY > posYbot5 && mouseY < posYbot5 + tambot5) {

 

                                               herramientaColor1 = 2;

                                               background(220);

 

                               }

                               if (mouseX > posXbot16 && mouseX < posXbot16 + tambot16 &&

 

                                               mouseY > posYbot16 && mouseY < posYbot16 + tambot16) {

 

                                               herramientaColor1 = 3;

                                               background(220);

 

                               }

                              

                               if (mouseX > posXbot17 && mouseX < posXbot17 + tambot17 &&

 

                                               mouseY > posYbot17 && mouseY < posYbot17 + tambot17) {

 

                                               herramientaColor1 = 4;

                                               background(220);

 

                               }

                               if (mouseX > posXbot18 && mouseX < posXbot18 + tambot18 &&

 

                                               mouseY > posYbot18 && mouseY < posYbot18 + tambot18) {

 

                                               herramientaColor1 = 7;

                                               background(220);

 

                               }

                              

                               if (mouseX > posXbot19 && mouseX < posXbot19 + tambot19 &&

 

                                               mouseY > posYbot19 && mouseY < posYbot19 + tambot19) {

 

                                               herramientaColor1 = 8;

                                               background(220);

 

                               }

                               if (mouseX > posXbot20 && mouseX < posXbot20 + tambot20 &&

 

                                               mouseY > posYbot20 && mouseY < posYbot20 + tambot20) {

 

                                               herramientaColor1 = 9;

                                               background(220);

 

                               }

                               if (mouseX > posXbot21 && mouseX < posXbot21 + tambot21 &&

 

                                               mouseY > posYbot21 && mouseY < posYbot21 + tambot21) {

 

                                               herramientaColor1 = 10;

                                               background(220);

 

                               }

                               if (mouseX > posXbot6 && mouseX < posXbot6 + tambot6 &&

 

                                               mouseY > posYbot6 && mouseY < posYbot6 + tambot6) {

 

                                               herramienta = 3;

                                               background(220);

 

                               }

                               if (mouseX > posXbot7 && mouseX < posXbot7 + tambot7 &&

 

                                               mouseY > posYbot7 && mouseY < posYbot7 + tambot7) {

 

                                               herramienta = 4;

                                               background(220);

 

                               }

 

                               if (mouseX > posXbot8 && mouseX < posXbot8 + tambot8 &&

 

                                               mouseY > posYbot8 && mouseY < posYbot8 + tambot8) {

 

                                               herramienta = 5;

                                               background(220);

 

                               }

                               if (mouseX > posXbot9 && mouseX < posXbot9 + tambot9 &&

 

                                               mouseY > posYbot9 && mouseY < posYbot9 + tambot9) {

 

                                               herramienta = 6;

                                               background(220);

 

                               }

                               if (mouseX > posXbot10 && mouseX < posXbot10 + tambot10 &&

 

                                               mouseY > posYbot10 && mouseY < posYbot10 + tambot10) {

 

                                               herramienta = 7;

                                               background(220);

 

                               }

                               if (mouseX > posXbot11 && mouseX < posXbot11 + tambot11 &&

 

                                               mouseY > posYbot11 && mouseY < posYbot11 + tambot11) {

 

                                               herramienta = 8;

                                               background(220);

 

                               }

                               if (mouseX > posXbot12 && mouseX < posXbot12 + tambot12 &&

 

                                               mouseY > posYbot12 && mouseY < posYbot12 + tambot12) {

 

                                               herramienta = 9;

                                               background(220);

 

                               }

                              

                               if (mouseX > posXbot13 && mouseX < posXbot13 + tambot13 &&

 

                                               mouseY > posYbot13 && mouseY < posYbot13 + tambot13) {

 

                                               herramienta = 10;

                                               background(220);

 

                               }

                               if (mouseX > posXbot14 && mouseX < posXbot14 + tambot14 &&

 

                                               mouseY > posYbot14 && mouseY < posYbot14 + tambot14) {

 

                                               herramienta = 11;

                                               background(220);

 

                               }

                               if (mouseX > posXbot15 && mouseX < posXbot15 + tambot15 &&

 

                                               mouseY > posYbot15 && mouseY < posYbot15 + tambot15) {

 

                                               herramienta = 12;

                                               background(220);

 

                               }

                              

                }

                }
 

 