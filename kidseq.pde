int gridSize;

int x, y, x0, y0;

boolean firstPress = true;

int iW, iH;

int introCount;

float xOld, yOld;






// for start method
int xOld;
int yOld;








float locInEllipsis;


ArrayList<PVector> drawing = new ArrayList;



void setup() {


  frameRate(240);

  iW = window.innerWidth;
  iH = window.innerHeight;

  size(iW, iH); 
  
  background(0);
  
  
  x0 = width/2;
  y0 = height/2;
  
  drawing.add(new PVector(x0,y0));

  gridSize = 30;
  
  strokeWeight(1);


  int xOld =x0;
  int yOld = y0;
  
}



void draw() {


  if(introCount<1000) introDraw();
  else startMain();
}




void introDraw() {
    
  
    stroke(255,random(224,242), random(0, 144));
    x = toGrid(random(0,iW), x0);
    y = toGrid(random(0,iH), y0);




    point(x, y);
    line(x0, y0, x, y);
    
    drawing.add(new PVector(x,y));
    
    x0 = x;
    y0 = y;
    
    introCount++;

}



int toGrid(int i, int original) {
  int gridI = 0;




  if (i>original+gridSize/2) {
    i = original+gridSize;
  } else if (i<original-gridSize/2) {
    i = original-gridSize;
  } else if (original == 0) i = 0;
  else i = original;


  gridI = i;


  return gridI;
} 



void drawCircles(){




    
    
  
    
    int ellWidth = width/2.8;
    int ellHeight = height/2.8;

    float speed = 0.005;

    float x = sin(locInEllipsis) * ellWidth;
    float y = cos(locInEllipsis) * ellHeight;


    x+=width/2;
    y+=height/2;
    

    noFill();
    strokeWeight(1);
    stroke(255,230,100);

    ellipse(x, y, 40, 40);
    
    
    
    locInEllipsis += speed;

   
}




void startMain(){




background(0);

for(int i = 0; i< drawing.size(); i++){

    stroke(255,random(224,242), random(0, 144));
    
    int x = drawing.get(i).x;
    int y = drawing.get(i).y;
    line(xOld,yOld,x,y);
    xOld=x;
    yOld=y;

}



drawCircles();





}
