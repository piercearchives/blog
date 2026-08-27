# UI Design — Responsividade, Acessibilidade e Grid

## 1. Responsividade depende do contexto

Uma interface **não precisa ser responsiva em absolutamente todos os projetos**.

A decisão depende de **como e onde a aplicação será utilizada**.

### Exemplo: Dashboard interno

Imagine um sistema utilizado apenas pelos funcionários de uma empresa, em computadores:

- com a mesma configuração;
- com a mesma resolução;
- em um ambiente controlado.

Nesse caso, criar uma interface totalmente responsiva pode ser trabalho desnecessário.

> **Princípio:** não devemos gastar esforço em soluções que o contexto do projeto não exige.

Já um **blog** possui um público muito mais amplo, utilizando diferentes dispositivos e resoluções. Portanto, nesse caso, a responsividade é necessária.

---

# 2. Responsividade e acessibilidade

Ao projetar uma interface responsiva, precisamos pensar em:

- diferentes resoluções;
- diferentes dispositivos;
- grids;
- espaçamentos;
- breakpoints;
- usabilidade;
- acessibilidade.

O objetivo não é criar dezenas de versões da interface.

O ideal é encontrar uma estrutura que:

> **Atenda a maior quantidade possível de telas utilizando a menor quantidade possível de breakpoints.**

Isso reduz:

- tempo de desenvolvimento;
- complexidade;
- retrabalho;
- dificuldade de manutenção.

E facilita tanto o trabalho do **UI Designer** quanto do **desenvolvedor**.

---

# 3. Pesquisar dados antes de definir o grid

Não devemos simplesmente escolher resoluções e breakpoints "no chute".

A aula apresenta o **StatCounter** como ferramenta para descobrir quais resoluções são mais utilizadas.

Site citado na aula:

`gs.statcounter.com`

Ele permite analisar dados por:

- região;
- país;
- dispositivo;
- plataforma;
- resolução.

### Exemplo apresentado

Na análise da América do Sul, a aula apresenta:

|Resolução|Participação apresentada|
|---|---|
|1366 × 768|~36%|
|1920 × 1080|~17,73%|
|1440 × 900|aparece entre as principais|
|1600 × 900|aparece entre as principais|
|1280 × 720|~4,13%|

Ao analisar especificamente o Brasil e todas as plataformas, também aparecem resoluções mobile como:

- **360 × 640** → Android;
- **412 × 915** → próxima de dispositivos iPhone.

### O que devemos tirar desses dados?

Antes de criar o layout, podemos descobrir:

> **Quais dispositivos e resoluções representam a maior parcela do público do projeto?**

A partir disso, podemos tomar decisões mais assertivas sobre:

- grid;
- containers;
- breakpoints;
- espaçamentos;
- responsividade.

---

# 4. Container geral ≠ container de leitura

Um ponto muito importante para interfaces com bastante texto:

> **O container da interface não precisa ser igual à largura da coluna de texto.**

A aula utiliza o **G1** como exemplo.

A página possui um container geral mais amplo, mas a coluna onde o texto da notícia é apresentado é **mais estreita**.

Isso acontece porque textos muito largos são mais cansativos de ler.

### Por quê?

Uma linha muito longa possui muitas palavras.

Isso dificulta:

- acompanhar a leitura;
- encontrar o início da próxima linha;
- manter o foco;
- realizar o padrão de leitura característico de páginas de conteúdo.

Por isso:

> **Em interfaces focadas em leitura, é interessante limitar a largura do texto.**

O exemplo apresentado possui aproximadamente **8–9 palavras grandes por linha**.

---

# 5. Grid Desktop utilizado no projeto

Para o projeto apresentado na aula, foi escolhido um grid intermediário capaz de funcionar bem nas principais resoluções.

### Configuração apresentada

**Container:**

- `1216px`

**Colunas:**

- `72px`

**Gutter:**

- `32px`

Esse grid funciona especialmente bem nas resoluções intermediárias, como:

- 1366 × 768;
- 1440 × 900;
- 1920 × 1080.

A ideia é encontrar um **meio-termo** entre telas menores e maiores.

---

# 6. Responsividade fluida

Para telas maiores, como:

- Quad HD;
- 16:10;
- 4K;

é possível utilizar uma abordagem de **responsividade fluida**.

A ideia é:

> Manter a estrutura do container, mas permitir que ele se expanda para aproveitar melhor telas maiores.

Porém, segundo a aula, ainda pode ser necessário utilizar **outro breakpoint** para essas resoluções.

---

# 7. Grid Mobile

A aula também apresenta configurações específicas para dispositivos móveis.

### iPhone 13 Pro

- Coluna: `70px`
- Gutter: `18px`
- Margem: `28px`

### iPhone 11 / Pro

- Coluna: `70px`
- Gutter: `18px`
- Margem: `21px`

### Android

- Coluna: `64px`
- Gutter: `18px`
- Margem: aproximadamente `24–25px`

A intenção é aproveitar padrões já utilizados pelos **design systems da Apple e do Android**, evitando retrabalho.

---

# 8. Principais conceitos para memorizar

### Responsividade

Não é criar uma versão para cada resolução.

É construir uma interface capaz de **se adaptar a diferentes contextos com eficiência**.

### Acessibilidade

É pensar em uma interface que possa ser utilizada por uma parcela maior de pessoas e dispositivos.

### Grid

É a estrutura que organiza o conteúdo da interface.

### Breakpoint

É um ponto em que o layout precisa mudar para se adaptar a outro contexto/tamanho de tela.

### Container

Define a área disponível para organizar o conteúdo.

### Gutter

É o espaço entre as colunas do grid.

### Responsividade fluida

Mantém a estrutura do layout, mas permite que determinadas áreas se expandam conforme o espaço disponível.