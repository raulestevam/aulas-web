let numbers : number[]=[1, 2, 3, 4, 5];

let nomes: string[]=["mariana", "maria", "beatriz"];

let pos = nomes.indexOf("beatriz");

nomes.splice(3);

console.log(numbers);
console.log(nomes);

let idade: Array<number> = [20, 30, 40];

let mist: (number|string)[]=[1, "dois", 12, "matheus"];

nomes.push("Raul");
nomes.unshift("bruna");
nomes.pop();
nomes.shift();

console.log(nomes[0]);
console.log(mist);
console.log(idade);
console.log(nomes.length);