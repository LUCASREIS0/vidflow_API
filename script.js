// Seleciona o elemento .videos__container e atribui a containerVideos 
const containerVideos = document.querySelector(".videos__container");

// A palavra-chave 'async' define uma função como assíncrona em JavaScript.
async function buscarEMostrarVideos(){

    // Para trabalhar com de tratamento de erros, usaremos um recurso chamado Try/Catch, que basicamente serão dois blocos.
    //Try (Tente): O bloco try contém o código que pode gerar uma exceção. Se ocorrer uma exceção dentro deste bloco, o controle do programa será transferido imediatamente para o bloco catch.
    try{

        // Faz uma requisição usando fetch para obter os vídeos da URL http://localhost:3000/videos
        //Esse await significa aguardar. Assim, ele aguardará que esta busca seja realizada para que o código desta função assíncrona continue sendo executado.
        const busca = await fetch("http://localhost:3000/videos");

            // await response.json() espera que esta Promise seja resolvida antes de prosseguir. O JSON será atribuído à variável videos, que será utilizada posteriormente no código.
            const videos = await busca.json();

                // Para cada vídeo retornado, cria um item de lista HTML com as informações do vídeo.containerVideos.innerHTML
                videos.forEach((video) => {

                    // tratamento de erros personalizado. se a categoria for vazia, usaremos o throw new Error() tradução => "lançar novo Error()". Entre os parênteses, exibiremos uma mensagem, que é "Vídeo sem categoria".
                    if(video.categoria == ""){
                        throw new Error('Vídeo não tem categoria');
                    }

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
    //Catch (Capturar): O bloco catch é usado para lidar com a exceção que ocorreu no bloco try. Ele especifica o código que será executado para lidar com a exceção. O bloco catch recebe um parâmetro que representa o objeto de erro lançado.     
    } catch(error){
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`
    }   
}

// Chamando a função assíncrona buscarEMostrarVideos().
// Se não for chamada, ela não será executada, pois foi apenas declarada.
buscarEMostrarVideos();



// Seleciona o elemento .pesquisar__input e atribui a barraDePesquisa
const barraDePesquisa = document.querySelector(".pesquisar__input");

// Adiciona um evento de input à barra de pesquisa, chamando a função filtrarPesquisa quando houver alterações
barraDePesquisa.addEventListener("input", filtrarPesquisa);

// Definição da função filtrarPesquisa
function filtrarPesquisa() {
    // Seleciona todos os elementos com a classe .videos__item e atribui a videos
    const videos = document.querySelectorAll(".videos__item");

    // Verifica se o valor da barra de pesquisa não está vazio
    if (barraDePesquisa.value !== "") {
       
        // O loop 'for (let video of videos)' é utilizado para iterar sobre os elementos de uma coleção, como um array (ou uma lista de elementos similares). 
        // Aqui, 'videos' é uma coleção que contém elementos sobre os quais queremos iterar, e a variável 'video' representa cada elemento individual da coleção durante cada iteração do loop.
        // A palavra-chave 'of' é utilizada para indicar que estamos percorrendo os elementos da coleção 'videos', atribuindo cada elemento à variável 'video' a cada iteração.
        // Este tipo de loop é comumente usado com arrays em JavaScript para realizar operações em cada elemento da lista.
        // A variável video representa um elemento HTML da lista videos.
        for (let video of videos) {
            // Obtém o texto do título do vídeo e converte para minúsculas
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            // Obtém o valor da barra de pesquisa e converte para minúsculas
            let valorFiltro = barraDePesquisa.value.toLowerCase();

            // Verifica se o título do vídeo contém o valor da barra de pesquisa
            if (!titulo.includes(valorFiltro)) {
                // Se não contém, oculta o vídeo
                video.style.display = "none";
            } else {
                // Se contém, exibe o vídeo
                video.style.display = "block";
            }
        }
    } else {
        // Se a barra de pesquisa estiver vazia, exibe todos os vídeos
        for (let video of videos) {
            video.style.display = "block";
        }
    }
}
