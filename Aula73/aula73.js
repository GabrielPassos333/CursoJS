
// const outraCoisa = { //SpreadOperator para copiar
//     ... produto,
//     material: 'porcelana'
// }


//const caneca = {nome: produto.nome, preco: produto.preco}; //PIOR FORMA mais trabalhosa


//produto.nome ='Luiz Otávio';
//const caneca = Object.assign({},produto,{material: 'porcelana'});
//Object.freeze(produto); //Para não poder alterar o objeto

const produto = { nome: 'Caneca', preco: 1.8, material: 'porcelana'};
Object.defineProperty(produto,'nome',{
    writable: false,
    configurable:false
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto))

for(let entry of Object.entries(produto)){
    console.log(entry)
}

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
}
for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1])
}

// caneca.nome = 'Luiz Otávio'
// caneca.preco = 2.5
// console.log(produto)
// console.log(caneca);

//console.log(Object.keys(produto))
