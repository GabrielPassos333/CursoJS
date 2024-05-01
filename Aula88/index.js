function rand(min=0, max=3) {
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

// esperaAi('Fase 1', rand(0, 3))
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//     })
//     .then(() => {
//         console.log('Terminamos na promise');
//     })
//     .catch(e => {
//         console.log('ERRO:', e);
//     })

async function executa() { // Função assíncrona serve para aguardar a promise ser resolvida
    try {
        const fase1 = await esperaAi('Fase 1', rand()); //await aguarda a promise ser resolvida
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand()); //sem o async o await aguarda a promise ser resolvida
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
    } catch(e) {
        console.log('ERRO:', e);
    } finally {
        console.log('Terminamos na promise');
    }
}
executa();

