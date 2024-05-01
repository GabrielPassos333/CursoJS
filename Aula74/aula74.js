//Prototypes

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Luiz', 'O'); //Pessoa = Função construtora
const data = new Date();

console.log(pessoa1)
console.log(data)