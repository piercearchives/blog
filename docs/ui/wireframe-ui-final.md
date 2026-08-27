# UI Design — Wireframes → UI Final

## 1. Wireframe não é o produto final

O wireframe serve para resolver principalmente:

- **Conteúdo**
- **Posicionamento**
- **Hierarquia**
- **Espaçamento**
- **Grid**
- **Tamanho dos elementos**
- **Fluxo da informação**

A vantagem de trabalhar primeiro em escala de cinza é justamente **não ficar preso às cores**.

> Quanto menos decisões visuais você precisa tomar simultaneamente, mais fácil fica experimentar e alterar a estrutura.

Depois que a estrutura estiver funcionando:

**Wireframe → UI Final → Código**

---

# 2. Consistência é uma das regras mais importantes

Se você definiu uma regra visual para um componente, **repita essa regra**.

Por exemplo:

```
Card A
Data
↓
Título
↓
Conteúdo
```

Se outro card possui a mesma hierarquia, ele deve seguir a mesma lógica:

```
Card B
Data
↓
Título
↓
Conteúdo
```

Não faça:

```
Card A
Data
Título
Conteúdo
```

e:

```
Card B
Título
Data
Conteúdo
```

sem uma razão de design.

### Regra

> **Mesma hierarquia = mesma estrutura.**

Isso vale para:

- espaçamentos;
- tamanho de fonte;
- posição;
- alinhamento;
- padding;
- bordas;
- componentes;
- labels;
- cards.

---

# 3. Proximidade cria relacionamento

Um dos conceitos fundamentais apresentados é a **proximidade**.

Elementos próximos visualmente tendem a ser interpretados como relacionados.

```
Título
↓
Descrição
```

O usuário entende:

> "Essas duas coisas pertencem uma à outra."

Já:

```
Título



Descrição
```

cria uma separação maior.

### Quando o espaço não é suficiente

Em cards muito pequenos, pode acontecer de elementos diferentes parecerem pertencer ao mesmo grupo.

Exemplo:

```
02/08/2020
Título
```

Se a data estiver muito próxima do título, você pode reforçar a separação usando:

- uma bolinha;
- uma linha;
- outro elemento visual;
- mudança de peso/contraste.

Isso cria uma **âncora visual**.

---

# 4. Sistema de espaçamento

O curso reforça bastante o uso de um sistema consistente.

Principalmente o:

## Grid de 8 pontos

Preferencialmente trabalhar com valores como:

```
8
16
24
32
40
48
56
64
...
```

Não significa que **todo** valor precisa obrigatoriamente ser múltiplo de 8.

O ponto principal é:

> **Crie um sistema e seja consistente com ele.**

Exemplo:

```
Título → descrição
16px

Descrição → próximo bloco
48px
```

Se outro bloco possui a mesma hierarquia:

```
Título → descrição
16px

Descrição → próximo bloco
48px
```

Isso cria ritmo visual.

---

# 5. "Respirar" na interface

Um problema comum:

```
Imagem
Imagem
Imagem
Imagem
Imagem
```

Tudo comprimido.

Mesmo que tecnicamente funcione, visualmente pode gerar:

- excesso de informação;
- fadiga;
- dificuldade de foco;
- competição entre elementos.

Uma solução é intercalar conteúdos.

Por exemplo:

```
[ POSTS ]

[ POSTS ]

────────────

[ TEXTO / INTRODUÇÃO ]

────────────

[ TRENDING TOPICS ]

────────────

[ POSTS ]
```

Isso cria **ritmo**.

A interface começa a "respirar".

---

# 6. Hierarquia visual

Nem tudo deve chamar a mesma atenção.

Você precisa decidir:

> **O que o usuário deve perceber primeiro?**

Depois:

> **O que ele deve perceber em segundo?**

E assim por diante.

Uma hierarquia possível:

### H1

Elemento principal.

### H2

Seção.

### H3

Título de card.

### Body

Conteúdo.

### Caption

Informação secundária.

### Meta

Data, tempo de leitura etc.

---

# 7. Hierarquia através de escala de cinza

Mesmo antes das cores, você consegue criar hierarquia através do contraste.

Exemplo:

```
BRANCO
████████████
Maior importância


CINZA CLARO
████████████
Importância intermediária


CINZA
████████████
Informação secundária
```

Ou seja:

> **Contraste também é hierarquia.**

Você não precisa esperar a aplicação das cores para resolver isso.

---

# 8. Cores podem funcionar como linguagem

Um exemplo interessante usado na aula é o Globo / G1.

Quando uma interface utiliza consistentemente:

```
🟢 → Esportes
🟠 → Entretenimento
🔵 → Tecnologia
🟡 → Tecnologia
```

o usuário eventualmente **aprende esse código visual**.

Depois de algum tempo:

> "Vi verde → provavelmente é esporte."

Isso é extremamente poderoso.

### Mas existe uma condição:

**Consistência.**

Se:

```
Hoje azul = tecnologia
Amanhã azul = esporte
```

a cor deixa de funcionar como linguagem.

---

# 9. Forma também comunica

Na transformação do wireframe em UI, entra outro aspecto:

## Border radius

A aula apresenta três grandes famílias:

```
□
quadrado

▢
levemente arredondado

▢
bem arredondado

●
circular
```

A escolha não deve ser simplesmente:

> "Qual eu acho bonito?"

Você deve perguntar:

> **Qual sensação essa forma transmite?**

Formas mais arredondadas podem transmitir uma sensação mais:

- amigável;
- humana;
- acessível;
- confortável;
- próxima.

Formas mais rígidas podem transmitir:

- precisão;
- seriedade;
- estabilidade;
- rigidez;
- formalidade.

### Importante

Isso **não é uma regra absoluta**.

A própria aula deixa claro:

> Não existe "botão quadrado = errado".

O princípio é entender **por que você está escolhendo determinada forma**.

---

# 10. Harmonia entre tipografia e componentes

Aqui existe uma ideia muito boa:

> **Os componentes devem conversar visualmente com a tipografia.**

Se a fonte possui características arredondadas:

```
Rubik
```

você pode acompanhar isso nos componentes:

```
Tipografia arredondada
        ↓
Botões arredondados
        ↓
Cards arredondados
```

No exercício:

```
border-radius: 4px
```

foi utilizado como padrão.

Não porque `4px` seja universalmente correto, mas porque **funciona dentro daquela linguagem visual**.

---

# 11. CTA precisa de destaque

O botão de login/cadastro é tratado como um CTA.

Se você quer que ele seja percebido, pode utilizar a:

**Brand Color**

Exemplo:

```
[ LOGIN ]
   ↑
cor de destaque
```

Enquanto elementos secundários podem permanecer:

```
branco
cinza
black dark
```

Assim você cria:

```
Hierarquia de cor
        ↓
Atenção
        ↓
Ação
```

---

# 12. Padding dos componentes

Botões precisam ter consistência interna.

Por exemplo:

```
        12px
   ┌─────────────┐
24 │    LOGIN    │ 24
   └─────────────┘
        12px
```

A ideia principal:

> O padding precisa ser padronizado entre componentes equivalentes.

Isso é especialmente importante quando você posteriormente transforma isso em código.

No desenvolvimento, você quer chegar a algo conceitualmente parecido com:

```
.button {
  padding: 12px 24px;
}
```

em vez de cada botão possuir uma regra completamente diferente.

---

# 13. Acessibilidade entra durante o design

Esse ponto é **muito importante**.

Não espere chegar no código para pensar em acessibilidade.

No próprio design você precisa observar:

- contraste;
- legibilidade;
- tamanho da tipografia;
- hierarquia;
- distinção entre elementos;
- clareza das informações.

Especialmente em uma plataforma de leitura:

> **Texto precisa ser confortável de ler.**

Um cinza excessivamente escuro pode até ser tecnicamente legível, mas ainda assim gerar uma experiência ruim.

---

# 14. Alinhamento óptico ≠ alinhamento matemático

Esse é um conceito que vale muito guardar.

O Figma pode dizer:

```
X = exatamente centralizado
```

mas o seu olho pode perceber:

```
parece deslocado →
```

Isso acontece porque elementos possuem **pesos visuais diferentes**.

Exemplo:

```
● Blog
```

O ponto influencia a percepção do centro.

Então:

```
Alinhamento matemático
        ≠
Alinhamento óptico
```

### Regra prática

> **Confie nas medidas, mas também confie no olho.**

O design não termina quando o Figma diz "0px de diferença".

---

# 15. Glassmorphism / background blur

Na UI final, o menu recebe uma camada visual mais sofisticada:

```
background
↓
transparência
↓
borda
↓
background blur
```

Conceitualmente:

```
┌──────────────────────────┐
│   conteúdo desfocado     │
│                          │
│   ┌──────────────────┐   │
│   │   MENU           │   │
│   │   transparente   │   │
│   └──────────────────┘   │
└──────────────────────────┘
```

A intenção não é simplesmente:

> "Colocar blur porque fica bonito."

Ele ajuda a:

- separar camadas;
- criar profundidade;
- manter o background visível;
- destacar o menu.

---

# 16. Imagens precisam respeitar a estrutura

Existem duas técnicas principais mostradas:

### Crop

Você ajusta diretamente a imagem:

```
Imagem
↓
Crop
↓
Área final
```

### Máscara

```
Imagem
+
Shape
↓
Mask
```

Depois você consegue reposicionar a imagem dentro da área.

Isso é particularmente útil para cards porque você mantém uma estrutura fixa:

```
┌───────────────────┐
│                   │
│      IMAGEM       │
│                   │
└───────────────────┘
```

independentemente da fotografia utilizada.

---

# 17. Gradiente sobre imagem

Esse é um dos conceitos mais úteis para o seu projeto.

Problema:

```
┌──────────────────────┐
│ IMAGEM MUITO CLARA   │
│                      │
│ Título ❌             │
└──────────────────────┘
```

Solução:

```
┌──────────────────────┐
│ IMAGEM               │
│        ↓             │
│     GRADIENTE        │
│        ↓             │
│ Título ✓             │
└──────────────────────┘
```

O gradiente cria uma área de contraste atrás do texto.

Conceitualmente:

```
imagem
   +
overlay
   ↓
legibilidade
```

Isso permite manter a fotografia sem sacrificar o texto.

---

# 18. Labels

Uma label pode funcionar como uma pequena camada de identificação:

```
┌──────────────┐
│ TECHNOLOGY   │
└──────────────┘
```

Ela pode ajudar a:

- separar categoria;
- aumentar contraste;
- melhorar legibilidade;
- criar reconhecimento visual.

Mas novamente:

> **Não use label simplesmente para enfeitar.**

Ela precisa resolver algum problema ou reforçar alguma informação.

---

# 19. Footer também faz parte do sistema

O footer não deve ser tratado como uma seção completamente independente.

Ele continua obedecendo:

**Grid → espaçamento → hierarquia → componentes.**

Pode conter:

### Categorias

```
Technology
Business
Travel
Photography
...
```

### Links úteis

```
About
Contact
Privacy
Terms
```

### Newsletter

```
Seu e-mail
[ Subscribe ]
```

O conceito é transformar referências diferentes em uma solução própria:

> **Frankenstein de referências.**

Você não copia uma interface inteira.

Você pega:

```
Referência A
    ↓
estrutura

Referência B
    ↓
componente

Referência C
    ↓
interação

        ↓

SEU DESIGN
```

---

# 20. O processo completo

A sequência que essa parte do curso está ensinando pode ser resumida assim:

```
REFERÊNCIAS
     ↓
ESTRUTURA
     ↓
WIREFRAME
     ↓
HIERARQUIA
     ↓
ESPAÇAMENTO
     ↓
GRID
     ↓
CONSISTÊNCIA
     ↓
UI FINAL
     ↓
CORES
     ↓
TIPOGRAFIA
     ↓
IMAGENS
     ↓
GRADIENTES
     ↓
COMPONENTES
     ↓
ACESSIBILIDADE
     ↓
PROTÓTIPO
     ↓
CÓDIGO
```
