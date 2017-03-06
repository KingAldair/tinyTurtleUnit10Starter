TinyTurtle.apply(window, [undefined, 400, 400]);

function square(length){
    forward(length);
    right(90);
    forward(length);
    right(90);
    forward(length);
    right(90);
    forward(length);
    right(90);
    forward(length);
}



// Type your function call below

function rectangle(y,x){
    right(90)
    forward(y);
    right(90);
    forward(x);
    right(90)
    forward(y)
    right(90)
    forward(x)
}







  function house(){
  forward(40);
  right(115);
  forward(90);
  right(155);
  forward(160);
  left(-154);
  forward(87);
  left(-116);
  forward(90);
  right(90);
  forward(77);
  right(90);
  forward(52);
  right(90);
  forward(160);
  right(90);
  forward(52.1);
  right(90);
  forward(90);
  }
  house();

function pentagon(x){
    right(90);
    forward(x);
    left(72)
    forward(x)
    left(72)
    forward(x)
    left(72)
    forward(x)
    left(72)
    forward(x)
    left(72)
    forward(x)
}





function hexagon(x){
    right(90);
    forward(x);
    left(60);
    forward(x);
    left(60);
    forward(x);
    left(60);
    forward(x);
    left(60);
    forward(x);
    left(60);
    forward(x);
    left(60);
}

function triangle(length){
    right(90);
    forward(length);
    right(-120)
    forward(length);
    right(-120)
    forward(length);
    right(60)
    stamp();
}
triangle(20);
square(50);
hexagon(50);
pentagon(50);



