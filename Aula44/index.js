function soma(x, y){
  if(typeof x !== 'number' || typeof y !== 'number'){
    //throw('x e y precisam ser números'); aparece no local do erro
    throw new RErrorError('x e y precisam ser números');
  }
  return x+y;
}

try{ // lançar 
  console.log(soma(1,2));
  console.log(soma('1',2));
}catch(error){ //capturar o erro
  console.log("Alguma coisa mais amigável para o usuário");
}





// try{
//   console.log(naoExisto);
// }catch(err){
//   console.log('naoExisto não existe');
//   console.log(err);
// }