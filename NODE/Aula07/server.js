const express = require('express');
const app = express();

//          Criar, ler,  atualizar, deletar dados
// CRUD -> Create, Read, Update, Delete
//           POST, GET,  PUT, DELETE

//http://localhost:3000/ -> GET Entregue a página
//http://localhost:3000/sobre -> GET Entregue a página sobre
//http://localhost:3000/contato -> GET Entregue a página contato

app.get('/', (req, res) => { //req = request, res = response
    res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name ="nome">
    <button>Olá mundo</button>
    <form>
   `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato');
});
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})

