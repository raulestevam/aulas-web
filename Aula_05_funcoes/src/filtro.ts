const numeros = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4];

const semDuplicados = numeros.filter((valor, indice, self) => {
    return self.indexOf(valor) === indice; 
});

console.log(semDuplicados);

let pares:number[] = [1, 2, 3, 4, 6, 7, 89, 9 ,90 ];

let maioresQueTres = numeros.filter(n => n>3)
console.log(maioresQueTres);

let valores = [1, 2, undefined, null, 10, 50, 200];

let filtrados = valores.filter(v=> v !== v && v !== undefined);
console.log(filtrados);

type Pessoa ={
    nome:string;
    idade:number;
    email:string;
};

const pessoas: Pessoa[] = [
    {nome: "Raul", idade: 19,  email:"email@email"},
    {nome: "Ana", idade:17, email:"email@email"}
];

let maiores = pessoas.filter(pessoa => pessoa.idade >=18);
console.log(maiores);