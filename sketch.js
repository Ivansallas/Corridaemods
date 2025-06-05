//corrida de emojis
let xJogador = []; // lista de xjogadoresx
let yJogador = []; // lista de yjogadores
let jogadores = ["😎", "❤️", "👽", "🥸"]; // emojis dos jogadores
let listaTeclas = ["a", "s", "d", "f"]; // teclas correspondentes aos jogadores

function setup() {
  createCanvas(400, 400);

  let espacamento = height / (jogadores.length + 1); // espaçamento entre emojis

  for (let i = 0; i < jogadores.length; i++) {
    xJogador[i] = 0;
    yJogador[i] = (i + 1) * espacamento; // posiciona cada emoji automaticamente na vertical
  }
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
      text("O vencedor é: " + jogadores[i], 120, 200);
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
  for (let i = 0; i < listaTeclas.length; i++) {
    if (key == listaTeclas[i]) {
      xJogador[i] += random(20); // move o jogador correspondente
    }
  }
}
