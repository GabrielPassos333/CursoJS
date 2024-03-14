const pessoa = { //objeto
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco:{
        rua: 'Av Brasil',
        numero: 320
    }
  };

//Atribuição via desestruturação
const { endereco: {rua, numero}, endereco} = pessoa; //pegando o nome do objeto pessoa
console.log(rua, numero, endereco); //Av Brasil 320 { rua: 'Av Brasil', numero: 320 }

const{nome, sobrenone, ...resto} = pessoa; //pegando o nome do objeto pessoa 
console.log(nome, resto); //Luiz { sobrenome: 'Miranda', idade: 30, endereco: { rua: 'Av Brasil', numero: 320 } } 
