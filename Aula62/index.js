const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana', 'Lucas'];
//String, Objeto, Função, Number, Boolean, Undefined, Null
nomes[2] = 'João';
delete nomes[2];
console.log(nomes);

const nomes2 = new Array('Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana', 'Lucas');
nomes2.push('João'); //Adiciona no final
nomes2.unshift('Irineu'); //Adiciona no início

//const novo = nomes.concat(nomes2);
//novo.shift(); //Remove o primeiro elemento
//const removido = novo.pop(); //Remove o último elemento

const nomes3 = new Array('Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana', 'Lucas');
console.log(nomes3);

const novo = nomes3.slice(0, -2); //Cria um novo array com os elementos do array original
console.log(novo);

const nome6 = 'Luiz Otávio Miranda';
const nomes6 = nome6.split(' ');
console.log(nomes6);

const nome7 = ['Luiz', 'Otávio', 'Miranda'];
const nome7String = nome7.join(' ');//Junta os elementos do array em uma string
console.log(nome7String);
