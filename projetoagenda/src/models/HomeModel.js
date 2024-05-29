const mongoose = require('mongoose'); //importando o mongoose

const HomeSchema = new mongoose.Schema({ //criando o esquema
    titulo: {
        type: String,
        required: true
    },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema); //criando o model

//module.exports = HomeModel;