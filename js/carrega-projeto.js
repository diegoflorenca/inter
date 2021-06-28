//let arquivoJSON = '../db/projetos.json'; // Local
let arquivoJSON = 'https://diegoflorenca.github.io/inter/db/projetos.json'; // GitHub
let requisicao = new XMLHttpRequest();

requisicao.open('GET', arquivoJSON);
requisicao.responseType = 'json';
requisicao.send();

requisicao.onload = () => {
  let projetos = requisicao.response;

  const stringBarraEndereco = window.location.search;
  const parametroURL = new URLSearchParams(stringBarraEndereco);
  const id = parametroURL.get('id') - 1;

  carregaProjeto(projetos[id]);
};

const carregaProjeto = (projeto) => {
  const categoriaEl = document.querySelector('#tipo-trabalho');
  const categoriaTxt = document.createTextNode(projeto.tipoTrabalho);
  categoriaEl.append(categoriaTxt);

  const tituloEl = document.querySelector('#titulo');
  const tituloTxt = document.createTextNode(projeto.titulo);
  tituloEl.append(tituloTxt);

  const videoEl = document.querySelector('#video');
  videoEl.className = 'embed-responsive embed-responsive-16by9';
  const iframeEl = document.createElement('iframe');
  iframeEl.classList.add('embed-responsive-item');
  iframeEl.setAttribute('src', projeto.videoLink);
  iframeEl.setAttribute('allowfullscreen', '');
  videoEl.append(iframeEl);

  const descricaoCompletaEl = document.querySelector('#descricao-completa');
  const descricaoCompletaTxt = document.createTextNode(
    projeto.descricaoCompleta
  );
  descricaoCompletaEl.append(descricaoCompletaTxt);

  const UlEl = document.querySelector('#integrantes');

  projeto.integrantes.map((integrante) => {
    const liEl = document.createElement('li');
    liEl.classList.add('list-group-item');

    const spanEl = document.createElement('span');
    spanEl.className = 'badge badge-primary badge-pill';
    const spanTxt = document.createTextNode(integrante.funcao);
    spanEl.append(spanTxt);
    liEl.append(spanEl);

    const pEl = document.createElement('p');
    pEl.classList.add('equipe');

    let todasRedes = '';

    if (integrante.redes.instagram) {
      todasRedes += `<a class='redes-icons' href='https://www.instagram.com/${integrante.redes.instagram}'>
      <img src='./imagens/icons/instagram-square-brands.svg'
      alt='Logo do instagram'>
      </a>`;
    }

    if (integrante.redes.facebook) {
      todasRedes += `<a class='redes-icons' href='https://www.facebook.com/${integrante.redes.facebook}'>
      <img src='./imagens/icons/facebook-square-brands.svg'
      alt='Logo do facebook'>
      </a>`;
    }

    if (integrante.redes.twitter) {
      todasRedes += `<a class='redes-icons' href='https://www.twitter.com/${integrante.redes.twitter}'>
      <img src='./imagens/icons/twitter-square-brands.svg'
      alt='Logo do twitter'>
      </a>`;
    }

    if (integrante.redes.youtube) {
      todasRedes += `<a class='redes-icons' href='https://www.youtube.com/${integrante.redes.youtube}'>
      <img src='../imagens/icons/youtube-square-brands.svg'
      alt='Logo do youtube'>
      </a>`;
    }

    pEl.innerHTML = `${integrante.nome} ${todasRedes}`;

    liEl.append(pEl);

    UlEl.append(liEl);
  });
};
