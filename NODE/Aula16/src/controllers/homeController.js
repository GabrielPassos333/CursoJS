exports.paginaInicial = (req, res) => {
  //req.session.usuario={nome: 'luiz', logato: true}
  // req.flash('info', 'Usuário logado com sucesso!');
  // req.flash('error', 'trem!');
  // req.flash('sucess', 'Ugaa Bugaaaa!');
  //console.log(req.flash('error'), req.flash('sucess'), req.flash('info')); //imprime as mensagens
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  //res.send('Ei, sou sua nova rota de POST.');
  res.send(req.body);
  return;
};
