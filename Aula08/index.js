/*
Gabriel tem 30 anos, pesa 65kg
tem 1.61 de altura e seu IMC é de ...
Gabriel Nasceu em 1989
*/
const nome = 'Gabriel';
const sobrenome = 'Passos';
const idade = 34;
const peso = 62;
const altura = 1.61
let imc; //peso/(altura*altura)
imc=peso/(altura*altura);
let anoNascimento;
anoNascimento = 2024-idade;

console.log(nome, sobrenome,"tem",idade,"anos, pesa",peso);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`); // não funciona
console.log(nome, sobrenome,"nasceu em",anoNascimento);
console.log(typeof nome, typeof altura);