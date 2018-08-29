var x = 250; // coordinate of the body
var y = 400; // coordinate of the body
var v = 360; // coordinate of the body
var w = 300; // coordinate of the body
var z = 320; // coordinat of the body
var s = 400; // coordinate hoop
var t = 300; // coordinate hoop
var p = 0;
var q = 400;
var r = 20;
var l = 10;
var m = 440;
var dir = 1;
var dir1 = 1; // direction of the hoop
var dirLeftcorner = 1;
var vel = 6;
var vel1 = 3; // speed of the hoop
var a = 0; // coordinate of the head
var b = 0; //coordinate of the head
var c = 450;
var d = 250;
 
function setup() {
  createCanvas(600, 400);
  background(220);
  frameRate(5);
}
 
function draw() {
  background(255, 255, 255);
  strokeWeight(4);
 
  stroke(120)
  fill(102, 187, 255)
  ellipse (s, t, 100, 100)
  s = s - vel1 * dir1; //hoop
  t = t - vel1 * dir1; // hoop
  noFill();
 
  fill (255, 255, 255);
  ellipse(s, t, 84, 84); //hoop
  s = s - vel1 * dir1; //hoop
  t = t - vel1 * dir1; // hoop
  noFill();
 
 
 
  if (s < 200) {
 
    s = s + vel1 * dir1;
    t = t - vel1 * dir1;
 
  }
 
  if (t < 10) {
    vel1 = 0
  }
 
 
 
  if (frameCount <= 50)
   fill(255, 51, 255);
  ellipse(a, b, 50, 50);
  a = a + vel * dir;
  b = b + vel * dir;
  noFill();
 
 
 
  triangle(x, y, v, y, w, z); //dress
  x = x + vel * dir * (-1);
  y = y + vel * dir * (-1);
  v = v + vel * dir * (-1);
  w = w + vel * dir * (-1);
  z = z + vel * dir * (-1);
 
  if (a > 149 && b > 149 && x < 190 && y < 340) {
    vel = 0;
  }
 
  if (frameCount <= 50)
    fill (255, 255, 51)
  triangle(p, q, r, q, l, m); //legs
  p = p + vel * dir;
  q = q - vel * dir;
  r = r + vel * dir;
  l = l + vel * dir;
  m = m - vel * dir;
  line(p + 10, q, l, m);
  noFill();
 
 
  if (frameCount > 50 && frameCount <= 60) {
 
    triangle(165, 127, 185, 120, 175, 100); //bow
    //fill(120);
         //noFill();
    triangle(165, 127, 145, 120, 155, 100); //bow
    ellipse(158, 145, 5, 5); //eye
    ellipse(145, 145, 5, 5); //eye
    arc(150, 155, 10, 10, radians(0), radians(180)); // smile
    line(167, 188, 215, 160); //left arm
    line(147, 188, 200, 160); //right arm
 
 
  }
 
  if (frameCount > 61 ) {
 
    triangle(165, 127, 185, 120, 175, 100); //bow
    triangle(165, 127, 145, 120, 155, 100); //bow
    ellipse(158, 145, 5, 5); //eye
    ellipse(145, 145, 5, 5); //eye
    arc(150, 155, 10, 10, radians(0), radians(180)); // smile
    line(167, 188, 215, 160); //left arm
    line(140, 188, 100, 160); //right arm
 
  }
   if (frameCount > 61) {
     fill( 255, 255,51);
     ellipse(s, t, 100, 100);
 noFill ();
     fill (255, 0, 0);
     triangle(x, y, v, y, w, z);
     triangle(165, 127, 185, 120, 175, 100); //bow
    triangle(165, 127, 145, 120, 155, 100); //bow
     noFill ();
   }
if (frameCount > 65){
  fill(153, 51, 255);
  arc (c, d,280, 300, radians (180), radians (0));
  noFill();
  fill (102, 102, 255);
  arc (c, d, 260, 280, radians (180), radians (0));
  noFill();
  fill (102, 255, 178);
  arc (c, d, 240, 260, radians (180), radians (0));
  noFill();
  fill (255, 255, 102);
  arc (c, d, 220, 240, radians (180), radians (0));
  noFill();
  fill (255, 255, 255);
  arc (c, d, 200, 220, radians (180), radians (0));
  noFill();
}
//if (frameCount < 70){
    //saveCanvas("miFlipbooksito_" + frameCount, 'jpg');
  //}
 
 
}