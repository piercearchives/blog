# 🚀 Introdução e Metodologia do Projeto Blog — ReactJS

> [!abstract] Visão geral  
> O projeto Blog será desenvolvido **do zero**, seguindo um processo semelhante ao utilizado na construção de aplicações reais: primeiro entender o problema e levantar requisitos, depois estruturar a interface e, somente então, partir para a implementação.
> 
> A ideia não é simplesmente "fazer um site em React", mas acompanhar **todo o processo de desenvolvimento de uma aplicação**, desde as primeiras ideias até uma aplicação funcional.

---

## 🎯 Objetivo do projeto

O projeto foi pensado como um **case prático de ReactJS** voltado principalmente para desenvolvedores júnior.

O objetivo é reunir, em uma única aplicação, uma grande quantidade das habilidades técnicas estudadas durante o curso, criando algo próximo do que poderia ser exigido em uma vaga de desenvolvimento.

Entre os conhecimentos que serão aplicados estão:

- HTML e CSS;
    
- SASS/SCSS;
    
- JavaScript;
    
- ReactJS;
    
- componentes;
    
- Hooks;
    
- Context API;
    
- React Router;
    
- consumo de API;
    
- requisições HTTP;
    
- filtros de dados;
    
- autenticação;
    
- JWT;
    
- noções de banco de dados;
    
- JSON Server;
    
- UI Design;
    
- responsividade.
    

> [!important] Ideia principal  
> O projeto não começa no código.
> 
> **Código é uma das últimas etapas do processo.**
> 
> Antes dele existem pesquisa, definição de requisitos, estruturação da aplicação e design.

---

# 🧭 Metodologia do projeto

O desenvolvimento seguirá aproximadamente este fluxo:

```text
Pesquisa
   ↓
Moodboard
   ↓
Levantamento de requisitos
   ↓
Page Map / estrutura da aplicação
   ↓
UI Design
   ↓
Desenvolvimento estático
   ↓
Implementação com ReactJS
   ↓
API + dados
   ↓
Lógica e funcionalidades
   ↓
Aplicação final
```

A ideia dessa metodologia é separar os problemas para que cada etapa tenha um objetivo específico.

---

## 1. 🔎 Pesquisa e Moodboard

Antes de desenvolver, é necessário **tirar as ideias do papel**.

A primeira etapa consiste em pesquisar referências e entender o que será construído.

### O que é analisado?

Tanto aspectos visuais quanto aspectos lógicos:

**Visual**

- aparência da aplicação;
    
- estrutura das páginas;
    
- composição dos elementos;
    
- referências visuais;
    
- possíveis layouts;
    
- componentes da interface.
    

**Lógico**

- quais dados existem;
    
- quais entidades existem;
    
- como essas entidades se relacionam;
    
- quais funcionalidades serão necessárias;
    
- quais informações precisam ser armazenadas;
    
- como a aplicação deverá funcionar.
    

> [!note] Não é apenas "pesquisar imagens"  
> O moodboard e a pesquisa servem para **transformar uma ideia abstrata em uma direção concreta para o projeto**.

---

# 🧩 2. Levantamento de requisitos

O levantamento de requisitos representa a tentativa de responder:

> **"O que esse software precisa fazer?"**

Antes de programar, precisamos entender quais recursos a aplicação terá.

No Blog, por exemplo, existem requisitos como:

- visualizar posts;
    
- pesquisar posts;
    
- filtrar posts;
    
- visualizar posts mais bem avaliados;
    
- visualizar posts mais vistos;
    
- visualizar o post mais recente;
    
- realizar login;
    
- cadastrar posts;
    
- visualizar perfil;
    
- navegar entre páginas;
    
- utilizar uma API para armazenar os dados.
    

Essa etapa também começa a definir quais dados serão necessários.

---

# 🗄️ 3. Noções de banco de dados

O projeto também utilizará conceitos básicos de banco de dados.

O professor destaca principalmente a existência de **entidades** e seus relacionamentos.

No Blog, algumas entidades importantes são:

```text
Usuário
   │
   └── cria ──→ Post
```

Cada post possui informações próprias e está relacionado ao usuário que o criou.

Essas informações posteriormente serão representadas na API.

### API utilizada

Será utilizado o **JSON Server** para criar uma API simulada.

Isso permitirá trabalhar com dados reais durante o desenvolvimento do front-end.

---

# 🎨 4. UI Design

Depois da pesquisa e da definição inicial do projeto, vem a construção da interface.

O projeto possui um arquivo no **Figma** contendo:

- referências;
    
- Style Guide;
    
- grids;
    
- ícones;
    
- wireframes;
    
- telas;
    
- fluxos;
    
- referências visuais.
    

O professor disponibiliza esse arquivo para que seja possível fazer uma cópia local e utilizá-la durante o desenvolvimento.

> [!tip] Por que isso importa?  
> O UI Design não serve apenas para deixar o projeto bonito.
> 
> Ele permite definir **antes do código** como a aplicação deverá ser estruturada visualmente.

### ⚠️ Observação

A etapa de UI Design será relativamente mais curta neste projeto.

Isso acontece porque o foco principal do curso será **o desenvolvimento em código**, mas o processo de design ainda será apresentado para demonstrar como ele participa da construção de uma aplicação real.

---

# 🏗️ 5. Desenvolvimento estático

Depois do design vem uma etapa muito importante:

> **Construir primeiro a interface sem a lógica do React.**

Nesse momento, o projeto será desenvolvido como um **site estático**.

O foco será exclusivamente:

- estrutura;
    
- HTML;
    
- CSS;
    
- layout;
    
- componentes visuais;
    
- responsividade;
    
- estilização.
    

### Por que fazer isso?

Porque existem dois problemas diferentes para resolver:

```text
PROBLEMA 1
Como a aplicação deve ser apresentada?
        ↓
HTML + CSS
```

```text
PROBLEMA 2
Como a aplicação deve funcionar?
        ↓
JavaScript + React
```

Separando os dois, conseguimos trabalhar primeiro na aparência e depois na lógica.

---

## 🧠 Uma forma simples de entender

Imagine um botão de login.

Na etapa estática, podemos construir:

```html
<button class="login-button">
  Entrar
</button>
```

E definir:

```scss
.login-button {
  // aparência
}
```

Nesse momento estamos preocupados com:

- tamanho;
    
- posição;
    
- espaçamento;
    
- tipografia;
    
- cores;
    
- responsividade;
    
- estados visuais.
    

Ainda não precisamos decidir **o que acontece quando o usuário clica**.

Isso será resolvido posteriormente com JavaScript/React.

> [!important] Regra mental  
> **CSS define como algo aparece.**
> 
> **JavaScript/React define como algo se comporta.**

---

# ⚛️ 6. Implementação em ReactJS

Depois que a versão estática estiver pronta, ela será transportada para o React.

A ideia é aproveitar as estruturas e classes CSS já desenvolvidas.

Em vez de misturar:

```text
estilização
+
lógica
+
componentes
+
API
+
estado
```

tudo ao mesmo tempo, o projeto será desenvolvido de forma progressiva.

### Fluxo simplificado

```text
HTML + CSS
   ↓
Interface estática
   ↓
React Components
   ↓
Estado e lógica
   ↓
API
   ↓
Funcionalidades
```

Isso torna o desenvolvimento mais organizado e didático.

---

# 🌐 7. Funcionalidades previstas

O Blog terá várias funcionalidades para exercitar diferentes conceitos de front-end.

## 🏠 Home

A página inicial apresentará:

- Hero;
    
- posts mais bem avaliados;
    
- posts mais vistos;
    
- post mais recente;
    
- busca;
    
- footer.
    

---

## ⭐ Posts mais bem avaliados

Os posts possuem uma avaliação de estrelas.

A aplicação deverá conseguir identificar os posts com melhores avaliações e exibi-los.

Isso servirá para praticar:

- obtenção de dados da API;
    
- filtragem;
    
- manipulação de arrays;
    
- renderização dos resultados.
    

---

## 👁️ Posts mais vistos

Cada post também possui uma quantidade de visualizações.

A aplicação poderá selecionar os posts com maior número de views.

Mais uma vez:

```text
API
 ↓
Dados dos posts
 ↓
Filtro
 ↓
Resultado
 ↓
Interface
```

---

## 🔎 Busca

A aplicação terá um sistema de pesquisa.

O usuário poderá procurar palavras relacionadas aos posts.

Por exemplo:

```text
tecnologia
cinema
airpods
lançamento
```

A aplicação deverá encontrar posts relacionados ao termo pesquisado.

Isso permitirá praticar a manipulação e filtragem de arrays no front-end.

> [!note] Conceito importante  
> Um front-end não apenas "mostra dados".
> 
> Ele também pode **processar, filtrar, organizar e transformar os dados recebidos da API antes de apresentá-los ao usuário.**

---

# 🔐 Login

Também será implementado um sistema simples de autenticação.

O projeto trabalhará conceitos relacionados a:

- login;
    
- usuários;
    
- senha;
    
- JWT;
    
- Web Token;
    
- autenticação.
    

### Uma consideração importante sobre segurança

Durante a demonstração, o projeto inicialmente diferencia mensagens como:

```text
Usuário não encontrado
```

e:

```text
Senha incorreta
```

Porém, isso **não é uma boa prática em sistemas reais**, pois permite descobrir se determinado usuário existe.

Uma mensagem mais segura seria algo como:

```text
Usuário ou senha inválidos.
```

> [!warning] Segurança  
> Informar exatamente qual parte do login falhou pode facilitar ataques de enumeração de usuários.
> 
> Em uma aplicação real, é preferível não revelar se o problema foi o usuário ou a senha.

---

# 👤 Perfil e criação de posts

Depois de autenticado, o usuário poderá:

- acessar seu perfil;
    
- cadastrar um novo post;
    
- visualizar seu nome associado ao post;
    
- sair da aplicação.
    

Isso introduz a relação:

```text
Usuário
   ↓
Autenticação
   ↓
Área autenticada
   ↓
Criação de Post
```

---

# 📰 Página do Post

Cada post terá uma página própria contendo informações como:

- título;
    
- autor;
    
- data;
    
- tempo estimado de leitura;
    
- conteúdo;
    
- informações relacionadas ao post.
    

Isso também ajudará a trabalhar o sistema de rotas da aplicação.

---

# 🧭 Outras páginas

O projeto também terá páginas como:

- Home;
    
- About / Sobre;
    
- Contato;
    
- Login;
    
- Perfil;
    
- Post individual.
    

Consequentemente, será necessário implementar navegação entre diferentes páginas utilizando **React Router**.

---

# 🛠️ Tecnologias e conceitos previstos

|Área|Conceitos|
|---|---|
|🎨 Estilo|CSS / SASS|
|⚡ JavaScript|Arrays, filtros e manipulação de dados|
|⚛️ React|Componentes, Hooks e estado|
|🔄 Hooks|`useState`, `useEffect` e outros|
|🌐 API|Requisições HTTP|
|🗄️ Dados|JSON Server|
|🔐 Autenticação|JWT / Web Token|
|🧠 Estado global|Context API / `useContext`|
|🧭 Rotas|React Router v6|
|📱 UI|Responsividade e componentes|
|🧩 Design|Pesquisa, Moodboard, Wireframes e UI Design|

---

# 🧠 Conceitos que aparecerão no projeto

## `useState`

Será utilizado para trabalhar **estado** dentro dos componentes.

Exemplo conceitual:

```text
Estado
 ↓
valor muda
 ↓
React percebe a mudança
 ↓
componente é atualizado
```

---

## `useEffect`

Será utilizado para lidar com efeitos que acontecem relacionados ao ciclo de vida/renderização do componente.

Um dos usos importantes no projeto será trabalhar com dados externos, como requisições para a API.

---

## Context API

A Context API será utilizada para compartilhar informações entre diferentes partes da aplicação sem precisar passar essas informações manualmente por vários componentes.

Sem Context:

```text
App
 ↓
Componente A
 ↓
Componente B
 ↓
Componente C
```

Com Context:

```text
        Context
       ↙   ↓   ↘
      A    B    C
```

> [!note] Ideia central  
> A Context API ajuda quando determinadas informações precisam estar disponíveis em diferentes partes da aplicação.

---

## 🔄 Requisições HTTP

O projeto trabalhará os quatro principais métodos apresentados na aula:

```text
GET     → obter dados
POST    → criar dados
PUT     → atualizar dados
DELETE  → remover dados
```

Esses métodos serão utilizados na comunicação com a API.

---

# 🧪 O que este projeto pretende ensinar

Mais do que ensinar React isoladamente, o projeto pretende mostrar **como várias tecnologias se encaixam em uma aplicação completa**.

A visão geral é:

```text
             PROJETO BLOG
                  │
        ┌─────────┴─────────┐
        ↓                   ↓
     DESIGN              LÓGICA
        │                   │
   UI / Wireframe       ReactJS
   Moodboard            Hooks
   Responsividade       Context API
        │               Router
        │                   │
        └─────────┬─────────┘
                  ↓
                 API
                  │
             JSON Server
                  │
                  ↓
             Dados reais
                  │
                  ↓
          Aplicação funcional
```

---

# 💡 O principal aprendizado desta aula

A maior ideia desta aula **não é um código específico**.

É entender que o desenvolvimento de software possui um **processo**.

Uma aplicação não deveria ser pensada simplesmente como:

> "Vou abrir o VS Code e começar a programar."

O processo apresentado é mais próximo de:

> **Entender → pesquisar → planejar → projetar → construir → implementar → conectar → testar**

Isso permite reduzir a quantidade de decisões que precisam ser tomadas simultaneamente.

---

# 🔗 Relação com o desenvolvimento profissional

Esse workflow também é importante porque aproxima o projeto de uma situação profissional.

Em uma aplicação real, normalmente existem perguntas que precisam ser respondidas antes da implementação:

- O que estamos construindo?
    
- Para quem?
    
- Quais funcionalidades são necessárias?
    
- Quais dados existem?
    
- Como esses dados se relacionam?
    
- Como a interface será organizada?
    
- Quais páginas existem?
    
- Como o usuário navegará?
    
- Como o sistema se comunicará com o back-end?
    

O Blog será justamente uma oportunidade para acompanhar esse processo de ponta a ponta.

---

# 📌 Resumo da aula

> [!summary] Em poucas palavras  
> O projeto Blog será desenvolvido **do absoluto zero**, seguindo uma metodologia estruturada.
> 
> Primeiro serão realizadas **pesquisa, moodboard e levantamento de requisitos**. Depois será elaborado o **UI Design**. Em seguida, será criada uma **versão estática e responsiva utilizando HTML/CSS**, permitindo separar a preocupação visual da lógica.
> 
> Só depois essa interface será transformada em uma aplicação **ReactJS**, adicionando componentes, estado, hooks, rotas, API, filtros, autenticação e demais funcionalidades.
> 
> O objetivo final é utilizar o projeto como um **grande exercício prático de desenvolvimento front-end**, reunindo os principais conhecimentos estudados no curso.

---

# 🧠 Checklist de domínio

-  Entendo por que o projeto não começa diretamente no React.
    
-  Sei o que é um levantamento de requisitos.
    
-  Entendo para que serve um moodboard.
    
-  Sei diferenciar UI Design de implementação.
    
-  Entendo por que o professor cria primeiro uma versão estática.
    
-  Sei diferenciar **estética** de **lógica**.
    
-  Entendo, em linhas gerais, o papel da API.
    
-  Sei para que servem GET, POST, PUT e DELETE.
    
-  Entendo a finalidade geral de `useState` e `useEffect`.
    
-  Entendo por que uma aplicação pode utilizar Context API.
    
-  Entendo para que serve o React Router.
    
-  Consigo explicar o objetivo geral do projeto Blog.
    
