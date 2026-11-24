# LoginFake API

API REST desenvolvida com Node.js e Express para cadastro e autenticação de usuários.

## Tecnologias

- Node.js
- Express
- Prisma
- PostgreSQL
- bcrypt
- Swagger UI

## Pré-requisitos

- Node.js instalado
- Banco de dados PostgreSQL
- npm

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
DATABASE_URL="postgresql://usuario:senha@host:porta/banco"
```

Configure o banco de dados e aplique as migrations:

```bash
npx prisma migrate deploy
npx prisma generate
```

## Executando a API

```bash
npm start
```

O servidor será iniciado em:

```text
http://localhost:3000
```

## Execução em produção

Defina as variáveis de ambiente no provedor de hospedagem:

```env
PORT=3000
NODE_ENV=production
DATABASE_URL="sua-url-do-postgres"
```

Inicie a aplicação:

```bash
npm start
```

Em produção, a documentação Swagger fica desativada. O endpoint de verificação de saúde fica disponível em:

```text
GET /health
```

## Documentação Swagger

Acesse:

```text
https://loginfake.onrender.com/api-docs
```

A documentação permite visualizar os endpoints, parâmetros e respostas da API.

## Endpoints

### Cadastrar usuário

```http
POST /loginfake/cadastro
```

Corpo da requisição:

```json
{
  "name": "João Silva",
  "birthDate": "2000-01-15",
  "email": "usuario@example.com",
  "cellphone": "(11) 99999-9999",
  "senha": "senha123"
}
```

Resposta de sucesso — `201 Created`:

```json
{
  "message": "Usuário cadastrado com sucesso",
  "user": {
    "id": 1,
    "name": "João Silva",
    "birthDate": "2000-01-15T00:00:00.000Z",
    "email": "usuario@example.com",
    "cellphone": "(11) 99999-9999"
  }
}
```

Possíveis respostas de erro:

- `400 Bad Request`: usuário já cadastrado ou dados inválidos

### Realizar login

```http
POST /loginfake/login
```

Corpo da requisição:

```json
{
  "email": "usuario@example.com",
  "senha": "senha123"
}
```

Resposta de sucesso — `200 OK`:

```json
{
  "message": "Login realizado com sucesso",
  "user": {
    "id": 1,
    "name": "João Silva",
    "birthDate": "2000-01-15T00:00:00.000Z",
    "email": "usuario@example.com",
    "cellphone": "(11) 99999-9999"
  }
}
```

Possíveis respostas de erro:

- `401 Unauthorized`: usuário ou senha incorretos

## Segurança

- Senhas são criptografadas com bcrypt antes de serem armazenadas.
- A senha não é retornada nas respostas da API.
- Não compartilhe ou envie para o repositório arquivos `.env` contendo credenciais reais.
