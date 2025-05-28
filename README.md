
# 💸 gestao_financeira

Sistema de gestão financeira com frontend em React + Firebase e backend em Node.js + MongoDB, utilizando Docker para facilitar a execução.

---

## 📁 Estrutura do Projeto

---

## 🚀 Como Rodar o Projeto

### 🔧 Pré-requisitos

- Node.js instalado 
- Docker instalado 
- Conta no [Firebase](https://firebase.google.com/)
- Conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

### 🐳 Rodar com Docker (Recomendado)

> Rode tudo com apenas alguns comandos!

1. Abra o terminal na raiz do projeto e execute:

```bash
# Backend
cd gestao_api_backend
docker build -t gestao-backend .
docker run -p 5000:5000 gestao-backend

# Em outro terminal, para o frontend
cd gestao_api
docker build -t gestao-frontend .
docker run -p 3000:80 gestao-frontend

``rodar localmente`` 
# Backend
cd gestao_api_backend
npm install
node index.js

# Frontend
cd gestao_api
npm install
npm run dev

🔌 Conexão com MongoDB
No backend (gestao_api_backend/index.js), substitua a URI pela sua no MongoDB Atlas:

🔐 Firebase Auth
No frontend (gestao_api/firebase-config.js), preencha com suas credenciais do Firebase:

📬 Testar a API com Postman

Abrir o Postman e fazer requisições
**GET /api/transacoes**
URL: http://localhost:5000/api/transacoes

Método: GET

Headers:

uid: <cole aqui o UID do Firebase do usuário>

Exemplo de Header no Postman:

Key	          | Value 
uid         	abc123xyzUID

 **POST /api/transacoes**
URL: http://localhost:5000/api/transacoes

Método: POST

Headers:

Content-Type: application/json
 
json 
 {
  "uid": "abc123xyzUID",
  "descricao": "Salário",
  "valor": 3000,
  "tipo": "receita",
  "data": "2025-05-28",
  "categoria": "trabalho"
}

**DELETE /api/transacoes/:id**
URL: http://localhost:5000/api/transacoes/SEU_ID

Método: DELETE

Headers:

uid: abc123xyzUID


# test 
``/gestao_api_backend`` - Entrar no backend - cd gestao_api_backend  <br>
 1 - Instalar o pacote jest - npm install --save-dev jest <br>
 2 - Instalar o pacote supertest - npm install --save-dev supertest <br>
 3 - Instalar o pacote express - npm install express <br>
 4 - npm test <br>
<br> <br>

# rodar projeto usando docker <br>
- docker compose up --build -d
