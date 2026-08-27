# 🎨 Style Guide: Padronização de Cores, Tipografia, Grid e Componentes

> [!abstract] O que você vai aprender  
> Nesta aula, o projeto sai da etapa de **definição de princípios visuais** e começa a transformar essas decisões em um **sistema de design documentado**.
> 
> Vamos finalizar a paleta de cores, criar suas variações, entender cores auxiliares, padronizar grids, ícones, tipografia e botões e, principalmente, entender **por que um Style Guide é essencial para manter consistência durante todo o desenvolvimento de uma interface**.

---

## 🧭 1. O que muda nesta etapa?

Nas aulas anteriores, várias decisões de UI já foram tomadas:

- paleta de cores;
    
- grid;
    
- tipografia;
    
- princípios de hierarquia;
    
- estrutura da interface;
    
- componentes.
    

Agora existe um problema:

> **Como garantir que todas essas decisões continuem sendo respeitadas durante o projeto inteiro?**

A resposta é:

# Style Guide

O **Style Guide** é a documentação visual do projeto.

Ele reúne os padrões que devem ser seguidos para que diferentes partes da interface pareçam pertencer ao **mesmo sistema**.

Isso está diretamente relacionado a um dos princípios fundamentais de UI Design:

> **Consistência.**

---

# 🧠 2. Por que a consistência é tão importante?

Imagine construir uma interface sem padrões definidos.

Em uma tela:

- o título tem 32 px;
    
- em outra tem 34 px;
    
- em outra tem 30 px.
    

Um botão tem determinado raio.

Outro botão aparentemente igual possui outro raio.

Um ícone utiliza uma família.

Outro utiliza uma família completamente diferente.

Uma cor é usada para indicar uma ação em uma tela, mas representa outra coisa em outra.

O resultado é uma interface inconsistente.

### O Style Guide evita exatamente isso.

Em vez de tomar decisões novamente a cada componente, você estabelece:

> **"É assim que o nosso sistema funciona."**

E passa a reutilizar essas decisões.

---

# 🎨 3. Finalizando a paleta: precisamos de variações

Na aula anterior, foi estabelecida a regra:

**60 / 30 / 10**

Mas existe um detalhe:

> **Três cores principais não são suficientes para todos os elementos de uma aplicação.**

Você eventualmente precisará criar:

- cards;
    
- inputs;
    
- bordas;
    
- estados;
    
- gradientes;
    
- fundos alternativos;
    
- componentes;
    
- versões para temas diferentes.
    

Por isso, é interessante criar **variações das cores principais**.

---

# 🌗 4. Cada cor pode ter versões claras e escuras

Para a **brand color**, por exemplo, o projeto possui:

```text
Brand Color
├── Light
├── Base
└── Dark
```

O professor prefere trabalhar inicialmente com **três variações**.

Isso não significa que três seja uma regra absoluta.

Você pode trabalhar com:

- 3 variações;
    
- 5 variações;
    
- mais variações.
    

Mas:

> [!tip] Menos pode ser mais  
> Não crie dezenas de cores simplesmente porque a ferramenta permite. Crie apenas as variações que realmente possuem uma função dentro do sistema.

---

# 🎚️ 5. Criando variações usando HSB

Para compreender como gerar versões claras e escuras, a aula utiliza o modelo **HSB**.

HSB significa:

|Letra|Significado|Função|
|---|---|---|
|**H**|Hue|Matiz|
|**S**|Saturation|Saturação|
|**B**|Brightness|Brilho|

### H — Hue

Define **qual é a cor** dentro do círculo cromático.

Por exemplo:

```text
H = 214°
```

representa uma região azulada.

### S — Saturation

Define a intensidade da cor.

Quanto maior a saturação:

> mais intensa/viva é a cor.

### B — Brightness

Define o brilho.

Quanto maior:

> mais clara a cor tende a parecer.

---

# ☀️ 6. Como criar uma versão mais clara

A regra ensinada na aula é:

> **Para criar uma versão mais clara: aumente o brilho e diminua a saturação.**

Em termos simplificados:

```text
LIGHT
B ↑
S ↓
H → permanece
```

A ideia é manter a identidade cromática enquanto se cria uma versão visualmente mais clara.

---

# 🌑 7. Como criar uma versão mais escura

Para a versão escura, fazemos o inverso:

> **Diminua o brilho e aumente a saturação.**

```text
DARK
B ↓
S ↑
H → permanece
```

### 🧠 Regra para memorizar

> **Light → Brightness ↑ + Saturation ↓**
> 
> **Dark → Brightness ↓ + Saturation ↑**

O **Hue permanece como referência da identidade cromática**.

---

# 🌈 8. Por que criar versões claras e escuras?

Uma das principais razões é permitir que a identidade visual funcione em **diferentes contextos**.

Imagine a sua brand color aplicada:

### Sobre fundo escuro

Uma versão mais clara tende a funcionar melhor.

### Sobre fundo claro

Uma versão mais escura pode oferecer contraste suficiente.

Portanto:

> **Uma identidade visual não deve funcionar apenas no contexto em que foi originalmente criada.**

Ela precisa ser flexível.

---

# 🌓 9. Light e Dark Mode

Mesmo que a essência do projeto esteja no tema dark, é interessante pensar também em uma versão light.

Isso significa que a marca precisa conseguir existir em:

```text
Dark Mode
└── Brand clara

Light Mode
└── Brand escura
```

O objetivo é preservar:

- identidade;
    
- legibilidade;
    
- contraste;
    
- consistência.
    

---

# 🌈 10. Variações também permitem trabalhar com gradientes

Quando você possui uma versão clara e uma escura da mesma cor, pode criar gradientes mais controlados.

Por exemplo:

```text
Brand Light
     ↓
   suave
     ↓
Brand Base
     ↓
   suave
     ↓
Brand Dark
```

Isso evita criar gradientes arbitrários.

> [!important] Regra do gradiente  
> O gradiente deve apresentar uma **variação suave**, e não uma mudança brusca entre cores sem relação.

As variações previamente definidas dão maior controle para essa composição.

---

# 🧱 11. Variações para componentes

As variações de cores também são importantes para elementos que precisam ser separados do fundo sem chamar atenção demais.

Imagine:

```text
Fundo
████████████████

┌───────────────┐
│     CARD      │
└───────────────┘
```

Você poderia colocar uma cor completamente diferente no card.

Mas isso provavelmente criaria muito contraste.

Em vez disso:

> Utilize uma **variação ligeiramente mais clara do próprio fundo**.

Assim:

```text
Fundo → azul extremamente escuro

Card → azul um pouco mais claro
```

O card fica delimitado, mas continua integrado à interface.

---

# 🃏 12. Bordas e delimitações sutis

O mesmo princípio pode ser aplicado a:

- cards;
    
- inputs;
    
- containers;
    
- divisores;
    
- linhas;
    
- bordas.
    

A ideia não é fazer a borda gritar:

> **"EU SOU UMA BORDA!"**

Ela deve apenas fornecer informação suficiente para o usuário entender que existe uma separação.

### Resultado

Você melhora:

- organização;
    
- escaneabilidade;
    
- percepção dos componentes;
    
- experiência visual.
    

Sem destruir a neutralidade da interface.

---

# 🎨 13. O sistema de cores começa a virar uma escala

O projeto passa a ter algo semelhante a:

```text
BRAND
├── Brand Light
├── Brand Base
└── Brand Dark

BACKGROUND
├── Background Light
├── Background Base
└── Background Dark

NEUTRALS
├── White
├── Gray scales
└── Black

GRADIENTS
├── Light gradient
└── Dark gradient

AUXILIARY
├── Success
├── Error
├── Warning
└── Neutral
```

Essa estrutura permite que a interface cresça sem precisar inventar uma nova cor para cada situação.

---

# 🚦 14. Cores auxiliares: quando a cor vira informação

Aqui acontece uma mudança importante.

Até agora, a cor estava sendo usada principalmente para:

- branding;
    
- hierarquia;
    
- destaque;
    
- composição.
    

Mas em uma **aplicação**, a cor também pode transmitir **estado**.

Esse é o papel das:

> **Cores auxiliares / semânticas.**

---

# 🚨 15. Cores semânticas

Algumas associações visuais são tão comuns que os usuários já aprenderam a interpretá-las.

### 🔴 Vermelho → Erro / perigo

Normalmente indica:

- erro;
    
- problema;
    
- ação perigosa;
    
- algo que precisa de atenção;
    
- estado inválido.
    

### 🟢 Verde → Sucesso

Normalmente indica:

- sucesso;
    
- concluído;
    
- OK;
    
- disponível;
    
- operação realizada corretamente.
    

### 🟡 Amarelo → Warning

Normalmente indica:

- atenção;
    
- aviso;
    
- risco;
    
- algo que merece ser observado.
    

---

# 🧠 16. A cor possui significado semântico

Isso é muito importante.

A cor não precisa apenas dizer:

> "Olhe para mim."

Ela também pode dizer:

> **"Entenda o que está acontecendo."**

Por exemplo:

```text
🟢 Seu cadastro foi realizado.

🔴 Não foi possível realizar o cadastro.

🟡 Sua sessão está próxima de expirar.
```

Mesmo antes de ler completamente a mensagem, o usuário já possui uma expectativa sobre o que aconteceu.

---

# 🔔 17. Alerts e Notifications

Por isso, o Style Guide da aplicação passa a documentar componentes como:

- notification;
    
- success message;
    
- error message;
    
- warning;
    
- mensagem neutra.
    

Esses componentes utilizam cores auxiliares para comunicar estados.

### O importante

Não basta simplesmente criar:

> "um quadrado vermelho".

É necessário estabelecer um padrão para:

- cor;
    
- fundo;
    
- texto;
    
- ícone;
    
- espaçamento;
    
- comportamento;
    
- hierarquia.
    

E isso deve entrar no Style Guide.

---

# 📐 18. Grid: o padrão de 12 colunas

O projeto continua utilizando o **grid de 12 colunas**, baseado no padrão conhecido do Bootstrap.

A escolha facilita a criação de layouts responsivos porque 12 possui várias divisões possíveis.

Por exemplo:

```text
12
├── 6 + 6
├── 4 + 4 + 4
├── 3 + 3 + 3 + 3
├── 8 + 4
└── 9 + 3
```

Isso oferece bastante flexibilidade para organizar conteúdo.

Além disso, o projeto também estabelece **breakpoints** baseados nesse padrão.

### 🎯 Por que isso importa?

Porque o grid não serve apenas para desenhar no desktop.

Ele precisa continuar fazendo sentido quando o projeto chegar a:

- tablet;
    
- mobile;
    
- diferentes larguras de tela.
    

Assim, o design já começa pensando na implementação.

---

# 🧩 19. Ícones também precisam de consistência

Outro ponto aparentemente pequeno, mas extremamente importante:

> **Escolha uma família de ícones e mantenha essa família.**

O projeto utiliza como referência a família:

**Feather Icons**

Imagine misturar:

```text
Feather
+
Material Icons
+
Font Awesome
+
ícones aleatórios
```

Mesmo que cada ícone individual seja bonito, o conjunto pode parecer inconsistente.

Os ícones possuem diferenças de:

- espessura;
    
- proporção;
    
- curvas;
    
- preenchimento;
    
- estilo visual.
    

Portanto:

> **Uma família de ícones = uma linguagem visual mais consistente.**

---

# 🔤 20. Escala tipográfica

Assim como as cores, a tipografia precisa ser sistematizada.

Em vez de escolher tamanhos aleatórios para cada texto, o projeto estabelece uma **escala tipográfica**.

Ela inclui:

### Títulos

```text
H1
H2
H3
H4
H5
H6
```

### Corpo de texto

```text
B1
B2
B3
```

Também existem definições específicas para o comportamento da tipografia no **mobile**.

---

# 📏 21. Grid de 8 pontos

A escala tipográfica é pensada dentro do conceito do:

> **8-point grid**

Ou seja, sempre que possível, os valores são baseados em múltiplos de 8.

Esse princípio não fica limitado à tipografia.

Ele pode ser aplicado a:

- espaçamentos;
    
- ícones;
    
- botões;
    
- elementos;
    
- dimensões;
    
- grids;
    
- componentes.
    

### Exemplo

```text
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

Isso cria uma linguagem dimensional consistente.

---

# 🧠 22. Por que padronizar a tipografia?

Imagine ter que decidir o tamanho de cada título individualmente.

Você poderia acabar com:

```text
Título A → 34px
Título B → 31px
Título C → 29px
Título D → 35px
```

Mesmo que individualmente pareçam aceitáveis, o sistema perde consistência.

Com uma escala:

```text
H1
H2
H3
H4
H5
H6
```

você simplesmente escolhe o nível adequado.

### Resultado

Você ganha:

- consistência;
    
- velocidade;
    
- hierarquia previsível;
    
- facilidade de implementação;
    
- menos decisões repetitivas.
    

---

# 🧠 23. O Style Guide reduz a quantidade de decisões

Esse talvez seja um dos maiores benefícios do Style Guide.

Sem ele:

> **Cada componente exige uma decisão.**

Com ele:

> **Você consulta uma decisão já tomada.**

Por exemplo:

> "Qual tamanho desse título?"

Não precisa pensar novamente.

Você olha:

> **H3**

---

> "Qual cor esse CTA deve usar?"

Você consulta:

> **Brand / Primary**

---

> "Qual ícone devo usar?"

Você consulta:

> **Feather Icons**

---

> "Qual espaçamento?"

Você consulta:

> **8-point grid**

Isso reduz a chance de erro.

---

# 🎛️ 24. Styles no Figma

No Figma, essas decisões podem ser transformadas em **estilos reutilizáveis**.

O professor demonstra a criação de grupos de estilos.

Por exemplo:

```text
HEADS
├── H1
├── H2
├── H3
├── H4
├── H5
├── H6
└── H7
```

O mesmo conceito pode ser aplicado a:

```text
COLORS
├── Branding
├── White
├── Black
├── Gray
├── Gradients
└── Auxiliary

GRIDS
├── Desktop
├── Tablet
└── Mobile
```

---

# 🛠️ 25. Criando um novo estilo

O processo mostrado no Figma é basicamente:

1. Abrir a configuração de estilos.
    
2. Acessar os **quatro pontos**.
    
3. Clicar no **+**.
    
4. Criar um grupo.
    
5. Definir o nome do estilo.
    
6. Salvar.
    

Por exemplo:

```text
Heads
└── H7
```

O H7 pode ser criado a partir da escala existente.

No exemplo da aula:

> H6 = 18 px  
> H7 = 16 px

Assim, o novo estilo passa a fazer parte do sistema.

---

# 🔘 26. Padronização de botões

Botões também precisam de regras.

O primeiro princípio é:

> **Um botão precisa parecer um botão e possuir uma área clicável adequada.**

Isso envolve não apenas estética, mas também usabilidade.

---

# 🔘 27. Botão ≠ link

Essa diferença é fundamental.

### Botão

> Está associado a uma **ação**.

Exemplos:

- enviar;
    
- salvar;
    
- cadastrar;
    
- excluir;
    
- começar;
    
- confirmar.
    

### Link

> Está associado principalmente à **navegação ou acesso a informação**.

Exemplos:

- ler mais;
    
- acessar perfil;
    
- ver documentação;
    
- abrir outra página.
    

### 🧠 Regra para memorizar

> **Botão → "faça algo."**
> 
> **Link → "vá para algum lugar / veja alguma informação."**

---

# 🥇 28. Hierarquia dos botões

Nem toda ação possui a mesma importância.

Por isso, o Style Guide pode definir diferentes níveis.

### Primary

Botão preenchido.

Possui maior destaque visual.

```text
████████████
   AÇÃO
████████████
```

É utilizado para a ação principal.

### Secondary

Botão com menor peso visual.

Pode ser representado de maneira mais discreta, por exemplo, sem preenchimento.

```text
┌────────────┐
│   AÇÃO     │
└────────────┘
```

### Link

Possui ainda menos peso visual.

Pode aparecer como:

```text
Texto azul
```

e utilizar **hover** para indicar interatividade.

---

# 🖱️ 29. Hover também faz parte do design

Não basta documentar:

> "Esse elemento é azul."

O designer precisa especificar como ele se comporta.

Por exemplo:

```text
Normal
↓
Hover
↓
Active
↓
Disabled
```

Isso é particularmente importante para os desenvolvedores.

O Style Guide deve comunicar não apenas:

> **Como o elemento parece.**

Mas também:

> **Como o elemento se comporta.**

---

# 📚 30. O Style Guide é documentação de comportamento

Essa é uma definição muito importante da aula:

> **Style Guide não é apenas uma coleção de cores bonitas no Figma.**

Ele documenta:

### Padrões visuais

- cores;
    
- tipografia;
    
- grid;
    
- ícones;
    
- componentes;
    
- espaçamento.
    

### Padrões comportamentais

- hover;
    
- estados;
    
- ações;
    
- variações;
    
- comportamento dos componentes.
    

Portanto, ele funciona como uma espécie de **contrato visual do projeto**.

---

# 🧩 31. O Style Guide como ponte entre Designer e Desenvolvedor

Isso é especialmente importante quando pensamos no desenvolvimento.

O designer precisa conseguir comunicar:

> "Este é o componente."

Mas também:

> "Este é o comportamento esperado dele."

O desenvolvedor então não precisa interpretar cada detalhe por conta própria.

Ele possui uma referência.

Isso reduz:

- ambiguidades;
    
- inconsistências;
    
- retrabalho;
    
- decisões improvisadas.
    

---

# 🏗️ 32. O sistema completo começa a tomar forma

Ao final dessa etapa, temos:

```text
STYLE GUIDE
│
├── 🎨 Cores
│   ├── Brand
│   ├── Light
│   ├── Dark
│   ├── Neutrals
│   ├── Gradients
│   └── Auxiliary
│
├── 📐 Grid
│   ├── Desktop
│   ├── Tablet
│   └── Mobile
│
├── 🔤 Tipografia
│   ├── H1 → H6
│   ├── B1 → B3
│   └── Mobile
│
├── 🧩 Ícones
│   └── Feather Icons
│
├── 🔘 Botões
│   ├── Primary
│   ├── Secondary
│   └── Link
│
├── 🔔 Alerts
│   ├── Success
│   ├── Error
│   ├── Warning
│   └── Neutral
│
└── 📝 Comportamentos
    ├── Hover
    ├── States
    └── Interações
```

Isso já é muito mais próximo de um **sistema de design** do que simplesmente uma tela desenhada.

---

# 🚀 33. Por que fazer tudo isso antes do layout?

Agora podemos entender a ordem das aulas.

Primeiro:

> **Definimos princípios.**

Depois:

> **Criamos padrões.**

Agora:

> **Documentamos esses padrões.**

Só então:

> **Construímos os layouts.**

Isso é importante porque, quando começarmos a desenhar os wireframes e layouts, não precisaremos reinventar cada decisão.

---

# 🧠 A grande mudança de mentalidade

Um iniciante pode pensar:

> "Vou desenhar uma tela bonita."

Um designer começa a pensar:

> "Vou estabelecer um sistema que permita construir várias telas bonitas e consistentes."

Essa diferença é enorme.

---

# ⚡ O que realmente importa nesta aula

> [!important] Se você esquecer todo o resto, lembre disso

### **1. Style Guide = consistência documentada**

Ele registra como o projeto deve parecer e se comportar.

### **2. Cores precisam de variações**

A cor base pode ganhar versões claras e escuras para aumentar a flexibilidade do sistema.

### **3. Cores também possuem significado**

Além de branding, elas comunicam estados:

```text
🟢 Success
🔴 Error
🟡 Warning
⚪ Neutral
```

### **4. Padronize tudo que se repete**

- cores;
    
- tipografia;
    
- grids;
    
- ícones;
    
- botões;
    
- componentes;
    
- estados.
    

### **5. Consistência reduz decisões e erros**

Quanto mais coisas já estiverem definidas, menos você precisa improvisar durante o desenvolvimento.

---

# ⚠️ Erros para evitar

- ❌ Criar uma cor nova para cada componente.
    
- ❌ Criar dezenas de variações sem necessidade.
    
- ❌ Usar cores sem função semântica.
    
- ❌ Misturar famílias de ícones.
    
- ❌ Usar tamanhos tipográficos aleatórios.
    
- ❌ Criar botões sem hierarquia.
    
- ❌ Confundir botão com link.
    
- ❌ Documentar apenas a aparência e ignorar comportamento.
    
- ❌ Fazer o Style Guide depois de todo o projeto estar pronto.
    
- ❌ Deixar o desenvolvedor descobrir sozinho como os componentes devem funcionar.
    

---

# 🔍 Checklist mental para seus próximos projetos

Antes de começar a desenhar uma interface, pergunte:

### 🎨 Cores

- Qual é minha brand color?
    
- Qual é a cor dominante?
    
- Tenho versões light e dark?
    
- Tenho cores semânticas?
    
- Tenho contraste suficiente?
    

### 📐 Grid

- Qual grid estou utilizando?
    
- Como ele quebra no tablet?
    
- Como ele quebra no mobile?
    
- Os valores estão consistentes?
    

### 🔤 Tipografia

- Qual é minha escala?
    
- Tenho níveis de heading?
    
- Tenho estilos de body?
    
- Existe uma versão mobile?
    
- Os tamanhos seguem uma lógica?
    

### 🧩 Ícones

- Qual família estou utilizando?
    
- Todos possuem o mesmo estilo?
    

### 🔘 Componentes

- Quais são os botões?
    
- Qual é o primary?
    
- Qual é o secondary?
    
- Quando devo usar link?
    
- Quais são os estados?
    

### 🔄 Comportamento

- Como funciona o hover?
    
- Existe active?
    
- Existe disabled?
    
- Existe error?
    
- Existe success?
    

Se você consegue responder tudo isso, seu projeto já possui uma **base visual muito mais sólida**.

---

# 🧪 Revisão ativa

> [!question] Tente responder antes de abrir as respostas

### 01. Por que criar versões claras e escuras de uma cor?

Para aumentar a flexibilidade da paleta, permitindo utilizar a identidade visual em diferentes contextos, como fundos claros e escuros, além de criar componentes, bordas e gradientes sem precisar inventar novas cores.

### 02. Como criar uma versão clara usando HSB?

Aumentando o Brightness e diminuindo a Saturation, mantendo o Hue como referência da cor.

### 03. Como criar uma versão escura?

Diminuindo o Brightness e aumentando a Saturation.

### 04. Qual a função das cores auxiliares?

Comunicar estados e informações ao usuário, como sucesso, erro, alerta e mensagens neutras.

### 05. Por que utilizar uma única família de ícones?

Para manter consistência visual entre os elementos da interface.

### 06. Qual a diferença entre botão e link?

O botão está relacionado a uma ação que o usuário deve executar. O link está relacionado principalmente à navegação ou acesso a uma informação.

### 07. Qual a função do Style Guide?

Documentar os padrões visuais e comportamentais do projeto para garantir consistência, reduzir erros e facilitar a construção da interface e sua implementação pelos desenvolvedores.

### 08. Por que definir o Style Guide antes do layout?

Porque as decisões visuais já estarão estabelecidas quando começarmos a desenhar as telas. Isso evita decisões aleatórias e permite construir os layouts seguindo um sistema consistente.

---

# 🧠 Flash Review

> **Paleta** → define a linguagem cromática.
> 
> **Variações** → dão flexibilidade à paleta.
> 
> **Cores auxiliares** → comunicam estados.
> 
> **Grid** → organiza o espaço.
> 
> **Tipografia** → organiza a informação.
> 
> **Ícones** → mantêm a linguagem visual.
> 
> **Componentes** → padronizam interações.
> 
> **Style Guide** → conecta tudo isso em um sistema consistente.

---

# 🎯 Em uma frase

> **O Style Guide transforma decisões isoladas de UI em um sistema visual consistente, reutilizável e documentado.**

---

# 🔗 Conexão com a próxima etapa

Até aqui, o projeto passou por:

```text
Teoria
  ↓
Referências
  ↓
Paleta
  ↓
Hierarquia
  ↓
Grid
  ↓
Tipografia
  ↓
Style Guide
  ↓
Componentes
  ↓
LAYOUT
```

Agora existe uma base para finalmente começar a **colocar a mão na massa e construir os wireframes e layouts**.

A partir daqui, a pergunta deixa de ser:

> _"Que estilo eu quero usar?"_

e passa a ser:

> **"Como aplico o sistema que defini para resolver o problema desta tela?"**

Essa é uma mudança importante de **decoração para design de sistema**.

---

# 📌 Preparação para o commit

> **Commit sugerido:** `docs: documentar style guide e sistema de design`

### Antes de commitar

-  Criei as variações claras e escuras das cores principais
    
-  Defini as cores auxiliares
    
-  Defini o grid de 12 colunas
    
-  Defini os breakpoints
    
-  Escolhi uma família de ícones
    
-  Defini a escala tipográfica
    
-  Padronizei os estilos no Figma
    
-  Defini os níveis de botão
    
-  Diferenciei botão e link
    
-  Considerei estados e comportamentos
    
-  Documentei alerts e mensagens
    
-  O Style Guide está sendo usado como referência para o projeto
    
-  Consigo explicar por que cada padrão existe
    

> [!success] Pronto para a próxima etapa  
> Com o Style Guide estabelecido, o projeto finalmente possui **regras suficientes para começar a construir as telas sem tomar decisões visuais aleatórias a cada passo**.