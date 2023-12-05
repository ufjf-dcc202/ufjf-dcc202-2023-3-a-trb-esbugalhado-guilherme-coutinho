

function criarCasas(tabuleiro) {
    for (let i = 0; i < 9; i++) {
      const casa = document.createElement('div');
      casa.className = 'celula';

      tabuleiro.appendChild(casa);
    }
}

export { criarCasas }