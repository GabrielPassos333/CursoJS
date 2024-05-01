const _velocidade = Symbol('velocidade'); //Gera um item aleatorio

class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        console.log("SETTER")
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0 ) return;

        this[_velocidade] = valor;
    }

    get velocidade() {
        console.log('GETTER')
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade] += 1;
    }
    feriar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade] -= 1;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++){
    c1.acelerar()
}

console.log(c1);
c1.velocidade = 10;
console.log(c1.velocidade);

console.log(c1);