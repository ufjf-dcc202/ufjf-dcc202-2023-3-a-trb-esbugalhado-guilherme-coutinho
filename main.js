
import { criarCasas } from "./tabuleiro.js";

const tabuleiroOponente = document.getElementById('tabuleiro-oponente');
const tabuleiroJogador = document.getElementById('tabuleiro-jogador');


criarCasas(tabuleiroOponente, 0);
criarCasas(tabuleiroJogador, 1);