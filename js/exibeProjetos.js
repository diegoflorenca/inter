const projetosAnimacao = document.querySelectorAll('#animacao');
const projetosMotion = document.querySelectorAll('#motion');
const projetosOutros = document.querySelectorAll('#outro');

const filtraCategoria = (categoriaSelecionada) => {

  const apagaCategoria = (categoria) => {
    categoria.forEach(projeto => {
      projeto.classList.add('esconde');
    });
  }

  const mostraCategoria = (categoria) => {
    const projetosCategoria = document.querySelectorAll(`#${categoria}`);
    projetosCategoria.forEach(projeto => {
      projeto.classList.remove('esconde');
    });
  }

  if (categoriaSelecionada === 'todos') {
    mostraCategoria('animacao');
    mostraCategoria('motion');
    mostraCategoria('outros');
    return
  }

  apagaCategoria(projetosAnimacao);
  apagaCategoria(projetosMotion);
  apagaCategoria(projetosOutros);
  mostraCategoria(categoriaSelecionada);

}
