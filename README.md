# Alunos
    - Richard Peghin da Silva
    - Mateus Betini de Freitas
    - Matheus Leonardi Pereira Bento
    - Tiago Gabriel Carmelino 

    Professor Orientando 
    prof. Victor Hugo 
## 💸 gestao_financeira

Sistema de gestão financeira com frontend em React + Firebase e backend em Node.js + MongoDB, utilizando Docker para facilitar a execução.

---

## 🚀 Como Rodar o Projeto

### 🔧 Pré-requisitos

- Node.js instalado 
- Docker instalado 
- Conta no [Firebase](https://firebase.google.com/)
- Conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

# rodar localmente 
## Backend
cd gestao_api_backend<br>
npm install<br>
node index.js<br>

## Frontend
cd gestao_api<br>
npm install<br>
npm run dev<br>

# 📬 Testar a API com Postman

Documentação direta do postman:

https://www.postman.com/matheusleonardi/gestao-financeira/collection/qhww3eq/gestao-financeira-api?action=share&creator=43094961

## test 
``/gestao_api_backend`` - Entrar no backend - cd gestao_api_backend  <br>
 1 - Instalar o pacote jest - npm install --save-dev jest <br>
 2 - Instalar o pacote supertest - npm install --save-dev supertest <br>
 3 - Instalar o pacote express - npm install express <br>
 4 - npm test <br>
<br> <br>

# 🐳  Rodar Projeto usando Docker

Este projeto utiliza **Docker** para facilitar a execução do frontend e backend.<br>

## 🛠️ Pré-requisitos

Antes de iniciar, certifique-se de ter o **Docker** instalado em sua máquina:

👉 [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)

---

## 📁 Passos para executar o projeto

1. **Clone ou baixe** este repositório na sua máquina.
2. Abra o terminal (Prompt de Comando, PowerShell ou Terminal do VS Code).
3. Navegue até a pasta raiz do projeto. Por exemplo:

   ```bash
   cd C:\Users\SeuUsuario\Desktop\gestao_financeira

   -> Execute o comando
   docker compose up --build -d 

   -> Acesse o navegador com:
   http://localhost:3000

   ````

