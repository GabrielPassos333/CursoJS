let a = 'A'; //B 
let b = 'B'; //C
let c = 'C'; //A

const letras = [b, c, a];
[a, b, c] = letras;

//console.log(a, b, c); 

// ... rest, ... spread REST OPERATOR
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, tres, , cinco, ...resto] = numeros; //ATRIUIÇÃO VIA DESESTRUTURAÇÃO
console.log(um, tres, cinco);
console.log(resto); // pega o resto dos elementos do array

//                   0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//const [,[,,seis]] = numeros2;
//console.log(seis);
const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2]); //9



