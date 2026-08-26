# 🗄️ Noções de Banco de Dados — Parte 1

> [!abstract] Visão geral  
> Nesta aula começa, de fato, o **levantamento de requisitos** do projeto Blog.
> 
> A partir das funcionalidades que a aplicação precisa possuir, começamos a identificar **quais dados precisam ser armazenados**, quais são as **entidades** do sistema e como elas se **relacionam**.
> 
> O foco desta primeira parte está principalmente em:
> 
> - requisitos funcionais e não funcionais;
>     
> - entidades;
>     
> - chave primária;
>     
> - tipos de dados;
>     
> - `VARCHAR`;
>     
> - `AUTO_INCREMENT`;
>     
> - armazenamento de credenciais;
>     
> - chave estrangeira;
>     
> - relacionamentos entre entidades.
>     

---

# 🎯 1. Levantamento de requisitos

O **levantamento de requisitos** é apresentado como o primeiro passo do desenvolvimento de uma aplicação.

Antes de começar a programar, precisamos descobrir:

> **O que essa aplicação precisa fazer e quais características ela precisa possuir?**

Os requisitos podem ser divididos em dois grandes grupos:

```text
REQUISITOS
│
├── Funcionais
│
└── Não funcionais
```

---

# ⚙️ 2. Requisitos funcionais

Os **requisitos funcionais** estão diretamente relacionados às **funcionalidades da aplicação**.

Eles descrevem aquilo que o sistema precisa **fazer**.

### Exemplos no Blog

- permitir login;
    
- permitir cadastro de usuários;
    
- permitir criação de posts;
    
- permitir pesquisa;
    
- permitir filtros;
    
- permitir navegação entre páginas;
    
- permitir acesso ao perfil.
    

### Exemplo

> O usuário precisa estar autenticado para publicar um post.

A possibilidade de realizar login é uma **funcionalidade**, portanto está relacionada a um requisito funcional.

---

# 🛡️ 3. Requisitos não funcionais

Os **requisitos não funcionais** não representam necessariamente uma função específica.

Eles estão relacionados a **como a aplicação deve funcionar ou às características que devem cercar suas funcionalidades**.

Exemplos apresentados na aula:

- segurança;
    
- proteção de rotas;
    
- criptografia;
    
- experiência do usuário;
    
- contraste das cores;
    
- legibilidade.
    

### Exemplo: segurança

O sistema possui a funcionalidade:

> "Usuários podem fazer login."

Mas existe uma preocupação adicional:

> "Um usuário que não está autenticado não pode acessar determinadas páginas."

Essa segunda preocupação está relacionada à **segurança da aplicação**, portanto é um requisito não funcional.

---

## 🎨 Exemplo: cores e experiência

Imagine um site que utilize:

- pouco contraste;
    
- cores desconfortáveis;
    
- textos difíceis de ler.
    

O site ainda pode funcionar tecnicamente.

Porém, a experiência do usuário será ruim.

Portanto:

```text
Funcionalidade
     +
Qualidade que cerca a funcionalidade
     ↓
Experiência final
```

> [!important] Diferença fundamental  
> **Requisito funcional → o que o sistema faz.**
> 
> **Requisito não funcional → características e condições que determinam como o sistema deve funcionar.**

---

# 🧩 4. Das funcionalidades para as entidades

Depois de levantar os requisitos, começamos a pensar:

> **Quais dados preciso armazenar para que essas funcionalidades existam?**

No Blog, duas entidades principais são identificadas:

```text
┌─────────────┐       ┌─────────────┐
│   Usuário   │       │    Post     │
└─────────────┘       └─────────────┘
```

A ideia é que um usuário possa publicar posts.

Portanto:

```text
Usuário
   │
   └──── publica ────→ Post
```

Essa relação será importante posteriormente para estruturar a API e o banco de dados.

---

# 🧑 5. Entidade Usuário

Para descobrir quais campos a entidade `User` precisa possuir, devemos fazer perguntas:

- Como identificar esse usuário?
    
- Como ele fará login?
    
- Qual é o nome dele?
    
- Qual é o sobrenome?
    
- Onde armazenar sua credencial?
    
- Ele possui uma descrição?
    
- Ele possui uma imagem de perfil?
    

A partir dessas perguntas, a entidade começa a tomar forma.

### Estrutura apresentada

|Campo|Tipo|Finalidade|
|---|---|---|
|`id`|inteiro|Identificar o usuário|
|`user`|`VARCHAR`|Login único|
|`name`|`VARCHAR`|Nome|
|`surname`|`VARCHAR`|Sobrenome|
|`token`|—|Armazenar a credencial de forma não exposta|
|`description`|`VARCHAR`|Descrição do usuário|
|`imageProfile`|—|Caminho/link da imagem de perfil|

> [!note] Observação  
> Os tipos exatos de alguns campos não foram aprofundados na aula. O ponto principal desta parte é compreender **por que esses dados existem na entidade**.

---

# 🔑 6. Chave primária — Primary Key

Toda entidade precisa de uma forma de ser **identificada de maneira única**.

Essa identificação é feita através de uma **chave primária** (_Primary Key_).

No exemplo do usuário:

```text
User
│
└── id ← PRIMARY KEY
```

O `id` identifica aquele registro.

### Exemplos utilizados na aula

O professor compara esse conceito com identificadores do mundo real:

- CPF → identifica uma pessoa;
    
- CNPJ → identifica uma empresa;
    
- RG → pode funcionar como identificador.
    

A ideia é:

> **Uma chave primária identifica de forma única uma entidade dentro daquele conjunto de dados.**

---

# 🔢 7. ID

No projeto, o `id` do usuário é representado como um **número inteiro**.

Exemplo:

```text
id
──
1
2
3
4
5
```

Cada usuário possui seu próprio identificador.

Isso permite que o sistema consiga diferenciar:

```text
Usuário 1 ≠ Usuário 2 ≠ Usuário 3
```

---

# ➕ 8. AUTO_INCREMENT

O `AUTO_INCREMENT` permite que o banco gere automaticamente novos identificadores.

Imagine que temos:

```text
Usuário
id
──
1
2
3
```

Ao cadastrar um novo usuário, não precisamos informar manualmente:

```text
id: 4
```

O banco pode gerar o próximo identificador automaticamente.

### Fluxo

```text
Novo usuário
     ↓
Banco recebe os dados
     ↓
Banco gera o ID
     ↓
Novo registro recebe ID único
```

Exemplo:

```text
Cadastro 1 → ID 1
Cadastro 2 → ID 2
Cadastro 3 → ID 3
Cadastro 4 → ID 4
```

> [!tip] Por que isso é útil?  
> Evita que o código da aplicação precise ficar controlando manualmente os IDs dos registros.

---

# 👤 9. `user` como identificador único

Além do `id`, o usuário possui o campo `user`.

Esse campo representa o **login** do usuário.

Exemplo:

```text
user: "alex"
```

O professor destaca que esse valor também deve ser **único**.

Não faria sentido permitir:

```text
Usuário A → user: "alex"
Usuário B → user: "alex"
```

pois o sistema teria dificuldade para determinar qual conta está sendo acessada.

Portanto:

```text
id
 ↓
identifica o registro

user
 ↓
identifica o login
```

São conceitos diferentes, embora ambos tenham relação com identificação.

---

# 🔤 10. O que é `VARCHAR`?

`VARCHAR` é um tipo de dado utilizado para armazenar uma **cadeia de caracteres de tamanho variável**.

A explicação apresentada na aula parte da palavra:

```text
VAR + CHAR
```

- `VAR` → variável;
    
- `CHAR` → caracteres.
    

Na prática, podemos pensar em `VARCHAR` como um tipo usado para armazenar **strings/textos de tamanho variável**.

Exemplos:

```text
"alex"
"nasser"
"tecnologia"
"Meu primeiro post"
```

---

## 📏 Limite de caracteres

Também é possível definir um tamanho máximo.

Por exemplo:

```text
VARCHAR(50)
```

Significa que aquele campo terá uma capacidade definida de caracteres conforme essa especificação.

> [!note] O que está acontecendo aqui?  
> Ao definir `VARCHAR(50)`, você não está apenas dizendo "isso é texto".
> 
> Você também está começando a **especificar as características dos dados** que aquele campo poderá receber.

---

# 🧑‍💻 11. `name` e `surname`

O usuário possui dois campos diferentes para o nome:

```text
name
surname
```

Por exemplo:

```text
name: "Alex"
surname: "Jacob"
```

Essa separação permite utilizar o nome de diferentes maneiras na interface.

Por exemplo:

```text
"Olá, Alex!"
```

em vez de:

```text
"Olá, Alex Jacob!"
```

Também evita depender de um único campo gigantesco para representar todas as partes do nome.

---

# 🔐 12. Senha e `token`

Uma das partes mais importantes desta aula é a questão das credenciais.

O professor reforça:

> **Uma senha não deve ser armazenada diretamente no banco de dados em texto aberto.**

Imagine que a senha seja:

```text
123456
```

Não devemos simplesmente armazenar:

```text
password: "123456"
```

no banco.

### Por quê?

Se o banco de dados for comprometido, um invasor poderia obter as credenciais dos usuários.

Isso seria extremamente perigoso.

---

## 🧠 A ideia apresentada na aula

O projeto utiliza um campo chamado `token` para representar a informação utilizada na validação da credencial.

A aula ainda não aprofunda o funcionamento dessa proteção.

O importante neste momento é compreender:

```text
❌ Senha em texto aberto
        ↓
    inseguro

✅ Credencial protegida
        ↓
    mais seguro
```

> [!warning] Importante  
> A aula chama esse valor de **token** e explica de maneira introdutória como uma espécie de informação criptografada.
> 
> O funcionamento detalhado de autenticação, hashing e JWT será abordado posteriormente no projeto.

---

# 📝 13. `description`

A entidade também possui uma descrição.

Esse campo permite que o usuário escreva algo sobre si mesmo.

Exemplo:

```text
description:
"Desenvolvedor front-end apaixonado por tecnologia."
```

Na aplicação, isso pode aparecer na página de perfil.

---

# 🖼️ 14. Imagem de perfil

Também precisamos guardar a referência da imagem do usuário.

O campo pode armazenar um:

- caminho;
    
- link;
    
- referência para a imagem.
    

A aplicação poderá utilizar essa informação para exibir o avatar do usuário junto aos posts.

---

# 🛒 15. O exemplo do e-commerce

Para explicar que **entidades dependem do contexto da aplicação**, o professor utiliza um e-commerce como exemplo.

Alguns dados de usuário continuam sendo relevantes:

```text
id
user
name
surname
token
imageProfile
```

Porém, outros dados podem surgir.

Por exemplo:

```text
endereço
```

---

# 📦 16. Quando uma informação vira outra entidade?

Imagine que queremos armazenar o endereço do usuário.

Inicialmente poderíamos pensar:

```text
User
├── id
├── name
├── surname
├── address
├── ...
```

Mas um endereço possui diversas informações próprias:

```text
Endereço
├── rua
├── número
├── bairro
├── cidade
├── estado
├── ...
```

Além disso, um usuário pode possuir **vários endereços**.

Por exemplo:

```text
Usuário
├── Casa
└── Trabalho
```

Portanto, pode fazer mais sentido criar uma entidade própria:

```text
┌─────────────┐
│   Usuário   │
└─────────────┘
       │
       │
       ↓
┌─────────────┐
│  Endereço   │
└─────────────┘
```

> [!important] Ideia central  
> Uma tabela não deve simplesmente crescer indefinidamente colocando tudo dentro de uma única entidade.
> 
> Quando determinado conjunto de informações possui **estrutura própria** e/ou pode possuir **múltiplos registros relacionados**, faz sentido pensar em uma nova entidade.

---

# 🔗 17. Relacionamento entre entidades

Agora começamos a chegar em um dos conceitos mais importantes da aula:

> **Como uma entidade sabe a qual outra entidade ela pertence?**

No exemplo do e-commerce:

```text
Usuário
   ↓
pode possuir
   ↓
N endereços
```

No Blog:

```text
Usuário
   ↓
pode publicar
   ↓
N posts
```

Ou seja, um usuário pode estar relacionado a vários posts.

---

# 🔑 18. Chave estrangeira — Foreign Key

Para representar esse relacionamento, utilizamos uma **chave estrangeira** (_Foreign Key_).

A diferença fundamental é:

### Chave primária

Pertence à própria entidade e identifica aquele registro.

```text
User
│
└── id ← PRIMARY KEY
```

### Chave estrangeira

É uma referência à chave de **outra entidade**.

```text
Post
│
└── userId ← FOREIGN KEY
```

Esse `userId` informa:

> "Este post pertence ao usuário identificado por este ID."

---

# 🧠 19. Exemplo prático do Blog

Imagine que exista:

### Usuários

|`id`|`user`|`name`|
|--:|---|---|
|1|`alex`|Alex|
|2|`nasser`|Nasser|
|3|`suzy`|Suzy|

E temos um post:

|`id`|`title`|`userId`|
|--:|---|--:|
|15|Minha câmera favorita|2|

O post possui:

```text
userId = 2
```

Isso significa:

```text
Post #15
   │
   └── userId: 2
             │
             ↓
        Usuário #2
             │
             ↓
          Nasser
```

O post não precisa necessariamente repetir todas as informações do usuário.

Ele guarda a **referência** para o usuário.

---

# 🔄 20. Como isso funciona na prática?

Quando a aplicação buscar um post:

```text
GET /posts
```

poderá receber algo semelhante a:

```js
{
  id: 15,
  title: "Minha câmera favorita",
  userId: 2
}
```

A aplicação sabe:

```text
userId = 2
```

Então pode buscar as informações correspondentes ao usuário.

Conceitualmente:

```text
POST
 ↓
userId: 2
 ↓
USER
 ↓
id: 2
 ↓
nome + perfil + imagem
```

Dessa maneira conseguimos **vincular um post ao seu autor**.

---

# 🔢 21. Relação de 1 para N

O exemplo apresentado caracteriza uma relação em que:

> **Um usuário pode possuir/publicar vários registros.**

Representação:

```text
          ┌─────────────┐
          │   Usuário   │
          │     ID 2    │
          └──────┬──────┘
                 │
          ┌──────┼──────┐
          ↓      ↓      ↓
        Post   Post   Post
```

Ou seja:

```text
1 Usuário
   ↓
N Posts
```

O `N` significa que pode existir **um número variável de registros relacionados**.

O mesmo raciocínio foi utilizado no exemplo:

```text
1 Usuário
   ↓
N Endereços
```

---

# 🧩 22. A lógica por trás das entidades

A parte mais importante desta aula é perceber que **modelar um banco de dados é transformar as necessidades da aplicação em estruturas de dados**.

O raciocínio segue aproximadamente:

```text
Funcionalidades
      ↓
Requisitos
      ↓
Quais dados são necessários?
      ↓
Entidades
      ↓
Campos
      ↓
Tipos de dados
      ↓
Chaves
      ↓
Relacionamentos
```

No Blog:

```text
Login
  ↓
Usuário
  ↓
id + user + credencial + perfil

Publicação
  ↓
Post
  ↓
Post precisa saber quem publicou
  ↓
Foreign Key
  ↓
Usuário ←→ Post
```

---

# 🧠 O que você realmente precisa entender desta parte

> [!tip] Não tente decorar os nomes isoladamente  
> O mais importante é entender **o raciocínio que leva até eles**.

Se você souber responder estas perguntas, a base da aula está compreendida:

### 1. O que a aplicação precisa fazer?

→ **Requisitos**

### 2. Quais informações precisamos armazenar?

→ **Entidades e campos**

### 3. Como identificamos cada registro?

→ **Chave primária**

### 4. Como identificamos o tipo de cada informação?

→ **Tipo de dado**

### 5. Como relacionamos uma entidade com outra?

→ **Chave estrangeira**

### 6. E se uma entidade puder possuir vários registros de outra?

→ **Relacionamento 1:N**

---

# 📚 Glossário

|Termo|Significado|
|---|---|
|**Requisito funcional**|Algo que o sistema precisa fazer|
|**Requisito não funcional**|Característica/condição relacionada à qualidade ou funcionamento do sistema|
|**Entidade**|Estrutura que representa algo que precisamos armazenar|
|**Campo**|Informação pertencente a uma entidade|
|**ID**|Identificador de um registro|
|**Primary Key**|Chave que identifica unicamente um registro|
|**Foreign Key**|Chave que referencia outra entidade|
|**VARCHAR**|Tipo de dado para cadeia de caracteres de tamanho variável|
|**AUTO_INCREMENT**|Geração automática de identificadores|
|**Relacionamento**|Associação entre entidades|
|**1:N**|Uma entidade relacionada a vários registros de outra|

---

# ⚠️ Pontos de atenção

> [!warning] Não confunda

**ID ≠ User**

O `id` é o identificador do registro no banco.

O `user` é o login utilizado pelo usuário.

---

**Primary Key ≠ Foreign Key**

```text
Primary Key
→ identifica a própria entidade

Foreign Key
→ referencia outra entidade
```

---

**Funcional ≠ Não funcional**

```text
Funcional
→ o que o sistema faz

Não funcional
→ características/condições que cercam o funcionamento
```

---

**Entidade ≠ Campo**

```text
User
├── id
├── name
├── surname
└── ...
```

`User` é a entidade.

`name`, `surname` e `id` são campos dessa entidade.

---

# 📝 Resumo para revisão

O levantamento de requisitos é uma das primeiras etapas do desenvolvimento de software. Ele permite identificar tanto os **requisitos funcionais**, relacionados às funcionalidades do sistema, quanto os **requisitos não funcionais**, relacionados a características como segurança e experiência do usuário.

A partir desses requisitos, começamos a identificar as **entidades** e os dados que precisam ser armazenados.

No Blog, as duas entidades principais são **Usuário** e **Post**.

Cada entidade possui uma **chave primária**, normalmente representada por um `id`, utilizada para identificar unicamente seus registros.

Os campos possuem diferentes **tipos de dados**, como `VARCHAR` para cadeias de caracteres. O `AUTO_INCREMENT` pode ser utilizado para gerar IDs automaticamente.

Quando uma entidade precisa se relacionar com outra, utilizamos uma **chave estrangeira**. No Blog, cada post precisa saber qual usuário o publicou, portanto o post terá uma referência ao usuário.

A relação pode ser representada como:

```text
1 Usuário
   ↓
N Posts
```

Esse raciocínio será fundamental para a construção da API e para o funcionamento do Blog.


# 🗄️ Noções de Banco de Dados — Parte 2

> [!abstract] Visão geral  
> Nesta segunda parte, o professor aprofunda o conceito de **entidades e relacionamentos** e começa a transformar o modelo do Blog em uma estrutura que poderá ser consumida pelo front-end.
> 
> A aula conecta três níveis importantes:
> 
> **Banco de dados → API → Front-end**
> 
> E introduz:
> 
> - atributos e campos;
>     
> - relacionamentos `1:1`, `1:N` e `N:N`;
>     
> - modelo conceitual;
>     
> - modelo lógico;
>     
> - modelo físico;
>     
> - normalização;
>     
> - CRUD;
>     
> - métodos HTTP;
>     
> - `db.json`;
>     
> - JSON Server;
>     
> - endpoints;
>     
> - filtros através da API.
>     

---

# 🧩 1. Relembrando: o que é uma entidade?

Uma **entidade** é uma abstração de algo do mundo real que precisamos representar dentro da aplicação.

O raciocínio é:

```text
Mundo real
    ↓
Problema
    ↓
Abstração
    ↓
Modelo dentro do sistema
    ↓
Entidades
```

### Exemplo do Blog

No mundo real existem:

- pessoas;
    
- autores;
    
- artigos;
    
- publicações.
    

Na aplicação, podemos abstrair isso como:

```text
┌──────────────┐
│    User      │
└──────────────┘

┌──────────────┐
│    Posts     │
└──────────────┘
```

> [!important] Ideia central  
> **Entidade = uma representação abstrata de algo necessário para resolver o problema da aplicação.**

---

# 🏷️ 2. Entidade → atributos → campos

Uma entidade possui **atributos**.

Quando transformamos esses atributos em uma estrutura de banco de dados, eles passam a ser representados como **campos**.

Por exemplo:

```text
USER
│
├── id
├── user
├── name
├── surname
├── token
├── description
└── imageProfile
```

O `User` é a entidade.

Os demais são informações/atributos representados como campos.

---

# 🔑 3. Toda entidade precisa ser identificável

Cada entidade precisa de uma **chave primária** que permita identificar seus registros.

```text
User
│
└── id ← Primary Key
```

Isso permite diferenciar:

```text
User #1
User #2
User #3
```

Sem uma identificação única, seria difícil referenciar um registro específico.

---

# 🔗 4. Relacionamentos entre entidades

Depois de identificar as entidades, precisamos perguntar:

> **Como essas entidades se relacionam?**

No Blog:

> Um usuário pode cadastrar/publicar vários posts?

**Sim.**

Logo:

```text
1 User
  ↓
N Posts
```

Essa é uma relação **1:N**.

---

# 🔢 5. Os principais tipos de relacionamento

A aula apresenta três possibilidades:

```text
1 : 1
1 : N
N : N
```

### 1:1

Uma entidade se relaciona com apenas uma entidade do outro lado.

```text
A
│
└──── 1:1 ──── B
```

### 1:N

Uma entidade pode estar relacionada a vários registros da outra.

```text
A
│
├── B
├── B
└── B
```

Exemplo:

```text
1 Usuário
   ↓
N Posts
```

### N:N

Várias entidades de um lado podem se relacionar com várias entidades do outro.

```text
A ────┬──── B
      ├──── B
A ────┼──── B
      └──── B
```

> [!note] Nesta aula  
> O exemplo trabalhado diretamente é principalmente o relacionamento **1:N** entre `User` e `Posts`.

---

# 🔑 6. Onde fica a Foreign Key?

Existe uma regra importante apresentada pelo professor:

> **O lado que possui o `N` precisa da chave estrangeira.**

No Blog:

```text
User
  │
  │ 1
  ↓
Posts
  ↑
  │ N
```

Portanto, é o `Post` que precisa guardar a referência ao usuário.

```text
Post
├── id
├── idUser ← Foreign Key
├── ...
```

Essa chave permite descobrir:

> **Quem publicou este post?**

---

# 📝 7. Quais dados um Post precisa ter?

Agora o professor começa a fazer o mesmo levantamento realizado anteriormente com `User`.

A pergunta é:

> **Quais informações são necessárias para representar um post?**

A partir da interface do Blog, são identificados campos como:

```text
Post
├── id
├── idUser
├── category
├── title
├── date
├── duration
├── image
├── summary
├── content
├── stars
├── views
└── status
```

Cada campo representa uma informação necessária para a aplicação.

---

# 📰 8. Campos do Post

### 🏷️ Categoria

Identifica a categoria à qual o artigo pertence.

```text
category
```

Pode ser utilizada posteriormente para filtros e organização.

---

### 📝 Título

O título principal do artigo.

```text
title
```

Exemplo:

```text
"Novos processadores da 12ª geração Intel"
```

---

### 📅 Data

Representa quando o artigo foi publicado.

```text
date
```

---

### ⏱️ Duração

Indica aproximadamente quanto tempo o usuário levaria para ler o artigo.

```text
duration
```

Isso pode ser exibido na interface como:

```text
5 min de leitura
```

---

### 🖼️ Imagem

Representa a imagem principal/thumbnail do post.

```text
image
```

---

### 📄 Resumo

O resumo é uma versão curta do conteúdo.

```text
summary
```

Ele pode aparecer na página inicial:

```text
┌─────────────────────────────┐
│ IMAGEM                      │
│                             │
│ Título                      │
│                             │
│ Pequeno resumo do artigo... │
└─────────────────────────────┘
```

---

### 📚 Conteúdo

É o conteúdo completo do artigo.

```text
content
```

Diferentemente do resumo, esse campo pode conter uma quantidade muito maior de texto.

---

### ⭐ Stars

Quantidade de estrelas/avaliação do post.

```text
stars
```

Esse campo permite, por exemplo, buscar os artigos melhor avaliados.

---

### 👁️ Views

Quantidade de visualizações.

```text
views
```

Pode ser utilizada para encontrar os posts mais vistos.

---

### 🔘 Status

Indica o estado de publicação do post.

```text
status
```

A aplicação poderá utilizar esse campo para determinar se determinado conteúdo pode ou não ser publicado/exibido.

---

# 🔗 9. O autor não pertence ao Post?

Existe uma distinção importante aqui.

O post precisa saber **quem o publicou**, mas as informações do autor não precisam ser copiadas para dentro do post.

Por exemplo, não precisamos fazer:

```text
Post
├── id
├── title
├── userName
├── userSurname
├── userImage
├── userDescription
└── ...
```

Em vez disso:

```text
Post
├── id
├── idUser
└── ...
```

E:

```text
User
├── id
├── name
├── surname
├── ...
```

A relação acontece através da chave estrangeira.

```text
Post
  │
  └── idUser
          ↓
        User
```

> [!important] Por que fazer isso?  
> Porque duplicar informações entre entidades aumenta a desorganização e dificulta a manutenção dos dados.

---

# 🧱 10. Por que não colocar tudo em uma tabela?

Tecnicamente, seria possível criar uma tabela gigantesca contendo:

```text
User
├── informações pessoais
├── informações de endereço
├── informações dos posts
├── informações de outros dados
└── ...
```

Mas isso seria uma estrutura ruim.

A tabela poderia ficar:

- gigantesca;
    
- difícil de manipular;
    
- difícil de manter;
    
- cheia de informações repetidas;
    
- pouco organizada.
    

Por isso, trabalhamos com entidades separadas e relacionamentos.

---

# 📐 11. Normalização

O professor relaciona essa organização às **formas normais de banco de dados**.

A ideia apresentada é:

> **Evitar colocar todas as informações necessárias em uma única entidade.**

Em vez disso:

```text
❌ Uma tabela gigantesca
```

preferimos:

```text
✅ Entidades menores
        ↓
Relacionamentos
        ↓
Estrutura organizada
```

> [!note] Atenção  
> A aula apenas introduz o conceito de **formas normais** e recomenda pesquisar o assunto posteriormente. O conteúdo detalhado de 1FN, 2FN, 3FN etc. não foi explicado aqui.

---

# 🧠 12. Os três modelos do banco

A aula apresenta três níveis de modelagem:

```text
MODELO CONCEITUAL
        ↓
MODELO LÓGICO
        ↓
MODELO FÍSICO
```

Essa sequência é muito importante.

---

# 🟦 13. Modelo conceitual

O **modelo conceitual** representa as entidades e seus relacionamentos de maneira mais abstrata.

No Blog:

```text
┌─────────────┐
│    User     │
└─────────────┘
       │
       │ 1:N
       ↓
┌─────────────┐
│    Posts    │
└─────────────┘
```

Neste momento, a preocupação principal é:

> **Quais entidades existem e como elas se relacionam?**

Não estamos preocupados ainda com detalhes como `VARCHAR`, `INTEGER` ou tamanho de campos.

---

# 🟨 14. Modelo lógico

No **modelo lógico**, começamos a detalhar os atributos/campos.

Por exemplo:

```text
USER
├── id
├── user
├── name
├── surname
├── token
├── description
└── imageProfile
```

E:

```text
POST
├── id
├── idUser
├── category
├── title
├── date
├── image
├── summary
├── content
├── duration
├── stars
├── views
└── status
```

Agora sabemos **quais informações cada entidade possui**.

---

# 🟥 15. Modelo físico

No **modelo físico**, chegamos à implementação concreta no banco.

Aqui começamos a definir:

- tipo do campo;
    
- chave primária;
    
- tamanho;
    
- características específicas;
    
- como os dados serão efetivamente armazenados.
    

Por exemplo:

```text
id
→ INTEGER
→ PRIMARY KEY
```

Ou:

```text
description
→ VARCHAR(...)
```

ou outro tipo apropriado para textos maiores.

> [!important] Pense assim
> 
> **Conceitual:** o que existe?
> 
> **Lógico:** quais informações essas coisas possuem?
> 
> **Físico:** como isso será implementado no banco?

---

# 🔄 16. Do Banco de Dados para a API

Aqui começa uma parte muito importante para quem está estudando **Front-end**.

O professor explica que, normalmente, a construção do banco de dados e da API pertence ao lado do **Back-end**.

O Front-end, por sua vez, normalmente:

```text
Banco de dados
      ↓
    API
      ↓
Front-end
```

consome os dados disponibilizados pela API.

Mesmo assim, entender o que acontece por trás é importante porque permite compreender **o que a API está representando**.

---

# 🗃️ 17. `db.json`

Como o curso é focado em Front-end, será utilizado um arquivo:

```text
db.json
```

Esse arquivo funcionará como uma representação simplificada do banco de dados.

O professor utiliza o **JSON Server** para transformar esse arquivo em uma API fake/mock.

---

# 🧪 18. JSON Server

O **JSON Server** é utilizado para criar rapidamente uma API simulada a partir de um arquivo JSON.

A ideia é:

```text
db.json
   ↓
JSON Server
   ↓
API REST fake
   ↓
Front-end
```

Isso permite praticar operações de API sem precisar construir um back-end completo.

> [!tip] Por que isso é útil no curso?  
> Porque o foco é **Front-end**.
> 
> O JSON Server fornece uma API funcional o suficiente para praticar consumo de dados, requisições e CRUD.

---

# 🧱 19. Estrutura do `db.json`

O arquivo contém as entidades como propriedades do JSON.

Exemplo simplificado:

```json
{
  "posts": [],
  "users": []
}
```

Cada entidade contém um **array de objetos**.

Por exemplo:

```json
{
  "posts": [
    {
      "id": 1,
      "idUser": 2,
      "title": "Meu primeiro post"
    },
    {
      "id": 2,
      "idUser": 1,
      "title": "Outro artigo"
    }
  ]
}
```

Observe a estrutura:

```text
posts
  ↓
array
  ↓
objetos
  ↓
cada objeto = um registro
```

---

# 🧩 20. Array de objetos

Essa parte é importante porque conecta o conteúdo com JavaScript.

Quando temos:

```json
{
  "posts": [
    {},
    {},
    {}
  ]
}
```

temos:

```text
posts
  │
  └── Array
       │
       ├── Object → Post 1
       ├── Object → Post 2
       └── Object → Post 3
```

Cada objeto representa um registro da entidade.

---

# 📰 21. Estrutura dos Posts no projeto

Os posts do `db.json` possuem os campos definidos durante a modelagem:

```text
Post
├── id
├── idUser
├── date
├── image
├── URL
├── category
├── title
├── summary
├── content
├── duration
├── stars
├── views
└── status
```

Esses dados serão utilizados posteriormente para alimentar a interface.

---

# 👤 22. Estrutura dos Users

Da mesma maneira, temos a entidade de usuários:

```text
User
├── id
├── user
├── name
├── surname
├── token
├── description
└── imageProfile
```

No JSON:

```text
users
  ↓
Array
  ↓
Objetos
  ↓
Registros de usuários
```

---

# 🔄 23. CRUD

Agora entramos em um dos conceitos mais importantes para trabalhar com APIs.

**CRUD** representa as quatro operações básicas sobre dados:

```text
C → Create
R → Read
U → Update
D → Delete
```

### Create

Criar um novo registro.

### Read

Ler/consultar registros existentes.

### Update

Atualizar um registro existente.

### Delete

Excluir um registro.

---

# 🌐 24. CRUD ↔ HTTP

Essas operações são representadas na API através dos métodos HTTP:

|CRUD|Operação|HTTP|
|---|---|---|
|**Create**|Criar|`POST`|
|**Read**|Consultar|`GET`|
|**Update**|Atualizar|`PUT`|
|**Delete**|Excluir|`DELETE`|

Visualmente:

```text
CREATE
  ↓
POST

READ
  ↓
GET

UPDATE
  ↓
PUT

DELETE
  ↓
DELETE
```

> [!important] Essa conexão é fundamental
> 
> **CRUD descreve a operação sobre os dados.**
> 
> **HTTP fornece o método utilizado para realizar essa operação através da API.**

---

# 🔎 25. Por que o ID é importante no Update?

Imagine que existam:

```text
Post #1
Post #2
Post #3
Post #4
```

Se quisermos atualizar somente o Post `#3`, precisamos informar **qual registro** deve ser alterado.

Por isso o identificador é fundamental.

O raciocínio é:

```text
UPDATE
  ↓
Qual registro?
  ↓
ID
  ↓
Alterar somente aquele registro
```

Sem especificar qual registro deve ser atualizado, podemos acabar alterando registros indevidos.

---

# ⚠️ 26. Cuidado com UPDATE sem especificação

O professor faz uma analogia com um:

```sql
UPDATE ... WHERE ...
```

O `WHERE` serve justamente para determinar **onde** a alteração será aplicada.

Sem essa especificação, podemos acabar aplicando a alteração em vários registros.

> [!warning] Conceito importante  
> Antes de alterar dados, precisamos saber **exatamente qual registro estamos alterando**.
> 
> É por isso que identificadores únicos são tão importantes.

---

# 🧪 27. Criando a API com JSON Server

A aula apresenta a instalação do JSON Server através do npm.

```bash
npm install json-server
```

Depois, o servidor pode ser iniciado apontando para o arquivo:

```text
db.json
```

e utilizando a porta:

```text
4000
```

O resultado será uma API local.

Conceitualmente:

```text
Projeto
│
├── db.json
│
└── JSON Server
       │
       ↓
   localhost:4000
```

---

# 🌐 28. O que é um endpoint?

Quando o JSON Server lê as entidades do `db.json`, ele disponibiliza endpoints correspondentes.

Se temos:

```json
{
  "posts": [],
  "users": []
}
```

podemos ter:

```text
localhost:4000/posts
localhost:4000/users
```

Esses endpoints representam as entidades.

---

# 📡 29. Endpoint `/posts`

Ao acessar:

```text
/posts
```

a API retorna os registros de posts.

Conceitualmente:

```text
GET /posts
      ↓
Lista de posts
```

---

# 👤 30. Endpoint `/users`

Da mesma maneira:

```text
GET /users
```

retorna os usuários.

```text
GET /users
      ↓
Lista de usuários
```

---

# 🔎 31. Filtrando informações pela API

Uma das partes mais interessantes demonstradas é a possibilidade de fazer filtros diretamente através da API.

O professor utiliza o campo:

```text
stars
```

para encontrar posts com determinada avaliação.

Por exemplo:

```text
/posts?stars=5
```

A ideia é:

```text
/posts
   ↓
?
   ↓
stars=5
   ↓
somente posts com 5 estrelas
```

Se existirem três posts com:

```text
stars = 5
```

a API retornará esses registros.

---

# 🧠 32. Por que isso é poderoso?

Imagine que a página inicial precise mostrar:

> **Posts mais bem avaliados**

Em vez de buscar todos os posts e fazer toda a lógica manualmente no front-end, podemos utilizar a própria API para solicitar somente os registros necessários.

Conceitualmente:

```text
Front-end
   │
   │ GET /posts?stars=5
   ↓
API
   │
   ↓
Somente posts com stars = 5
   │
   ↓
Front-end
```

Isso mostra como a API pode participar da lógica de busca e filtragem dos dados.

---

# 🔗 33. A arquitetura que você está começando a enxergar

Até aqui, o projeto está formando uma cadeia:

```text
                    BACK-END
                       │
                ┌──────▼──────┐
                │ Banco/API   │
                └──────┬──────┘
                       │
                 JSON Server
                       │
                       ▼
                    API REST
                       │
                       ▼
                    FRONT-END
                       │
                       ▼
                    React
```

No projeto do curso, o JSON Server ocupa temporariamente o papel de uma API que o React poderá consumir.

---

# 🧠 O grande raciocínio da aula

A aula inteira pode ser resumida neste fluxo:

```text
Problema
   ↓
Levantamento de requisitos
   ↓
Entidades
   ↓
Atributos
   ↓
Campos
   ↓
Relacionamentos
   ↓
Modelo conceitual
   ↓
Modelo lógico
   ↓
Modelo físico
   ↓
Banco de dados
   ↓
API
   ↓
Endpoints
   ↓
Front-end
```

E as operações sobre os dados:

```text
CREATE → POST
READ   → GET
UPDATE → PUT
DELETE → DELETE
```

---

# 📚 Glossário

|Termo|Significado|
|---|---|
|**Entidade**|Abstração de algo necessário para representar o problema|
|**Atributo**|Característica/informação pertencente a uma entidade|
|**Campo**|Representação de um atributo na estrutura de dados|
|**Primary Key**|Chave que identifica unicamente um registro|
|**Foreign Key**|Referência à chave de outra entidade|
|**1:1**|Relação de um para um|
|**1:N**|Uma entidade relacionada a vários registros|
|**N:N**|Vários registros relacionados a vários registros|
|**Modelo conceitual**|Entidades e relacionamentos em nível abstrato|
|**Modelo lógico**|Entidades com seus atributos/campos|
|**Modelo físico**|Implementação concreta no banco|
|**CRUD**|Create, Read, Update e Delete|
|**API**|Interface através da qual o sistema pode acessar dados/funcionalidades|
|**Endpoint**|URL específica para acessar determinado recurso da API|
|**JSON**|Formato utilizado para estruturar os dados|
|**JSON Server**|Ferramenta utilizada para criar uma API fake/mock a partir de JSON|
|**`db.json`**|Arquivo utilizado pelo JSON Server como fonte dos dados|

---

# ⚠️ Pontos de atenção

> [!warning] Não confunda modelo conceitual, lógico e físico

```text
CONCEITUAL
→ O que existe?

LÓGICO
→ Quais dados cada coisa possui?

FÍSICO
→ Como esses dados serão implementados?
```

---

> [!warning] Não confunda CRUD com HTTP

```text
CRUD
→ descreve a operação

HTTP
→ método usado na requisição
```

Exemplo:

```text
Create → POST
Read   → GET
Update → PUT
Delete → DELETE
```

---

> [!warning] Foreign Key fica no lado N

No exemplo trabalhado:

```text
User 1
  │
  └──────────< Posts N
                 │
                 └── idUser
```

O `idUser` permite identificar **qual usuário está relacionado ao post**.

---

# 📝 Resumo para revisão

Nesta aula, o professor aprofundou a modelagem das entidades do Blog. Uma entidade representa uma abstração de algo necessário para resolver um problema do mundo real e possui atributos que são representados como campos.

Também foram apresentados os relacionamentos **1:1, 1:N e N:N**. No Blog, um usuário pode possuir vários posts, formando uma relação **1:N**. O lado que possui `N` precisa armazenar a chave estrangeira para identificar a entidade relacionada.

A modelagem pode ser dividida em três níveis:

```text
Conceitual → entidades e relacionamentos
Lógico     → atributos e campos
Físico     → tipos e implementação
```

Como o curso é focado em Front-end, o professor utiliza o **JSON Server** para simular uma API através do arquivo `db.json`.

O `db.json` contém as entidades como arrays de objetos, e o JSON Server transforma essas informações em endpoints que podem ser consumidos pelo front-end.

Finalmente, a aula conecta **CRUD** aos métodos HTTP:

```text
Create → POST
Read   → GET
Update → PUT
Delete → DELETE
```

Isso estabelece uma ponte fundamental entre o que foi estudado sobre banco de dados e o que será utilizado posteriormente no React.