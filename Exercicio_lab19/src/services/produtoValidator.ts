export function validarProduto(data: any): void {
  if (!data.nome || !data.fabricante || data.preco === undefined || data.preco === null) {
    throw new Error("Produto requer nome, preco e fabricante");
  }
 
  if (typeof data.nome !== "string" || data.nome.trim() === "") {
    throw new Error("Campo 'nome' é obrigatório e não pode ser vazio");
  }
 
  if (typeof data.preco !== "number" || data.preco <= 0) {
    throw new Error("Campo 'preco' deve ser um número maior que zero");
  }
 
  if (typeof data.fabricante !== "object") {
    throw new Error("Campo 'fabricante' é obrigatório e deve ser um objeto");
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
    typeof data.fabricante.endereco.cidade !== "string" ||
    data.fabricante.endereco.cidade.trim() === ""
  ) {
    throw new Error("O endereço do fabricante deve ter uma 'cidade'");
  }
 
  if (
    !data.fabricante.endereco.pais ||
    typeof data.fabricante.endereco.pais !== "string" ||
    data.fabricante.endereco.pais.trim() === ""
  ) {
    throw new Error("O endereço do fabricante deve ter um 'pais'");
  }
}
 
export function validarIdUnico(id: number, produtos: { id: number }[]): void {
  const idJaExiste = produtos.some((p) => p.id === id);
  if (idJaExiste) {
    throw new Error(`Já existe um produto com id ${id}`);
  }
}