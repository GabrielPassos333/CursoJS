//xmlHttpRequest

// const request = obj =>{
//     return new Promise((resolve, reject) =>{
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);//true = assíncrono
//         xhr.send(); //enviar
//
//         xhr.addEventListener('load', () =>{
//             if(xhr.status >= 200 && xhr.status < 300){ //200 = OK e 300 = Created,
//                 resolve(xhr.responseText); //pesquisar https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
//             }else{ //reponseText = corpo da resposta
//                 reject(xhr.statusText);
//                 // code: xhr.status,
//                 // msg: xhr.responseText
//             }
//         });
//     })
// };

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault(); //previne o comportamento padrao
        carregarPagina(el);
    }
});

async function carregarPagina(el) { //async = assíncrono que retorna uma promise
    try {
        const href = el.getAttribute('href'); //recupera o atributo href(pagina.html)
        const response = await fetch(href) //retorna o objeto de resposta

        if (response.status !== 200) throw new Error('Erro 404!!');

        const html = await response.text();
        carregarResultado(html)
    }catch (e) {
        console.log(e);
    }
}

    function carregarResultado(response) {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = response;
    }

// fetch('pagina4.html') //retorna uma promise
//     .then(resposta=>{
//         if(resposta.status !== 200) throw new Error('Erro na requisição');
//         return resposta.text();
//     })
//     .then(html => console.log(html))
//     .catch(e => console.log(e));
//
//
