const h1 = document.querySelector('.container h1'); // para mudar o texto VIA JS

function getDiaSemanaTexto(diaSemana){
  const diaSemanaTexto = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  return diaSemanaTexto[diaSemana];
}

function getMes (mes) {
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
  'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return meses[mes];
}

/*function getDiaSemanaTexto(diaSemana){
  let diaSemanaTexto;
  
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
      //break;
    case 1:
      diaSemanaTexto = 'Segunda';
      return diaSemanaTexto;
      //break;
    case 2:
      diaSemanaTexto = 'Terça';
      return diaSemanaTexto;
      //break;
    case 3:
      diaSemanaTexto = 'Quarta';
      return diaSemanaTexto;
      //break;
    case 4:
      diaSemanaTexto = 'Quinta';
      return diaSemanaTexto;
      //break;
    case 5:
      diaSemanaTexto = 'Sexta';
      return diaSemanaTexto;
      //break;
    case 6:
      diaSemanaTexto = 'Sábado';
      return diaSemanaTexto;
      //break;
    default:
      diaSemanaTexto = '';
      //break;
  }
}
*/

function zeroAEsquerda(num){
  return num >= 10 ? num : `0${num}`;
}

/*function getMes (mes) {
  const nivel = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  if(mes = 0) return nivel[0];
  if(mes = 1) return nivel[1];
  if(mes = 2) return nivel[2];
  if(mes = 3) return nivel[3];
  if(mes = 4) return nivel[4];
  if(mes = 5) return nivel[5];
  if(mes = 6) return nivel[6];
  if(mes = 7) return nivel[7];
  if(mes = 8) return nivel[8];
  if(mes = 9) return nivel[9];
  if(mes = 10) return nivel[10];
  if(mes = 11) return nivel[11];
}
*/

const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);

h1.innerHTML = `${diaSemanaTexto}, ${zeroAEsquerda(data.getDate())} de 
${getMes(data.getMonth())} de 
${data.getFullYear()}<br>
${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;


/*const h1 = document.querySelector('.container h1'); // para mudar o texto VIA JS
const data = new Date();
const opcoes = {
  dateStyle: 'full',
  timeStyle: 'short'
};*/

//h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'}); // data e hora em português do Brasil, a porra do TIME NÂO FUNCIONA, PORRA!
