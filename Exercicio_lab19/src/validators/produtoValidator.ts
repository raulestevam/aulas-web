import { Fabricante } from "../types";

export function validarProduto(data: any): void {
  // Campos obrigatórios básicos
  if (!data.nome || typeof data.nome !== "string" || data.nome.trim() === "") {
    throw new Error("Campo 'nome' é obrigatório e deve ser uma string não vazia");
  }

  if (data.preco === undefined || data.preco === null) {
    throw new Error("Campo 'preco' é obrigatório");
  }

  if (typeof data.preco !== "number" || data.preco <= 0) {
    throw new Error("Campo 'preco' deve ser um número maior que zero");
  }

  if (!data.fabricante || typeof data.fabricante !== "object") {
    throw new Error("Campo 'fabricante' é obrigatório e deve ser um objeto");
  }

  validarFabricante(data.fabricante);
}

export function validarFabricante(fabricante: any): void {
  if (!fabricante.nome || typeof fabricante.nome !== "string" || fabricante.nome.trim() === "") {
    throw new Error("O fabricante deve possuir um 'nome' válido");
  }

  if (!fabricante.endereco || typeof fabricante.endereco !== "object") {
    throw new Error("O fabricante deve possuir um 'endereco' válido");
  }

  if (
    !fabricante.endereco.cidade ||
    typeof fabricante.endereco.cidade !== "string" ||
    fabricante.endereco.cidade.trim() === ""
  ) {
    throw new Error("O endereço do fabricante deve possuir uma 'cidade' válida");
  }

  if (
    !fabricante.endereco.pais ||
    typeof fabricante.endereco.pais !== "string" ||
    fabricante.endereco.pais.trim() === ""
  ) {
    throw new Error("O endereço do fabricante deve possuir um 'pais' válido");
  }
}