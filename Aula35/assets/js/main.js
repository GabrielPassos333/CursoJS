const elementos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'section', texto: 'Frase 3'},
  {tag: 'footer', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div'); // criando a div para exibir no HTML

for (let i = 0; i < elementos.length; i++) { // percorrendo o array
  //console.log(elementos[i]); //para ver no console
  let {tag, texto} = elementos[i]; // desestruturando o array
  let tagCriada = document.createElement(tag); // criando a tag
  //tagCriada.innerText = texto; // inserindo o texto na tag MODO 2 de FAZER  
  //tagCriada.innerHTML = texto; // inserindo o texto na tag MODO 1 de FAZER
  let textoCriado = document.createTextNode(texto); // criando o texto MODO 3 de FAZER
  tagCriada.appendChild(textoCriado); // inserindo o texto na tag MODO 3 de FAZER
  div.appendChild(tagCriada); // inserindo a tag na div
}

container.appendChild(div); // inserindo a div no container
// innerText: define ou retorna o conteúdo de texto do nó especificado e de todos os seus descendentes.
// innerHTML: define ou retorna o conteúdo HTML (incluindo tags e elementos) do nó especificado.

