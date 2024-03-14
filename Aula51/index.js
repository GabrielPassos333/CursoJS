// return
// retorna um valor
// function soma(a,b){
//     return a+b;
// }
// function soma2(a,b){
//     console.log(a +b);
// }
// soma2(5,7);

// document.addEventListener('click', function (){ //Exemplo de função que não retorna valor
//     document.body.style.backgroundColor='red';
// });

// function criaPessoa(nome, sobrenone){
//     return{ nome:nome, sobrenone: sobrenone};
// }
// const p1 = criaPessoa('Luiz', 'Otávio');
// const p2 ={
//     nome: 'João',
//     sobrenome: 'Oliveira'
// };
//
// console.log(typeof p1);
// console.log(typeof p2);

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
//console.log(olaMundo('mundo!'));
const resto = fala('mundo!');
console.log(resto);

function duplica(n){
    return n*2
}
function triplica(n){
    return n*3
}
function quadriplica(n){
    return n*4
}

function criaMultiplicador(multiplicador){
    //multiplicador
    return function (n){
        return n * multiplicador;
    };
}
const duplica2 = criaMultiplicador(2);
const triplica2 = criaMultiplicador(3);
const quadriplica2 = criaMultiplicador(4); //enclosure

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))

console.log(duplica2(2))
console.log(triplica2(2))
console.log(quadriplica2(2))
