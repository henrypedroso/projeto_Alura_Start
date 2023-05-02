// Variáveis de armazenamento de imagem
let imagemDoFundo;
let imagemDoRobo;
let imagemDoBalao;

// Análise e resposta
let numeroDaPergunta = 0; 
let caixaDeResposta;
let nome = "";

function setup() {
  createCanvas(600, 400); 
  noLoop();
  caixaDeResposta = createInput();
}

function preload(){
  imagemDoFundo = loadImage("fundo.png");
  imagemDoRobo = loadImage ("robo.png");
  imagemDoBalao = loadImage ("balao.png");
  
}

function draw() {
  background(imagemDoFundo);
  image(imagemDoRobo, 200, 200, 150, 150 );
  image(imagemDoBalao, 145, 10, 300, 200);
  textSize(14);
  textAlign(CENTER);
  textStyle(BOLD);
  text("Seja bem-vindo ao Alura Gênius. \n"+
      "Para adivinhar as iniciais do seu nome \n"+
      "responda as minhas perguntas \n"+
      "com frases longas. \n"+
      "Clique na tela para começar.", 290, 50);
}

function mousePressed() {
  if(numeroDaPergunta == 0) {
    numeroDaPergunta++;
    perguntar();
  }
  perguntar();
}

function perguntar() {
  if(numeroDaPergunta == 1) {
    desenharCena("Qual sua cor \n preferida?");
  }
                 
 else if(numeroDaPergunta == 2) {
    desenharCena("Qual sua fruta \n predileta?");
  }
  
 else if(numeroDaPergunta == 3) {
    desenharCena("Qual seu time \n de coração?");
  }
  
  else if(numeroDaPergunta == 4) {
    desenharCena("Qual matéria \n você curte?"); 
  }
  else {
    desenharCena("As iniciais são:");
    revelarNome();
  }
}

function desenharCena(texto) {
    image(imagemDoBalao, 145, 10, 300, 200);
    textSize(30);
    textAlign(CENTER);
    textStyle(BOLD);
    text(texto, 285, 70);
    exibirCaixaDeResposta(); 
}

function exibirCaixaDeResposta() {
  caixaDeResposta.position(85, 360);
  caixaDeResposta.size(450, 20);
  caixaDeResposta.value("");
  caixaDeResposta.elt.placeholder = "Responda aqui e pressione a tecla ENTER";
}

function keyPressed() {
 if(keyCode === ENTER) {
   if (respostaEstaValida()) {
     descobrirNome();
   }
 } 
}

function respostaEstaValida() {
  console.log(!caixaDeResposta.value() == "")
  return !caixaDeResposta.value() == "";
}

function descobrirNome() {
  let respostaTexto = caixaDeResposta.value();
  if (temPontoFinal(respostaTexto)) {
  nome = nome + respostaTexto[0];}
  numeroDaPergunta++;
  perguntar();
  
}

function temPontoFinal(resposta) {
  return resposta.includes (".");
}

function revelarNome() {
  caixaDeResposta.remove();
  textSize(50);
  text(nome, 285, 123);
}