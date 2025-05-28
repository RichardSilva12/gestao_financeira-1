### ✅ Diagrama de Componentes – Visão Geral

Representa a interação entre os principais pacotes e componentes da aplicação, organizados em três camadas principais:

- **Frontend** (React): componentes de interface e navegação
- **Backend** (Node.js + Express): API e banco de dados
- **Firebase**: autenticação de usuários

### ✅ Diagrama de sequencia Adicionar Transação

o *Usuário* preenche os dados da transação (Usuário -> Dashboard)
o *Dashboard* envia uma requisição para o backend com os dados da transação(Dashboard -> Backend )
o *Backend* salva a nova transação no MongoDB(Backend -> MongoDB)
o *MongoDB* retorna a confirmação do salvamento para o backend(MongoDB --> Backend)
o *Backend* responde ao Dashboard com o ID da transação criada(Backend --> Dashboard)
o *Dashboard* atualiza a lista de transações exibida para o usuário(Dashboard -> Usuário)

### ✅ Diagrama de sequencia Excluir Transação 

o *Usuário* clica para excluir uma transação na interface do Dashboard.(Usuário -> Dashboard)
o *Dashboard* envia uma requisição DELETE para o backend, com o id da transação na URL e o uid no header.(Dashboard -> Backend)
o *Backend* remove a transação correspondente no MongoDB.(Backend -> MongoDB)
o *MongoDB* retorna a confirmação da exclusão para o backend.(MongoDB --> Backend)
o *Backend* responde ao Dashboard com a confirmação da exclusão ({deleted: 1}).(Backend --> Dashboard)
o *Dashboard* atualiza a lista de transações exibida para o usuário.(Dashboard -> Usuário)

### ✅ Diagrama de sequencia Login  

o *Usuário* preenche email e senha no componente de Login.
o **Login* envia os dados para o Firebase Authentication usando o método signInWithEmailAndPassword.
o *Firebase* retorna o resultado da autenticação (sucesso ou erro).

- *sucesso ou erro*
- Em caso de **sucesso**, o Login aciona o Router para navegar até o dashboard ("/dashboard").
- Em caso de erro, o **Login** exibe uma mensagem de erro para o usuário.

### ✅ Diagrama de sequencia Registro

o *Usuário* preenche email e senha no componente de Register.
o *Register* chama o método createUserWithEmailAndPassword do Firebase Authentication para criar a conta.
o *Firebase* retorna o resultado do cadastro (sucesso ou erro).

*sucesso ou erro*
- Em caso de **sucesso**, o Register pode navegar para o dashboard ("/dashboard") via Router (implementação opcional).
- Em caso de **erro**, o Register exibe uma mensagem de erro para o usuário.

### ✅ Diagrama de classe

*Usuario*: representa o usuário do sistema, com atributos para identificação e métodos para autenticação, registro e logout.

*Autenticacao*: encapsula os métodos de login, registro e verificação de estado do usuário.

*Transacao*: modelo que representa uma transação financeira, com atributos como descrição, valor, tipo, data e categoria, além de métodos para criar, excluir e listar transações por usuário.

*Dashboard*: gerencia a interface principal, contendo a lista de transações, filtros aplicados e métodos para manipular transações.

-- Relações entre classes --

Um **Usuario** utiliza uma instância de Autenticacao para login e registro.

Um **Usuario** pode possuir várias Transacoes.

O **Dashboard** gerencia as Transacoes e utiliza informações do Usuario.