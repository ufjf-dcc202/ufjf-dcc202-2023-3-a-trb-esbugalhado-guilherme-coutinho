
import { criarCasas } from "./tabuleiro.js";

const tabuleiroOponente = document.getElementById('tabuleiro-oponente');
const tabuleiroJogador = document.getElementById('tabuleiro-jogador');

criarCasas(tabuleiroOponente, 0);
criarCasas(tabuleiroJogador, 1);

const casasJogador = [document.getElementById('casa-1-0'), document.getElementById('casa-1-1'), document.getElementById('casa-1-2'), 
                      document.getElementById('casa-1-3'), document.getElementById('casa-1-4'), document.getElementById('casa-1-5'), 
                      document.getElementById('casa-1-6'), document.getElementById('casa-1-7'), document.getElementById('casa-1-8'), ]

const casasOponente = [document.getElementById('casa-0-0'), document.getElementById('casa-0-1'), document.getElementById('casa-0-2'), 
                      document.getElementById('casa-0-3'), document.getElementById('casa-0-4'), document.getElementById('casa-0-5'), 
                      document.getElementById('casa-0-6'), document.getElementById('casa-0-7'), document.getElementById('casa-0-8'), ]

const displayOponente = document.getElementById('display-oponente');
const displayJogador = document.getElementById('display-jogador');

let numeroAleatorio = 0;
let turno = 1;

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

document.getElementById('acao-jogador').addEventListener('click', () => {
    if (turno === 1){
        numeroAleatorio = gerarNumeroAleatorio();
        displayJogador.innerText = numeroAleatorio;
    }
});

tabuleiroJogador.addEventListener('click', (event) => {
    const casaClicada = event.target;
    
    if (casaClicada.classList.contains('casa')) {
      //casaClicada.innerText = numeroAleatorio;
      if (casaClicada.id === 'casa-1-0' || casaClicada.id === 'casa-1-3' || casaClicada.id === 'casa-1-6') {
        let coluna = 0;
        if (casaClicada.id === 'casa-1-0') {
            let linha = 0;
            colunasJogador[coluna][linha] = numeroAleatorio;
        }
        if (casaClicada.id === 'casa-1-3') {
            let linha = 1;
            colunasJogador[coluna][linha] = numeroAleatorio;
        }
        if (casaClicada.id === 'casa-1-6') {
            let linha = 2;
            colunasJogador[coluna][linha] = numeroAleatorio;
        }
      } 
      else if(casaClicada.id === 'casa-1-1' || casaClicada.id === 'casa-1-4' || casaClicada.id === 'casa-1-7') {
        let coluna = 1;
        if (casaClicada.id === 'casa-1-1') {
            let linha = 0;
            colunasJogador[coluna][linha] = numeroAleatorio;
        }
        if (casaClicada.id === 'casa-1-4') {
            let linha = 1;
            colunasJogador[coluna][linha] = numeroAleatorio;
        }
        if (casaClicada.id === 'casa-1-7') {
            let linha = 2;
            colunasJogador[coluna][linha] = numeroAleatorio;
        }
      }
      else if(casaClicada.id === 'casa-1-2' || casaClicada.id === 'casa-1-5' || casaClicada.id === 'casa-1-8') {
        let coluna = 2;
        if (casaClicada.id === 'casa-1-2') {
            let linha = 0;
            colunasJogador[coluna][linha] = numeroAleatorio;
        }
        if (casaClicada.id === 'casa-1-5') {
            let linha = 1;
            colunasJogador[coluna][linha] = numeroAleatorio;
        }
        if (casaClicada.id === 'casa-1-8') {
            let linha = 2;
            colunasJogador[coluna][linha] = numeroAleatorio;
        }
      }
      atualizaTabuleiro();
      numeroAleatorio = 0;
      displayJogador.innerText = numeroAleatorio;
}});


function atualizaTabuleiro() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            casasJogador[j * 3 + i].innerText = colunasJogador[i][j];
            casasOponente[j * 3 + i].innerText = colunasOponente[i][j];
        }
    }

}

function verificaJogo() {
    let verificaJogador = true;
    let verificaOponente = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (colunasJogador[i][j] === 0) {
                verificaJogador = false;
            }
            if (colunasOponente[i][j] === 0) {
                verificaOponente = false;
            }
        }
    }
    if (verificaJogador=== true || verificaOponente === true) {
        return true;
    }
    else {
        return false;
    }
}

function turnoJogador() {

}


const colunasJogador = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
const colunasOponente = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

atualizaTabuleiro();


document.onload = function jogo() {

    while (true) {
        if (verificaJogo()) {
            break;
        }

        if (turno === 0) {
            turnoOponente();
        }
        else {
            turnoJogador();
        }
    }
}