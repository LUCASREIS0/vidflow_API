// Seleciona o elemento .videos__container e atribui a containerVideos //async await = (espera assíncrona). 
const containerVideos = document.querySelector(".videos__container");

//esse async está simplesmente indicando no JavaScript que vamos usar código assíncrono dentro dessa função. 
async function buscarEMostrarVideos(){

    // Faz uma requisição usando fetch para obter os vídeos da URL http://localhost:3000/videos
    //Esse await significa aguardar. Assim, ele aguardará que esta busca seja realizada para que o código desta função assíncrona continue sendo executado.
    const busca = await fetch("http://localhost:3000/videos");

        // Converte a resposta em JSON quando a promessa é resolvida
        const videos = await busca.json();

         // Para cada vídeo retornado, cria um item de lista HTML com as informações do vídeo.containerVideos.innerHTML
            videos.forEach((video) => {
                //  O operador += é usado para adicionar (concatenar) mais conteúdo HTML ao conteúdo existente dentro desse elemento.
                containerVideos.innerHTML += ` 
                <li class="videos__item">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="descricao-video">${video.descricao}</p>
                    </div>
                </li>
                `;
            })
        
}

// chamando a funcion asyns se nao nao será executado,pois ela foi domente declarada.
buscarEMostrarVideos();