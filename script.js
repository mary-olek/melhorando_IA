const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Vamos descobrir como seria sua princesa? Para começar, escolha uma cor",
        alternativas: [
            {
                texto: "Roxo",
                afirmacao: "Você é doce e sonhadora,"
            },
            {
                texto: "Azul",
                afirmacao: "Você é alegre e sorridente,"
            }
        ]
    },
    {
        enunciado: "Seu castelo dos sonhos seria?",
        alternativas: [
            {
                texto: "Um lugar tranquilo, cheio de flores, passáros e muita luz natural.",
                afirmacao: "você ama a tranquilidade e a paz que a natureza te traz, ama essa conexão."
            },
            {
                texto: "Um lugar bem alto, longe da cidade, com uma vista privilegiada do céu.",
                afirmacao: "você prefere a paz de sua própria companhia, ver o cèu durante a noite faz com que você se sinta viva."
            }
        ]
    },
    {
        enunciado: " Se tivesse um poder mágico, qual escolheria?",
        alternativas: [
            {
                texto: "Saber o futuro e poder mudá-lo, antes que ocorra.",
                afirmacao: "Você gosta de ter o controle da situação, conseguir controlar o que vai vir a acontecer é uma boa forma de evitar problemas,"
            },
            {
                texto: "Poder voltar ao passado.",
                afirmacao: "Você se prende a sentimentos que já passaram, gosta de aproveitar os momentos pois sabe o valor deles depois que tudo passa."
            }
        ]
    },
    {
        enunciado: "O que você faria se o seu reino entrasse em guerra?",
        alternativas: [
            {
                texto: "Mandariam todos para a guerra, nosso reino em primeiro lugar!",
                afirmacao: "você ama arriscar, mesmo que tudo possa dar errado. "
            },
            {
                texto: "Buscaria uma opção segura, sem colocar todos em risco.",
                afirmacao: "Você é pé no chão, se preocupa com o que pode acontecer de ruim."
            }
        ]
    },
    {
        enunciado: " O que é uma princesa sem seu vestido? como o seu seria? ",
        alternativas: [
            {
                texto: "Longo, com gliter e da sua cor favorita.",
                afirmacao: "Você ama brilar, e todos amam isso em você!!"
            },
            {
                texto: "Longo, rodado e da sua cor favorita.",
                afirmacao: "Todos amam seu jeitinho único de ser!!"
            }
        ]
    },
    {
        enunciado: "E por fim princesa, como seria sua coroa?",
        alternativas: [
            {
                texto: "Dourada, com muitas pedras brilhantes.",
                afirmacao: "Você é feliz!"
            },
            {
                texto: "Prata, toda cravejada.",
                afirmacao: "Você é feliz!"
            }
        ]
    
    },
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Parabéns princesa!!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    
}

mostraPergunta();Me