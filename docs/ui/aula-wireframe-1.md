# UI Design — Desenvolvimento do Layout e Wireframe

## 🎯 Objetivo da aula

Nesta aula começa a etapa de **transformação das decisões tomadas nas aulas anteriores em uma estrutura visual concreta**.

Até aqui já foram definidos:

- Grid;
    
- Espaçamentos;
    
- Tipografia;
    
- Cores;
    
- Variáveis do Style Guide;
    
- Guia de estilos no Figma.
    

Agora o foco passa a ser o **wireframe de baixa fidelidade**, construindo primeiro a estrutura e só depois refinando a interface.

> **Ideia central:** wireframe é como modelar uma obra de barro. Primeiro você coloca o material e define a forma; os detalhes vêm depois.

---

# 1. Wireframe de baixa fidelidade

O primeiro objetivo não é deixar a interface bonita.

É descobrir:

- Onde cada conteúdo ficará;
    
- Quais serão as seções;
    
- Qual será a hierarquia;
    
- Como o usuário navegará;
    
- Como os elementos serão distribuídos;
    
- Quais conteúdos terão maior destaque.
    

Por isso, o wireframe deve ser:

- rápido de produzir;
    
- predominantemente em escala de cinza;
    
- pouco detalhado;
    
- focado em **estrutura e conteúdo**.
    

### Regra prática

> **Primeiro estrutura → depois conteúdo → depois hierarquia → depois estética.**

Não faz sentido gastar tempo escolhendo cores ou refinando uma ilustração enquanto você ainda não sabe se aquela seção deveria existir.

---

# 2. Grid continua sendo a base

Mesmo trabalhando em baixa fidelidade, o grid continua sendo utilizado.

A resolução utilizada na aula foi:

**2560 × 1440 (Quad HD)**

Mas a lógica do grid continua funcionando em outras resoluções, como Full HD.

O importante é manter o **sistema de layout**, e não ficar preso a uma resolução específica.

---

# 3. Componentização desde o wireframe

Elementos que aparecem em várias páginas devem ser tratados como **componentes**.

Exemplos:

- Menu;
    
- Footer;
    
- Elementos de navegação;
    
- Outros elementos fixos.
    

No Figma, a ideia é criar um componente principal e utilizar suas instâncias nas demais telas.

Assim:

```text
Componente principal
       ↓
 ┌─────┼─────┐
 ↓     ↓     ↓
Tela 1 Tela 2 Tela 3
```

Alterando o componente principal, as instâncias recebem a alteração.

### Benefício

Isso aproxima o processo de design do processo de desenvolvimento.

O que é um componente no Figma posteriormente pode se tornar um componente no React.

---

# 4. Construção do menu

O menu foi criado inicialmente como um frame separado:

**Menu Wireframe**

Características:

- Altura: **120 px**
    
- Grid aplicado;
    
- Escala de cinza;
    
- Logo;
    
- Links de navegação;
    
- Call to Action.
    

### Estrutura

```text
[ LOGO ]   [ Sobre ] [ Contato ]                  [ Login ]
```

A ideia é manter a navegação simples.

---

# 5. Hierarquia dos elementos do menu

Links que possuem a mesma função devem possuir a mesma hierarquia visual.

Por exemplo:

```text
Sobre     Contato     Categorias
```

São todos links de navegação.

Portanto, devem possuir:

- mesmo tamanho;
    
- mesma tipografia;
    
- espaçamento consistente;
    
- alinhamento consistente.
    

### Tamanho sugerido

Para texto de navegação desktop:

**16–18 px**

O professor chama atenção para um erro muito comum:

> Trabalhar no Figma com zoom reduzido e acabar escolhendo uma tipografia desproporcionalmente grande.

Por isso:

### Sempre conferir a interface em 100% de zoom.

Um H4 de **36 px**, por exemplo, é muito grande para um menu.

---

# 6. Espaçamento e hierarquia

Se dois elementos possuem a mesma hierarquia, o espaçamento entre eles também deve ser consistente.

Exemplo:

```text
Sobre ← 32px → Contato ← 32px → Categorias
```

O sistema utilizado continua baseado no:

## Grid de 8 pontos

Valores recorrentes:

- 8 px
    
- 16 px
    
- 24 px
    
- 32 px
    
- 40 px
    
- 48 px
    
- etc.
    

Isso cria consistência visual e facilita posteriormente a implementação.

---

# 7. Call to Action

O menu também possui um CTA.

Exemplo:

**Login**

Uma regra importante apresentada:

> Botões devem possuir pelo menos aproximadamente **40 px de altura**, considerando usabilidade.

O texto do botão não precisa ser maior que o próprio contexto do componente.

---

# 8. Primeira seção da página

Depois do menu começa a construção do conteúdo da página.

O primeiro objetivo do blog é:

> **Convidar o usuário a participar da plataforma.**

A seção inicial apresenta:

- Nome do blog;
    
- Descrição;
    
- Imagem/ilustração;
    
- Call to Action.
    

Estrutura aproximada:

```text
┌──────────────────────────────────────────┐
│                                          │
│       [ IMAGEM ]     NOME DO BLOG       │
│                      Descrição           │
│                      [ Começar a escrever ]│
│                                          │
└──────────────────────────────────────────┘
```

No wireframe, uma imagem pode ser representada simplesmente por:

- quadrado;
    
- retângulo;
    
- ícone de imagem.
    

Não é necessário criar a arte definitiva.

---

# 9. Alinhamento

Antes de adicionar detalhes, é necessário decidir o alinhamento da seção.

Pode ser:

### Esquerda

```text
Título
Descrição
CTA
```

ou:

### Centro

```text
        Título
      Descrição
   [    CTA    ]
```

O importante é manter consistência.

Se a composição foi definida como centralizada, os elementos relacionados devem permanecer centralizados.

---

# 10. Espaçamento baseado em relacionamento

O espaçamento não existe apenas para "deixar bonito".

Ele comunica **relacionamento entre elementos**.

Por exemplo:

```text
BLOG
↓ 24px
Descrição
↓ maior distância
CTA
```

A descrição está mais próxima do título porque pertence diretamente a ele.

Já o CTA fica um pouco mais distante porque representa uma ação diferente.

### Regra

> **Quanto mais relacionados dois elementos forem, menor tende a ser a distância entre eles.**

---

# 11. Destaque dos posts

Depois da introdução, começa a apresentação dos posts.

Aqui aparece uma decisão importante:

### Não começar necessariamente com cards pequenos.

A primeira parte da página deve causar impacto.

Posts importantes podem receber uma composição maior, enquanto os cards menores podem aparecer posteriormente.

Isso cria **hierarquia de conteúdo**.

---

# 12. Pesquisa como ferramenta de desbloqueio

Quando você não sabe como estruturar determinada seção:

> **Pesquise referências.**

A pesquisa serve para descobrir:

- padrões de composição;
    
- grids;
    
- cards;
    
- hierarquia;
    
- formas de apresentar conteúdo;
    
- soluções de navegação.
    

E a referência não precisa ser seguida literalmente.

Ela serve como ponto de partida para criar uma solução própria.

---

# 13. Composição dos posts destacados

Uma das referências utilizadas trabalha com:

**Grid de 12 colunas**

A composição divide o espaço aproximadamente assim:

```text
┌───────────────────┬──────────┬──────────┐
│                   │          │          │
│                   │  Post 2  │  Post 3  │
│     Post 1        │          │          │
│                   ├──────────┼──────────┤
│                   │  Post 4  │          │
│                   │          │          │
└───────────────────┴──────────┴──────────┘
```

O primeiro post possui maior destaque.

Os demais ocupam espaços menores.

---

# 14. Pense em "caixinhas"

Uma das ideias mais importantes da aula:

> **Sempre pense em caixinhas.**

Cada bloco visual pode posteriormente se transformar em uma `div` ou componente.

Por exemplo:

```text
┌──────────────────┐
│      Imagem      │
├──────────────────┤
│ Categoria        │
│ Título           │
│ Descrição        │
│ Autor / Data     │
└──────────────────┘
```

Isso ajuda o designer a pensar antecipadamente na implementação.

---

# 15. Design pensando no Flexbox

A estrutura visual também pode antecipar decisões de CSS.

Por exemplo:

```text
┌──────────────────────────────────────┐
│ Logo              Links       Login │
└──────────────────────────────────────┘
```

Essa composição naturalmente sugere algo como:

```css
display: flex;
justify-content: space-between;
```

Ou seja:

> O designer não precisa programar durante o wireframe, mas pensar de uma maneira que facilite a implementação.

---

# 16. Cálculo das dimensões

O professor demonstra como utilizar o grid para calcular tamanhos.

Exemplo:

Altura da seção:

**640 px**

Gutter:

**32 px**

Espaço restante:

```text
640 - 32 = 608
```

Dividindo em duas áreas:

```text
608 / 2 = 304
```

Portanto:

**304 px + 32 px + 304 px**

Isso garante que as áreas mantenham proporções matematicamente consistentes.

---

# 17. Conteúdo sobre imagens

Quando o texto fica sobre uma imagem, existe um problema:

### Contraste.

Uma imagem pode possuir áreas claras e escuras, fazendo o texto desaparecer.

Uma solução comum é utilizar:

```text
Imagem
   +
Gradiente escuro → transparente
   +
Texto
```

O gradiente aumenta a legibilidade.

No wireframe, entretanto, isso pode ser deixado para depois.

---

# 18. Hierarquia tipográfica dos posts

Os posts destacados possuem diferentes níveis de informação.

Exemplo:

```text
TECNOLOGIA          ← categoria

Vale a pena comprar
um PC gamer em 2021? ← título

Resumo da matéria... ← descrição

○ Nasser Youssef
  @nasseryoussef
  August 2021
```

A hierarquia pode ser construída através de:

- tamanho;
    
- peso;
    
- cor;
    
- espaçamento;
    
- quantidade de informação.
    

---

# 19. Categoria acima do título

Uma pequena label pode indicar a categoria:

**TECNOLOGIA**

Depois:

**Vale a pena comprar um PC gamer em 2021?**

Isso permite ao usuário compreender rapidamente o contexto do conteúdo.

A categoria possui hierarquia menor que o título.

---

# 20. Resumo do post

O resumo deve ficar próximo do título porque ambos fazem parte do mesmo bloco informacional.

Exemplo:

```text
TECNOLOGIA
↓ pequeno espaço
Título
↓ pequeno espaço
Resumo
```

Na aula foi utilizado aproximadamente:

**4 px**

para conectar elementos diretamente relacionados.

---

# 21. Informações do autor

O post também pode apresentar:

- Avatar;
    
- Nome;
    
- Username;
    
- Data;
    
- Tempo de leitura.
    

Exemplo:

```text
○  Nasser Youssef
   @nasseryoussef

   August 2021 · 5 min read
```

### Hierarquia

Nome:

**16 px**

Username:

**14 px**

O nome recebe maior destaque.

O username fica próximo porque pertence à mesma informação.

---

# 22. Hierarquia através da quantidade de conteúdo

Posts secundários podem possuir menos informação.

Post principal:

```text
Imagem
Categoria
Título
Resumo
Autor
Data
Tempo de leitura
```

Post secundário:

```text
Imagem
Título
Autor
Data
```

Isso cria hierarquia naturalmente.

### Quanto menos informação + menor tipografia → menor importância percebida.

---

# 23. Destaque visual

O post principal também pode receber elementos adicionais:

- estrela;
    
- badge;
    
- label;
    
- indicador de destaque.
    

Esses elementos ajudam a comunicar:

> "Este conteúdo merece atenção."

Mas devem ser adicionados posteriormente, depois que a estrutura estiver resolvida.

---

# 24. Padding dos cards

Um padrão de padding foi utilizado:

**32 px**

Exemplo:

```text
┌──────────────────────────┐
│ ← 32px                   │
│                          │
│      CONTEÚDO            │
│                          │
│                   32px → │
└──────────────────────────┘
```

O mesmo padrão deve ser aplicado aos cards sempre que possível.

---

# 25. Consistência > regra absoluta

Um ponto muito importante da aula:

> O grid de 8 pontos não deve ser seguido de maneira irracional.

Se determinado elemento funciona melhor com um valor intermediário, pode ser necessário utilizá-lo.

Porém:

### Se você sair do sistema, documente.

Por exemplo, se o Style Guide possui:

```text
H1 → 64
H2 → 48
H3 → 40
H4 → 36
```

e você percebe que precisa de:

```text
32 px
```

É melhor adicionar/documentar esse tamanho no sistema do que simplesmente criar valores aleatórios em cada tela.

Isso facilita muito a vida do desenvolvedor.

---

# 26. Cards menores

Nos cards menores, a quantidade de conteúdo deve ser reduzida.

Pode ficar apenas:

```text
Título
Data
```

ou:

```text
Título
Autor
Data
```

O objetivo é preservar espaço para a imagem.

### Regra importante

> **Não deixe o conteúdo textual consumir tanto espaço que a imagem deixe de cumprir sua função.**

Se o card representa visualmente um artigo, a imagem precisa continuar sendo perceptível.

---

# 27. Adaptação dos espaçamentos

Cards menores podem exigir ajustes.

Exemplo:

Card grande:

**24 px**

Card pequeno:

**20–22 px**

Isso não significa abandonar o sistema.

Significa adaptar o sistema ao contexto.

O mais importante é:

- consistência;
    
- legibilidade;
    
- hierarquia;
    
- equilíbrio.
    

---

# 28. Alternância entre tipos de seção

A página não deve ser uma sequência infinita de imagens e cards.

Uma estratégia interessante é alternar os tipos de conteúdo:

```text
Hero / Introdução
        ↓
Posts destacados — imagem
        ↓
Seção textual
        ↓
Novas imagens
        ↓
Recent Posts
        ↓
Cards menores
```

Isso cria **ritmo visual**.

Uma seção predominantemente fotográfica pode ser seguida por uma seção tipográfica para dar descanso visual.

---

# 29. Recent Posts e Trending Topics

Outra referência apresentada utiliza:

### Recent Posts

Uma grade com posts recentes.

### Trending Topics

Labels ou categorias que indicam assuntos em alta.

Esse padrão pode enriquecer a página e ajudar na descoberta de conteúdo.

---

# 🧠 Conceitos principais da aula

Se você precisar memorizar somente o essencial:

### 1. Wireframe é estrutura, não estética

> Primeiro descubra **o que existe e onde fica**. Depois descubra como será bonito.

### 2. Pense em componentes

> Tudo que se repete deve ser pensado como componente.

### 3. Pense em caixas

> Cada bloco visual pode posteriormente virar uma `div`, componente ou seção.

### 4. Use o grid

> Grid e espaçamento dão consistência e facilitam o desenvolvimento.

### 5. Espaçamento comunica relacionamento

> Elementos relacionados ficam próximos; elementos de funções diferentes ficam mais afastados.

### 6. Hierarquia não é só tamanho

Ela pode ser construída através de:

**tamanho + peso + cor + espaço + quantidade de informação.**

### 7. Pesquise quando faltar referência

> Pesquisa não é copiar. É descobrir padrões e desbloquear possibilidades.

### 8. Consistência acima de rigidez

> O sistema de 8 pontos é uma base, não uma prisão.

### 9. Pense no desenvolvedor

> Um bom wireframe já começa a antecipar como aquela interface será estruturada em HTML/CSS/React.

---

# 🛠️ Aplicação prática no seu projeto

Essa aula é **especialmente importante para o seu projeto de cinema**, porque você já estava pensando em uma estrutura de storytelling.

A lógica que você pode carregar daqui é:

```text
Pesquisa
   ↓
Page Map
   ↓
Wireframe Low-Fi
   ↓
Hierarquia
   ↓
Wireframe refinado
   ↓
UI
   ↓
Protótipo
   ↓
Desenvolvimento
```

E, principalmente:

**não pule direto para a UI bonita.**

Para o seu projeto, primeiro podemos definir as "caixinhas":

```text
LANDING
│
├── Navbar
│
├── Hero
│
├── Destaque principal
│
├── Outros filmes
│
├── Seção narrativa
│
├── Catálogo
│
└── Footer
```

Depois cada uma dessas caixas pode ser quebrada em componentes menores.

---

# 📝 Checklist da aula

-  Entendi o propósito de um wireframe de baixa fidelidade.
    
-  Sei diferenciar estrutura de estética.
    
-  Sei utilizar o grid durante o wireframe.
    
-  Entendi a importância dos componentes no Figma.
    
-  Entendi a relação entre espaçamento e hierarquia.
    
-  Sei que links com mesma função devem possuir mesma hierarquia.
    
-  Entendi a importância do padding consistente.
    
-  Entendi como criar hierarquia entre posts.
    
-  Entendi como utilizar pesquisa para encontrar referências.
    
-  Entendi o conceito de "pensar em caixinhas".
    
-  Entendi como o wireframe pode facilitar a implementação em CSS/Flexbox.
    
-  Entendi que o grid de 8 pontos é uma referência, não uma regra absoluta.
    
-  Entendi a importância de alternar tipos de seção para criar ritmo visual.
    

## 🔑 Frase para guardar

> **"No wireframe eu não estou desenhando a aparência da interface; estou desenhando a estrutura que vai sustentar a experiência."**