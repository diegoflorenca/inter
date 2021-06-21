const filtros = document.querySelectorAll('.filtro');

const filtraCategoria = (categoria) => {
  const projetos = document.querySelectorAll('.projeto-inter');

  filtros.forEach((filtro) => {
    if (filtro.id != categoria) {
      filtro.classList.remove('ativo');
    } else {
      filtro.classList.add('ativo');
    }
  });

  projetos.forEach((proj) => {
    if (categoria === 'todos') {
      proj.classList.remove('esconde');
    } else if (proj.id != categoria) {
      proj.classList.add('esconde');
    } else {
      proj.classList.remove('esconde');
    }
  });
};
