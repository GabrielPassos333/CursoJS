//Declaração de função (function hoisting)
function falaOi(){
  console.log('Oi')
}

// First-class object (Objetos de primeira classe)
//Pode ser tratada como dados
//Function expression

const souUmDado = function(){
  console.log('Sou um dado.');
};

souUmDado();

function executaFuncao(funcao){
  console.log('Vou Executar sua função abaixo: ');
  funcao();
}
executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () =>{
  console.log("Sou um arrow Function");
};
funcaoArrow();

//Dentro de um objeto
const obj = {
  falar: function(){
    console.log('EStou falando...');
  }
};

obj.falar();