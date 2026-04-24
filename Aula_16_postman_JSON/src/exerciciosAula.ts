// exercicio 1
class Produto {
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

//exercicio 2
class Categoria{
    id: number;
    nome: string;

    constructor(id: number, nome: string){
        this.id = id;
        this.nome = nome;
    }
}

class Produtos2{
    id: number;
    nome: string;
    preco: number;
    categoria: Categoria;

    constructor(id: number, nome: string, preco: number, categoria: Categoria){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
}

//exercicio 3
class Endereco{
    cidade: string;
    pais: string;

    constructor(cidade: string, pais: string){
        this.cidade = cidade;
        this.pais = pais;
    }
}

class Fabricante{
    nome: string;
    endereco: Endereco;

    constructor(nome: string, endereco: Endereco){
        this.nome = nome;
        this.endereco = endereco;
    }
}

class Produto3{
    id: number;
    nome: string;
    preco: number;
    fabricante: Fabricante;

    constructor(id: number, nome: string, preco: number, fabricante: Fabricante){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.fabricante = fabricante;
    }
}

//exercicio 4
class Item{
    nome:string;
    qtd:number;

    constructor(nome:string, qtd:number){
        this.nome = nome;
        this.qtd = qtd;
    }
}

class Kit_Escolar{
    id: number;
    nome:string;
    itens: Item[];
    constructor(id: number, nome:string, itens: Item[]){
        this.id = id;
        this.nome = nome;
        this.itens = itens;
    }
    exibirKit(){
        console.log(
            this.itens.forEach(item => item)
        );
    }
}

const Kit:Kit_Escolar = new Kit_Escolar(1, "kit do raul");