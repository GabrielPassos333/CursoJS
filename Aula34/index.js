for(let i=0;i<=5;i++){
    console.log(`trem ${i}`)
}

for(let i=0;i<=5;i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

const frutas = ['maçã', 'banana', 'uva', 'laranja', 'melancia'];
for(let i=0; i<frutas.length;i++){
    console.log(`Índice ${i}, `, frutas[i]);
}