let num1 = 10
let num2 = 2.5;
let num3 = 10.5789551255547;
//console.log(num1.toString() + num2); não vai funcionar pois é string e não irá somar
//console.log(num3.toFixed(4)); // para casas decimais
//console.log(Number.isInteger(num1)); // para saber se é inteiro ou não
//let temp = num1 * 'olá';
//console.log(Number.isNaN(temp)); // para saber se é um número ou não
let num4 = 0.7;
let num5 = 0.1;
console.log(num4 + num5); // não vai dar 0.8 e sim 0.7999999999999999
num4 += num5;  // 0.8
num4 += num5;  // 0.9
num4 += num5;  // 1.0 mas não dá

console.log(num4)
console.log(num4.toFixed(2)); // 1.00 só fazer isso não resolve o problema
console.log(Number.isInteger(num4)); // não é inteiro

num4 = parseFloat(num4.toFixed(2)); // 1.00
num4 = Number(num4.toFixed(2)); // Pode ser assim também
console.log(Number.isInteger(num4)); // Agora é inteiro

let num6 = 0.7;
let num7 = 0.1;

num6 = ((num6 * 100) + (num7 * 100)) / 100; // 0.8
num6 = ((num6 * 100) + (num7 * 100)) / 100;
num6 = ((num6 * 100) + (num7 * 100)) / 100; //1.0

console.log(num6);

















