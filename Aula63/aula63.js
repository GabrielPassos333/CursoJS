//                 -6      -5         -4       -3        -2       -1
//                  0       1          2        3         4        5
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana', 'Lucas'];
//               elem1    elem2     elem3     elem4      elem5   elem6
nomes.splice(4,1); //Remove a partir do índice 4, 1 elemento

//const removidos = nomes.splice(3,2); //Remove a partir do índice 3, 2 elementos
//const removidos = nomes.splice(-2, Number.MAX_VALUE); //Remove a partir do índice 4, todos os elementos
const removidos = nomes.splice(3,2,'Luiza', 'Otávio'); //Remove a partir do índice 3, 2 elementos e adiciona 'Luiza' e 'Otávio'
console.log(nomes, removidos);

