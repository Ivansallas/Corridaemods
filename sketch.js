//corrida de emojis
let xJogador = [0, 0, 0];// lista de xjogadoresx
let yJogador = [100, 200, 300];// lista de yjogadores

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
  if (xJogador[0] > 350) {
    textSize(20);
    text("Jogador 1 venceu!", 50, 175);
    noLoop();
  }
  if (xJogador[1] > 350) {
    textSize(20);
    text("Jogador 2 venceu!", 50, 175);
    noLoop();
  }
  if (xJogador[2] > 350) {
    textSize(20);
    text("Jogador 3 venceu!", 50, 175);
    noLoop();
  }
}

function desenhaLinhaDechegada() {
  rect(350, 0, 10, height); // linha de chegada
}

function desenhaJogadores() {
  textSize(40);
  text("😎", xJogador[0], yJogador[0]);
  text("❤️", xJogador[1], yJogador[1]);
  text("👽", xJogador[2], yJogador[2]);
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
//tecla para iniciar o jogo
function keyReleased() {
  if (key == "a") {
    xJogador[0] += random(20); //tecla "a" move o jogador 1
  }
  if (key == "s") {
    xJogador[1] += random(20); //tecla "s" move o jogador 2
  }
  if (key == "d") {
    xJogador[2] += random(20); //tecla "d" move o jogador 3
  }
}
