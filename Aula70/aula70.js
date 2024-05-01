const pessoa ={
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

console.log(pessoa['nome']);
console.log(pessoa.sobrenome);

const chave = 'sobrenome';
console.log(pessoa[chave])

//new Array
const pessoa1 = new Object();
pessoa1.nome = 'Gabriel'
pessoa1.sobrenome = 'Passos'
pessoa1.idade = 34;

console.log(pessoa1)

pessoa1.falarNome = function (){
    return (`${this.nome} está falando seu nome.`);
}
pessoa1.getDataNascimento = function (){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1){
    console.log(chave);
}

//Factory function / Constructor Functions / Classes
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Pepito', 'LoGatito');
console.log(p1.nomeCompleto);

//Construtora
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this) //não vai poder alterar
}
//Vai criar um objeto vazio{} e atrelar o THIS a esse OBJETO
const p2 = new Pessoa('Jorge', 'Iracema')
p2.nome = 'Jurema'
console.log(p2)
