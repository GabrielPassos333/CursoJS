// const nome = 'Luiz';
// const sobrenome = 'Miranda';
//
// const falaNome = () => nome + ' ' + sobrenome;

//console.log(module);

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
// console.log(module.exports);

// exports.nome=nome;
// exports.sobrenome=sobrenome;
// exports.falaNome=falaNome;
// this.qualquerCoisa='Alguma coisa';

//console.log(module.exports);

class Pessoa{
    constructor(nome) {
        this.nome = nome
    }
}

const nome = 'Luiz';
const sobrenome = 'Miranda';

module.exports = {nome, sobrenome, Pessoa}