function setup() {
  createCanvas(600, 600);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function draw() {
  background(220);
  textSize(40);
  text("🥸", xJogador1, 100);
  text("👽", xJogador2, 250);
  text("👻", xJogador3, 350);
  text("🤡", xJogador4, 500);
  rect(550, 0, 10, width);
  xJogador1 += random(5);
  xJogador2 += random(5);
  xJogador3 += random(5);
  xJogador4 += random(5);
}
