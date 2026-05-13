import express, { Application, Request, Response } from "express";
import produtosRouter from "./routes/Produtos";

const app: Application = express();
const PORT: number = 3000;
app.use(express.json());

// Rota raiz — health check
app.get("/", (req: Request, res: Response): void => {
  res.status(200).json({
    message: "API Papelaria rodando com sucesso!",
    rotas: {
      "POST   /produtos":      "Cadastrar produto",
      "GET    /produtos":      "Listar todos os produtos",
      "GET    /produtos/:id":  "Buscar produto por ID",
      "PUT    /produtos/:id":  "Atualizar produto",
      "DELETE /produtos/:id":  "Remover produto",
    },
  });
});

// Rotas de produtos
app.use("/produtos", produtosRouter);

// Tratamento de rotas não encontradas
app.use((req: Request, res: Response): void => {
  res.status(404).json({ message: "Rota não encontrada" });
});

// Inicialização do servidor
app.listen(PORT, (): void => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});

export default app;