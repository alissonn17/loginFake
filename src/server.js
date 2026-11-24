import dotenv from 'dotenv';
import express from 'express';
import router from './routes/login.routes.js';
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

// Carrega as variáveis definidas no arquivo .env.
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === "production";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL não configurada");
}

app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(express.json({ limit: "16kb" }));


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(router);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

function shutdown(signal) {
  console.log(`${signal} recebido. Encerrando o servidor...`);

  server.close((error) => {
    if (error) {
      console.error("Erro ao encerrar o servidor:", error);
      process.exit(1);
    }

    process.exit(0);
  });
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));