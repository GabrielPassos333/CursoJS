const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos[0]); // Luiz

alunos[0] = 'Eduardo'; //altera o valor do array
alunos[3] = 'Nubia'; //adiciona no array

alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Rafael';

alunos.push('Jorge'); 
alunos.push('Claudinho'); //adiciona no final do array

alunos.unshift('Milena'); //adiciona no inicio do array

alunos.pop(); //remove o ultimo elemento do array Tira Claudinho
const removido = alunos.pop(); //remove o ultimo elemento do array tira Jorge
const removido2 = alunos.shift(); //remove o primeiro elemento do array tira Milena

console.log(alunos.slice(0, 3)); //pega os elementos do array de 0 a 3

console.log(typeof alunos); //verifica o tipo de dado
console.log(alunos instanceof Array); //verifica se é um array  