let name: string; // declaracao de variavel
let age: number; // tipagem : number; string
let active: boolean;
let data: any;
let empty: null;
let undefined: undefined;
let ageOrNull: number | null;
let situation: "active" | "inactive"; // tipo literal, vc escolhe qual
// | "pipe" = or
age = 19;
name = "Raul";
active = true;
empty = null;
undefined = undefined;
situation = "active";
ageOrNull = null;

console.log(`Nome: ${name}, Idade: ${age}, Ativo: ${active}`); 
// exibindo valores
