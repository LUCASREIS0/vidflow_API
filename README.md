
---

## Projeto VidFlow 💻

Este projeto é voltado para JavaScript, focado no desenvolvimento e aplicação dos meus conhecimentos. O objetivo principal é trabalhar com a manipulação e consumo de dados de uma API.

### Descrição 📝

O VidFlow é uma plataforma de Compartilhamento de vídeos que permite aos usuários visualizar e filtrar vídeos por categoria. Projeto construído  usando JavaScript. Utilizei a Fake JSON Server como uma API de exemplo para simular o consumo de dados.

### Funcionalidades Implementadas 🔎

- Consumo de uma API com JavaScript usando `fetch` e `async/await`.
- Implementação de filtros dinâmicos para os dados da API, permitindo a busca por título e filtragem por categoria.
- Utilização de `async/await` para criar funções assíncronas e lidar com requisições de API de forma assíncrona.
- Tratamento de erros retornados pela API, utilizando `try/catch` para capturar exceções e fornecer feedback ao usuário.

### Instruções de Uso ⚒️

Para executar o projeto localmente, siga estas etapas:

1. Clone o repositório do projeto para sua máquina local.
2. Certifique-se de ter o Node.js instalado em seu ambiente.
3. Instale as dependências do projeto executando `npm install` na raiz do projeto.
4. Inicialize o Fake JSON Server com o arquivo `videos.json` usando o seguinte comando:

   ```bash
   json-server --watch backend/videos.json
   ```

   Isso iniciará uma API REST falsa com base nos dados do arquivo `videos.json`.

5. Abra o arquivo `index.html` em um navegador da web para visualizar a aplicação.

### Tecnologias Utilizadas 🌐

- JavaScript
- HTML5
- CSS3
- Fake JSON Server
- VSCode (Editor utilizado no curso)

### Comentários no Código 📝

Gostaria de destacar que todo o código JavaScript está sendo comentado, pois são bastante úteis para mim enquanto estudo. Mesmo fazendo anotações externas, é mais prático para mim aprender e memorizar as funções e métodos que estão sendo utilizados.

Caso queira ver o código sem os comentários, basta baixar o arquivo e removê-los por si mesmo. 😄

Benefícios dos Comentários

- **Legibilidade:** Os comentários tornam o código mais fácil de entender para outros desenvolvedores (e para mim mesmo no futuro) ao explicar o propósito e a lógica por trás de diferentes partes do código. 👨‍💻

- **Documentação Rápida:** Os comentários fornecem uma documentação rápida sobre como o código funciona e por que certas decisões foram tomadas. 📝

- **Facilita a Manutenção:** Comentários claros ajudam na depuração e na manutenção do código, especialmente em partes complexas ou críticas. 🛠️

Obrigado por acompanhar o meu progresso e crescimento em desenvolvimento front-end!

---
