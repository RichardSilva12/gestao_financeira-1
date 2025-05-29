# 🖥 Backend - Sistema de Gestão Financeira

Este diretório contém o backend da aplicação **Sistema de Gestão Financeira**, desenvolvido em **Node.js** com **Express** e **MongoDB** (via Mongoose). A API oferece endpoints REST para gerenciar transações financeiras de usuários autenticados via Firebase.

---

## 📁 Estrutura da Pasta

```
gestao_api_backend/
├── Dockerfile
├── index.js
├── package.json
├── README.md
└── tests/
    └── backend.spec.js
```

- **index.js**: Arquivo principal, define as rotas da API, conecta ao MongoDB e exporta o app Express.
- **package.json**: Dependências, scripts e metadados do projeto.
- **Dockerfile**: Permite criar uma imagem Docker do backend.
- **tests/backend.spec.js**: Testes automatizados dos endpoints usando Jest e Supertest.

---

## 🧩 Tecnologias e Dependências

- Node.js
- Express
- Mongoose (MongoDB)
- body-parser
- cors
- Jest & Supertest (testes)

---

## 🔗 Conexão com MongoDB

A conexão com o banco está configurada em [`index.js`](gestao_api_backend/index.js):

```js
mongoose.connect("mongodb+srv://usuario:senha@cluster0.mongodb.net/nome_do_banco?retryWrites=true&w=majority")
```

---

## 🚦 Endpoints da API

- **GET `/api/transacoes`**  
  Lista todas as transações do usuário autenticado (header `uid` obrigatório).

- **POST `/api/transacoes`**  
  Cria uma nova transação.  
  Body: `{ uid, descricao, valor, tipo, data, categoria }`

- **DELETE `/api/transacoes/:id`**  
  Remove uma transação pelo ID (header `uid` obrigatório).

---

## 🐳 Docker

Para rodar o backend em container:

```sh
docker build -t gestao-backend .
docker run -p 5000:5000 gestao-backend
```

---

## 🔧 Como Rodar o Projeto Localmente

```sh
cd gestao_api_backend
npm install
node index.js
```
Acesse em: [http://localhost:5000](http://localhost:5000)

---

## 🧪 Testes Automatizados

Os testes estão em [`tests/backend.spec.js`](gestao_api_backend/tests/backend.spec.js):

```sh
npm test
```

---

## 📄 Observações

- O backend espera o `uid` do usuário autenticado no header das requisições.
- As transações são armazenadas por usuário.
- O projeto pode ser integrado ao frontend React/Firebase localizado em `/gestao_api`.

---