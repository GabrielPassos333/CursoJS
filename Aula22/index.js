/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO 
*/

//console.log(true && true && false && true); // true
const expressaoOr = true || false || false || false; // true
//console.log(expressaoOr);

const usuario = 'Luiz'; // form usuário digitou 
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);

console.log(!!!true); // false  
