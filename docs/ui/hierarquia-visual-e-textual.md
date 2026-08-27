# 🎨 UI Design — Hierarquia Visual e Textual

> **Aula:** UI Design — Parte 2  
> **Tema:** Hierarquia Visual e Textual  
> **Objetivo:** Relembrar os princípios que determinam a importância dos elementos de uma interface e entender como eles serão aplicados ao Blog.

---

## 🧠 1. O que é hierarquia visual?

**Hierarquia visual** é a forma de **determinar o nível de importância dos elementos dentro de uma interface**.

Quanto mais informação existe na tela, mais importante se torna estabelecer uma boa hierarquia.

Isso é especialmente importante no projeto do **Blog**, porque interfaces de leitura possuem uma grande quantidade de texto.

### 🎯 Objetivo principal

A hierarquia deve permitir que o usuário:

1. Identifique rapidamente o que é mais importante;
2. Decida se determinado conteúdo é relevante;
3. Saiba onde continuar lendo;
4. Consuma a informação sem precisar "procurar" o que interessa.

> **Regra de ouro:** não basta posicionar elementos. É preciso saber **por que** eles estão naquela posição, tamanho, cor ou formato.

---

# 🔢 2. Os 4 pilares da hierarquia visual

A aula estabelece **quatro formas principais** de criar hierarquia:

|Pilar|Ideia principal|
|---|---|
|📏 **Tamanho**|Maior → tende a chamar mais atenção|
|🔷 **Forma**|Diferente → cria contraste|
|📍 **Posição**|Primeiro/mais à esquerda/acima → tende a ser percebido antes|
|🎨 **Cor / Contraste**|Maior contraste → maior destaque|

---

## 📏 2.1 Tamanho

> **Aquilo que é maior tende a ser visto primeiro.**

Se existem vários elementos pequenos e apenas um grande, naturalmente o elemento maior recebe mais atenção.

### Aplicação

Em um portal de notícias, por exemplo:

```
┌─────────────────────────────────────┐
│                                     │
│        NOTÍCIA PRINCIPAL             │
│        █████████████████             │
│                                     │
├──────────────┬──────────────────────┤
│ notícia      │ notícia              │
│ menor        │ menor                │
└──────────────┴──────────────────────┘
```

A notícia principal ocupa mais espaço → **possui maior peso visual**.

---

# 📍 2.2 Posição

A posição também determina a ordem de percepção.

Em interfaces ocidentais, normalmente lemos **da esquerda para a direita**, portanto elementos posicionados mais à esquerda tendem a ser percebidos primeiro.

### Exemplo

Se temos:

```
[ ELEMENTO PRINCIPAL ]   [ menor ]
                         [ menor ]
```

O primeiro elemento recebe mais atenção porque combina:

- maior tamanho;
- posição à esquerda;
- maior espaço visual.

➡️ **Vários princípios podem trabalhar juntos.**

---

# 🔷 2.3 Forma

Uma forma diferente em meio a várias formas iguais cria **contraste visual**.

Exemplo clássico citado na aula:

```
□ □ □ □ □
□ □ ○ □ □
□ □ □ □ □
```

O círculo chama atenção porque é diferente dos quadrados.

### 📱 Exemplo: Instagram

O Instagram utiliza esse princípio nos Stories:

- formato circular;
- posição de destaque;
- elemento colorido;
- contraste em relação ao restante da interface.

A combinação desses fatores incentiva o usuário a olhar e interagir com aquela área.

> **Diferença gera atenção.**

---

# 🎨 2.4 Cor e contraste

Quanto maior o contraste de um elemento em relação ao restante da interface, maior tende a ser sua capacidade de chamar atenção.

Exemplo:

```
████████████████
████████ ● █████
████████████████
```

Uma pequena forma contrastante em um ambiente uniforme se destaca imediatamente.

No Blog, isso será utilizado principalmente na **tipografia**.

---

# 📝 3. Hierarquia tipográfica

Como o Blog possui muito conteúdo textual, a hierarquia tipográfica é especialmente importante.

A ideia é criar diferentes níveis de importância:

```
POSTS RECENTES        ← maior importância

Título do post        ← destaque

Pequeno resumo        ← menor destaque

Ler mais              ← ação secundária
```

O usuário consegue "escancear" a interface e decidir rapidamente o que deseja consumir.

---

## 🌑 Exemplo utilizado no Blog

Como o fundo da interface é próximo do preto:

### Headline

```
BRANCO
↑
alto contraste
↑
maior destaque
```

### Corpo

```
CINZA
↓
menor contraste
↓
menor destaque
```

A headline chama a atenção primeiro. Se o usuário tiver interesse, ele continua para a descrição e posteriormente para o conteúdo completo.

---

# 📐 4. Hierarquia através do tamanho + cor

A aula mostra que podemos utilizar **mais de um princípio simultaneamente**.

Por exemplo:

### Título

- H5
- **24px**
- Branco
- Maior contraste

### Corpo

- **16px**
- Escala de cinza
- Menor contraste

Assim temos:

**Hierarquia por tamanho + hierarquia por cor.**

> 💡 **Importante:** hierarquia não precisa depender de apenas uma característica. Podemos combinar tamanho, posição, forma e contraste para tornar a importância de um elemento ainda mais evidente.

---

# 🧭 5. Hierarquia ≠ apenas estética

Esse é provavelmente um dos pontos **mais importantes da aula**.

A hierarquia existe para **facilitar a vida do usuário**.

O usuário não deveria precisar analisar a interface para descobrir:

> "Onde eu devo olhar?"

A própria interface deve responder isso visualmente.

### Exemplo do fluxo do Blog

```
POSTS RECENTES
      ↓
Título do post
      ↓
Resumo
      ↓
"Leia mais"
      ↓
Conteúdo completo
```

Cada nível fornece **apenas a quantidade de informação necessária naquele momento**.

---

# 🧩 6. Como isso aparece no layout do Blog?

A notícia/post principal recebe maior importância através de:

- 📏 **Maior tamanho**
- 📍 **Posicionamento à esquerda**
- 📝 **Tipografia maior**
- 🎨 **Maior contraste**
- 🖼️ Eventual destaque visual da imagem

Enquanto posts secundários podem ser:

- menores;
- posicionados à direita;
- possuir tipografia menor;
- utilizar menos contraste.

Visualmente:

```
┌─────────────────────────────────────────────┐
│                                             │
│  POST PRINCIPAL        POST     POST       │
│  GRANDE                menor    menor      │
│                                             │
│  Título grande         título    título     │
│  Resumo                resumo    resumo     │
│                                             │
└─────────────────────────────────────────────┘
```

O usuário entende imediatamente:

**"Esse é o conteúdo principal."**

---

# 🧠 7. Regra prática para lembrar

Quando estiver desenhando uma interface, pergunte:

> **"O que eu quero que o usuário veja primeiro?"**

Depois:

> **"Como posso fazer esse elemento ganhar importância visual?"**

Você pode utilizar:

### 📏 Tamanho

**Maior = mais atenção**

### 📍 Posição

**Primeiro / esquerda / acima = maior prioridade perceptiva**

### 🔷 Forma

**Diferente = chama atenção**

### 🎨 Contraste

**Mais contraste = mais destaque**

---

# ⚡ Resumo para revisão

> **Hierarquia visual = determinar a importância dos elementos.**

Ela é construída principalmente através de:

**Tamanho + Forma + Posição + Cor/Contraste**

E no caso de interfaces com muito conteúdo, como **blogs e dashboards**, uma boa hierarquia é fundamental para que o usuário consiga consumir a informação de maneira rápida e confortável.