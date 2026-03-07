# ✈️ Airport Management System - Backend

Este projeto é um sistema de gerenciamento de aeroporto desenvolvido com **Node.js**, **TypeScript** e **SQL**. A arquitetura foi pensada para ser escalável e organizada, utilizando padrões de mercado como MVC e Service Pattern.

## 🏗️ Estrutura de Pastas

Abaixo está a explicação de como o projeto está organizado e o que irei colocar em cada arquivo:

### 📂 `src/config`
Configurações globais da aplicação.
* **`auth.ts`**: Configurações de expiração de tokens e segredos para autenticação.
* **`database.ts`**: Configurações de ambiente para conexão com SQL Server ou SQLite3.

### 📂 `src/controllers`
Lidam com as requisições HTTP e enviam as respostas para o cliente.
* **`auth.ts`**: Lógica de login e logout.
* **`vagas.ts`**: Controle de ocupação de hangares ou pátios.
* **`voos.ts`**: Métodos para listar, criar e atualizar voos.

### 📂 `src/services`
Contêm a regra de negócio real. É onde a inteligência do sistema vive.
* **`AutenticarUsuario.ts`**: Validação de credenciais e geração de tokens.
* **`CancelarPassagem.ts`**: Regras para cancelamento e estorno.
* **`criarVoo.ts`**: Validações antes de registrar um novo voo no banco.

### 📂 `src/repositories`
Camada de persistência de dados (Queries SQL).
* **`usuario.ts`**, **`vagas.ts`**, **`voos.ts`**: Interagem diretamente com o banco de dados.

### 📂 `src/models`
Definições de tipos e entidades do sistema usando TypeScript.
* **`aviao.ts`**, **`passageiro.ts`**, **`voo.ts`**: Interfaces que garantem que os dados sigam o formato correto.

### 📂 `src/routes`
Mapeamento de caminhos (endpoints) da API.
* **`index.ts`**: Centralizador que agrupa todas as rotas para simplificar o `server.ts`.
* **`usuario.ts`**, **`vagas.ts`**, **`voos.ts`**: Definição de métodos (GET, POST, PUT, DELETE) para cada entidade.

---

## 🚀 Próximos Passos

1.  **Configuração do Banco**: Finalizar o arquivo `connection.ts` na pasta `database` para conectar com seu SQLite3 ou SQL Server.
2.  **Criação das Migrations**: Definir as tabelas de `voos` e `usuarios` no banco de dados.
3.  **Implementação do Auth**: Configurar a criptografia de senhas usando o **Bcrypt** no `AutenticarUsuario.ts`.
4.  **Integração de Rotas**: Importar as rotas de voos e usuários dentro do `index.ts` e testar a primeira requisição no `server.ts`.
