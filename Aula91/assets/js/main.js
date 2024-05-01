// fetch('pessoas.json')//busca o arquivo
//     .then(resposta => resposta.json()) //transforma em json
//     .then(json => carregaElementosNaPagina(json)) //chama a função e passa o json como parametro

axios('pessoas.json') //busca o arquivo AXIOS é mais performático
    .then(resposta => carregaElementosNaPagina(resposta.data))

const table = document.createElement('table')//cria uma tabela
function carregaElementosNaPagina(json) {
    for(let pessoa of json) {
        const tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerText = pessoa.nome
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        td2.innerText = pessoa.idade
        tr.appendChild(td2)

        // let td3 = document.createElement('td')
        // td3.innerText = pessoa.salario;
        // tr.appendChild(td3)

        table.appendChild(tr);//adiciona na tabela
    }
    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table);
}