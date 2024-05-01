//Some todos os números (reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)

const numeros = [3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const total = numeros. reduce(function (acumulador, valor) {
//     if (valor %2 === 0) acumulador.push(valor);
//     return acumulador;
// },[]);
// console.log(total);

// const dobrados = numeros.reduce(function(acumulador, valor){
//     acumulador.push(valor*2);
//     return acumulador;
// },[]);
// console.log(dobrados);

// const somados2 = numeros.reduce(function(acumulador, valor){
//     acumulador+=valor;
//     return acumulador;
// });
// console.log(somados2);

//retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador; //retorna o objeto
    return valor;
});
console.log(maisVelha);