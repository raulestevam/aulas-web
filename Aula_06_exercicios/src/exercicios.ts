//exercício 1
function maiuscula (texto:string):string{
    return texto.toUpperCase()
}
const maiuscula_ambda = (texto:string):string => texto.toUpperCase();

console.log(maiuscula_ambda("ana"));
console.log(maiuscula("raul"));

//exercício 2
function exponenciacao (a:number, b:number):number{
    let i
    let resultado: number = 1;
    for(i=0; i<b; i++)
        resultado *= a;
    return resultado;
}
console.log(exponenciacao(2, 3));

//exercicio 3
function dobrarNumeros (numeros: number[]):number[]{
    for (let i=0; i<numeros.length; i++)
        numeros[i] *= 2;
    return numeros;
}
let numeros: number[] = [1, 2, 3, 4, 5]
console.log(dobrarNumeros(numeros));

//exercicio 4
type Funcionario = {
     nome: string;
     cargo: string;
};
const funcionarios: Funcionario[] =
[ 
    { nome: "Marcos", cargo: "Desenvolvedor" },
    { nome: "Fernanda", cargo: "Gerente" }, 
    { nome: "Carlos", cargo: "Desenvolvedor" }, 
    { nome: "Joana", cargo: "Analista" }
]; 
const cargoDesejado: string = "Desenvolvedor";

