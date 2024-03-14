const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i =0; i < numeros.length; i++) {
  let numero = numeros[i];

    if(numero === 2 ) { //pula o 2 e o 5
      console.log('Pulei o número 2');
     continue;
    }
  console.log(numero);

  if (numero === 7) {
    console.log('7 encontrado, saindo...');
    break;
  }
}