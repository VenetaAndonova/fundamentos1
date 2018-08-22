function setup() {
  createCanvas(960, 960);
  strokeWeight(0);
}

function draw() {
  background(255, 255, 255);


  
//for (var x = 320; x < 480; x = x + 20) {
    //for (var y = 160; y < 320; y = y + 20) {
      //fill(120);
      //triangle(x, y + 20, x + 20, y , x + 20, y + 20);
      //noFill();
      
    //}
  //}
  

  
  
  //for (var g = 360; g < 480; g = g + 80) {
    //for (var z = 160; z < 320; z = z + 80) {
      //fill(255)
      //rect(g, z, 40, 20);
      //noFill();
      
      //fill(120);
      //triangle(g, z, g + 20, z, g +20, z + 20);
      //triangle (g+20, z, g + 40, z, g+ 40,z+20);
      //noFill();
      
    //}
  //}
  
  
for (var x = 480; x < 640; x = x + 20) {
    for (var y = 480; y < 640; y = y + 20) {
      fill(255,165,0);
      triangle(x, y, x, y + 20, x + 20, y + 20);
      noFill();
      
    }
  }
  
  for (var g = 520; g < 640; g = g + 80) {
    for (var z = 480; z < 640; z = z + 80) {
      fill(255)
      rect(g, z, 40, 20);
      noFill();
      
      fill(255,165,0);
      triangle(g, z, g + 20, z, g +20, z + 20);
      triangle (g+20, z, g + 40, z, g+ 40,z+20);
      noFill();
      
    }
  }
  
       
for (var s = 500; s < 640; s = s + 80){
  for (var t = 500; t < 640; t = t + 80){
    fill(255)
    rect(s,t, 40, 20);
    noFill();
    
    fill(255,165,0);
    triangle(s , t , s + 20, t , s + 20, t + 20);
    triangle(s + 20, t, s + 40, t, s + 40, t + 20);
    noFill();
    
  }
}
  
for (var u = 480; u < 640; u = u + 80){
  for (var v = 520; v < 640; v = v +80){
    fill(255)
    rect(u,v, 40, 20);
noFill();
    fill(255,165,0);
    triangle(u , v , u + 20, v , u + 20, v + 20);
    triangle(u + 20, v, u + 40, v, u + 40, v + 20);
    noFill();
    
  }
}
  for (var p = 460; p < 640; p = p + 80){
    for (var q = 540; q < 640; q = q + 80){
      fill(255)
      rect(p, q, 40, 20);
      noFill();
      fill(255,165,0);
    triangle(p , q , p + 20, q , p + 20, q + 20);
    triangle(p + 20, q, p + 40, q, p + 40, q + 20);
    noFill();
      fill(255)
      rect(460, 540, 20, 20)
      noFill();
      fill(255)
      rect(460, 620, 20, 20);
      noFill();
      fill(255)
      rect (640, 540, 20, 20);
      noFill();
      fill(255)
      rect (640, 620, 20, 20);
      noFill();
    }
  }
  for (var x = 160; x < 320; x = x + 20) {
    for (var y = 480; y < 640; y = y + 20) {
      fill(120);
      triangle(x, y, x, y + 20, x + 20, y + 20);
      noFill();
      
    }
  }
  
  for (var g = 200; g < 320; g = g + 80) {
    for (var z = 480; z < 640; z = z + 80) {
      fill(255)
      rect(g, z, 40, 20);
      noFill();
      
      fill(120);
      triangle(g, z, g + 20, z, g +20, z + 20);
      triangle (g+20, z, g + 40, z, g+ 40,z+20);
      noFill();
      
    }
  }
  
       
for (var s = 180; s < 320; s = s + 80){
  for (var t = 500; t < 640; t = t + 80){
    fill(255)
    rect(s,t, 40, 20);
    noFill();
    
    fill(120);
    triangle(s , t , s + 20, t , s + 20, t + 20);
    triangle(s + 20, t, s + 40, t, s + 40, t + 20);
    noFill();
    
  }
}
  
for (var u = 160; u < 320; u = u + 80){
  for (var v = 520; v < 640; v = v +80){
    fill(255)
    rect(u,v, 40, 20);
noFill();
    fill(120);
    triangle(u , v , u + 20, v , u + 20, v + 20);
    triangle(u + 20, v, u + 40, v, u + 40, v + 20);
    noFill();
    
  }
}
  for (var p = 140; p < 320; p = p + 80){
    for (var q = 540; q < 640; q = q + 80){
      fill(255)
      rect(p, q, 40, 20);
      noFill();
      fill(120);
    triangle(p , q , p + 20, q , p + 20, q + 20);
    triangle(p + 20, q, p + 40, q, p + 40, q + 20);
    noFill();
      fill(255)
      rect(140, 540, 20, 20)
      noFill();
      fill(255)
      rect(140, 620, 20, 20);
      noFill();
      fill(255)
      rect (320, 540, 20, 20);
      noFill();
      fill(255)
      rect (320, 620, 20, 20);
      noFill();
    }
  }
  for (var x = 480; x < 640; x = x + 20) {
    for (var y = 160; y < 320; y = y + 20) {
      fill(120);
      triangle(x, y, x, y + 20, x + 20, y + 20);
      noFill();
      
    }
  }
  
  for (var g = 520; g < 640; g = g + 80) {
    for (var z = 160; z < 320; z = z + 80) {
      fill(255)
      rect(g, z, 40, 20);
      noFill();
      
      fill(120);
      triangle(g, z, g + 20, z, g +20, z + 20);
      triangle (g+20, z, g + 40, z, g+ 40,z+20);
      noFill();
      
    }
  }
  
       
for (var s = 500; s < 640; s = s + 80){
  for (var t = 180; t < 320; t = t + 80){
    fill(255)
    rect(s,t, 40, 20);
    noFill();
    
    fill(120);
    triangle(s , t , s + 20, t , s + 20, t + 20);
    triangle(s + 20, t, s + 40, t, s + 40, t + 20);
    noFill();
    
  }
}
  
for (var u = 480; u < 640; u = u + 80){
  for (var v = 200; v < 320; v = v +80){
    fill(255)
    rect(u,v, 40, 20);
noFill();
    fill(120);
    triangle(u , v , u + 20, v , u + 20, v + 20);
    triangle(u + 20, v, u + 40, v, u + 40, v + 20);
    noFill();
    
  }
}
  for (var p = 460; p < 640; p = p + 80){
    for (var q = 220; q < 320; q = q + 80){
      fill(255)
      rect(p, q, 40, 20);
      noFill();
      fill(120);
    triangle(p , q , p + 20, q , p + 20, q + 20);
    triangle(p + 20, q, p + 40, q, p + 40, q + 20);
    noFill();
      fill(255)
      rect(460, 220, 20, 20)
      noFill();
      fill(255)
      rect(460, 300, 20, 20);
      noFill();
      fill(255)
      rect (640, 220, 20, 20);
      noFill();
      fill(255)
      rect (640, 300, 20, 20);
      noFill();
    }
  }
   for (var x = 160; x < 320; x = x + 20) {
    for (var y = 160; y < 320; y = y + 20) {
      fill(120);
      triangle(x, y, x, y + 20, x + 20, y + 20);
      noFill();
      
    }
  }
  
  for (var g = 200; g < 320; g = g + 80) {
    for (var z = 160; z < 320; z = z + 80) {
      fill(255)
      rect(g, z, 40, 20);
      noFill();
      
      fill(120);
      triangle(g, z, g + 20, z, g +20, z + 20);
      triangle (g+20, z, g + 40, z, g+ 40,z+20);
      noFill();
      
    }
  }
  
       
for (var s = 180; s < 320; s = s + 80){
  for (var t = 180; t < 320; t = t + 80){
    fill(255)
    rect(s,t, 40, 20);
    noFill();
    
    fill(120);
    triangle(s , t , s + 20, t , s + 20, t + 20);
    triangle(s + 20, t, s + 40, t, s + 40, t + 20);
    noFill();
    
  }
}
  
for (var u = 160; u < 320; u = u + 80){
  for (var v = 200; v < 320; v = v +80){
    fill(255)
    rect(u,v, 40, 20);
noFill();
    fill(120);
    triangle(u , v , u + 20, v , u + 20, v + 20);
    triangle(u + 20, v, u + 40, v, u + 40, v + 20);
    noFill();
    
  }
}
  for (var p = 140; p < 318; p = p + 80){
    for (var q = 220; q < 318; q = q + 80){
      fill(255)
      rect(p, q, 40, 20);
      noFill();
      fill(120);
    triangle(p , q , p + 20, q , p + 20, q + 20);
    triangle(p + 20, q, p + 40, q, p + 40, q + 20);
    noFill();
      fill(255)
      rect(140, 220, 20, 20)
      noFill();
      fill(255)
      rect(140, 300, 20, 20);
      noFill();
      fill(255)
      rect (320, 220, 20, 20);
      noFill();
      fill(255)
      rect (320, 300, 20, 20);
      noFill();
    }
  }
 for (var x = 160; x <= 800; x = x + 20) {
    for (var y = 160; y <= 800; y = y + 20) {
      rect(x, y, x + 20, y + 20);
    }
  }

  for (var x = 320; x < 480; x = x + 20) {
    for (var y = 160; y < 320; y = y + 20) {
      fill(120);
      triangle(x, y + 20, x + 20, y, x + 20, y + 20);
      noFill();

    }

  }

  for (var g = 360; g < 480; g = g + 80) {
    for (var z = 160; z < 320; z = z + 80) {
      fill(255)
      rect(g, z, 40, 20);
      noFill();

      fill(120);
      triangle(g, z, g, z + 20, g + 20, z);
      triangle(g + 20, z, g + 20, z + 20, g + 40, z);
      noFill();

    }
  }
  for (var g1 = 320; g1 < 480; g1 = g1 + 80) {
    for (var z1 = 180; z1 < 320; z1 = z1 + 80) {
      fill(255)
      rect(g1, z1, 20, 20)
      noFill();

      fill(120);
      triangle(g1, z1, g1, z1 + 20, g1 + 20, z1);
      noFill();
    }
  }
  
  for (var k = 380; k <= 480; k = k + 80) {
    for (var l = 180; l < 320; l = l + 80) {
      fill(255);
      rect(k, l, 20, 20)
      noFill();

      fill(120);
      triangle(k, l, k + 20, l, k, l + 20);
      noFill(120);
    }
  }

  for (var a = 320; a < 480; a = a + 80) {
    for (var b = 200; b < 320; b = b + 80) {
      fill(255)
      rect(a, b, 40, 20);
      noFill();

      fill(120);
      triangle(a, b, a, b + 20, a + 20, b);
      triangle(a + 20, b, a + 20, b + 20, a + 40, b);
      noFill();

    }
  }

for (var c = 340; c < 480; c = c + 80) {
    for (var d = 220; d < 320; d = d + 80) {
      fill(255)
      rect(c, d, 40, 20);
      noFill();

      fill(120);
      triangle(c, d, c, d + 20, c + 20, d);
      triangle(c + 20, d, c + 20, d + 20, c + 40, d);
      noFill();

    }
  }


}