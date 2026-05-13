// src/types.ts

export interface Endereco {
  cidade: string;
  pais: string;
}

export interface Fabricante {
  nome: string;
  endereco: Endereco;
}

export interface ProdutoData {
  id: number;
  nome: string;
  preco: number;
  fabricante: Fabricante;
}