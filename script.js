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

const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa(){
    const videos = document.querySelectorAll(".videos__item");

    if(barraDePesquisa.value != ""){
         else {
         
         }
    }
}