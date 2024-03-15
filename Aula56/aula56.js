//Factory function (função fábrica)
//Constructor function (função construtora)
function criaPessoa(nome, sobrenone, a, p){
    return{
        nome,
        sobrenone,

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenone}`;
            //return `${nome} ${sobrenone}`;
        },

        //setter
        set nomeCompleto(valor){
            valor = valor.split(' '); //aqui ele transforma a string em um array, separando por espaço
            this.nome = valor.shift();
            this.sobrenone = valor.join(' '); //aqui ele junta o array em uma string, separando por espaço
            //console.log(valor);
        },

        fala: function(assunto='Falando sobre NADA'){ //this sempre se refere ao objeto que está sendo executado
            return `${this.nome} está ${assunto}.`; // this é o objeto que está chamando a função
        },
        altura: a,
        peso:p,
        //Getter ou seja, é uma função que retorna um valor
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80,80);

const p2 = criaPessoa('Maria', 'Oliveira', 1.60,55);
console.log(p2.nome, p2.sobrenone);


console.log(p1.fala('falando sobre JS')); //quem é this? p1
//console.log(p1.imc());
console.log(p2.fala('falando sobre JS')); //quem é this? p2
console.log(p2.imc);

p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);//sem os parenteses, pois é um getter
console.log(p1.fala());

const p3 = criaPessoa('João', 'Oliveira', 1.90,90);
console.log(p3.nomeCompleto);
console.log(p3.fala());
console.log(p3.imc);