// const nome = 'Luiz Otávio';
// let controle = 0;

// while(controle<nome.length) {
//   console.log(nome[controle]);
//   controle++;
// }

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  //return r; para numeros decimais
  return Math.floor(r); //para numeros inteiros 
}
const min = 1;
const max = 50;
let rand = random(min, max);

do {
  rand = random(min, max);
  console.log(rand);
}while(rand !== 10);

console.log('-----------');

while(rand !== 10) {
  rand = random(1,50);
  console.log(rand);
}


