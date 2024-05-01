const fs = require('fs').promises; //promisses é para tratar erros

//fs.writeFileSync(caminhoArquivo, 'Ola mundo',{flag:'w', encoding:'utf8'});
//vai escrever no arquivo e sobrescrever, a flag w, é para apagar o arquivo e escrever de novo
//flag a, para adicionar algo no arquivo sem apagar

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados,{flag:'w'});
};

//fs.writeFileSync(caminhoArquivo, json,{flag:'w'});

