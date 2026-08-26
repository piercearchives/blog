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