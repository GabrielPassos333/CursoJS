const fs = require('fs').promises
const path = require('path');

// fs.readdir(path.resolve(__dirname)) // readdir = read directory
// .then(files => console.log(files))
// .catch(e => console.log(e));

async function readdir(rootDir) { //a função vai passar por todos os arquivos da pasta
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) { // a função vai passar por todos os arquivos da pasta
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue //essa função vai pular o .git
        if(/node_modules/g.test(fileFullPath)) continue //essa função vai pular

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue //O continue vai pular para o proximo arquivo
        }

        if(!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) continue
        //vai pular todos os arquivos que não terminam com .css e .html

        console.log(fileFullPath, stats.isDirectory());
    }
}
readdir('/CursoJS');
