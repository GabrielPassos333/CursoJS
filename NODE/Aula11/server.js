const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');

app.use(express.urlencoded({extended: true})); //vai pegar os dados do formulário

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})

