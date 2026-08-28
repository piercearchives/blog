🎯 Objetivo da aula

Nesta aula começa efetivamente a etapa de desenvolvimento do site estático, utilizando HTML + CSS/Sass.

A principal ideia não é ainda construir as páginas, mas preparar uma base reutilizável de CSS que será utilizada durante todo o projeto.

A filosofia apresentada é:

Criar uma biblioteca própria de estilos → reutilizar nos projetos → ganhar velocidade e consistência.

1. HTML, CSS e JavaScript não precisam de instalação

Para projetos estáticos utilizando apenas:

HTML
CSS
JavaScript

não é necessário instalar Node.js ou outras ferramentas para o navegador executar o código.

Isso acontece porque essas tecnologias são nativas do browser.

Extensões recomendadas no VS Code

O professor apresenta algumas extensões para produtividade:

Live Server → cria um servidor local e atualiza a página automaticamente.
Live Sass Compiler → compila Sass para CSS.
Prettier → formatação automática do código.
VS Code Icons → melhora a visualização dos arquivos.
Temas como Material Theme/Undark → apenas estética.

Já ferramentas como Node, Yarn e Thunder Client ficam mais relevantes posteriormente, especialmente na etapa de React/APIs.

2. Sass como pré-processador

O Sass é apresentado como um pré-processador do CSS.

Ele não substitui o CSS nem faz algo que o navegador interprete diretamente. O Sass adiciona recursos que tornam a escrita do CSS mais produtiva, como:

variáveis;
funções;
mixins;
condicionais;
estruturas reutilizáveis;
cálculos;
organização modular.

Por exemplo, em vez de repetir várias vezes uma mesma estrutura de media query, o professor cria um mixin responsivo e apenas o reutiliza.

Ideia principal
@include responsive(S) {
    background-color: blue;
}

O Sass transforma isso em CSS convencional com a media query correspondente.

3. Biblioteca própria de CSS

Essa é uma das ideias mais importantes da aula.

O professor possui uma biblioteca própria com classes genéricas que podem ser reutilizadas em diferentes projetos.

Por exemplo:

<div class="flex"></div>

A classe flex já possui:

display: flex;

Outro exemplo:

<div class="flex-start-column"></div>

Essa classe já representa uma configuração específica de Flexbox.

Por que fazer isso?

Porque, ao desenvolver, o programador não precisa ficar voltando ao CSS para lembrar como determinada configuração funciona.

Ele já conhece sua biblioteca:

flex
flex-start-row
flex-end-row
flex-start-column
flex-center
flex-space
flex-wrap
...

Então basta aplicar a classe.

Conceito

Isso se aproxima da filosofia de frameworks como Bootstrap:

classes utilitárias pré-definidas → composição rápida de layouts.

A diferença é que o professor criou uma biblioteca própria, adaptada ao workflow dele.

4. Reset global

A estrutura começa com algumas regras globais para reduzir diferenças entre browsers.

Entre elas:

margin: 0;
padding: 0;
box-sizing: border-box;
box-sizing: border-box

Faz com que width e height considerem também padding e border.

Isso torna o controle dimensional dos elementos muito mais previsível.

5. Scroll behavior

É utilizado:

html {
    scroll-behavior: smooth;
}

Isso permite que links internos da página façam uma transição suave até a seção de destino.

Em vez de:

clique → salto instantâneo

temos:

clique → rolagem animada
6. Variáveis de cores

A biblioteca possui um arquivo específico para cores.

A ideia é transformar o Style Guide do Figma em tokens reutilizáveis no código.

São definidos grupos como:

Brand
brand
brand-dark
brand-light
Secondary
secondary
secondary-dark
secondary-light
Black
black
black-dark
black-light
black-darkened
White
white
white-dark
white-light

Além de cores como:

gray;
red;
green;
yellow;
gradients.
7. Figma → código

Um ponto extremamente importante é a relação entre design e desenvolvimento.

O professor não está escolhendo as cores arbitrariamente durante a implementação.

Ele pega aquilo que foi definido no Style Guide do Figma e transforma em código.

Fluxo:

Figma
  ↓
Design Tokens
  ↓
Sass
  ↓
Classes / Variáveis
  ↓
HTML

Isso aumenta a precisão entre o protótipo e o produto final.

8. Container

O projeto possui containers com tamanhos previamente definidos.

Um exemplo apresentado:

Container L = 1216px

E ele pode ser utilizado com:

max-width: 1216px;
margin: 0 auto;

Isso centraliza o conteúdo.

Também são utilizados valores de padding previamente definidos.

Objetivo

Garantir que:

Figma
   ↓
1216px
   ↓
Código
   ↓
1216px

Ou seja, manter o máximo possível de fidelidade dimensional.

9. overflow: hidden

Outro padrão utilizado nos containers:

overflow: hidden;

A função é esconder aquilo que ultrapassa os limites do elemento.

Imagine:

┌──────────────────────┐
│      CONTAINER       │
│                      │
│                 █████████
│                 █████████
└──────────────────────┘

Com overflow: hidden, a parte que ultrapassa é cortada:

┌──────────────────────┐
│      CONTAINER       │
│                      │
│                 █████│
└──────────────────────┘

Isso pode evitar que elementos extrapolando a viewport criem scroll horizontal indesejado.

Observação importante: overflow: hidden não deve ser usado cegamente em todo container, porque pode cortar conteúdo, menus, tooltips etc. É uma decisão de layout, não uma regra universal.

10. Sistema de responsividade com Sass

O professor criou um mixin chamado, conceitualmente:

responsive()

Ele recebe um dispositivo/breakpoint como parâmetro.

Por exemplo:

@include responsive(S) {
    background-color: blue;
}

Isso gera uma media query correspondente ao breakpoint S.

A estrutura possui diferentes faixas, como:

XL
L
M
S
XS

E existe uma preocupação especial com telas muito pequenas.

11. Exemplo de responsividade

Foi criado um elemento:

.box {
    width: 500px;
    height: 500px;
    background-color: red;

    @include responsive(S) {
        background-color: blue;
    }
}

Resultado conceitual:

Desktop
500 × 500
🔴 vermelho

        ↓ viewport ≤ breakpoint

Mobile
500 × 500
🔵 azul

O importante é perceber que o código não precisa escrever manualmente toda a @media.

O mixin abstrai essa parte.

12. Sistema de Grid

O professor também possui uma função para trabalhar com grid.

A intenção é fazer o grid utilizado no Figma refletir no código.

Por exemplo:

Container
┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐
│  │  │  │  │  │  │  │  │  │  │  │  │
└──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘

Se um elemento ocupa:

6 colunas

no Figma, o objetivo é conseguir representar essa mesma proporção no código.

Isso ajuda a manter a relação:

Design → implementação

mais consistente.

13. Flexbox como classes utilitárias

Existe uma série de classes prontas para Flexbox.

Por exemplo:

Classe	Função
flex	display: flex
flex-start-row	Flex + início + linha
flex-end-row	Flex + fim + linha
flex-start-column	Flex + início + coluna
flex-center	Centralização
flex-space	space-between
flex-wrap	Permite quebra
flex-item	Configuração de item

A lógica é:

<div class="flex-center">

em vez de precisar escrever novamente todas as propriedades.

14. Classes utilitárias de tamanho

A biblioteca também possui classes para dimensões.

Exemplos citados:

w-auto
w-100
w-75
w-50
w-25

h-auto

Isso segue novamente a filosofia de frameworks utilitários.

A vantagem é a composição rápida.

15. Sistema de spacing

Outro arquivo importante é o de espaçamentos.

O professor utiliza como base o grid de 8 pontos.

Exemplo:

Token	Valor
Gap 1	8px
Gap 2	16px
Gap 3	24px
Gap 4	32px
Gap 5	40px
...	...

A ideia é manter uma escala consistente de espaçamento.

Importante

O próprio professor deixa claro:

Grid de 8 não é uma regra absoluta.

É uma convenção utilizada no workflow para manter designer e desenvolvedor alinhados.

16. Convenção para margin e padding

Também são criadas classes utilitárias.

Por exemplo:

m0
m1
m2
...

Para margin.

E:

p0
p1
p2
...

Para padding.

Existem ainda direções:

mt → margin-top
mb → margin-bottom
ml → margin-left
mr → margin-right

E combinações:

mx → left + right
my → top + bottom

Isso cria uma espécie de linguagem própria de spacing.

17. Tipografia

A mesma filosofia é aplicada à tipografia.

A fonte utilizada no projeto é:

Rubik

São utilizados principalmente dois pesos:

Regular
Medium

A fonte é importada do Google Fonts.

18. Mixins de tipografia

Aqui entra uma das partes mais interessantes da arquitetura.

O professor possui mixins conceitualmente como:

@include typeface-1(...);
@include typeface-2(...);

A ideia é separar:

Typeface 1

Para:

Títulos
Headings
Typeface 2

Para:

Body
Textos

E o mixin recebe informações como:

tamanho
device
19. Tipografia responsiva

Por exemplo, um H1 pode possuir:

Desktop
font-size: 80px
line-height: 100px
font-weight: 500
Mobile
font-size: 56px
Small mobile
font-size: 48px

Então o código pode pensar em algo como:

@include typeface-1(H1, desktop);

e o Sass determina os valores apropriados.

20. Breakpoint especial para telas muito pequenas

Existe ainda uma preocupação com dispositivos muito pequenos.

No exemplo:

< 340px

é criado um breakpoint adicional.

Isso é especialmente útil para aparelhos antigos/pequenos, como o exemplo citado do iPhone 5.

Assim:

Desktop
80px
   ↓
Mobile
56px
   ↓
Small Mobile
48px
21. Mixins e condicionais

O professor reforça o conceito de mixin.

Um mixin funciona de maneira semelhante a uma função:

@mixin exemplo($variavel) {
    ...
}

Você pode:

criar o mixin;
receber parâmetros;
executar lógica;
reutilizar o resultado.

E Sass permite estruturas condicionais:

@if ...
@else ...

Conceitualmente:

SE device = desktop
    → use tamanho desktop

SENÃO SE device = mobile
    → use tamanho mobile

SENÃO
    → use tamanho small mobile

Isso é uma das grandes vantagens do Sass sobre escrever CSS repetitivo manualmente.

22. Prefixos de navegador

O Sass também pode lidar com prefixos como:

-webkit-
-ms-
-o-

A intenção histórica desses prefixos é oferecer compatibilidade com diferentes implementações de browsers.

⚠️ Correção importante da aula

O professor associa -ms- ao Firefox, mas isso está incorreto.

-webkit- → originalmente associado ao WebKit/Blink e navegadores derivados.
-ms- → Microsoft, principalmente Internet Explorer/antigo Edge.
-moz- → Mozilla/Firefox.
-o- → Opera, historicamente.

Além disso, em CSS moderno você não deve sair adicionando prefixos manualmente. Ferramentas como Autoprefixer podem cuidar disso quando realmente necessário.

23. A arquitetura geral

A estrutura apresentada pode ser resumida assim:

                    ┌──────────────┐
                    │    Figma     │
                    └──────┬───────┘
                           │
                           ▼
                ┌─────────────────────┐
                │   Design Tokens     │
                └──────────┬──────────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
     Colors             Spacing           Typography
        │                  │                  │
        └──────────────────┼──────────────────┘
                           ▼
                    ┌──────────────┐
                    │     Sass     │
                    └──────┬───────┘
                           │
                ┌──────────┴──────────┐
                ▼                     ▼
          Mixins / Utils         Components
                │                     │
                └──────────┬──────────┘
                           ▼
                         HTML
🧠 O principal aprendizado da aula

Essa aula não é realmente sobre decorar classes de Sass.

O conceito mais importante é a criação de uma base reutilizável de desenvolvimento.

O professor está criando uma espécie de mini design system/framework pessoal:

CORES
↓
TIPOGRAFIA
↓
SPACING
↓
LAYOUT
↓
GRID
↓
RESPONSIVIDADE
↓
UTILITÁRIOS
↓
PROJETO

Em vez de começar cada projeto do zero, ele reaproveita essa fundação e altera apenas os valores necessários.

A mentalidade é:

"Eu construo a infraestrutura uma vez para acelerar todos os projetos seguintes."