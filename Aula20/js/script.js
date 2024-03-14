function meuEscopo() {
    
    //form.onsubmit = function(evento) {
      //evento.preventDefault(); //não deixa o form ser enviado
      //alert(1);
      //console.log('Foi enviado');
    //};

    const form = document.querySelector('.form'); //seleciona o form
    const resultado = document.querySelector('.resultado');

    const pessoas = []; //array vazio para salvar os dados

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({ //adiciona os dados no array
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} kilos ${altura.value}m</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();