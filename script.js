// Seleciona o elemento .videos__container e atribui a containerVideos
const containerVideos = document.querySelector(".videos__container");

// Faz uma requisição usando fetch para obter os vídeos da URL http://localhost:3000/videos
const api = fetch("http://localhost:3000/videos")

    // Converte a resposta em JSON quando a promessa é resolvida
    .then(res => res.json())

    // Processa os vídeos obtidos e adiciona cada um como um item de lista (li) ao elemento ul (containerVideos)
    .then((videos) => 
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
    )

    // Captura erros, se houver, e exibe uma mensagem de erro no containerVideos
    .catch((error) => {
        containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos: ${error}</p>`;
    });
