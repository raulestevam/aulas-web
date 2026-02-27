import promptSync from "prompt-sync";

const prompt = promptSync();

const nome: string = prompt("type your name: ");
const idade: number = Number(prompt("digite sua idade: ")); // cast de string pra inteiro

console.log(`hello ${nome}! you are ${idade} years old`);