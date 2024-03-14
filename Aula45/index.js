// try{
//   //É executado quando não há erros
//   //console.log(a);
//   console.log('Abri um arquivo')
//   console.log("Manipulei o arquivo e gerou erro");
//   console.log(`Fechei o arquivo`);
// } catch(e){
//   //É executado quando há erros
//   console.log("Tratando o erro");
// } finally{
//   console.log("Finally, eu sou sempre executado");
// }

function retornaHora(data){
  if(data && !(data instanceof Date)){
    //console.log("não é");
    throw new TypeError('Esperando instância de Date.');
  }
  if(!data) data = new Date();

  return data.toLocaleTimeString('pt-Br', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12:false
  })
}

try{
  const data = new Date('01-01-1970 12:58:12')
  const hora = retornaHora(data);
  console.log(hora);
} catch(e){
//tratar erro
  console.log(e);
}finally{
  console.log('Tenha um bom dia.');
}

