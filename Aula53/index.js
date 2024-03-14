function retornaFuncao(nome){
    //const nome = 'Luiz'
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');
const funcao22 = retornaFuncao('João'); // está mudando o contexto lexico

console.dir(funcao);
console.dir(funcao22);

console.log(funcao(), funcao22());