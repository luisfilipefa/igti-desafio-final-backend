import { connectDB } from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { router } from "./routes/routes.js";

/**
 * Faz a leitura do arquivo
 * ".env" por padrão
 */
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Vinculando o React ao app
 */
app.use(express.static(path.join("__dirname", "client/build")));

/**
 * Rota raiz
 */
app.get("/api/", (_, response) => {
  response.send({
    message:
      "Bem-vindo à API de lançamentos. Acesse /transaction e siga as orientações",
  });
});

/**
 * Rotas principais do app
 */
app.use("/api/transaction", router);

connectDB();

/**
 * Definição de porta e
 * inicialização do app
 */
const APP_PORT = process.env.PORT || 3001;
app.listen(APP_PORT, () => {
  console.log(`Servidor iniciado na porta ${APP_PORT}`);
});
