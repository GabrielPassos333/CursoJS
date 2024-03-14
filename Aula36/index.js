// const frutas = ['banana', 'maçã', 'uva', 'morango', 'abacaxi']

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i])
// }
// console.log('-------------------');

// for(let i in frutas) {
//   console.log(frutas[i])
// }
// console.log('-------------------');

// for(let indice in frutas) { // o nome da variável pode ser qualquer um
//   console.log(frutas[indice])
// }
// console.log('-------------------');

const pessoa ={
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30
}

for(let chave in pessoa) { //pegando as chaves
  console.log(chave, pessoa[chave]);
}
console.log(pessoa.nome);
console.log(pessoa['nome']); // acessando a chave