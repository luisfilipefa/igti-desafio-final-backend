import dotenv from "dotenv";
import mongoose from "mongoose";

/**
 * Faz a leitura do arquivo
 * ".env" por padrão
 */
dotenv.config();

/**
 * Conexão ao Banco de Dados
 */
const { DB_CONNECTION } = process.env;

export const connectDB = () => {
  console.log("Iniciando conexão ao MongoDB...");

  let connectedToMongoDB = false;

  mongoose.connect(
    DB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        connectedToMongoDB = false;
        console.error(`Erro na conexão ao MongoDB - ${err}`);
      }
    }
  );

  const { connection } = mongoose;

  connection.once("open", () => {
    connectedToMongoDB = true;
    console.log("Conectado ao MongoDB");
  });
};
