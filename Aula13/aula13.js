let umaString = "um texto";

console.log(umaString[4]);
console.log(umaString.charAt(7));
console.log(umaString.concat(' ', 'em', ' ', 'um', ' lindo dia.'));
console.log(umaString + ' em um lindo dia.')
console.log(`${umaString} em um lindo dia`);

console.log(umaString.indexOf('um'));
console.log(umaString.replace('um', 'Outra'));

let outraString = 'O rato roeu a roupa do rei de roma.';
console.log(outraString.replace(/r/g,'#'));
console.log(outraString.length);
console.log(outraString.slice(2,6));
console.log(outraString.slice(-5, -1));
console.log(outraString.substring(outraString.length - 5,outraString.length - 1));

console.log(outraString.split(' '));