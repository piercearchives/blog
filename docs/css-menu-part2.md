Início da Codificação e Construção do Header
1. Preparação do projeto
As aulas anteriores foram focadas na estrutura do projeto, definição de variáveis, grids, layout e preparação para a implementação.
A partir desta aula começa efetivamente a codificação da interface.
A versão estática do projeto é utilizada como referência durante a implementação.
Sass e Partial Files
O Sass será compilado para um único arquivo CSS final: style.css.
Arquivos Sass que existem apenas para organização interna devem ser tratados como partials.
Partials são identificados pelo _ no início do nome:
_layout.scss
_typography.scss
_buttons.scss
Isso evita que cada arquivo Sass seja compilado individualmente para um CSS separado.
A ideia é manter vários arquivos menores no Sass e gerar um único CSS otimizado.
Assets
As imagens utilizadas na interface foram previamente exportadas do Figma.
Os assets foram otimizados antes da implementação para reduzir seu peso.
Os ícones foram exportados em SVG.
Entre os assets preparados estão:
Logo do blog
Favicon
Logo alternativa
Ícone de busca
Demais ícones da interface
2. Estrutura semântica do Header

A primeira seção implementada é o header.

A estrutura considera duas versões:

Desktop
Logo
Menu de navegação
Categorias
Sobre
Contato
Campo de busca
Botão de Login
Mobile
Logo
Menu hambúrguer
Link de Login

No mobile, os elementos do desktop são escondidos e substituídos pelos equivalentes mobile.

A ideia geral é:

HEADER
│
├── NAV
│   ├── LOGO
│   └── MENU
│       ├── Categorias
│       ├── Sobre
│       └── Contato
│
├── BX
│   └── Menu hambúrguer
│
└── AÇÕES
    ├── Search
    ├── CTA Desktop
    └── CTA Mobile
3. HTML semântico
Utilizar elementos semânticos é importante para estruturar corretamente a página.
O header é criado utilizando a tag:
<header>
A navegação é agrupada dentro de:
<nav>
O menu é representado por uma lista:
<ul>
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
Links devem possuir uma área clicável adequada, não apenas o tamanho visual do texto.
React
No React, elementos que normalmente não possuem fechamento no HTML precisam ser fechados.
Exemplo:
<img src="..." />

em vez de:

<img src="...">
4. Menu hambúrguer

Foi criada uma div chamada bx para representar o botão de menu mobile.

Características:

width: 40px
height: 40px
cursor: pointer
Pseudo-elementos ::before e ::after
O elemento pai utiliza position: relative.
Os pseudo-elementos utilizam position: absolute.

Cada pseudo-elemento representa uma das barras do ícone.

Estrutura de posicionamento
BX (relative)
│
├── ::before (absolute)
│
└── ::after  (absolute)

Os pseudo-elementos possuem:

content
largura relativa ao pai
altura pequena
background
posição absoluta
border-radius
5. Position Relative + Absolute

Um dos conceitos principais da aula é a relação entre:

position: relative;

e:

position: absolute;

Quando um elemento pai possui position: relative, um filho com position: absolute passa a utilizar esse pai como referência de posicionamento.

Exemplo
.parent {
    position: relative;
}

.child {
    position: absolute;
}

Assim, propriedades como:

top
left
right
bottom

passam a ser calculadas em relação ao elemento pai.

6. Transform e centralização

Quando um elemento é posicionado com top e left, a referência inicial está no canto do próprio elemento.

Para compensar isso, utiliza-se:

transform: translate(-50%, -50%);

A transformação desloca o elemento em metade da sua própria largura e altura.

Isso permite centralizar o elemento em relação ao ponto de posicionamento.

Conceito
Ponto de referência
        ↓
        ●──────────
        │ elemento │
        │           │
        └───────────┘

translate(-50%, -50%)

        ┌───────────┐
        │ elemento  │
        │     ●     │
        └───────────┘
7. Flexbox no Header

O header possui três filhos diretos:

nav
bx
área de ações

Para organizá-los horizontalmente:

display: flex;

Para distribuir os elementos:

justify-content: space-between;

Para alinhá-los verticalmente:

align-items: center;

Resultado:

NAV             BX             AÇÕES
│               │                │
└───────────────┴────────────────┘

Esse é um exemplo direto de aplicação de Flexbox.

8. Organização do menu

O nav também utiliza Flexbox para posicionar:

Logo
Menu
display: flex;
justify-content: flex-start;
align-items: center;

O menu recebe:

list-style: none;
display: flex;

Isso remove as bolinhas padrão da lista e coloca os itens horizontalmente.

9. Área clicável dos links

Um ponto importante abordado na aula é que um link não deve possuir somente a área visual do texto como área interativa.

É necessário considerar uma área útil de clique.

Por isso, o espaçamento entre os elementos não deve ser pensado apenas como distância visual.

Exemplo:

[ SOBRE ]   [ CONTATO ]
   ↑            ↑
área clicável

A distância visual pode ser obtida combinando:

padding do link
margin entre os elementos

Isso cria uma interface mais confortável para interação.

10. Responsividade

O breakpoint utilizado para o menu é:

960px

Acima de 960px:

Desktop

Abaixo de 960px:

Mobile
Menu desktop

O menu desktop inicialmente aparece:

display: block;

Na resolução responsiva:

display: none;
Menu hambúrguer

O comportamento é inverso:

display: none;

No breakpoint:

display: block;

Assim:

> 960px
Desktop Menu ✓
Hambúrguer   ✗

< 960px
Desktop Menu ✗
Hambúrguer   ✓
11. Mixins de responsividade

A responsividade é abstraída através de um mixin Sass.

Em vez de escrever manualmente vários @media, o projeto utiliza um mixin responsável por aplicar o breakpoint correspondente.

A chamada recebe um tamanho de dispositivo, como:

@include responsive(S) {
    ...
}

O mixin então gera o media query correspondente.

Isso mantém a responsividade centralizada e padronizada.

12. CTA Desktop e CTA Mobile

Existem duas versões do CTA de login.

Desktop
CTA Desktop
Aparece normalmente.
É escondido no breakpoint mobile.
Mobile
CTA Mobile
Fica escondido normalmente.
Aparece no breakpoint mobile.

A lógica é:

DESKTOP
CTA Desktop → display: block
CTA Mobile  → display: none

MOBILE
CTA Desktop → display: none
CTA Mobile  → display: block
13. Padronização dos botões e links

Os links recebem uma estilização global.

Remover sublinhado
text-decoration: none;
Área do botão

Utiliza-se:

display: inline-block;

Isso mantém o comportamento de link, mas permite aplicar características de bloco.

Contraste

Os CTAs utilizam cores com alto contraste para facilitar sua identificação.

Padding

O botão utiliza espaçamento interno para criar uma área clicável maior.

Border radius
border-radius: 4px;
Hover

O estado :hover altera a opacidade para indicar que o elemento é interativo.

Exemplo:

a:hover {
    opacity: 0.7;
}
Transição

Para evitar uma mudança brusca:

transition: 0.3s ease;

A transição precisa ser rápida o suficiente para ser percebida, mas não tão lenta a ponto de prejudicar a interação.

14. Padronização de tipografia

Os links e botões utilizam os padrões definidos previamente no arquivo de tipografia do Sass.

Em vez de definir manualmente todas as propriedades, são utilizados mixins tipográficos.

Isso mantém:

tamanho
peso
família tipográfica
demais propriedades

padronizados em toda a interface.

15. Inputs e controles de formulário

Foram agrupados elementos de formulário para receber uma estilização comum:

input,
select,
option,
textarea

A intenção é criar um padrão visual consistente.

Características aplicadas
padding
background-color
border
border-radius
width
color
tipografia
Width
width: 100%;

O elemento ocupa toda a largura disponível do elemento pai.

Border

A borda padrão é removida para que o componente siga o design definido no Figma.

Border radius
border-radius: 4px;
Cor do texto

Utiliza-se uma cor clara para garantir contraste com o fundo escuro.

16. Accent Color

Foi apresentado o conceito de:

accent-color

Essa propriedade permite definir a cor de destaque utilizada por determinados controles nativos do navegador.

No projeto, a cor de destaque está associada à cor primária azul definida no Style Guide.

17. Botão de busca

O botão de busca é diferente do CTA tradicional.

Ele funciona visualmente como uma extensão do input:

┌──────────────────────────────┬──────┐
│ Buscar                       │ 🔍   │
└──────────────────────────────┴──────┘

Para isso, o botão recebe:

altura fixa
largura fixa
imagem de fundo
SVG do ícone de busca
background-repeat: no-repeat
background-position: center
mesma cor de fundo do input
border: 0
border-radius
18. Flexbox no formulário

Input e botão precisam ficar lado a lado.

Para isso, o formulário recebe uma classe utilitária de Flexbox:

display: flex;

Resultado:

[ INPUT ][ SEARCH ]

O botão recebe um pequeno deslocamento horizontal através de:

transform: translate3d(-6px, 0, 0);

Isso faz o botão se sobrepor ligeiramente ao input e cria a sensação visual de continuidade.

19. Classes utilitárias

O projeto possui classes pré-definidas para comportamentos recorrentes.

Exemplos citados:

flex
classes de alinhamento
classes de spacing
mixins de responsividade
mixins de tipografia

A ideia é reutilizar padrões, evitando repetir CSS desnecessariamente.

20. Espaçamento do Header

O header recebe classes utilitárias de espaçamento nos eixos:

PX → eixo X
PY → eixo Y

Exemplo conceitual:

PX 2 → espaçamento horizontal
PY 1 → espaçamento vertical

O espaçamento deve ser definido de acordo com o sistema estabelecido no Style Guide.

21. Estado atual da implementação

Ao final da aula, o header já possui:

Estrutura HTML semântica
Logo
Menu desktop
Menu mobile preparado
Botão hambúrguer
Responsividade em 960px
CTA desktop
CTA mobile
Campo de busca
Botão de busca
Estilos básicos de links
Hover
Transições
Inputs padronizados
Flexbox
Sistema de espaçamento
Mixins de responsividade

O que ainda falta é implementar o menu mobile propriamente dito.

Na próxima aula, o JavaScript será utilizado para controlar o comportamento de abrir e fechar esse menu através do botão hambúrguer.

Conceitos principais da aula

Sass

Partials
Mixins
Organização de arquivos
Compilação

HTML

HTML semântico
header
nav
listas
links
formulários

CSS

Flexbox
position: relative
position: absolute
pseudo-elementos
transform
translate
background
hover
transition
responsividade
accent-color

UI/UX

Área clicável
Contraste
Estados de interação
Consistência de espaçamento
Design responsivo

React

Tags precisam ser corretamente fechadas, especialmente elementos como <img />.