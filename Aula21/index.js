/*
Operadores de comparação
> maior que
>= maior ou igual a
< menor que
<= menor ou igual a
== igualdade (valor) ************
=== igualdade estrita (valor e tipo) ************
!= diferente (valor) ************
!== diferente estrito (valor e tipo) ************
*/

const num1 = '10';
const num2 = 10;
const comp = num1 == num2; // false
//const comp2 = 10 >= 11;
const comp3 = num1 === num2; // false (valor e tipo)
console.log(comp); // false ele converte automaticamente
console.log(comp3); // false  

const comp4 = num1 != num2; // true
const comp5 = num1 !== num2; // true (valor e tipo) 

console.log(comp4, comp5); 