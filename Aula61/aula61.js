//lazy evaluation, serve para que o código não execute a função até que seja chamada
//útil para funções que demoram a ser executadas
//bom para performance

function* geradora1(){ //asterisco indica que é uma função geradora
  //código qualquer
  yield 'Valor 1';
  //código qualquer
  yield 'Valor 2';
  //código qualquer
  yield 'Valor 3';
}

const g1 = geradora1();
// console.log(g1);  //Object [Generator] {}
// console.log(g1.next());
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next()); //true porque não tem mais valores

for(let valor of g1){ //o for of já faz o next
  console.log(valor);
}

function* geradora2(){
  let i = 0;
  while(true){ //loop infinito, então tem que ter um critério de parada
    yield i;
    i++;
  }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3(){
  yield 77;
  yield 88;
  yield 99;
}

function* geradora4(){
  yield* geradora3();
  yield 55;
  yield 44;
  yield 33;
}

const g4 = geradora4();
for(let valor of g4){
  console.log(valor);
}

function* geradora5(){
  yield function(){
    console.log('Vim do y1');
  };
  //... mais código o RETURN faz com que o código pare
  yield function(){
    console.log('Vim do y2');
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1()
func2()
