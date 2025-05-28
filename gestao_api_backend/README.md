# 🖥 Backend - Sistema de Gestão Financeira

Este é o backend da aplicação **Sistema de Gestão Financeira**, desenvolvido em **Node.js** com **Express** e **MongoDB** (via Mongoose). A API oferece endpoints para gerenciar transações financeiras, armazenadas em um banco MongoDB.

---

## 🧩 Tecnologias e Dependências

- Node.js  
- Express  
- Mongoose (MongoDB)  
- body-parser  
- cors    

---

## 🔗 Conexão com MongoDB

A conexão com o banco está configurada no arquivo principal (`index.js`), usando a URI MongoDB:

```js
mongoose.connect("mongodb+srv://usuario:senha@cluster0.mongodb.net/nome_do_banco?retryWrites=true&w=majority")

---

## 🐳 Docker - Backend
 Este Dockerfile cria uma imagem Docker para o backend da aplicação com Node.js:


## 🔧 Como Rodar o Projeto backend

### Executando localmente
 - git clone <url-do-repositorio>
 - cd nome-do-projeto/backend
 - npm install
 - npm start  -  http://localhost:5000.


## rodar o test 
 - /test
 - npm test
