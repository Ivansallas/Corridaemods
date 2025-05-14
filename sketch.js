let xJogador1 = 0;
let xJogador2 = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  ativaJogo();
  desenhaJogadores(); 
  desenhaLinhaDechegada();
  verificaVencedor();
}

function verificaVencedor() {
  if (xJogador1 > 350) {
    textSize(20);
    text("Jogador 1 venceu!", 50, 175);
    noLoop();
  }
  if (xJogador2 > 350) {
    textSize(20);
    text("Jogador 2 venceu!", 50, 175);
    noLoop();
  }
}

function desenhaLinhaDechegada() {
  rect(350, 0, 10, height); // linha de chegada
}

function desenhaJogadores() {
  textSize(40);
  text("😎", xJogador1, 100);
  text("❤️", xJogador2, 300);
}

function ativaJogo() {
  if (focused == true) {
    background("green");
  } else {
    background("gray");
    textSize(15);
    textStyle(BOLD);
    text("CLICK NA TELA PARA INICIAR O JOGO", 50, 175);
  }
}

function keyReleased() {
  if (key == "a") {
    xJogador1 += random(20);
  }
  if (key == "s") {
    xJogador2 += random(20);
  }
}
