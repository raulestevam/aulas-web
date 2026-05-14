// src/validators/produtoValidator.ts
// Valida os dados recebidos antes de chegar no controller

export function validarProduto(data: any): void {
  if (!data.nome || typeof data.nome !== "string" || data.nome.trim() === "") {
    throw new Error("Campo 'nome' é obrigatório e não pode ser vazio");
  }

  if (!data.nome || !data.preco || !data.fabricante) {
    throw new Error("Produto requer nome, preco e fabricante");
  }

  if (data.preco === undefined || data.preco === null) {
    throw new Error("Campo 'preco' é obrigatório");
  }

  if (typeof data.preco !== "number" || data.preco <= 0) {
    throw new Error("Campo 'preco' deve ser um número maior que zero");
  }

  if (!data.fabricante || typeof data.fabricante !== "object") {
    throw new Error("Campo 'fabricante' é obrigatório");
  }

  if (
    !data.fabricante.nome ||
    typeof data.fabricante.nome !== "string" ||
    data.fabricante.nome.trim() === ""
  ) {
    throw new Error("O fabricante deve ter um 'nome' válido");
  }

  if (!data.fabricante.endereco || typeof data.fabricante.endereco !== "object") {
    throw new Error("O fabricante deve ter um 'endereco'");
  }

  if (
    !data.fabricante.endereco.cidade ||
    data.fabricante.endereco.cidade.trim() === ""
  ) {
    throw new Error("O endereço do fabricante deve ter uma 'cidade'");
  }

  if (
    !data.fabricante.endereco.pais ||
    data.fabricante.endereco.pais.trim() === ""
  ) {
    throw new Error("O endereço do fabricante deve ter um 'pais'");
  }
}