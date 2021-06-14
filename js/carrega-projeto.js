// let arquivoJSON = '../db/projetos.json'; // Local
let arquivoJSON = 'https://diegoflorenca.github.io/inter/db/projetos.json'; // GitHub
let requisicao = new XMLHttpRequest();

requisicao.open('GET', arquivoJSON);
requisicao.responseType = 'json';
requisicao.send();

requisicao.onload = () => {
  let projetos = requisicao.response;
  carregaProjeto(projetos);
};

const carregaProjeto = (projetos) => {
  const stringBarraEndereco = window.location.search;
  const parametroURL = new URLSearchParams(stringBarraEndereco);
  const id = parametroURL.get('id') - 1;

  console.log(projetos[id].titulo);
};
