/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol)

Referência (mutável) - array, object, function
*/

let a2 = [1, 2, 3];
let b2 = a2; //cópia referemcia
console.log(a2, b2);

a2.push(4);
console.log(a2,b2);

b2.pop();
console.log(a2, b2);


let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome); // L

let a ='A'; 
let b = a; //cópia

console.log(a, b);

a='Outra coisa';
console.log(a, b);