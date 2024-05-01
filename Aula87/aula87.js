function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false);
            return  // Encerra a promise senão vai para o catch
        }

        setTimeout(() => {
            resolve(msg.toUpperCase()+[' - Passei na promisse']);
        }, tempo);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    // 'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    // 'Outro valor'
];

//Promisse.all retorna um array com os valores das promises
//Promisse.race retorna o valor da primeira promise resolvida
//Promisse.resolve retorna uma promise resolvida
//Promisse.reject retorna uma promise rejeitada

Promise.race(promises)
    .then(function(valor) {
    console.log(valor); // Retorna um array com os valores das promises
})
    .catch(function(erro) {
    console.log(erro);
});

function baixaPagina() {
    const emCache = true;
    if(emCache) {
        return Promise.reject('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e=> console.log('ERRO', e));

