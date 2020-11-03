let list = [1,2,3];
function setup() {
  createCanvas(350, 350);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  for (let x = 5; x < (350 - 12); x = x + 15) {
    for (let y = 5; y < (350 - 5); y = y + 15) {
      let r = random(list)
      if (r == 1){
        triangle(x,y+10,x+5,y,x+10,y+10)
      }
      if (r==2){
        circle(x+5,y+5,10);
      }
      if (r==3){
      rect(x, y, 10);}
    }
  }

}