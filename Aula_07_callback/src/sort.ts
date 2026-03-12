const numerosX: number[] = [12, 523, 534, 647, 68, 8, 76, 98, 9];
numerosX.sort();
numerosX.sort((a, b)=> b-a);
console.log(numerosX)

const names: string[] = ['raul', 'marcelo', 'bruno'];

names.sort((a, b)=> a.localeCompare(b));
console.log(names)

console.log('raul'.localeCompare('bruno'));
