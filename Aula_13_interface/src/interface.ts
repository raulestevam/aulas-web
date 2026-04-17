interface Pessoa{
    nome: string,
    idade: number,
    profissao?: string
}

const Joao: Pessoa = {
    nome: "João",
    idade: 30
};

const Maria: Pessoa = {
    nome: "Maria",
    idade: 31,
    profissao: "Engenheira"
};

// interface com const
interface Calculadora{
    somar(a:number, b:number ):number;
    subtrair(a:number, b:number):number;
}

const calcular: Calculadora = {
    somar(a, b){
        return a + b;
    },
    subtrair(a, b) {
        return a-b;
    }
};

//interface com classes
interface Animal{
    nome:string
    emitirSom():void
}

class Cachorro implements Animal{
    nome:string;

    constructor(nome:string){
        this.nome = nome
    }

    emitirSom(): void {
        console.log("AuAU");
    }
}