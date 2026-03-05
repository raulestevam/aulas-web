function mensagem(f:string):string{
    return f;
}

const mensagem_ambda = (f:string):string => f;

console.log(mensagem_ambda("Olá ADS!"));

const soma_ambda = (num:number, num1:number):void => console.log(num+num1)
soma_ambda(2, 2);
soma_ambda(3, 4);

function soma(a:number, b:number):void{
    console.log(a+b);
}

const saudacao_ambda = (nome:string = "Visitante"):string => `Olá, ${nome}`;

function saudacao (nome:string = "Visitante"):string {
    return `Ola ${nome}`;
}
saudacao("Raul");

const multiplicacaoOpcional = (a:number, b?:number):number=>{
    if(b===undefined)
        return a;
    return a*b;
}

multiplicacaoOpcional(2);

const multTernario = (a:number, b?:number):number => (b===undefined) ? a : a*b;

const multopCoalescencia = (a:number, b?:number):number => a * (b ?? 1);