let arquivoJSON = '../db/projetos.json';
let requisicao = new XMLHttpRequest();

requisicao.open('GET', arquivoJSON);
requisicao.responseType = 'json';
requisicao.send();

requisicao.onload = () => {
  let projetos = requisicao.response;
  criaCards(projetos);
};

const divCartoes = document.querySelector('.cartoes')

const criaCards = (projetos) => {

  const div = document.createElement('div');
  div.className = 'col-sm-12 col-md-4 my-4 d-flex align-items-stretch';
  div.id = projetos.categoria;
  divCartoes.append(div);
  
  const divCard = document.createElement('div');
  divCard.classList.add('card');
  div.append(divCard);
  
  const img = document.createElement('img');
  img.classList.add('card-img-top');
  img.setAttribute('src', `../imagens/${projetos.imagem}`);
  divCard.append(img);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  divCard.append(cardBody);
  
  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-tittle');
  const titulo = document.createTextNode(projetos.titulo);
  cardTitle.append(titulo);
  cardBody.append(cardTitle);

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  const descricaoBreve = document.createTextNode(projetos.descricaoBreve);
  cardText.append(descricaoBreve);
  cardBody.append(cardText);

  const link = document.createElement('a');
  link.setAttribute('href', `./projetoExemplo.html?id=${projetos.id}`);
  link.className = 'btn btn-primary';
  const textoLink = document.createTextNode('Veja o projeto');
  link.append(textoLink);
  cardBody.append(link);
  
};