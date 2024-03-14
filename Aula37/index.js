const nome = ['Luiz', 'Otávio', 'Miranda'];

// for(let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }
// console.log('----------------')

// for(let i in nome) { //caso queira pegar o índice
//   console.log(nome[i]);
// }
// console.log('----------------')

// for(let valor of nome) {//caso queira pegar o valor
//   console.log(valor);
// }
// console.log('----------------');

// Iterar sobre os elementos do array 'nome' usando o método forEach
nome.forEach(function(elemento, indice, array) {  //valor indice e array completo
  console.log(elemento, indice, array); // Imprimir cada elemento no console
});
console.log('----------------');

const pessoa ={
  nome: 'Luiz',
  sobrenome: 'Miranda'
};
for (let chave in pessoa){
  console.log(chave, pessoa[chave]);
}
//FOR OF não funciona para OBJETOS!!!
//FOR Clássico e FOR IN funcionam para OBJETOS!!!
//FOR clássico - Geralmente com iteráveis (array ou strings)
//FOR IN - Retorna o índice ou chave (string, array ou objetos)
//FOR OF - Retorna o valor em si (iteráveis, array ou strings)

pessoa.forEach(function(valor) {
  console.log(valor);
});

//FOR EACH - Retorna o valor em si (iteráveis, array ou strings) - Não funciona em objetos