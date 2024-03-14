function funcao(a,b,c){
  let total = 0;
  for(let argumento of arguments){
    total +=argumento;
  }
  console.log(total, a ,b,c);
}
funcao(1,2,3,4,5,6,7);


function soma(a,b = 2, c = 4){
  //b = b || 0; //se não enviar b b é zero
  console.log(a + b + c);
}
soma(2, 10, 20)
soma(2, '', 20) //concatena o valor
soma(2, undefined, 20);

//Atribuição por desestruturação
function name({nome,sobrenone,idade}){
  console.log(nome, sobrenone, idade);
}
let obj = {nome:'Luiz', sobrenone: 'Otavio', idade: 20}
name(obj);

//com arrays
function funArrays([valor1, valor2, valor3]){
  console.log(valor1, valor2, valor3);
}
funArrays(['Luiz Otávio', 'Miranda', 30]);

//function conta(operador, acumulador, ...numeros){ //last operator
const conta = function(operador, acumulador, ...numeros){
  //console.log(operador,acumulador,numeros);
  for(let numero of numeros){
    if(operador === '+') acumulador += numero;
    if(operador === '-') acumulador -= numero;
    if(operador === '/') acumulador /= numero;
    if(operador === '*') acumulador *= numero;
    //console.log(numero);
  }
  console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);