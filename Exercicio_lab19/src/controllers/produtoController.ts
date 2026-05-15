import { Request, Response } from "express";
import { Produto } from "../models/Produto";
import { validarProduto, validarIdUnico } from "../services/produtoValidator";
 
const produtos: Produto[] = [];
 
export function novoProduto(req: Request, res: Response): void {
  try {
    const data: any = req.body;
 
    validarProduto(data);
 
    const novoId: number =
      data.id !== undefined
        ? Number(data.id)
        : produtos.length > 0
        ? Math.max(...produtos.map((p) => p.id)) + 1
        : 1;
 
    if (data.id !== undefined) {
      validarIdUnico(novoId, produtos);
    }
 
    const produto = new Produto(novoId, data.nome, data.preco, data.fabricante);
    produtos.push(produto);
 
    res.status(201).json(produto);
  } catch (e: unknown) {
    res.status(400).json({ message: (e as Error).message });
  }
}
 
export function listarProdutos(req: Request, res: Response): void {
  try {
    if(produtos.length === 0){
      res.status(404).json("Não há nenhum produto cadastrado");
      return
    }
    res.status(200).json(produtos);
  } catch (e: unknown) {
    res.status(500).json({ message: (e as Error).message });
  }
}
 
export function buscarProduto(req: Request, res: Response): void {
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
 
export function atualizarProduto(req: Request, res: Response): void {
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
 
    const fabricanteNovo = data.fabricante ?? {};
    const enderecoNovo = fabricanteNovo.endereco ?? {};
 
    const fabricanteAtualizado = {
      nome: fabricanteNovo.nome ?? produtoAtual.fabricante.nome,
      endereco: {
        cidade: enderecoNovo.cidade ?? produtoAtual.fabricante.endereco.cidade,
        pais: enderecoNovo.pais ?? produtoAtual.fabricante.endereco.pais,
      },
    };
 
    const produtoFinal = {
      nome: data.nome ?? produtoAtual.nome,
      preco: data.preco ?? produtoAtual.preco,
      fabricante: fabricanteAtualizado,
    };
 
    validarProduto(produtoFinal);
 
    produtos[index] = new Produto(
      id,
      produtoFinal.nome,
      produtoFinal.preco,
      produtoFinal.fabricante
    );
 
    res.status(200).json(produtos[index]);
  } catch (e: unknown) {
    res.status(400).json({ message: (e as Error).message });
  }
}
 
export function removerProduto(req: Request, res: Response): void {
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