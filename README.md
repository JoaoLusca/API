# API de usuários

API REST com as quatro operações básicas (CRUD) sobre usuários. Foi meu primeiro projeto para praticar back-end com Node.js.

## Tecnologias

- Node.js com Express 5
- Prisma ORM
- MongoDB

## Rotas

| Método | Rota | O que faz |
|---|---|---|
| `POST` | `/users` | Cria um usuário (`name`, `email` e `age` no corpo da requisição) |
| `GET` | `/users` | Lista os usuários e aceita filtros por `name`, `email` e `age` na query string |
| `PUT` | `/users/:id` | Atualiza um usuário |
| `DELETE` | `/users/:id` | Remove um usuário |

## Como executar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Crie um arquivo `.env` com a string de conexão do MongoDB:

   ```
   DATABASE_URL="mongodb+srv://usuario:senha@cluster/banco"
   ```

3. Gere o cliente do Prisma e inicie o servidor:

   ```bash
   npx prisma generate
   node server.js
   ```

A API fica disponível em `http://localhost:3000`.

## O que pratiquei

Rotas e métodos HTTP com Express, parâmetros de rota e de query, modelagem de dados com o schema do Prisma e uso de variáveis de ambiente.
