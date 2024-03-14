/*
&& -> false && true -> false "o valor mesmo"
||  (or) -> true && false -> vai retornar "o valor verdadeiro"

FALSY
*false
0
'' "" ``
null / undefined
NaN - Not a Number
*/

//console.log('Luiz' && NaN && 'Maria'); // Maria

function falaOi() {
    return 'Oi';
}

const vaiExecutar = false
//console.log(vaiExecutar && falaOi()); // Oi

console.log(0 || false || null || 'Luiz Otávio' || true); // Luiz Otávio, vai apresentar o primeiro Verdadeiro

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao); // preto pois retorna o primeiro verdadeiro

const a = 0;
const b = null;
const c = 'false'; // string
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // false, pois é o primeiro verdadeiro
