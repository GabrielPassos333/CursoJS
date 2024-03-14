function getDiaSemanaTexto(diaSemana){
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

const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);

//console.log(data.toString());

console.log(diaSemanaTexto);