# 📊 Interface Web - Sistema de Gestão Financeira

Este é o front-end do projeto **Sistema de Gestão Financeira**, construído em **React** com **Firebase Auth** para autenticação e integração com uma API Flask que utiliza **MongoDB** como banco de dados.

---

## 📁 Estrutura do Projeto

Localizado dentro da pasta `/gestao_api`, o front-end possui a seguinte organização:

---

## 🚀 Funcionalidades

- **Registro de usuário** com Firebase Authentication  
- **Login seguro** e persistente  
- **Proteção de rotas**: apenas usuários autenticados acessam o Dashboard  
- **Dashboard**  
   A tela de Dashboard é o coração do sistema de gestão financeira. Ao se autenticar com Firebase, o usuário é redirecionado para esse painel, onde poderá:

  - **Adicionar transações financeiras** (receitas ou despesas)  
  - **Classificar por categoria** (como alimentação, transporte, salário)  
  - **Filtrar por tipo e categoria**  
  - **Visualizar um relatório mensal** com saldo, totais e lista das transações  
  - **Excluir qualquer transação** já registrada  
  - Todos os dados são enviados e recebidos da [API] via `fetch`, com headers autenticados (accessToken e uid).  

   As transações são armazenadas no MongoDB via backend.

---

## 🐳 Docker e Deploy

O projeto inclui um `Dockerfile` que realiza o build da aplicação React e utiliza o **Nginx** para servir os arquivos estáticos. O Nginx está configurado para suportar **rotas SPA** e aplicar cache a arquivos estáticos, garantindo melhor desempenho em produção.

---

## 🔧 Como Rodar o Projeto

### Executando localmente

```bash
cd gestao_api/frontend
npm install
npm run dev
