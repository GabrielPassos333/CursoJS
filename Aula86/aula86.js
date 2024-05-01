/**
 * Função para gerar um número aleatório entre um valor mínimo e máximo.
 *
 * @param {number} min - O valor mínimo.
 * @param {number} max - O valor máximo.
 * @returns {number} O número aleatório gerado.
 */
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Função que retorna uma promessa que aguarda um determinado tempo antes de ser resolvida.
 *
 * @param {string} msg - A mensagem a ser resolvida.
 * @param {number} tempo - O tempo de espera em segundos.
 * @returns {Promise<string>} A promessa que será resolvida com a mensagem após o tempo de espera.
 */
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3));
    })
        .then(resposta => {
            console.log(resposta);
            return esperaAi("2222222", rand(1, 3));
        })
        .then(resposta => {
            console.log(resposta);
        })
        .then(() => {
            console.log('Exibe dados na tela');
        })
        .catch(e => {
            console.log('ERRO:', e);
        });
