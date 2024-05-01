//const HomeModel = require('../models/HomeModel');

// HomeModel.create({ //criando o registro
//     titulo: 'Outro Titulo',
//     descricao: 'Outra descrição'
// })
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));

// HomeModel.find() //buscando todos os registros
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  //res.send('Ei, sou sua nova rota de POST.');
  res.send(req.body);
  return;
};
