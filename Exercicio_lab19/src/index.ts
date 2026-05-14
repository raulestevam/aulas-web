// src/index.ts
// Ponto de entrada — inicia o servidor Express

import express, { Application, Request, Response } from "express";
import produtosRouter from "./routes/Produtos";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response): void => {
  res.status(200).json({
    message: "API Papelaria rodando!",
    rotas: {
      "POST   /produtos":     "Cadastrar produto",
      "GET    /produtos":     "Listar todos",
      "GET    /produtos/:id": "Buscar por ID",
      "PUT    /produtos/:id": "Atualizar",
      "DELETE /produtos/:id": "Remover",
    },
  });
});

app.use("/produtos", produtosRouter);

app.use((req: Request, res: Response): void => {
  res.status(404).json({ message: "Rota não encontrada" });
});

app.listen(PORT, (): void => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});

export default app;