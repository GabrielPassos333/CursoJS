exports.paginaInicial = (req, res) => {
  res.render('index',{ //injetando dados
    titulo: 'Este é o <span style="color: red;">title</span>',
    numeros:[0,1,2,3,4,5,6,7,8,9]
  });
  return;
};

exports.trataPost = (req, res) => {
  //res.send('Ei, sou sua nova rota de POST.');
  res.send(req.body);
  return;
};
