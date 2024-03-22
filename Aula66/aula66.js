//Dobrar os numeros
//const numeros = [5,50,80,1,2,3,4,8,7,11,15,22,27];
// const numerosEmDrobro = numeros.map(function(valor, indice, array){ //O MAP é um for com proposito, ele cria um novo array com o mesmo tamanho do array original, só que com os valores transformados
//     return valor * 2;
// });
// const numerosEmDrobro = numeros.map(valor => valor * 2); //Arrow function
// console.log(numerosEmDrobro);

//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto (id)
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

//const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj=> ({idade: obj.idade}));//cria a função dentro de parenteses

const comIds = pessoas.map(function (obj, indice){
    const newObj = {...obj}; //Para não mudar o ORIGINAL!!
    newObj.id = indice
    return newObj;
});


console.log(comIds);
console.log(pessoas) //está mexhendo no objeto origunal