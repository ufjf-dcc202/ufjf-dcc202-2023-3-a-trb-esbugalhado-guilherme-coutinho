

function criarCasas(tabuleiro, posicao) {

  if (posicao === 1) {
    for (let i = 0; i < 3; i++) {
      const placar = document.createElement('span');
      placar.className = 'placar';
      placar.id = `placar-${i}`;

      tabuleiro.appendChild(placar);
      placar.innerText = 0;
    }
  } 

    for (let i = 0; i < 9; i++) {
      const casa = document.createElement('div');
      casa.className = 'casa';
      casa.id = `casa-${i}`;

      tabuleiro.appendChild(casa);
    }

  if (posicao === 0) {
    for (let i = 0; i < 3; i++) {
      const placar = document.createElement('span');
      placar.className = 'placar';
      placar.id = `placar-${i}`;

      tabuleiro.appendChild(placar);
      placar.innerText = 0;
    }
  } 
}

export { criarCasas }