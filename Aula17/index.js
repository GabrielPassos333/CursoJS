function saudacao(nome){
  //console.log(`Bom dia! ${nome}!`);
  return `Bom dia! ${nome}!`;
}

//const variavel = saudacao('Luiz');
//console.log(variavel); // undefined 

function soma(x=1, y=2){
  const resultado = x + y;
  return resultado;
}

console.log(soma(2, 2)); // 4
const resultado = soma('Luiz', ' Otávio'); 
console.log(resultado); // LuizOtávio 

const raiz = function(n){
  return n ** 0.5;
};

console.log(raiz(9)); // 3  

const raiz2 = n => n ** 0.5; // mais botão direito do mouse e selecione "Rename Symbol"

console.log(raiz2(25)); // 3
