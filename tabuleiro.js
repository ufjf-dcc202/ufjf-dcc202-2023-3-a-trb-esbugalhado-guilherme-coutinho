

function criarCasas(tabuleiro) {
    for (let i = 0; i < 9; i++) {
      const casa = document.createElement('div');
      casa.className = 'casa';
      casa.id = `casa-${i}`;

      tabuleiro.appendChild(casa);
    }

    for (let i = 0; i < 3; i++) {
      const placar = document.createElement('span');
      placar.calssname = 'placar';
      placar.id = `placar-${i}`;

      tabuleiro.appendChild(placar);
      placar.innerText = 0;
    }
}

export { criarCasas }