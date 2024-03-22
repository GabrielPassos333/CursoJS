//Filter, map, reduce
//Filter: Filtra os elementos de um array com base em uma condição
//Map: Transforma os elementos de um array
//Reduce: Reduz um array a um único elemento


//retorne os numeros maiores que 10
//               0  1   2   3  4  5  6  7   8   9  10  11
const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27];
//const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados);

// function callbackFilter(valor) {
//    return valor > 10 ;
// }

// const numerosFiltrados = numeros.filter(function(valor){
//    return valor>10;
// });
const numerosFiltrados = numeros.filter(valor => valor > 10); //funão de callback, funão arrow também
console.log(numerosFiltrados);


//Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

// const pessoasComNomeGrande = pessoas.filter(function(obj){
//    return obj.nome.length >= 5;
// });

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);
const pessoasVelhas = pessoas.filter(obj=>obj.idade>50); //arrow function
const pessoasTermianComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);
console.log(pessoasVelhas);
console.log(pessoasTermianComA);

