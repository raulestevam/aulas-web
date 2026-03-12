const numeros: number[] = [1, 2, 3, 4, 5];
const dobro: number[] = numeros.map(n => n*2);
const string: string[] = numeros.map(n => `Numero: ${n}`);
console.log(string);

type Produto = {id: number, nome:string, preco:number};
const produtos: Produto[] =[ 
    {id:1, nome:'Mouse', preco: 50},
    {id: 2, nome:'Mousepad', preco:100}
];

const nome: string[] = produtos.map(valor => valor.nome);

