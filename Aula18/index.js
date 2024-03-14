/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
}

console.log(pessoa1.nome); // Luiz
console.log(pessoa1.sobrenome); // Miranda  */

function criaPessoa(nome, sobrenome, idade){
  return{
    //nome: nome,
    //sobrenome: sobrenome,
    //idade: idade
    nome,
    sobrenome,
    idade,
  }
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 55);
const pessoa3 = criaPessoa('João', 'Moreira', 32);
const pessoa4 = criaPessoa('Junior', 'Oliveira', 20);
const pessoa5 = criaPessoa('Jean', 'Oliveira', 30);

const pessoa6 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,

  fala(){ //método fala
    console.log(`A minha idade atual é ${this.idade}. Me chamo ${this.nome} ${this.sobrenome}.`);
  },

  incrementaIdade(){
    this.idade++;
  }
}
pessoa6.fala(); // A minha idade atual é 30.
pessoa6.incrementaIdade();
pessoa6.fala(); // A minha idade atual é 30.
pessoa6.incrementaIdade();
pessoa6.fala(); // A minha idade atual é 30.
pessoa6.incrementaIdade();

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome); // Luiz Maria João Junior Jean
