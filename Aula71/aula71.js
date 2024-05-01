//defineProperty - defineProperties
function Produto(nome, preco, estoque){

    Object.defineProperty(this, 'estoque', {
        enumerable:true, //mostra a chave
        value: estoque, //valor
        writable: false, //depois que criou objeto não pode alterar o valor(caso false)
        configurable: false //configuravel ou não
    });

    Object.defineProperties(this, {
        nome: {
            enumerable:true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable:true,
            value: preco,
            writable: true,
            configurable: true
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000
delete p1.estoque
console.log(p1);

console.log(Object.keys(p1));

