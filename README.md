# Blog

<p align="center">
  <strong>Conteúdo, design e tecnologia em uma experiência editorial feita com React.</strong>
</p>

<p align="center">
  <a href="#sobre-o-projeto">Sobre</a> •
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#como-executar">Como executar</a> •
  <a href="#estrutura">Estrutura</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/React%20Router-7-ca4245?style=flat-square&logo=reactrouter&logoColor=white" alt="React Router 7" />
  <img src="https://img.shields.io/badge/Axios-API%20client-5a29e4?style=flat-square&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/license-privado-lightgrey?style=flat-square" alt="Projeto privado" />
</p>

## Sobre o projeto

Este projeto é um blog experimental desenvolvido durante o curso de React da [Frontpush](https://frontpush.com.br/), com o objetivo de praticar a construção de uma aplicação React completa, incluindo navegação entre páginas, consumo de dados, busca e composição de componentes reutilizáveis.

O conteúdo é servido por uma API local baseada no arquivo `db.json`. A interface reúne artigos sobre tecnologia, cinema e games, além de páginas institucionais e uma área de perfil para explorar a experiência de autoria.

## Funcionalidades

- Página inicial com hero, posts mais bem avaliados e conteúdos mais visitados.
- Leitura de post individual com informações do autor e conteúdo completo.
- Busca de artigos por palavra-chave.
- Navegação com React Router e página personalizada para rotas inexistentes.
- Menu responsivo com navegação mobile.
- Páginas de Sobre, Contato, Login e Perfil.
- Componentes visuais para cards, banner, hero, autores, cabeçalho e rodapé.
- Dados mockados de posts e usuários consumidos com Axios.

> **Estado atual:** login, envio do formulário de contato e criação de posts ainda são interfaces preparadas para evolução. Nesta versão, essas ações não persistem dados nem fazem autenticação real.

## Tecnologias

- [React](https://react.dev/) 19
- [React Router](https://reactrouter.com/) 7
- [Axios](https://axios-http.com/) para requisições HTTP
- [Create React App](https://create-react-app.dev/) para desenvolvimento e build
- Sass e CSS para estilos e organização visual
- JSON Server como API mock local
- React Testing Library e Jest para testes

## Como executar

### Pré-requisitos

- Node.js e npm instalados
- Uma porta livre em `3000` e `4000`

### Instalação

```bash
git clone <url-do-repositorio>
cd blog
npm install
```

### Subir a API local

Em um terminal, execute o JSON Server na raiz do projeto:

```bash
npx json-server --watch db.json --port 4000
```

A API ficará disponível em `http://localhost:4000`.

### Subir a aplicação

Em outro terminal:

```bash
npm start
```

Acesse `http://localhost:3000` no navegador.

## Scripts disponíveis

| Comando                | Descrição                                      |
| ---------------------- | ---------------------------------------------- |
| `npm start`            | Inicia o servidor de desenvolvimento.          |
| `npm test`             | Executa os testes no modo interativo.          |
| `npm run build`        | Gera a versão de produção em `build/`.         |
| `npm run format`       | Formata JavaScript, CSS e Sass com Prettier.   |
| `npm run format:check` | Verifica a formatação sem alterar os arquivos. |

## Rotas

| Rota                   | Página                                    |
| ---------------------- | ----------------------------------------- |
| `/`                    | Home com destaques e posts mais visitados |
| `/post/:idPost`        | Detalhes de um artigo                     |
| `/search/:word_search` | Resultados de busca                       |
| `/about`               | Sobre o projeto                           |
| `/contact`             | Formulário de contato                     |
| `/login`               | Tela de login                             |
| `/profile`             | Perfil e formulário de novo post          |
| `*`                    | Página 404                                |

## Estrutura

```text
src/
├── App.js              # Entrada da aplicação
├── paths.js            # Rotas do React Router
├── services/api.js     # Cliente Axios da API local
├── pages/
│   ├── Home/            # Hero, banner, cards e destaques
│   ├── Post/            # Leitura de artigo
│   ├── Search/          # Busca e resultados
│   ├── Header/          # Navegação, busca e menu mobile
│   ├── Footer/          # Rodapé
│   ├── About/           # Página institucional
│   ├── Contact/         # Contato
│   ├── Login/           # Login
│   ├── Profile/         # Perfil e criação visual de post
│   └── NotFound/        # Página 404
├── css/                 # Estilos globais, Sass e parciais
├── img/                 # Imagens locais
└── svg/                 # Logos e ícones
```

O arquivo `db.json` possui as coleções `posts` e `user`, usadas como fonte de dados pela aplicação. O cliente HTTP está configurado em `src/services/api.js` com `http://localhost:4000` como base URL.

## Próximos passos

- Implementar autenticação e proteção da rota de perfil.
- Conectar os formulários de login, contato e criação de posts à API.
- Adicionar estados de carregamento e mensagens de erro nas requisições.
- Criar testes para navegação, busca e renderização dos artigos.
- Configurar variáveis de ambiente para a URL da API em diferentes ambientes.

## Créditos

Este projeto foi desenvolvido como parte dos estudos no curso de React da [Frontpush](https://frontpush.com.br/). Os créditos reconhecem a formação e a inspiração técnica; a implementação, os conteúdos e as adaptações presentes neste repositório são de responsabilidade do autor.

## Autor

Desenvolvido por [Pierce Archives](https://github.com/piercearchives).
