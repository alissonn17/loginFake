import dotenv from 'dotenv';
import express from 'express';
import router from './routes/login.routes.js';
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

// Carrega as variáveis definidas no arquivo .env.
dotenv.config();

const app = express();

// Usa a porta configurada ou, se não houver, a porta 3000.
const PORT = process.env.PORT || 3000;

// Permite que o servidor interprete corpos de requisições em JSON.
app.use(express.json());

// Documentação Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Registra as rotas de login e cadastro na aplicação.
app.use("/loginfake", router);

// Inicia o servidor e informa o endereço local no console.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});