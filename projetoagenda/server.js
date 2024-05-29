require('dotenv').config();//carrega as variáveis de ambiente

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
      app.emit('pronto');
    })
    .catch((e) => console.log(e));

const session = require('express-session'); //importando o express-session, para criar uma sessão
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

//configurando o express-session
const sessionOptions = session({
    secret: 'pepitothecat666',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
        httpOnly: true
    }
})

app.use(sessionOptions);
app.use(flash());// flash faz a mensagem aparecer na tela

const routes = require('./routes');
const path = require('path');

const helmet = require('helmet');
const csrf = require('csurf'); //token de segurança

const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware'); //sendo importado o middleware

app.use(helmet());

//entre chaves pois é um objeto
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
