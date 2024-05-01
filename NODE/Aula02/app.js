// const multiplicacao = require('./mod');
// console.log(multiplicacao(2, 5));

const Cachorro = require('./mod');
const cachorro = new Cachorro('Rex')
cachorro.latir()

const path = require('path')
console.log(__filename)
console.log(__dirname)
console.log(path.resolve(__dirname, '..')) // volta um diretorio
console.log(path.resolve(__dirname, '.','.','trem','bala')) //adiciona um diretorio