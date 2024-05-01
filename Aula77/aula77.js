//705.484.450-52 070.987.720-03
// 705.484.450-52
// 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
se o número gerado for maior que 9, consideramos 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
se o número gerado for maior que 9, consideramos 0

 */

// let cpf = '705.484.450-52';
// let cpfLimpo = cpf.replace(/\D+/g, '');//retira os pontos e traço esse tipo de operação é chamado de expressão regular
// //console.log(cpfLimpo);
// cpfArray = Array.from(cpfLimpo);
// //console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0)); //soma todos os valores do array convertendo para número
//
// //console.log(cpfArray.length)
// let cpfSoma=0
// for (let i = 0; i < cpfArray.length-1; i++) {
//     cpfSoma += Number(cpfArray[i])*(cpfArray.length-i);
//     //console.log(cpfSoma);
// }
// console.log(cpfSoma);

function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, ''); //retira os pontos e traço esse tipo de operação é chamado de expressão regular
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let cpfSoma=0;
    let reg = cpfArray.length+1;
    for (let i = 0; i < cpfArray.length; i++) {
        cpfSoma += Number(cpfArray[i])*(reg-i);
    }
    const digito = 11 - (cpfSoma % 11);
    return digito > 9 ? '0' : String(digito);

}

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('705.484.450-52');
//console.log(cpf.cpfLimpo);
//cpf.valida();

if (cpf.valida()) {
    console.log('CPF válido');
}else {
    console.log('CPF inválido');
}
console.log(cpf.valida());
