// (condilçai) ? : 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsiar = 999;
const nivelUsuario = pontuacaoUsiar >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsiar = null;
const corPadrao = corUsiar || 'Preta';

console.log(nivelUsuario, corPadrao);

//if(pontuacaoUsiar >= 1000){
//    console.log('Usuário VIP');
//}else{
//    console.log('Usuário normal');
//}
