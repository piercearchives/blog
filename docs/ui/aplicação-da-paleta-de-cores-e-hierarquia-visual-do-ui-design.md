🎨 Aplicação da Paleta de Cores e Hierarquia Visual no UI Design

> [!abstract] O que você vai aprender  
> Nesta aula, vamos entender **como aplicar uma paleta de cores em uma interface de forma intencional**, utilizando a regra **60/30/10**, contraste, hierarquia visual, consistência e acessibilidade.
> 
> O objetivo não é simplesmente escolher cores bonitas, mas fazer com que **cada cor tenha uma função dentro da interface** — especialmente em uma interface neutra, onde o conteúdo deve ser mais importante do que o próprio design.

---

## 🧭 1. O ponto de partida: uma interface neutra

Antes de escolher as cores, existe uma decisão de design:

> **A interface não deve competir com o conteúdo que ela apresenta.**

No projeto da aula, a intenção é criar uma plataforma de blog onde os **posts e trabalhos publicados sejam o centro das atenções**.

A interface, portanto, deve funcionar como um **palco** para o conteúdo.

Um bom exemplo citado na aula é o Dribbble.

A interface do Dribbble tende a ser bastante neutra:

- fundo claro;
- elementos pouco saturados;
- poucos pontos de cor;
- destaque pontual para ações importantes.

Isso evita que o usuário fique prestando atenção no site em si quando deveria estar olhando para os trabalhos publicados.

### 💡 Insight

> **Quanto mais importante for o conteúdo, menos a interface deve competir visualmente com ele.**

Isso não significa criar uma interface sem personalidade.

Significa **controlar onde a personalidade aparece**.

---

# 🎨 2. A regra 60/30/10

Uma das principais ferramentas utilizadas para organizar a aplicação das cores é a chamada:

> **Regra 60/30/10**

Ela determina aproximadamente como distribuir três cores principais dentro de uma composição:

|Proporção|Função|
|---|---|
|**60%**|Cor dominante|
|**30%**|Cor secundária|
|**10%**|Cor de destaque|

Essa regra não é exclusiva de UI Design.

Ela também aparece em áreas como:

- design de interiores;
- composição visual;
- decoração;
- outras formas de composição de cores.

### ⚠️ Não transforme a regra em matemática literal

Um erro seria pensar:

> "Preciso medir exatamente 60% dos pixels da minha interface."

**Não é essa a ideia.**

A proporção serve como uma **referência visual**.

O princípio é perceber que:

> **Uma cor deve dominar, outra deve sustentar a composição e uma terceira deve aparecer de maneira muito mais controlada.**

---

# 🌑 3. Aplicando 60/30/10 ao projeto

A interface desenvolvida na aula é **dark**.

Por isso, a distribuição escolhida é aproximadamente:

```
60% → fundo escuro
30% → branco / tons claros
10% → azul de destaque
```

Visualmente:

```
████████████████████████████████  60% — Fundo
███████████████                   30% — Branco / elementos claros
█████                             10% — Azul / destaque
```

Novamente: isso representa uma **relação visual**, e não uma medição exata.

---

# 🌑 4. Os 60%: o plano de fundo

A maior parte da interface é destinada ao fundo.

E isso tem uma função importante:

> **Reduzir a quantidade de informação visual competindo pela atenção.**

Quando o fundo é relativamente simples e uniforme, o olhar tende a se concentrar nos elementos que possuem maior contraste ou importância.

Isso cria **hierarquia visual**.

### Hierarquia através da ausência

Um fundo muito chamativo pode acabar disputando atenção com:

- títulos;
- imagens;
- botões;
- cards;
- CTAs;
- conteúdo.

Um fundo mais controlado faz o contrário:

> **Ele cria espaço para os elementos importantes aparecerem.**

---

# ⚪ 5. Os 30%: branco e tons de cinza

Os 30% restantes não significam necessariamente "30% de branco puro".

A interface utiliza uma **escala de tons claros**.

### Branco

O branco é utilizado principalmente para elementos de maior importância, como:

- títulos;
- headings;
- informações principais.

### Cinza

O cinza possui uma hierarquia menor.

É utilizado principalmente para:

- corpo de texto;
- informações secundárias;
- conteúdos que precisam ser lidos, mas não precisam chamar tanta atenção.

Isso cria uma relação:

```
BRANCO
  ↓
Maior destaque

CINZA
  ↓
Menor destaque

FUNDO
  ↓
Menor presença visual
```

### 🧠 O princípio

Não precisamos utilizar apenas tamanho de fonte para criar hierarquia.

Podemos utilizar **cor + contraste**.

Por exemplo:

> **Título branco grande**  
> Corpo de texto cinza menor

Mesmo que ambos estejam presentes na mesma região, o título naturalmente recebe maior atenção.

---

# 🔵 6. Os 10%: a cor de destaque

Aqui entra o elemento mais importante da paleta:

> **A accent color / cor de destaque.**

No projeto, essa cor é o **azul da identidade visual**.

E existe uma regra muito importante:

> **Quanto mais destaque você quer dar a um elemento, mais estrategicamente você pode utilizar a cor de destaque.**

O azul não deve aparecer em todos os lugares.

Se tudo estiver azul, **nada será realmente destaque**.

---

# 🎯 7. Cor de destaque deve ser usada cirurgicamente

A aplicação do azul na interface acontece em **pontos específicos**.

Por exemplo:

- botão de login;
- CTA;
- categoria de um post;
- elementos que precisam chamar atenção;
- ações importantes.

Na landing page, os principais pontos de conversão recebem o azul.

Por exemplo:

> **Começar a escrever**

Esse botão representa uma ação importante para o usuário.

Portanto, recebe uma cor que chama atenção.

### O raciocínio é:

```
Fundo
↓
Cria o ambiente

Branco
↓
Apresenta informação importante

Cinza
↓
Apresenta informação secundária

Azul
↓
Diz ao usuário:
"OLHE AQUI"
```

---

# 🧭 8. Hierarquia visual através da cor

A aula apresenta uma relação importante entre as cores utilizadas:

```
AZUL
↑
Maior destaque

BRANCO
↑
Destaque alto

CINZA
↑
Destaque moderado

FUNDO
↑
Menor destaque
```

Isso significa que **cor também é uma ferramenta de hierarquia**.

Não é necessário colocar uma seta, aumentar tudo ou adicionar animações para dizer ao usuário onde olhar.

O contraste entre as cores já pode conduzir o olhar.

---

# ⚡ 9. Contraste: a cor de destaque precisa realmente destacar

Aqui existe uma armadilha.

Não basta escolher uma cor e chamá-la de "cor de destaque".

Ela precisa **funcionar visualmente sobre o fundo**.

Imagine escolher um azul extremamente escuro para colocar sobre um fundo igualmente escuro.

Você teria:

```
Fundo escuro
+
Azul escuro
=
Pouco contraste
```

Consequentemente, o elemento deixa de cumprir sua função.

### Portanto:

> **A cor de destaque precisa apresentar contraste suficiente com os contextos em que será utilizada.**

A aula chama atenção principalmente para:

- **brilho (brightness/value)**;
- **saturação**;
- contraste entre a cor e o fundo.

---

# 🎚️ 10. Brilho e saturação importam

Ao definir uma cor, não devemos olhar apenas para o **matiz (hue)**.

Precisamos observar também suas outras características.

De forma simplificada:

```
Matiz
→ Qual é a cor?

Saturação
→ Quão intensa é essa cor?

Brilho/valor
→ Quão clara ou escura ela é?
```

Uma cor pode ter o matiz correto para a identidade da marca e ainda assim **não funcionar como cor de destaque**.

Por isso:

> **Brand color ≠ automaticamente uma boa accent color para qualquer contexto.**

Ela precisa ser testada dentro da interface.

---

# 🖥️ 11. A aplicação real na landing page

A home do projeto funciona parcialmente como uma **landing page**.

Ela possui duas funções:

### 1. Apresentar o produto

O usuário precisa entender rapidamente:

> O que é esse site?

A seção hero responde isso com:

> **"Um blog para todos."**

E complementa com:

> **"Escrever, ler, comentar, contribuir, aprender, conectar."**

### 2. Convidar para uma ação

Depois de entender o produto, o usuário recebe um CTA:

> **Começar a escrever**

Esse CTA direciona o usuário para o login/cadastro.

---

# 🎯 12. A cor ajuda a conduzir o usuário

Perceba a estratégia:

O texto pode explicar o que o produto faz.

Mas o azul ajuda a responder:

> **"O que eu devo fazer agora?"**

Isso transforma a cor em uma ferramenta de **orientação**, não apenas decoração.

Por isso o azul aparece em elementos como:

- login;
- cadastro;
- CTA;
- categorias;
- pequenos pontos de informação.

---

# 📰 13. Hierarquia dentro dos posts

A mesma lógica aparece nos posts do blog.

Por exemplo:

```
Categoria → Azul
Título → Branco
Corpo → Cinza
```

A categoria recebe azul, mas possui tamanho menor.

O título recebe branco e possui maior presença tipográfica.

Assim, o tamanho e a cor trabalham juntos.

### Um exemplo do raciocínio:

> **CATEGORIA**  
> pequena + azul
> 
> **Título do post**  
> grande + branco

Embora o azul seja uma cor de destaque, o título continua possuindo maior importância visual por causa da combinação:

**tamanho + peso + contraste + posição.**

---

# 🧠 14. Hierarquia não depende de uma única propriedade

Esse é um dos pontos mais importantes da aula.

Você não cria hierarquia simplesmente dizendo:

> "Azul = importante."

A hierarquia é construída através da combinação de várias características:

- cor;
- contraste;
- tamanho;
- peso tipográfico;
- posição;
- espaçamento;
- contexto.

Por isso, um elemento azul pequeno pode ter **menos importância visual** que um título branco enorme.

### 💡 Insight

> **Hierarquia visual é relativa.**

O elemento mais chamativo nem sempre é o elemento mais importante.

---

# ♻️ 15. Consistência: a regra precisa se repetir

Depois de estabelecer a paleta, ela deve ser aplicada de maneira consistente.

Se:

> Azul = ação importante

Então o usuário começa a aprender isso.

Quando ele encontrar outro elemento azul posteriormente, já existe uma expectativa:

> "Isso provavelmente é algo em que posso clicar ou algo importante."

Essa consistência reduz o esforço cognitivo.

---

# 🔵 16. O azul não é apenas uma cor: ele possui uma função

Uma forma interessante de pensar na paleta do projeto é criar um **vocabulário visual**:

|Elemento|Função visual|
|---|---|
|Fundo escuro|Ambiente / base|
|Branco|Informação principal|
|Cinza|Informação secundária|
|Azul|Ação / destaque|

Isso transforma a paleta em um **sistema**.

E sistemas são muito mais úteis em UI Design do que simplesmente escolher algumas cores bonitas.

---

# 🌌 17. O fundo não é preto puro

Aqui aparece uma decisão de design especialmente interessante.

O fundo parece preto, mas **não é um preto puro**.

Ele possui uma tonalidade azulada.

A ideia é utilizar um:

> **preto saturado de azul**

Isso faz com que a interface tenha maior harmonia com a própria cor de branding.

---

# 🎨 18. Brand color + fundo compartilham o mesmo matiz

A cor de branding utilizada no projeto possui um matiz próximo de:

> **H = 214°**

Já o fundo possui um matiz próximo de:

> **H = 220°**

Ou seja:

```
Brand color → ~214°
Fundo       → ~220°
```

As duas cores estão muito próximas no círculo cromático.

Consequentemente, existe uma relação visual entre elas.

### Resultado

Em vez de:

```
PRETO PURO
+
AZUL
```

temos:

```
AZUL ESCURO
+
AZUL
```

Isso cria uma sensação de maior **harmonia cromática**.

---

# 🌑 19. Por que não usar preto puro?

Um preto completamente neutro poderia funcionar.

Mas, nesse projeto, utilizar um fundo levemente azulado permite criar uma identidade visual mais coerente.

A interface deixa de ser simplesmente:

> preto + branco + azul

e passa a ser uma composição baseada em uma **mesma família cromática**.

Isso é especialmente interessante em interfaces dark.

---

# 🎚️ 20. Trabalhando com variações da mesma cor

A mesma lógica é aplicada aos componentes.

O fundo é o tom mais escuro.

Já elementos como:

- cards;
- inputs;
- containers;

recebem **variações um pouco mais claras do mesmo azul**.

Visualmente:

```
Fundo
████████████
Azul muito escuro

Cards
██████████
Azul escuro ligeiramente mais claro

Brand
██████
Azul de destaque
```

Tudo permanece dentro da mesma família cromática.

### Resultado

Você consegue criar profundidade e separação entre componentes **sem precisar introduzir várias cores diferentes**.

---

# 🧩 21. Isso cria harmonia

A paleta passa a funcionar como um sistema:

```
           🔵 Brand
              │
              │
      ┌───────┴───────┐
      │               │
 Fundo azulado    Componentes
      │               │
      └───────┬───────┘
              │
          Mesma família
           cromática
```

O fundo, os cards, os inputs e a cor de branding possuem uma relação cromática.

Isso evita que a interface pareça uma coleção aleatória de cores.

---

# ♿ 22. Acessibilidade: contraste vem antes da estética

Um dos pontos mais importantes da aula é:

> **Não podemos escolher cores pensando somente em estética.**

Uma interface precisa funcionar para pessoas com diferentes condições visuais.

O professor cita como exemplo pessoas que podem ter problemas de visão, como catarata.

Portanto:

> **Sempre devemos buscar contraste suficiente entre texto/elementos e seus respectivos fundos.**

Isso é especialmente importante em uma interface dark.

---

# ⚠️ 23. Não clareie o fundo sem necessidade

Existe uma tendência de pensar:

> "Vou deixar o fundo um pouquinho mais claro para ficar mais bonito."

Mas isso pode diminuir o contraste disponível para outros elementos.

A estratégia apresentada é trabalhar com extremos:

> **Fundo muito escuro + elementos claros.**

Isso cria uma grande margem para trabalhar com variações intermediárias.

---

# 🪜 24. O fundo como ponto extremo da escala

Quando o fundo está muito escuro, podemos criar diferentes níveis acima dele:

```
Mais claro
│
├── Cards
├── Inputs
├── Containers
├── Elementos secundários
├── Texto
└── Fundo
Mais escuro
```

Isso cria uma espécie de **escada de profundidade e hierarquia**.

E tudo pode continuar dentro da mesma família azul.

---

# 🔗 25. Conectando tudo: a lógica completa da paleta

Podemos resumir o sistema desenvolvido na aula assim:

```
                  PALETA
                    │
          ┌─────────┴─────────┐
          │                   │
      BASE NEUTRA          DESTAQUE
          │                   │
       60 / 30               10%
          │                   │
    ┌─────┴─────┐             │
    │           │             │
  Fundo       Texto          Azul
    │           │             │
  Escuro    Branco/Cinza    CTAs
    │                         │
    └──────────┬──────────────┘
               │
        HIERARQUIA VISUAL
               │
          CONTRASTE
               │
          CONSISTÊNCIA
               │
         ACESSIBILIDADE
```

A paleta não existe isoladamente.

Ela está conectada a vários princípios de UI Design.

---

# 🧠 O que você realmente precisa guardar

> [!important] 5 princípios da aula

### 1. A interface deve servir ao conteúdo

Se o conteúdo é o protagonista, a interface precisa evitar competir com ele.

### 2. 60/30/10 é uma referência, não uma fórmula matemática

Use a proporção para organizar a presença visual das cores, não para medir pixels.

### 3. A cor pode criar hierarquia

Azul, branco, cinza e fundo podem representar diferentes níveis de importância.

### 4. Accent color precisa ser usada com intenção

Se você usa a cor de destaque em tudo, ela deixa de ser destaque.

### 5. Contraste e acessibilidade vêm antes da estética

Uma cor bonita que não funciona sobre o fundo **não é uma boa escolha para aquele contexto**.

---

# ⚠️ Erros que essa aula quer que você evite

- ❌ Medir literalmente 60/30/10 na interface.
- ❌ Usar a cor de branding em absolutamente tudo.
- ❌ Escolher uma accent color com pouco contraste.
- ❌ Usar preto puro automaticamente em toda interface dark.
- ❌ Utilizar cores diferentes sem relação cromática.
- ❌ Criar hierarquia somente através do tamanho.
- ❌ Ignorar acessibilidade em favor da estética.
- ❌ Alterar a função visual de uma cor entre diferentes partes da interface.
- ❌ Fazer todos os elementos competirem pela atenção.

---

# 🔍 Como analisar uma interface a partir dessa aula

Quando você olhar para qualquer UI daqui para frente, tente fazer estas perguntas:

### 🎨 Sobre a paleta

- Qual é a cor dominante?
- Qual é a cor secundária?
- Qual é a accent color?
- Aproximadamente qual seria a proporção 60/30/10?

### 👁️ Sobre hierarquia

- O que meus olhos enxergam primeiro?
- Por quê?
- É tamanho?
- É contraste?
- É cor?
- É posição?
- É peso tipográfico?

### 🔵 Sobre a accent color

- Onde ela aparece?
- Por que aparece justamente ali?
- Ela está indicando uma ação?
- Está destacando informação?
- Está sendo utilizada em excesso?

### ♿ Sobre acessibilidade

- O texto possui contraste suficiente?
- Os elementos importantes continuam perceptíveis?
- O fundo permite trabalhar com outras tonalidades?

---

# 🧪 Teste de compreensão

> [!question] Tente responder sem olhar acima

**1. Qual é o objetivo principal de uma interface neutra?**

<details> <summary>Resposta</summary>

Evitar que a própria interface compita com o conteúdo. O objetivo é fazer com que o usuário concentre sua atenção naquilo que está sendo apresentado.

</details>

**2. O que significa 60/30/10?**

<details> <summary>Resposta</summary>

Uma referência para distribuir visualmente as cores: aproximadamente 60% de uma cor dominante, 30% de uma secundária e 10% de uma cor de destaque.

</details>

**3. Por que não devemos usar a accent color em todos os lugares?**

<details> <summary>Resposta</summary>

Porque ela perderia sua capacidade de chamar atenção. Se tudo possui destaque, nada possui destaque.

</details>

**4. Por que o fundo do projeto não é preto puro?**

<details> <summary>Resposta</summary>

Porque ele possui uma tonalidade azulada próxima ao matiz da brand color. Isso cria uma relação cromática mais harmoniosa entre o fundo e a identidade visual.

</details>

**5. Como o cinza ajuda na hierarquia?**

<details> <summary>Resposta</summary>

Ele reduz a presença visual de informações secundárias, como o corpo de texto, permitindo que títulos e informações principais em branco tenham maior destaque.

</details>

**6. Por que contraste é tão importante?**

<details> <summary>Resposta</summary>

Porque garante que os elementos permaneçam perceptíveis e legíveis, inclusive para pessoas com diferentes limitações visuais. Além disso, o contraste é fundamental para estabelecer hierarquia.

</details>

---

# 🧠 A ideia central da aula

> [!tip] Se você lembrar de apenas uma coisa  
> **Não escolha cores apenas porque elas são bonitas. Defina o papel de cada cor dentro da interface.**
> 
> Uma boa paleta não é apenas um conjunto de cores: é um **sistema de hierarquia, atenção, consistência e identidade visual**.

---

# 🔗 Conexões com as aulas anteriores

Esta aula aproveita diretamente conceitos que já estavam sendo estabelecidos no projeto:

- **Grid** → organiza espacialmente a interface.
- **Tipografia** → cria hierarquia através de tamanho, peso e contraste.
- **Cores** → adicionam hierarquia, identidade e direcionamento.
- **Style Guide** → transforma essas decisões em padrões reutilizáveis.
- **Consistência** → faz com que as mesmas regras sejam repetidas pela interface.
- **Acessibilidade** → garante que essas escolhas funcionem para diferentes usuários.

Ou seja, o objetivo começa a mudar de:

> **"Como faço uma tela bonita?"**

para:

> **"Como crio um sistema visual consistente que consiga se repetir em todas as telas?"**

Esse é um passo importante na evolução do UI Design.

---

# 🚀 Aplicação prática

Ao criar sua própria interface, tente estabelecer primeiro:

```
1. Qual é o objetivo da interface?
        ↓
2. O conteúdo deve ser protagonista?
        ↓
3. Qual será a cor dominante?
        ↓
4. Qual será a cor secundária?
        ↓
5. Qual será a accent color?
        ↓
6. Onde a accent color terá permissão para aparecer?
        ↓
7. Como vou criar níveis de hierarquia?
        ↓
8. O contraste é suficiente?
        ↓
9. As mesmas regras permanecem consistentes?
```

**A grande mudança de mentalidade é essa:** você não está mais "colorindo uma interface". Você está **projetando um sistema de comunicação visual**.