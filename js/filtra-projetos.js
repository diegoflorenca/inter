const divs = document.querySelectorAll('.align-items-stretch');
const filtros = document.querySelectorAll('.filtro');

const filtraProjetos = (categoria) => {
  filtros.forEach((filtro) => {
    if (filtro.id != categoria) {
      filtro.classList.remove('ativo');
    } else {
      filtro.classList.add('ativo');
    }
  });

  divs.forEach((div) => {
    if (categoria === 'todos') {
      div.classList.remove('esconde');
    } else if (div.id != categoria) {
      div.classList.add('esconde');
    } else {
      div.classList.remove('esconde');
    }
  });
};
