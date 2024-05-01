const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
); //vai pegar os dados do formulário

app.get('/', (req, res) => { //req = request, res = response
    res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name ="qualquercoisa">
    Outro Campo: <input type="text" name ="aquioutrocampo">
    <button>Olá mundo</button>
    <form>
   `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => { //a interrogação significa que o parâmetro pode ser ou não informado
    console.log(req.params);
    console.log(req.query);
    //res.send(req.params); isso vai retornar um objeto com os parâmetros
    res.send(req.query.facebookprofile); //vai retornar um objeto com os parâmetros
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('O que você me enviou foi: ' + req.body.qualquercoisa); //O "nome" é do atributo name do input, no HTML
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato');
});
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})

