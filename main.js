
import { criarCasas } from "./tabuleiro.js";

const tabuleiroOponente = document.getElementById('tabuleiro-oponente');
const tabuleiroJogador = document.getElementById('tabuleiro-jogador');

criarCasas(tabuleiroOponente, 0);
criarCasas(tabuleiroJogador, 1);

let colunasJogador = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let colunasOponente = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

let placarJogador = [0, 0, 0];
let placarOponente = [0, 0, 0];

const casasJogador = [document.getElementById('casa-1-0'), document.getElementById('casa-1-1'), document.getElementById('casa-1-2'), 
                      document.getElementById('casa-1-3'), document.getElementById('casa-1-4'), document.getElementById('casa-1-5'), 
                      document.getElementById('casa-1-6'), document.getElementById('casa-1-7'), document.getElementById('casa-1-8'), ]

const casasOponente = [document.getElementById('casa-0-0'), document.getElementById('casa-0-1'), document.getElementById('casa-0-2'), 
                      document.getElementById('casa-0-3'), document.getElementById('casa-0-4'), document.getElementById('casa-0-5'), 
                      document.getElementById('casa-0-6'), document.getElementById('casa-0-7'), document.getElementById('casa-0-8'), ]

const displayOponente = document.getElementById('display-oponente');
const displayJogador = document.getElementById('display-jogador');

const pontuacaoOponente = [document.getElementById('placar-0-0'), document.getElementById('placar-0-1'), document.getElementById('placar-0-2')];
const pontuacaoJogador = [document.getElementById('placar-1-0'), document.getElementById('placar-1-1'), document.getElementById('placar-1-2')];

let aux = 0;
let aux2 = 0;
let aux3 = 0;
let casasVaziasOponente = [];
let numeroAleatorio = 0;
let turno = 1;

function delay(tempo) {
    return new Promise(resolve => setTimeout(resolve, tempo));
  }

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
    let coluna = 0;
    if (casaClicada.classList.contains('casa')) {
      //casaClicada.innerText = numeroAleatorio;
      if (casaClicada.id === 'casa-1-0' || casaClicada.id === 'casa-1-3' || casaClicada.id === 'casa-1-6') {
        coluna = 0;
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
        for(let k = 0; k < 3; k++) {
            if(colunasOponente[coluna, k] === numeroAleatorio) {
                colunasOponente[coluna, k] = 0;
            }
        }
      } 
      else if(casaClicada.id === 'casa-1-1' || casaClicada.id === 'casa-1-4' || casaClicada.id === 'casa-1-7') {
        coluna = 1;
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
        coluna = 2;
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

      for(let k = 0; k < 3; k++) {
        if(colunasOponente[coluna][k] === numeroAleatorio) {
            colunasOponente[coluna][k] = 0;
        }
      }

      atualizaTabuleiro();

      numeroAleatorio = 0;
      displayJogador.innerText = numeroAleatorio;

      

      if(verificaJogo()) {
        pass;
      } else {
        turno = 0;
        atualizaTabuleiro();
        console.log(placarJogador);
        turnoOponente();
      }


}});


function turnoOponente() {
    delay(500).then(() => {
        numeroAleatorio = gerarNumeroAleatorio();
        displayOponente.innerText = numeroAleatorio;

        delay(2000).then(() => {

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (colunasOponente[i][j] === 0) {
                        casasVaziasOponente.push([j, i]);
                    }
                }
            }

            aux = Math.floor(Math.random() * (casasVaziasOponente.length - 1));
            //colunasOponente[casasVazias[aux[0]]][casasVazias[aux[1]]] = numeroAleatorio;
            colunasOponente[casasVaziasOponente[aux][1]][casasVaziasOponente[aux][0]] = numeroAleatorio;

            for(let k = 0; k < 3; k++) {
                if(colunasJogador[casasVaziasOponente[aux][1]][k] === numeroAleatorio) {
                    colunasJogador[casasVaziasOponente[aux][1]][k] = 0;
                }
              }

            casasVaziasOponente.splice(0, casasVaziasOponente.length);
            numeroAleatorio = 0;
            displayOponente.innerText = numeroAleatorio;

            atualizaTabuleiro();
            
            turno = 1;
        })
    })
}


function atualizaTabuleiro() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            casasJogador[j * 3 + i].innerText = colunasJogador[i][j];
            casasOponente[j * 3 + i].innerText = colunasOponente[i][j];
        }
        atualizaPlacar();
        pontuacaoOponente[i].innerText = placarOponente[i];
        pontuacaoJogador[i].innerText = placarJogador[i];
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
        if(verificaJogador === true) {
            window.location.href = "vitoria.html";
        } else if(verificaOponente === true) {
            window.location.href = "derrota.html";
        }
    }
    else {
        return false;
    }
}

function atualizaPlacar() {

    placarJogador = [0, 0, 0];
    placarOponente = [0, 0, 0];

    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(colunasOponente[i][j] === 0) {
                continue;
            } else {
                aux2 = colunasOponente[i][j];
                for(let k = 0; k < 3; k++) {
                    if(colunasOponente[i][k] === aux2) {
                        aux3++;
                    }
                }
                
            }
        }
        placarOponente[i] += aux2 * aux3;

        aux2 = 0;
        aux3 = 0;

        for(let j = 0; j < 3; j++) {
            if(colunasJogador[i][j] === 0) {
                continue;
            } else {
                aux2 = colunasJogador[i][j];
                for(let k = 0; k < 3; k++) {
                    if(colunasJogador[i][k] === aux2) {
                        aux3++;
                    }
                }
                
            }
        }
        placarJogador[i] += aux2 * aux3;

        aux2 = 0;
        aux3 = 0;
        

    }
}




atualizaTabuleiro();
