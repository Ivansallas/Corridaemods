function setup() {
  createCanvas(600, 600);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function draw() {
  background("gray");
  textSize(40);
  text("🥸", xJogador1, 80);
  text("👽", xJogador2, 220);
  text("👻", xJogador3, 380);
  text("🤡", xJogador4, 550);
  rect(550, 0, 10, width);
  xJogador1 += random(5);
  xJogador2 += random(5);
  xJogador3 += random(5);
  xJogador4 += random(5);
}
