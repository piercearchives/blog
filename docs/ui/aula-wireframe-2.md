# Aula — Wireframes II

## 🎯 Objetivo da aula

Evoluir o wireframe desenvolvido anteriormente, corrigindo inconsistências e refinando:

- espaçamentos;
- hierarquia visual;
- padronização dos componentes;
- distribuição do conteúdo;
- uso de grids;
- hierarquia tipográfica;
- categorização por cores;
- novas seções;
- footer;
- preparação para transformar o wireframe em protótipo final.

A ideia principal é que o **wireframe não é apenas um desenho estrutural**: ele é o momento de validar conteúdo, posicionamento, proporções e padrões antes de investir em cores, imagens e acabamento visual.

---

# 1. Consistência de espaçamento

Uma das primeiras correções realizadas foi relacionada ao espaçamento dos cards.

Anteriormente, alguns elementos utilizavam `24px`, enquanto o sistema estabelecido no projeto utilizava **32px**.

A decisão foi manter os `32px` sempre que houvesse espaço suficiente.

### Regra importante

> Se um padrão de espaçamento foi estabelecido para determinado componente, procure mantê-lo em todos os componentes equivalentes.

Isso cria **consistência visual** e evita que cada card pareça ter sido construído seguindo regras diferentes.

### Quando o card é pequeno?

Quando não existe espaço suficiente para manter uma separação confortável, podem ser utilizados elementos visuais para reforçar a separação:

- pontos;
- linhas;
- divisores;
- outros marcadores.

Isso está relacionado à **Gestalt**, especialmente à ideia de proximidade:

> Elementos próximos tendem a ser percebidos como relacionados; elementos afastados tendem a ser percebidos como separados.

Portanto, se dois elementos precisam ser interpretados como informações distintas, mas ficaram próximos demais, um divisor visual pode reforçar essa separação.

---

# 2. Padronização dos componentes

Outro problema encontrado foi a inconsistência na posição da data.

Em uma versão, a data aparecia acima da categoria. Em outra, aparecia em outro local.

O problema não é necessariamente escolher uma posição ou outra.

O problema é **misturar padrões dentro da mesma interface**.

### Regra

Se você decide que um determinado componente seguirá:

> Data → Categoria → Conteúdo

então os componentes equivalentes devem seguir a mesma lógica.

A interface precisa ter um **vocabulário visual consistente**.

---

# 3. Estrutura das informações dos cards

O novo padrão adotado para os cards foi aproximadamente:

**Data → tempo de leitura → conteúdo**

O tempo de leitura pode ser omitido dependendo:

- do tamanho do card;
- da hierarquia daquele conteúdo;
- da quantidade de informação disponível.

Isso mostra que a consistência não significa aplicar absolutamente tudo em todos os lugares.

É necessário considerar a **hierarquia da informação**.

---

# 4. Quebrando a repetição visual

Um problema identificado era a sequência excessiva de:

> imagem → imagem → imagem → imagem

Para evitar uma interface visualmente cansativa, foi introduzida uma seção predominantemente textual.

A intenção é criar **respiro visual**.

### Por que isso funciona?

O usuário não consegue prestar atenção igualmente em todos os elementos simultaneamente.

Quando uma interface apresenta muitos elementos competindo pela atenção, a hierarquia se enfraquece.

Por isso, é interessante distribuir o conteúdo em blocos diferentes:

- imagens;
- textos;
- títulos;
- tópicos;
- cards;
- espaços vazios.

Uma interface pode ser mais longa e ainda assim ser mais confortável de consumir.

> Não é necessário colocar o máximo possível de informação na menor quantidade possível de espaço.

---

# 5. Trending Topics

Foi criada uma seção de **Trending Topics** para complementar a área textual.

A ideia é apresentar tópicos de maneira rápida, permitindo que o usuário:

1. veja o tópico;
2. entenda sua importância;
3. decida se deseja continuar lendo.

Isso também permite trabalhar melhor a **hierarquia tipográfica**.

---

# 6. Hierarquia visual

A hierarquia determina o que deve chamar atenção primeiro, segundo, terceiro etc.

No exemplo:

### Hierarquia maior

- imagem;
- título;
- data;
- tempo de leitura.

### Hierarquia menor

- nomes dos tópicos;
- textos secundários;
- labels;
- informações complementares.

Quanto menos importante for uma informação, menos destaque visual ela precisa receber.

---

# 7. Hierarquia usando escala de cinza

Como o wireframe ainda está trabalhando em **escala de cinza**, a hierarquia pode ser construída através do contraste.

Por exemplo:

- branco → maior destaque;
- cinza mais claro → destaque intermediário;
- cinza mais escuro → informação secundária.

Isso permite validar a hierarquia **antes de adicionar as cores da identidade visual**.

### Insight importante

A cor não deve ser utilizada para "salvar" uma hierarquia que não funciona.

Se a interface funciona em escala de cinza, a aplicação posterior da identidade visual tende a ser muito mais controlada.

---

# 8. Categorização através de cores

Foi apresentado um exemplo interessante de categorização por cores.

Cada categoria recebe uma cor específica.

Por exemplo:

- vermelho → determinada categoria;
- amarelo → tecnologia;
- verde → business;
- azul → esportes.

O usuário começa a associar:

> **cor → categoria**

Depois de algum tempo, essa associação se torna praticamente automática.

Isso é um exemplo de **consistência semântica**: a interface cria uma linguagem visual própria que facilita a identificação do conteúdo.

---

# 9. Referência do G1

Foi utilizado o Grupo Globo / G1 como exemplo de categorização visual.

A ideia é que, depois de utilizar repetidamente a interface, o usuário passa a reconhecer determinadas categorias pela cor.

Isso demonstra que uma identidade visual pode funcionar também como um **sistema de navegação e classificação**.

---

# 10. Reaproveitamento de padrões

O professor decidiu atualizar o wireframe visual, mas manter parte da estrutura que já havia sido desenvolvida para a implementação em React.

Isso demonstra uma ideia importante de projeto:

> Nem toda melhoria exige reconstruir tudo do zero.

É possível:

1. identificar o que funciona;
2. preservar a estrutura;
3. atualizar o que precisa ser melhorado;
4. evitar retrabalho desnecessário.

---

# 11. Padronização de espaçamentos entre hierarquias

Outro ponto bastante enfatizado foi a repetição dos espaçamentos.

Se determinado título possui:

> **16px** entre título e corpo de texto,

outro título com a **mesma hierarquia** deve utilizar o mesmo espaçamento.

Da mesma forma, se determinada seção possui:

> **48px** entre seu título e o conteúdo,

outra seção equivalente deve respeitar esse mesmo padrão.

### Regra

> Mesma hierarquia → mesmo tratamento visual.

Isso inclui:

- tamanho;
- alinhamento;
- espaçamento;
- posição;
- peso;
- distância até outros elementos.

---

# 12. Grid de 8 pontos

A aula reforça novamente o uso do **grid de 8 pontos**.

Sempre que possível, os valores de:

- espaçamento;
- dimensões;
- margens;
- paddings;
- tamanhos de elementos;

devem seguir uma escala consistente baseada nesse sistema.

Exemplos:

`8px → 16px → 24px → 32px → 40px → 48px → 56px...`

O objetivo não é obedecer cegamente aos números, mas criar uma **linguagem espacial consistente**.

---

# 13. Footer

Foi criada também uma estrutura inicial para o footer.

O footer contém elementos como:

### Categorias

Lista das principais categorias existentes no blog.

### Links úteis

Links importantes para navegação.

### Newsletter

Área para o usuário inserir seu e-mail e receber novidades/conteúdos.

A estrutura foi montada a partir de referências diferentes, combinando ideias em um único componente.

O professor chama isso de um **"Frankenstein"**: pegar soluções interessantes de várias referências e construir uma solução própria.

---

# 14. Footer também respeita o grid

Mesmo sendo uma seção localizada no final da página, o footer não deve parecer desconectado do restante da interface.

Ele precisa continuar respeitando:

- grid;
- alinhamentos;
- espaçamentos;
- hierarquia;
- escala utilizada no restante do projeto.

> O grid continua valendo para toda a interface.

---

# 15. Wireframe → Protótipo final

O processo apresentado na aula pode ser entendido como:

```
Referências
    ↓
Wireframe
    ↓
Estrutura de conteúdo
    ↓
Posicionamento
    ↓
Hierarquia
    ↓
Espaçamento
    ↓
Padronização
    ↓
Protótipo visual
    ↓
Código
```

O wireframe atual já possui:

- estrutura de conteúdo;
- posicionamento dos elementos;
- definição dos principais componentes;
- grid;
- espaçamentos;
- hierarquia;
- footer;
- organização das seções.

O próximo passo será **encorpar visualmente esse wireframe**, adicionando:

- imagens;
- gradientes;
- cores;
- branding;
- acabamento visual.

Somente depois disso o projeto seguirá para a implementação.

---

# 🧠 Principais aprendizados

### 1. Consistência > decisões isoladas

Não importa apenas se um espaçamento é "bonito". É importante que ele seja **consistente com o sistema inteiro**.

### 2. Proximidade comunica relacionamento

Elementos próximos parecem relacionados.

Elementos separados parecem independentes.

Divisores podem ser utilizados quando a proximidade física gera ambiguidade.

### 3. Hierarquia controla a atenção

Nem tudo deve chamar atenção ao mesmo tempo.

Uma boa interface guia o olhar do usuário.

### 4. Respiro visual é importante

Não é necessário preencher todos os espaços disponíveis.

Espaços e seções menos densas ajudam a interface a "respirar".

### 5. Wireframe permite errar barato

Essa talvez seja uma das ideias mais importantes da aula:

> **É muito mais barato descobrir um problema no wireframe do que depois de aplicar toda a UI e começar a codificar.**

### 6. Cores também podem transmitir significado

Uma cor pode funcionar como uma espécie de **atalho cognitivo** para determinada categoria.

### 7. O grid é estrutural

Não é algo que serve apenas para o conteúdo principal.

O grid deve orientar toda a interface, inclusive o footer.

---

# 📌 Checklist da aula

- [x]  Revisar espaçamentos dos cards
- [x]  Padronizar `32px` quando possível
- [x]  Reforçar separações com divisores quando necessário
- [x]  Corrigir inconsistências na posição da data
- [x]  Padronizar estrutura dos cards
- [x]  Criar uma seção textual para quebrar a repetição visual
- [x]  Adicionar Trending Topics
- [x]  Trabalhar hierarquia tipográfica
- [x]  Utilizar contraste na escala de cinza
- [x]  Estudar categorização por cores
- [x]  Reutilizar padrões existentes
- [x]  Padronizar espaçamentos entre elementos equivalentes
- [x]  Aplicar grid de 8 pontos
- [x]  Criar estrutura do footer
- [x]  Alinhar footer ao grid
- [x]  Preparar wireframe para virar protótipo visual

---

# 🔗 Relação com a próxima aula

O wireframe está deixando de ser apenas uma estrutura e começará a receber **acabamento visual**.

A próxima etapa será transformar:

> **estrutura + posicionamento**

em:

> **estrutura + posicionamento + identidade visual + imagens + gradientes + branding**

Ou seja:

**Wireframe → Protótipo final → Código**