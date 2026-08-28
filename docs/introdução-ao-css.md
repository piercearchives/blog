UI Design — Wireframe → Protótipo Final → HTML/CSS
1. Wireframe não é o produto final

O wireframe serve para resolver principalmente:

conteúdo;
posicionamento;
tamanho dos elementos;
hierarquia;
espaçamento;
grid;
estrutura das seções.

A ideia é não se preocupar inicialmente com cores e acabamento visual.

Isso facilita modificar a interface porque há menos variáveis para controlar.

Wireframe = estrutura e organização.
UI final = estrutura + identidade visual + acabamento.

O processo apresentado foi:

Pesquisa / Moodboard
        ↓
Wireframe
        ↓
UI Final
        ↓
HTML + CSS
        ↓
JavaScript / React
2. Consistência é uma das regras principais

Se você estabelece um padrão em uma parte da interface, deve procurar reutilizá-lo nas outras partes que possuem a mesma função ou hierarquia.

Exemplo:

Título
16px
↓
Texto

Se outra seção possui a mesma relação:

Título
↓
Texto

o espaçamento não deveria ser arbitrariamente diferente.

A lógica é:

Mesma hierarquia → mesmo padrão visual.

Isso vale para:

espaçamento;
tamanho de fonte;
padding;
margens;
border-radius;
alinhamento;
cores;
estrutura dos cards.
3. Espaçamento e proximidade

Um dos princípios destacados foi a proximidade.

Elementos próximos tendem a ser percebidos como pertencentes ao mesmo grupo.

Elementos afastados tendem a ser percebidos como separados.

Por isso, quando um card fica pequeno e elementos como:

02/08/2020
Tecnologia

ficam muito próximos, pode ser necessário utilizar:

uma linha;
um ponto;
outro elemento visual separador.

O objetivo é reforçar visualmente a separação.

4. Grid de 8 pontos

O projeto continua utilizando a lógica do 8-point grid.

Exemplos recorrentes:

8
16
24
32
40
48
...

A ideia não é simplesmente colocar tudo em múltiplos de 8 de maneira cega.

É utilizar uma escala consistente para:

padding;
margin;
gaps;
tamanhos;
distâncias entre elementos.

Isso cria ritmo visual e consistência.

5. Hierarquia visual

A interface não deve dar o mesmo peso para todas as informações.

Por exemplo:

Título principal
        ↓
Descrição
        ↓
Data / categoria
        ↓
Informações secundárias

A hierarquia pode ser construída através de:

tamanho;
peso tipográfico;
contraste;
posição;
espaçamento;
cor.
Na escala de cinza

Mesmo sem utilizar cores, é possível criar hierarquia através do contraste.

Exemplo conceitual:

████████  ← maior contraste
██████
████
██

Quanto mais importante a informação, maior pode ser o contraste.

6. Não transforme tudo em destaque

Um dos motivos para misturar cards de imagem com seções textuais é evitar uma interface visualmente cansativa.

Se você coloca:

[IMAGEM]
[IMAGEM]
[IMAGEM]
[IMAGEM]
[IMAGEM]
[IMAGEM]

o usuário recebe muitos estímulos simultaneamente.

Uma alternativa:

[ IMAGEM ] [ IMAGEM ]

     SEÇÃO TEXTUAL

[ TRENDING TOPICS ]

[ IMAGEM ] [ IMAGEM ]

Isso cria respiro visual.

A interface pode até ficar mais longa, mas a experiência pode ser melhor porque a informação é apresentada gradualmente.

7. Categorização por cor

Uma técnica interessante apresentada foi associar categorias a cores.

Por exemplo:

Tecnologia → azul
Business   → verde
Lifestyle  → vermelho
Esportes   → outra cor

O usuário passa a aprender essa associação.

Depois de algum tempo:

🔵 → Tecnologia
🟢 → Business

sem precisar necessariamente ler todo o texto.

Isso é um exemplo de consistência semântica visual.

O exemplo utilizado na aula foi o G1, que utiliza cores para ajudar na identificação de áreas editoriais.

8. Protótipo final

Depois que o wireframe está resolvido, ele é duplicado.

Wireframe
   ↓
duplicar
   ↓
UI Final

O wireframe original permanece como registro do processo.

Na UI final entram:

cores;
imagens;
gradientes;
branding;
border-radius;
contrastes;
detalhes;
efeitos;
acabamento visual.
9. Formas e personalidade da interface

A escolha das formas também transmite sensação.

A aula usa a ideia de que formas mais arredondadas podem transmitir:

proximidade;
segurança;
suavidade;
humanidade.

Enquanto formas muito rígidas/pontiagudas podem transmitir uma sensação diferente.

Importante: isso não é uma regra absoluta.

A ideia correta é:

A forma precisa conversar com a personalidade que você quer transmitir.

No projeto:

Tipografia arredondada
        ↓
Cards arredondados
        ↓
Botões arredondados

Isso cria harmonia visual.

10. Border radius

Foi estabelecido um padrão de:

border-radius: 4px;

para vários elementos.

Isso cria consistência entre:

cards;
botões;
labels;
imagens;
outros componentes.
11. Botões precisam de padronização

Um botão não deve possuir padding arbitrário.

Por exemplo:

        ↑
      12px
        ↓

← 24px [ TEXTO ] 24px →

A distância horizontal deve ser consistente e o padding vertical também.

Conceitualmente:

padding: 12px 24px;

em vez de cada botão possuir uma dimensão completamente diferente.

12. CTA

O botão de login/cadastro recebe maior destaque porque representa uma ação importante.

Isso é um:

CTA — Call To Action

A cor de branding é utilizada para chamar atenção para essa ação.

Exemplo:

[ Home ] [ Blog ] [ Sobre ] [ LOGIN ]
                              ↑
                            CTA
13. Alinhamento óptico

Essa é uma das partes mais interessantes da aula.

Existe diferença entre:

alinhamento matemático

e

alinhamento óptico.

Um elemento pode estar matematicamente centralizado:

        | CENTRO |
           •
          BLOG

mas visualmente parecer deslocado.

Isso acontece por causa da forma dos caracteres.

Um ponto, por exemplo, possui uma massa visual muito pequena.

Então:

Blog •

pode parecer diferente de:

• Blog

mesmo quando as caixas estão matematicamente alinhadas.

Regra prática

O Figma pode estar certo e seu olho ainda perceber algo errado.

Nesse caso, você pode fazer um pequeno ajuste óptico.

14. Glassmorphism / transparência

No menu foi utilizado algo semelhante a:

background
+ transparência
+ borda
+ background blur

Conceitualmente:

background: rgba(...);
backdrop-filter: blur(16px);

Isso cria o efeito de vidro/desfoque.

Mas é importante lembrar:

efeito visual não substitui legibilidade.

15. Imagens e máscaras

Foram apresentadas duas técnicas principais.

Crop

A própria imagem é recortada para caber no espaço.

Máscara

Uma forma define a área visível:

┌───────────────┐
│   IMAGEM      │
│               │
│               │
└───────────────┘
       ↑
     máscara

A vantagem é poder reposicionar a imagem dentro da área sem alterar necessariamente o container.

16. Imagem precisa conversar com o texto

Um problema:

imagem clara
+
texto branco

pode resultar em:

❌ baixa legibilidade

A solução apresentada foi utilizar um overlay/gradiente.

Conceitualmente:

Imagem
   +
Gradiente escuro
   ↓
Texto branco

Por exemplo:

background:
    linear-gradient(
        to top,
        rgba(...),
        transparent
    );

Isso permite manter a imagem sem sacrificar a leitura.

17. Acessibilidade

A aula reforça que contraste não deve ser escolhido apenas pelo "feeling".

Especialmente em uma plataforma de leitura.

É necessário garantir que:

texto
   ↓
contraste suficiente
   ↓
legibilidade

Portanto:

Design bonito não pode custar legibilidade.

18. Footer

O footer foi construído combinando referências diferentes.

Ele possui elementos como:

categorias;
trending topics;
links úteis;
newsletter;
campo de inscrição.

A lógica foi literalmente:

pegar referências → combinar → criar uma solução própria.

O professor chama isso de construir um "Frankenstein".

Não significa copiar uma interface inteira.

É aproveitar padrões individuais que funcionam.

19. Tudo deve respeitar o grid

Essa é uma regra que aparece várias vezes.

┌──────────────────────────────────────────┐
│ │    │    │    │    │    │    │    │    │
│ │    │    │    │    │    │    │    │    │
│ │    │    │    │    │    │    │    │    │
└──────────────────────────────────────────┘

Elementos devem respeitar as colunas e gutters definidos.

No projeto:

container: 1216px
coluna: 72px
gutter: 32px

Isso permite aproximar bastante o resultado do Figma.

20. Do UI para HTML/CSS

Aqui começa uma mudança importante:

UI Design

Resolve:

O QUE existe?
ONDE fica?
QUAL tamanho?
QUAL aparência?
HTML

Resolve:

Qual é a estrutura?
CSS

Resolve:

Como isso aparece?
Como se posiciona?
Como responde?
JavaScript / React

Resolve:

Como isso funciona?
Como os dados mudam?
Como os componentes interagem?

Essa separação é muito importante para seu estudo de React agora.

21. HTML + CSS como versão estática

O professor deliberadamente desenvolve primeiro a versão estática.

Ou seja:

HTML
+
CSS
=
interface funcionando visualmente

mas ainda sem a lógica completa.

Isso permite resolver antecipadamente:

layout;
responsividade;
tipografia;
espaçamento;
botões;
cards;
inputs;
estados visuais;
páginas.

Depois:

React
   ↓
adiciona comportamento
22. Criar classes desde o início

Uma ideia importante da metodologia:

Criar classes reutilizáveis já na versão HTML/CSS.

Por exemplo:

<article class="card">
<button class="button button-primary">
<span class="label label-tech">

Depois, no React, essas mesmas classes podem ser utilizadas pelos componentes.

Isso facilita bastante a transição.

23. Responsividade

O projeto utiliza um comportamento fluido antes de quebrar para mobile.

Conceitualmente:

Desktop grande
      ↓
container fixo
      ↓
Desktop menor
      ↓
layout começa a apertar
      ↓
~960px
      ↓
Mobile

Portanto, não é simplesmente:

Desktop
↓
Mobile

Existe uma etapa intermediária:

DESKTOP FIXO
      ↓
DESKTOP FLUIDO
      ↓
MOBILE
24. Breakpoint de ~960px

Foi escolhido aproximadamente:

@media (max-width: 960px) {
    /* mobile */
}

Esse breakpoint foi escolhido por funcionar bem naquele projeto para:

tablets;
celulares maiores;
transição entre desktop e mobile.

Mas a própria aula deixa claro:

breakpoint não é uma verdade universal.

Ele deve ser escolhido de acordo com o comportamento da interface.

25. Mobile não significa apenas diminuir tudo

Antes do breakpoint:

┌───────────────┬───────────────┐
│               │               │
│    conteúdo   │    conteúdo   │
│               │               │
└───────────────┴───────────────┘

A interface vai ficando:

┌───────────┬───────────┐
│ conteúdo  │ conteúdo  │
└───────────┴───────────┘

até chegar ao breakpoint.

Então:

┌───────────────────────┐
│       conteúdo        │
├───────────────────────┤
│       conteúdo        │
└───────────────────────┘

O layout muda de estrutura, não simplesmente de escala.

26. Flexbox × Grid × Float

Essa aula também introduz uma ideia importante:

não existe uma ferramenta universalmente melhor.

Podemos utilizar:

Flexbox

Excelente para:

alinhamento;
distribuição;
componentes;
navegação;
linhas/colunas simples.
CSS Grid

Excelente para:

layouts bidimensionais;
estruturas complexas;
grids;
áreas de layout.
Float

Apesar de antigo, pode ser utilizado em determinadas metodologias para reproduzir layouts muito específicos.

O professor utiliza:

Grid System + Sass
        +
Flexbox
        +
CSS Grid
        +
Float

dependendo da situação.

A filosofia é:

Escolha a ferramenta que resolve melhor o problema.

Não:

"Eu só uso Flexbox."

27. Sass/SCSS

O projeto também utiliza Sass.

Isso permite estruturar melhor o CSS e criar recursos reutilizáveis.

A ideia é que o projeto tenha uma arquitetura de estilos que possa ser reaproveitada quando chegar ao React.

28. Imagens e performance

O fluxo apresentado para imagens foi:

Unsplash
   ↓
selecionar imagem
   ↓
crop/padronização
   ↓
1920 × 1100
   ↓
compressão
   ↓
website

A intenção é evitar imagens enormes e desnecessariamente pesadas.

A aula cita o TinyPNG/Tiny Image como ferramenta de compressão.

Uma correção importante à anotação da aula: imagens do Unsplash são disponibilizadas sob uma licença que permite amplo uso, mas dizer que "não têm direito autoral absolutamente nenhum" é impreciso. Os direitos autorais não simplesmente deixam de existir; o ponto é que a licença concede permissões de uso bastante amplas.

29. Arquitetura das páginas

O projeto estático possui aproximadamente esta estrutura conceitual:

Home
│
├── Cards / Posts
├── Busca
├── Footer
│
├── Login
│
├── Profile
│   └── Adicionar Post
│
├── Post
│   └── leitura completa
│
└── 404

Depois, no React, isso será transformado em uma aplicação com rotas/componentes.

30. O ponto mais importante para o seu momento atual

Isso conversa diretamente com a dúvida que você teve sobre React e App.js.

A metodologia da aula deixa uma divisão muito clara:

┌─────────────────────────────┐
│         UI / Figma          │
│                             │
│ estrutura + visual          │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│          HTML/CSS           │
│                             │
│ estrutura + estilo          │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│           React             │
│                             │
│ componentes + lógica        │
│ estado + dados + interação  │
└─────────────────────────────┘

Então não significa que você deve construir toda a aplicação dentro de App.js.

Você pode começar com algo simples:

function App() {
  return (
    <main>
      ...
    </main>
  );
}

Mas, conforme a interface cresce, você transforma partes dela em componentes:

src/
├── App.jsx
├── components/
│   ├── Header.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── PostCard.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Profile.jsx
│   ├── Post.jsx
│   └── NotFound.jsx
│
└── styles/
    ├── global.scss
    ├── variables.scss
    └── components.scss

E aí o App vira mais um orquestrador da aplicação do que um arquivo contendo absolutamente tudo.

🧠 Resumo para memorizar

Se você quiser guardar o núcleo dessas três aulas, eu resumiria assim:

Wireframe resolve estrutura.
UI final resolve aparência.
HTML resolve semântica e estrutura.
CSS resolve apresentação e responsividade.
JavaScript/React resolve comportamento e lógica.

Consistência > decisões aleatórias.

Grid + espaçamento + hierarquia criam organização.

Cor + tipografia + forma criam identidade.

Acessibilidade vem junto do design, não depois.

E nenhuma técnica de layout é "a melhor" universalmente: use a ferramenta que melhor resolve o problema.