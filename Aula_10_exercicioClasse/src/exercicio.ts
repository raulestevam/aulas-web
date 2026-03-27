type Categoria = "Espadachim"|"Mago"|"Arqueiro"
class Heroi{
    nome: string
    categoria: Categoria
    ataque: number
    custo: number
    recurso: number

    constructor(nome: string, categoria: Categoria, ataque: number, custo: number){
        this.nome = nome;
        this.categoria = categoria;
        this.custo = custo;
        this.ataque = ataque;
        if (categoria === "Espadachim")
            this.recurso = 50
        else if(categoria === "Mago")
            this.recurso = 40
        else    
            this.recurso = 10
    }
    attack():void{
        if(this.recurso-this.custo < 0)
            console.log(`Sem recurso! Ataque de ${this.nome} nao foi bem sucedido`)
        else
            console.log(`Ataque de ${this.nome} foi bem sucedido, ${this.recurso-this.custo} de recurso restante`);
    }
}

const heroiRaul: Heroi = new Heroi ("Raul", "Espadachim", 20, 10);
heroiRaul.attack();
    
const heroiMarcos: Heroi = new Heroi ("Marcos", "Mago", 20, 20);
heroiMarcos.attack();
    
const heroiRafa: Heroi = new Heroi ("Rafa", "Arqueiro", 20, 30);
heroiRafa.attack();  

