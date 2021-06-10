let arquivoJSON = '../db/projetos.json'; // Local
// let arquivoJSON = 'https://diegoflorenca.github.io/inter/db/projetos.json'; // GitHub
let requisicao = new XMLHttpRequest();

requisicao.open('GET', arquivoJSON);
requisicao.responseType = 'json';
requisicao.send();

requisicao.onload = () => {
  let projetos = requisicao.response;
  criaCards(projetos);
};

const divCartoes = document.querySelector('.cartoes');

const criaCards = (projetos) => {
  projetos.forEach((projeto) => {
    const div = document.createElement('div');
    div.className = 'col-sm-12 col-md-4 my-4 d-flex align-items-stretch';
    div.id = projeto.categoria;
    divCartoes.append(div);

    const divCard = document.createElement('div');
    divCard.classList.add('card');
    div.append(divCard);

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src', `./imagens/${projeto.imagem}`);
    divCard.append(img);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    divCard.append(cardBody);

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-tittle');
    const titulo = document.createTextNode(projeto.titulo);
    cardTitle.append(titulo);
    cardBody.append(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    const descricaoBreve = document.createTextNode(projeto.descricaoBreve);
    cardText.append(descricaoBreve);
    cardBody.append(cardText);

    const link = document.createElement('a');
    link.setAttribute('href', `./projetoExemplo.html?id=${projeto.id}`);
    link.className = 'btn btn-primary';
    const textoLink = document.createTextNode('Veja o projeto');
    link.append(textoLink);
    cardBody.append(link);
  });
};
