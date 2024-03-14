// IIFE -> Immediately Invoked Function Expression (Função auto-invocada)
function qualquerCoisa() {
    console.log(123);
}
qualquerCoisa();

(function() {// Função auto-invocada
    const nome = 'Luiz';
    console.log(nome);
})();

const nome = 'Qualquer coisa';

(function(idade, peso, altura){ //parametros
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Luiz'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80); //argumentos


//fim