//xmlHttpRequest

const request = obj =>{
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);//true = assíncrono
        xhr.send(); //enviar

        xhr.addEventListener('load', () =>{
            if(xhr.status >= 200 && xhr.status < 300){ //200 = OK e 300 = Created,
                resolve(xhr.responseText); //pesquisar https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
            }else{ //reponseText = corpo da resposta
                reject(xhr.statusText);
                // code: xhr.status,
                // msg: xhr.responseText
            }
        });
    })
};

document.addEventListener('click', e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault(); //previne o comportamento padrao
        carregarPagina(el);
    }
});

async function carregarPagina(el){ //async = assíncrono que retorna uma promise
    const href = el.getAttribute('href'); //recupera o atributo href(pagina.html)

    const objConfig = {
        method: 'GET',
        url: href
    };

    try{
        const response = await request(objConfig); //vai retornar uma promise
        carregarResultado(response);
    }catch (e){
        console.log(e);
    }
}


function carregarResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}