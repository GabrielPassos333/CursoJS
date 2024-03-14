function rand(min = 1000, max = 3000) { //cria função para gerar um número aleatório
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
console.log(rand());
function f1(callback) {
    setTimeout(function(){
        console.log('f1'); //vai esperar meio segundo para imprimir
        if (callback) callback(); //se existir callback, chama a função
    }, rand());
}
function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    },rand());
}
function f3(callback) {
    setTimeout(function() {
        console.log('f3')
        if (callback) callback();
    },rand());
}
// f1(function () {
//     f2(function () {
//         f3(function () { //calback hell ou seja, muitos callbacks aninhados
//             console.log('Olá mundo');
//         });
//     });
// });
//A função f1 chama a função f2, que chama a função f3, que chama a função f4.
// A função f4 imprime 'Olá mundo' na tela.

f1(f1Callback); //Novo codigo para evitar o callback hell
function f1Callback() {
    f2(f2Callback);
}
function f2Callback() {
    f3(f3Callback);
}
function f3Callback() {
    console.log('Olá mundo');
}