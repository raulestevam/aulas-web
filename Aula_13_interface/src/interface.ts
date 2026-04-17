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

console.log(Joao);
console.log(Maria);

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
console.log(calcular.somar(4, 2))
console.log(calcular.subtrair(5, 3))

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
    exibirNome(): void{
        console.log(this.nome)
    }
}

const dogLouco = new Cachorro("DogDog");
dogLouco.emitirSom()
dogLouco.exibirNome()