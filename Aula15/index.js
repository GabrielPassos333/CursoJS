let num1 = 9.54578;
let num2 = Math.floor(num1); // arredonda para baixo
let num3 = Math.ceil(num1); // arredonda para cima
let num4 = Math.round(num1); // arredonda para o mais próximo

console.log(num2, num3, num4); // 9

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // 1500
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // -50 
console.log(Math.random()); // número aleatório entre 0 e 1

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // número aleatório entre 5 e 10
console.log(aleatorio);

console.log(Math.PI); // 3.141592653589793
console.log(Math.pow(2, 10)); // 1024
console.log(2 ** 10); // 1024

console.log(9**(1/2));
console.log(100/0) // Infinity

