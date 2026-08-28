Codificação do Header + Responsividade + Sass
🎯 Objetivo da aula

Nesta aula começa a implementação real da interface.

O foco foi construir o header responsivo, trabalhando principalmente:

HTML semântico
Sass/SCSS e partials
Flexbox
position: relative + absolute
pseudo-elementos ::before e ::after
transform: translate
Media queries
Componentes desktop/mobile
Área clicável de links
Estilização de inputs
Botões
Ícones SVG
Classes utilitárias de layout e spacing
1. Sass: Partial

Uma regra importante apresentada na aula:

_file.scss

Arquivos Sass que começam com _ são chamados de partials.

Exemplo:

scss/
├── _layout.scss
├── _typography.scss
├── _buttons.scss
└── style.scss

A ideia é que esses arquivos menores sejam utilizados pelo Sass e não sejam compilados individualmente em CSS.

O objetivo é terminar com algo como:

style.css

em vez de:

layout.css
typography.css
buttons.css
...
📌 Para memorizar

Partial = arquivo Sass auxiliar que começa com _ e normalmente não gera um CSS próprio.

2. Preparação dos assets

As imagens foram previamente exportadas do Figma e otimizadas.

Exemplos:

blog-logo.svg
blog-logo-2.svg
favicon.svg
icon-search.svg
...

A aula também reforça uma prática importante:

não jogar imagens pesadas diretamente no projeto.

Fluxo:

Figma
 ↓
Exportação
 ↓
Otimização
 ↓
Projeto

Isso reduz o peso dos assets e melhora performance.

3. HTML semântico

O primeiro elemento estrutural criado foi:

<header>

Dentro dele existe a navegação:

<header>
    <nav>
        ...
    </nav>
</header>

A ideia é utilizar elementos HTML de acordo com sua função.

Por exemplo:

<header>
<nav>
<ul>
<li>
<a>
<form>
<input>
<button>

em vez de fazer tudo com div.

4. Estrutura do Header

A estrutura conceitual criada ficou aproximadamente assim:

<header>
    <nav>
        <div class="logo">
            <a href="#">
                <img src="..." alt="Blog">
            </a>
        </div>

        <ul class="menu">
            <li>
                <a href="#">Categorias</a>
            </li>

            <li>
                <a href="#">Sobre</a>
            </li>

            <li>
                <a href="#">Contato</a>
            </li>
        </ul>
    </nav>

    <div class="bx">
        ...
    </div>

    <div>
        <div class="search">
            <form>
                <input
                    type="text"
                    name="search"
                    placeholder="Buscar"
                />

                <button class="btn-search">
                    ...
                </button>
            </form>
        </div>

        <div class="cta-desktop">
            <a class="btn" href="#">Login</a>
        </div>

        <div class="cta-mobile">
            <a class="link" href="#">Login</a>
        </div>
    </div>
</header>

A estrutura ainda seria refinada posteriormente.

5. Desktop × Mobile

O conceito principal da responsividade do header é:

Desktop
Logo
Categorias
Sobre
Contato
       Busca
       Login
Mobile
Logo
              ☰
              Login

Ou seja, alguns elementos simplesmente deixam de existir visualmente.

Desktop → Mobile

Desaparecem:

Categorias
Sobre
Contato
Busca
Login desktop

Aparecem:

Hambúrguer
Login mobile

Isso é feito através de CSS responsivo.

6. Flexbox no Header

O header possui três filhos diretos:

header
├── nav
├── bx
└── área direita

Então:

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
O que cada propriedade faz?
display: flex

Coloca os filhos em um contexto Flexbox.

[nav] [bx] [área direita]
justify-content: space-between

Distribui os elementos horizontalmente.

[nav]          [bx]          [direita]
align-items: center

Alinha verticalmente os elementos.

7. Logo

Foi definido um limite para evitar que a logo fique gigante:

.logo {
    max-width: 64px;
    min-width: 48px;
}

A ideia é trabalhar com limites em vez de simplesmente deixar a imagem assumir qualquer tamanho.

8. Criando o menu hambúrguer

O .bx representa o botão hambúrguer.

Primeiro:

.bx {
    position: relative;
    width: 40px;
    height: 40px;
}

Também foi utilizado:

cursor: pointer;

para indicar visualmente que o elemento é interativo.

9. position: relative + absolute

Esse é um dos conceitos mais importantes da aula.

O pai:

.bx {
    position: relative;
}

Os pseudo-elementos:

.bx::before {
    position: absolute;
}

.bx::after {
    position: absolute;
}

Isso cria um sistema de referência.

Pense assim:
.bx
┌──────────────┐
│              │
│      ───     │
│              │
└──────────────┘

O absolute procura o ancestral posicionado mais próximo.

Por isso:

.bx {
    position: relative;
}

é importante.

10. Pseudo-elementos

O hambúrguer é construído utilizando:

::before
::after

Cada um representa uma barrinha.

Exemplo conceitual:

.bx::before {
    content: "";
}

.bx::after {
    content: "";
}

E ambos recebem dimensões e posicionamento.

11. content: ""

Pseudo-elementos precisam de:

content: "";

para serem gerados visualmente.

Sem isso:

.bx::before {
    width: 70%;
}

não vai produzir o elemento esperado.

12. Posicionamento dos pseudo-elementos

Foi utilizado:

position: absolute;

com:

top: ...
left: ...

Por exemplo:

top: 35%;
left: 40%;
13. O ponto de referência do absolute

Esse foi um dos momentos mais conceituais da aula.

Quando fazemos:

top: 35%;
left: 40%;

o navegador posiciona o canto do elemento usando aquela referência.

Por isso ele pode parecer desalinhado.

A solução apresentada foi:

transform: translate(-50%, -50%);

Isso desloca o próprio elemento em metade da sua largura/altura.

Visualmente:

antes

      ┌─────────┐
      │         │
      └─────────┘
      ↑
   referência

Depois:

          ┌─────────┐
          │         │
          └─────────┘
             ↑
          centro
📌 Conceito para guardar
left: 50%;
transform: translateX(-50%);

é um padrão clássico para centralizar horizontalmente um elemento absoluto.

E:

top: 50%;
transform: translate(-50%, -50%);

centraliza nos dois eixos.

14. Construção visual do hambúrguer

As barras receberam:

width: 70%;
height: 2px;
background-color: white;
border-radius: 2px;

Depois:

top
left
transform

foram utilizados para posicioná-las.

A ideia é que futuramente o JavaScript altere esse estado:

☰
 ↓
X
15. Menu com Flexbox

O nav possui:

logo
menu

Então:

nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

Resultado:

[LOGO] [Categorias] [Sobre] [Contato]
16. Removendo as bolinhas da lista

Como o menu utiliza:

<ul>

o navegador coloca marcadores automaticamente.

Para remover:

.menu {
    list-style: none;
}
17. Menu horizontal

O menu também utiliza Flexbox:

.menu {
    display: flex;
}

Assim:

Categorias
Sobre
Contato

passam a ficar:

Categorias   Sobre   Contato
18. Área clicável dos links

Esse conceito é muito importante para UI.

O texto:

Sobre

não deve ser tratado apenas como alguns pixels de texto.

O link deve possuir uma área confortável para interação.

Conceitualmente:

┌────────────────┐
│     Sobre      │
└────────────────┘

e não:

Sobre

com uma área minúscula.

Isso melhora:

usabilidade
acessibilidade
interação
experiência em mobile
19. Espaçamento entre links

A aula explica que o espaçamento visual não deve ser confundido com a área clicável.

Se o link ocupa, por exemplo:

32px

e o espaçamento visual desejado é:

40px

parte desse espaço já pertence à própria área clicável.

Por isso o margin necessário pode ser menor.

20. Responsividade com Sass

Foi utilizado um mixin de responsividade:

@include responsive(S) {
    ...
}

Esse mixin provavelmente contém algo equivalente a:

@media (...) {
    ...
}

A aula usa:

S → 960px

Então:

@include responsive(S) {
    ...
}

significa aproximadamente:

"Aplique essas regras na resolução responsiva definida para S."

21. Esconder o menu desktop

Estado normal:

.menu {
    display: flex;
}

No breakpoint:

@include responsive(S) {
    .menu {
        display: none;
    }
}

Resultado:

> 960px

[Categorias] [Sobre] [Contato]

< 960px

desaparece
22. Mostrar o hambúrguer apenas no mobile

Estado padrão:

.bx {
    display: none;
}

No breakpoint:

@include responsive(S) {
    .bx {
        display: block;
    }
}

Resultado:

Desktop → ☰ escondido

Mobile → ☰ aparece

Esse é um padrão extremamente comum de navegação responsiva.

23. CTA Desktop × CTA Mobile

Foram criados dois estados:

.cta-desktop
.cta-mobile

Desktop:

.cta-desktop {
    display: block;
}

.cta-mobile {
    display: none;
}

Mobile:

@include responsive(S) {
    .cta-desktop {
        display: none;
    }

    .cta-mobile {
        display: block;
    }
}

Assim você consegue trocar a apresentação sem necessariamente alterar toda a estrutura.

24. Botões

Foi criada uma classe padrão:

.btn

O link originalmente possui:

display: inline;

mas foi transformado em:

display: inline-block;

Isso permite que ele aceite propriedades de box model de maneira mais conveniente.

Exemplo:

.btn {
    display: inline-block;
    padding: 8px 24px;
}
25. Padding

Foi utilizado:

padding: 8px 24px;

Significa:

8px → cima/baixo
24px → esquerda/direita

Visualmente:

        8px
   ┌──────────────┐
24 │    LOGIN     │ 24
   └──────────────┘
        8px
26. Removendo estilo padrão dos links

Foi aplicado globalmente:

a {
    text-decoration: none;
}

Isso remove o sublinhado padrão.

27. Hover

Para sinalizar interação:

a:hover {
    opacity: 0.7;
}

Isso fornece feedback visual.

E para suavizar:

transition: 0.3s ease;

Então:

a {
    transition: 0.3s ease;
}

a:hover {
    opacity: 0.7;
}
28. Border radius

Botões receberam:

border-radius: 4px;

para suavizar as bordas.

29. Inputs

A aula também cria uma padronização global para elementos de formulário:

input,
select,
option,
textarea {
    ...
}

A intenção é evitar que cada formulário tenha uma aparência diferente.

30. accent-color

Foi apresentado:

accent-color

Essa propriedade permite alterar a cor de determinados controles nativos do navegador, especialmente elementos como:

checkbox
radio
alguns controles de formulário

No projeto, a cor é baseada na primary color do Style Guide.

31. Padronização dos campos

Os campos recebem coisas como:

padding: 10px 12px;
background-color: ...;
border: none;
border-radius: 4px;
width: 100%;
color: ...;

Isso cria uma linguagem visual consistente.

32. Botão de Search

O botão de busca é diferente do botão normal.

Ele funciona visualmente como uma extensão do input:

┌─────────────────────────────┬──────┐
│ Buscar                      │  🔍  │
└─────────────────────────────┴──────┘

O ícone foi exportado como SVG.

33. SVG como background

Em vez de colocar o SVG diretamente no HTML, foi utilizado:

background-image: url(...);

Depois:

background-repeat: no-repeat;
background-position: center;

Assim o ícone fica centralizado dentro do botão.

34. Botão Search

Conceitualmente:

.btn-search {
    width: 56px;
    height: 48px;

    background-image: url(...);
    background-repeat: no-repeat;
    background-position: center;

    border: 0;
    border-radius: 4px;

    cursor: pointer;
}
35. Form com Flexbox

O input e o botão inicialmente ficam um embaixo do outro.

Para colocar lado a lado:

form {
    display: flex;
}

No projeto existe uma classe utilitária:

<form class="flex">

que já aplica:

.flex {
    display: flex;
}

Resultado:

[ Input ][ Search ]
36. translate3d

Para fazer o botão parecer uma continuação perfeita do input:

transform: translate3d(-6px, 0, 0);

O objetivo não é estruturalmente juntar os elementos, mas corrigir visualmente a composição.

37. Classes utilitárias

Outro conceito importante da metodologia:

em vez de repetir constantemente:

display: flex;
flex-direction: row;
justify-content: flex-start;

foram criadas classes utilitárias.

Por exemplo:

flex
flex-start-row
px-2
py-1
ml-3

Isso cria uma espécie de mini sistema de layout.

38. Separação de responsabilidades

Uma ideia que aparece bastante nessa aula:

HTML
↓
estrutura

SCSS
↓
aparência + layout + responsividade

JavaScript
↓
comportamento

Por exemplo:

HTML
<div class="bx"></div>
CSS
.bx {
    ...
}
JavaScript futuramente
bx.addEventListener(...)

para transformar:

☰

em:

X

e abrir o menu.

🧠 O que você realmente precisa memorizar

Não tente decorar cada propriedade dessa aula.

Memorize os padrões.

1. Flexbox
display: flex;
justify-content: space-between;
align-items: center;
2. Elemento absoluto
.pai {
    position: relative;
}

.filho {
    position: absolute;
}
3. Centralização com transform
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
4. Pseudo-elemento
.elemento::before {
    content: "";
}
5. Responsividade
@include responsive(S) {
    ...
}

conceitualmente:

@media (...) {
    ...
}
6. Desktop/Mobile
.desktop {
    display: block;
}

.mobile {
    display: none;
}

@include responsive(S) {
    .desktop {
        display: none;
    }

    .mobile {
        display: block;
    }
}
7. Link como botão
.btn {
    display: inline-block;
    padding: 8px 24px;
}
8. Hover + transition
a {
    transition: 0.3s ease;
}

a:hover {
    opacity: 0.7;
}
9. Lista horizontal
.menu {
    list-style: none;
    display: flex;
}
10. Form horizontal
form {
    display: flex;
}
🔥 A ideia mais importante da aula

A aula não é realmente sobre "fazer um header".

Ela está começando a mostrar como transformar um Design System + Figma em código.

O fluxo é:

Figma
  ↓
Style Guide
  ↓
Variáveis
  ↓
HTML semântico
  ↓
Classes
  ↓
SCSS
  ↓
Layout
  ↓
Responsividade
  ↓
JavaScript
  ↓
Interação

E isso é justamente o que começa a diferenciar "sei fazer uma página" de "sei implementar uma interface".

Na próxima aula, o ciclo continua com a parte mais interessante: o menu mobile e o JavaScript para controlar o toggle.