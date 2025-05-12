[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/2g3CDhiO)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=19494834)

# 📘 Entendendo Rotas e Recursos em uma API REST

## 1. O que são Rotas em uma API REST?

Rotas em uma API REST funcionam como **endereços de ruas em uma cidade**. Imagine que uma cidade é um sistema de software e cada **casa** representa uma **informação** ou um **recurso** (como um usuário, um produto, ou uma nota). Para chegar até cada casa, você precisa saber o **endereço exato**. Esse endereço, no mundo das APIs, é o que chamamos de **rota**.

### 🌐 Metáfora prática: Correios de uma cidade

- Você quer entregar uma carta para a casa da Maria? Precisa do endereço.
- Na API, se quiser acessar o usuário Maria, usa algo como `/usuarios/15`.

### Para que servem as rotas?

As rotas permitem **comunicação clara entre quem pede a informação (cliente)** e **quem entrega (servidor)**. Com as rotas, é possível:

- 📬 **Pedir algo específico**
- 🧾 **Criar algo novo**
- 🛠️ **Modificar algo existente**
- 🗑️ **Remover algo**

### 🍽️ Outra metáfora: Cardápio de restaurante

- “🍕 Pizza Margherita – peça aqui” → acessar um recurso
- “🍝 Adicionar molho extra” → modificar um recurso
- “🍨 Cancelar sobremesa” → excluir um recurso

---

## 2. O que são Recursos (Resources) em uma API REST?

Recursos são os **"substantivos"** do sistema — as **coisas** com as quais você interage.

### 📚 Metáfora: Biblioteca

- **Livros**, **usuários**, **empréstimos** = todos são recursos
- Cada recurso tem suas **informações próprias**

### 💬 Metáfora: Aplicativo de delivery

- 🍔 Produtos
- 🛒 Pedidos
- 🧑‍🍳 Restaurantes
- 👤 Clientes

Cada um desses é um **recurso** que pode ser acessado ou alterado por uma API.

---

## 3. Ligando Rotas e Recursos

### 🧭 Rotas + 📦 Recursos = Entregas com destino certo

Você é um entregador. Os **recursos** são os pacotes (dados), e as **rotas** são os endereços para onde eles devem ser entregues.

### 📦 Tabela comparativa

| Mundo Real                   | API REST              | Explicação                                                 |
|-----------------------------|------------------------|------------------------------------------------------------|
| Rua dos Usuários nº 25      | `/usuarios/25`         | Acessa o usuário de ID 25                                  |
| Rua dos Pedidos nº 102      | `/pedidos/102`         | Acessa o pedido número 102                                 |
| Rua dos Produtos            | `/produtos`            | Acessa a lista de produtos                                 |
| Criar nova entrega          | `POST` em `/entregas`  | Cria um novo recurso de entrega                            |

### 🎓 Em resumo, para seus alunos:

> Em uma API REST, os **recursos** são os dados importantes (como usuários, produtos, pedidos), e as **rotas** são os caminhos que usamos para acessar ou manipular esses dados. A rota define *para onde* vai o pedido, e o recurso define *o que* está sendo tratado.

---


---

# 📝 Atividade: Criando Rotas para Recursos de uma API REST com Express.js

## 🎯 Objetivo
Existe um arquivo chamado `app.js` na raiz deste projeto, você deverá definir **rotas RESTful** para dois recursos diferentes usando a lógica de APIs dentro deste arquivo. O exercício tem como base um sistema de **biblioteca online**, e você também terá acesso a links da documentação do **Express.js**, caso queira implementar as rotas na prática.

Neste arquivo `app.js` já existe a rota raiz mapeada e executando uma função que retorna um simples Hello World no formato JSON.

---

## 🧩 Cenário

Você está projetando uma API para um sistema de biblioteca que gerencia:

1. **Livros**
2. **Usuários da biblioteca**

Sua tarefa é **criar as rotas principais (CRUD)** para cada um desses recursos.

---

## 📌 Parte 1 – Recurso: `Livro`

Um livro possui:
- Título
- Autor
- Ano de publicação
- Número de páginas

Crie rotas para:

- 📥 Criar um novo livro  
- 📄 Listar todos os livros  
- 🔍 Buscar um livro pelo ID  
- ✏️ Atualizar os dados de um livro específico  
- ❌ Remover um livro da base de dados

---

## 📌 Parte 2 – Recurso: `Usuário`

Um usuário possui:
- Nome completo
- Email
- Data de inscrição

Crie rotas para:

- 📥 Criar um novo usuário  
- 📄 Listar todos os usuários  
- 🔍 Buscar um usuário pelo ID  
- ✏️ Atualizar os dados de um usuário específico  
- ❌ Remover um usuário da base de dados

---

## ▶️ Instruções para executar o projeto

Antes de iniciar os testes com as rotas, siga os passos abaixo:

1.	Navegue até a pasta do projeto usando o terminal ou prompt de comando:
```bash
cd nome-da-pasta-do-projeto
```

2.	Instale as dependências do projeto:
```bash
npm install
```

3.	Inicie a aplicação:
```bash
node app.js
```

Após esses passos, o servidor deverá estar rodando (por padrão, em http://localhost:3000). Você pode utilizar o Postman, Insomnia ou o navegador para testar suas rotas.

---

## ✅ Avaliação da Atividade

A avaliação considerará a **coerência na criação das rotas** e a **adequação das respostas retornadas** por elas. Os alunos devem se atentar aos seguintes critérios:

1. As respostas estão sendo retornadas em **formato JSON**?  
2. O tipo de dado retornado está **adequado ao tipo de rota**?  
   - Ex: uma rota de listagem retorna um array?  
   - Uma rota de busca retorna um objeto simples?  
   - Uma rota de exclusão retorna um corpo vazio?
3. Os **códigos de status HTTP** estão sendo utilizados corretamente?  
   - `200 OK`, `201 Created`, `204 No Content`, `400 Bad Request`, etc.

⚠️ **O conteúdo dos dados em si não será avaliado**, mas sim **se a estrutura e o comportamento estão apropriados ao propósito da rota**.  

Por exemplo:
- A rota para listar todos os usuários está retornando de fato uma **lista**?  
- A rota para criar um livro retorna o **status 201 Created** e o objeto recém-criado?

--

## 📘 Links úteis da documentação do Express.js

Caso deseje implementar as rotas, consulte os seguintes trechos da documentação oficial:

- 📌 **Instalando Express**  
  https://expressjs.com/pt-br/starter/installing.html

- 📌 **Criando uma aplicação Express**  
  https://expressjs.com/pt-br/starter/hello-world.html

- 🔀 **Definindo rotas com métodos HTTP**  
  https://expressjs.com/pt-br/guide/routing.html

---

## 🧠 Dica

Lembre-se:
- O **nome da rota** representa o **recurso**
- O **verbo HTTP** representa a **ação** que você deseja fazer
  - `GET` → Buscar
  - `POST` → Criar
  - `PUT` ou `PATCH` → Atualizar
  - `DELETE` → Excluir
