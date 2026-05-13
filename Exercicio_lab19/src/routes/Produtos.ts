import { Router, Request, Response } from "express";
import { Produto } from "../models/Produto";
import { validarProduto, validarFabricante } from "../validators/produtoValidator";

const router = Router();
const produtos: Produto[] = [];

// post - cadastro de produto
function novoProduto(req: Request, res: Response): void {
  try {
    const data: any = req.body;

    // verfica se ta vazio
    if (!data.nome || !data.preco || !data.fabricante) {
      throw new Error("Produto requer nome, preco e fabricante");
    }

    validarProduto(data);

    // ID duplicado
    if (data.id !== undefined) {
      const idJaExiste = produtos.some((p) => p.id === data.id);
      if (idJaExiste) {
        res.status(400).json({ message: `Já existe um produto com id ${data.id}` });
        return;
      }
    }

    // Gera ID automaticamente se não informado
    const novoId: number =
      data.id !== undefined
        ? Number(data.id)
        : produtos.length > 0
        ? Math.max(...produtos.map((p) => p.id)) + 1
        : 1;

    const produto = new Produto(
      novoId,
      data.nome,
      data.preco,
      data.fabricante
    );

    produtos.push(produto);

    res.status(200).json(produto);
  } catch (e: unknown) {
    res.status(400).json({ message: (e as Error).message });
  }
}


// GET /produtos — Listar todos os produtos
function listarProdutos(req: Request, res: Response): void {
  try {
    res.status(200).json(produtos);
  } catch (e: unknown) {
    res.status(500).json({ message: (e as Error).message });
  }
}

// GET /produtos/:id — Buscar produto por ID
function buscarProduto(req: Request, res: Response): void {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({ message: "ID inválido" });
      return;
    }

    const produto = produtos.find((p) => p.id === id);

    if (!produto) {
      res.status(404).json({ message: `Produto com id ${id} não encontrado` });
      return;
    }

    res.status(200).json(produto);
  } catch (e: unknown) {
    res.status(500).json({ message: (e as Error).message });
  }
}

// PUT /produtos/:id — Atualizar produto
function atualizarProduto(req: Request, res: Response): void {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({ message: "ID inválido" });
      return;
    }

    const index = produtos.findIndex((p) => p.id === id);

    if (index === -1) {
      res.status(404).json({ message: `Produto com id ${id} não encontrado` });
      return;
    }

    const data: any = req.body;
    
    const produtoAtual = produtos[index];

    const nomeAtualizado: string = data.nome ?? produtoAtual.nome;
    const precoAtualizado: number = data.preco ?? produtoAtual.preco;

    const fabricanteAtual = produtoAtual.fabricante;
    const fabricanteNovo = data.fabricante ?? {};

    const enderecoAtual = fabricanteAtual.endereco;
    const enderecoNovo = fabricanteNovo.endereco ?? {};

    const fabricanteAtualizado = {
      nome: fabricanteNovo.nome ?? fabricanteAtual.nome,
      endereco: {
        cidade: enderecoNovo.cidade ?? enderecoAtual.cidade,
        pais: enderecoNovo.pais ?? enderecoAtual.pais,
      },
    };

    // Valida dados finais antes de salvar
    const produtoFinal = {
      nome: nomeAtualizado,
      preco: precoAtualizado,
      fabricante: fabricanteAtualizado,
    };

    validarProduto(produtoFinal);

    // Atualiza no array
    produtos[index] = new Produto(
      id,
      nomeAtualizado,
      precoAtualizado,
      fabricanteAtualizado
    );

    res.status(200).json(produtos[index]);
  } catch (e: unknown) {
    res.status(400).json({ message: (e as Error).message });
  }
}

// DELETE /produtos/:id — Remover produto
function removerProduto(req: Request, res: Response): void {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({ message: "ID inválido" });
      return;
    }

    const index = produtos.findIndex((p) => p.id === id);

    if (index === -1) {
      res.status(404).json({ message: `Produto com id ${id} não encontrado` });
      return;
    }

    const removido = produtos.splice(index, 1)[0];

    res.status(200).json({
      message: `Produto '${removido.nome}' removido com sucesso`,
      produto: removido,
    });
  } catch (e: unknown) {
    res.status(500).json({ message: (e as Error).message });
  }
}

// Registro das rotas
router.post("/", novoProduto);
router.get("/", listarProdutos);
router.get("/:id", buscarProduto);
router.put("/:id", atualizarProduto);
router.delete("/:id", removerProduto);

export default router;