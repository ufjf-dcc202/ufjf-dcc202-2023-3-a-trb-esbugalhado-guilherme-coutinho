
import { criarCasas } from "./tabuleiro.js";

const tabuleiroOponente = document.getElementById('tabuleiro-oponente');
const tabuleiroJogador = document.getElementById('tabuleiro-jogador');


criarCasas(tabuleiroOponente, 0);
criarCasas(tabuleiroJogador, 1);


const colunaUmjogador = [0, 0, 0];
const colunaDoisjogador = [0, 0, 0];
const colunaTresjogador = [0, 0, 0];

const colunaUmOponente = [0, 0, 0];
const colunaDoisOponente = [0, 0, 0];
const colunatresOponente = [0, 0, 0];