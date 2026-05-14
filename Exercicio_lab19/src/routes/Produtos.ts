import { Router } from "express";
import {
  novoProduto,
  listarProdutos,
  buscarProduto,
  atualizarProduto,
  removerProduto,
} from "../controllers/produtoController";
 
const router = Router();
 
router.post("/", novoProduto);
router.get("/", listarProdutos);
router.get("/:id", buscarProduto);
router.put("/:id", atualizarProduto);
router.delete("/:id", removerProduto);
 
export default router;