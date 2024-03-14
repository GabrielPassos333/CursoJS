const verdadeira = true;

// LET tem escopo de bloco { ... bloco }

let nome = 'Luiz'; //criando
var nome2 = 'Luiz';

if (verdadeira){
  let nome = 'Otávio'; //criando
  var nome2 ='Luiz'

  if (verdadeira){
    var nome2 ='Ronaldo'; //redeclarando
    let nome = 'Outra coisa';
  }
}
console.log(nome, nome2);

function falaOi(){
  if(verdadeira){
    let nome = 'Luiz';
    var sobrenome = 'Miranda';
  }

 console.log(nome, sobrenome);
}
falaOi(); // Miranda


console.log(sobrenome2); // erro

var sobrenome2 = 'Miranda'; //hoisting, eleva a drclaração da variável para o topo do código