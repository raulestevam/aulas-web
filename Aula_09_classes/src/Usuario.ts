export class Usuario{
    nome: string;
    email: string;

    constructor(nome: string, email: string){
        this.nome = nome
        this.email = email
    }
    boasVindas():void{
        console.log(`Bem-vindo(a) ${this.nome}, seu e-mail e: ${this.email}`);
    }
}