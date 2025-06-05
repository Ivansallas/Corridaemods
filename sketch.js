//corrida de emojis
let xJogador = [0, 0, 0, 0]; // lista de xjogadoresx
let yJogador = [100, 200, 300, 380]; // lista de yjogadores
let jogadores = ["😎", "❤️", "👽", "🥸"]; // emojis dos jogadores

function setup() {
  createCanvas(400, 400);
}

function draw() {
  ativaJogo();
  desenhaLinhaDechegada();
  verificaVencedor();
}

function verificaVencedor() {
  for (let i = 0; i < jogadores.length; i++) {
    if (xJogador[i] > 350) {
      textSize(20);
      text(jogadores[i] + " venceu!", 50, 175);
      noLoop();
    }
  }
}

function desenhaLinhaDechegada() {
  rect(350, 0, 10, height); // linha de chegada
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < jogadores.length; i++) {
    text(jogadores[i], xJogador[i], yJogador[i]);
  }
}

function ativaJogo() {
  if (focused == true) {
    background("green");
    desenhaJogadores();
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
