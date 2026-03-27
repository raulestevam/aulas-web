export class Livro{
    nome: string;
    autor: string;
    anoPublicacao: number;
    editora: string
    constructor(nome: string, autor: string, anoPublicacao: number, editora: string){
        this.nome = nome;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.editora = editora
    }
    exibirDados():void{
        console.log(`Nome: ${this.nome}\nAutor: ${this.autor}\nAno de Publicacao: ${this.anoPublicacao}\nEditora: ${this.editora}`);
    }
}