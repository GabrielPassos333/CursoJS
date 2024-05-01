// HERANÇA
//Produto -> aumento, desconto
//Camiseta = cor, caneca = material, lapis
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia){
    this.preco += quantia;
}

Produto.prototype.desconto = function (quantia){
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype)//Cria um objeto vazio e coloca o prototype de Produto
Camiseta.prototype.constructor = Camiseta; //Faz com que o prototype de Camiseta seja o construtor de Camiseta

Camiseta.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material;
    //this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return; //Se o valor não for um número, não faz nada
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca; //Faz com que o prototype de Caneca seja o construtor de Caneca

const camiseta = new Camiseta('Regata', 7.5, 'Preta');//Instancia um objeto de Camiseta
const produto = new Produto('Gen', 111)
const caneca = new Caneca('Caneca', 13, 'Plástico', 5)
caneca.estoque = 100; //usando o set

console.log(caneca.estoque) //usanod o get
console.log(caneca)
console.log(camiseta)
console.log(produto)