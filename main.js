
import { criarCasas } from "./tabuleiro.js";

const tabuleiroOponente = document.getElementById('tabuleiro-oponente');
const tabuleiroJogador = document.getElementById('tabuleiro-jogador');

const displayOponente = document.getElementById('display-oponente');
const displayJogador = document.getElementById('display-jogador');

let numeroAleatorio;

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

document.getElementById('acao-jogador').addEventListener('click', () => {
    numeroAleatorio = gerarNumeroAleatorio();
    displayJogador.innerText = numeroAleatorio;
});


criarCasas(tabuleiroOponente, 0);
criarCasas(tabuleiroJogador, 1);

tabuleiroJogador.addEventListener('click', (event) => {
    const casaClicada = event.target;
    
    // Verifica se a casa clicada é uma célula e atribui o número aleatório
    if (casaClicada.classList.contains('casa')) {
      casaClicada.innerText = numeroAleatorio;
    }
});


const colunaUmjogador = [0, 0, 0];
const colunaDoisjogador = [0, 0, 0];
const colunaTresjogador = [0, 0, 0];

const colunaUmOponente = [0, 0, 0];
const colunaDoisOponente = [0, 0, 0];
const colunatresOponente = [0, 0, 0];