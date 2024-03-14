let  numero = prompt('Digite um número:');
//const numero = Number(prompt('Digite um número:'));
numero = Number(numero);

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${numero ** (1/2)}</p>`;
texto2.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto3.innerHTML = `<p>${numero} é NaN: ${isNaN(numero)} ou ${Number.isNaN(numero)}</p>`;
texto4.innerHTML = `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto5.innerHTML = `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto6.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}</p> <br><br>`;

//texto.innerHTML += `<p>Raiz quadrada: ${numero ** (1/2)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${isNaN(numero)} ou ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p> <br><br>`;


