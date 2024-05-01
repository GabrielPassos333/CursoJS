class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar(){
    console.log(`${this.nome} esta falando`);
  }
}//DENTRO DA CLASSE

const p1 = new Pessoa('Luiz','Otavio'); //Não esquecer do NEW
console.log(p1)
p1.falar() // Mais simples
//------------------------------------------------------

function Pessoa2(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function (){
  console.log(`${this.nome} esta falando`);
}

const p2 = new Pessoa2('Jorge','Luz');
p2.falar()