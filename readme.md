# ✈️ Airport Management System - Backend

Sistema de gerenciamento de aeroporto desenvolvido para fins de estudo em Engenharia de Software. O projeto foca em boas práticas de arquitetura, segurança e manipulação de banco de dados relacional.

## 🛠️ Tecnologias Utilizadas
- **Node.js** com **TypeScript**
- **Express** (Framework Web)
- **SQLite3** (Banco de Dados)
- **Bcrypt** (Criptografia de senhas)
- **JWT (JSON Web Token)** (Autenticação e Segurança)

## 🏗️ Estrutura do Projeto
- `src/config`: Configurações de banco de dados e autenticação.
- `src/models`: Interfaces que definem as entidades do sistema (User, Flight, AirPlane).
- `src/controllers`: Lógica de negócio e comunicação com o banco.
- `src/middlewares`: Camada de segurança (validação de tokens).
- `src/routes`: Definição de rotas públicas e privadas.

## ✅ Funcionalidades Implementadas
- **Autenticação**:
  - Registro de usuários com senhas hash (bcrypt).
  - Login gerando token JWT de 1 dia de duração.
- **Segurança**:
  - Middleware de proteção de rotas (apenas usuários logados cadastram dados).
- **Gestão de Aeroporto**:
  - Cadastro de Aeronaves (modelo, prefixo, capacidade, manutenção).
  - Cadastro e Listagem de Voos (origem, destino, horários, portão, status).

## 🚀 Próximos Passos
- [ ] Criar relacionamentos (Foreign Keys) entre Voos e Aeronaves.
- [ ] Implementar as funções de Editar (Update) e Deletar (Delete).
- [ ] Adicionar validações de regras de negócio.
- [ ] Iniciar o Frontend em React/Nextjs.