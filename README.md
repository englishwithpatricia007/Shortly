# Meus Links

Projeto React para encurtar e gerenciar links pessoais.

## Estado Atual

- **Frontend pronto:** Interface para encurtar links, exibir links salvos e excluir links.
- **Backend NÃO implementado:** O encurtamento real depende de uma API externa (endpoint `/shorten`). Caso a API não responda corretamente, será exibida a mensagem "Parece que algo deu errado!".
- **Links salvos localmente:** Os links encurtados são armazenados no `localStorage` do navegador.
- **Lista de links:** Página "Meus Links" exibe os links salvos, com opção de exclusão.
- **Menu fixo:** Links para LinkedIn, GitHub, YouTube, Instagram e Cartão de apresentação.
- **Navegação:** Utiliza React Router.

## Tecnologias Utilizadas

- React 19
- React Router DOM 7
- React Icons
- CSS Modules
- Axios
- API externa - Bitly

## Como rodar o projeto

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor de desenvolvimento
   ```sh
   npm start
   ```

Observações
O projeto está em desenvolvimento inicial.
Não há backend próprio; o encurtamento depende de uma API externa.
Os links exibidos são salvos apenas no navegador do usuário.
Caso a API de encurtamento não funcione, a aplicação exibirá um alerta de erro.

# Create React App

This directory is a brief example of a [Create React App](https://github.com/facebook/create-react-app) site that can be deployed to Vercel with zero configuration.

## Deploy Your Own

Deploy your own Create React App project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/create-react-app&template=create-react-app)

_Live Example: https://create-react-template.vercel.app/_

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
