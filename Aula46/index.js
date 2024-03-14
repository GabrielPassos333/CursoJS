function mostraHora(){
  let data = new Date();
  
  return data.toLocaleTimeString('pt-Br', {
    hour12: false
  });
}

// function funcaDoInterval(){
//   console.log(mostaHora());
// }

const timer = setInterval(function(){
  console.log(mostraHora());
}, 1000);

setTimeout(function(){
  clearInterval(timer);
}, 5000); // Executa por 5 segundos

setTimeout(function(){
  console.log("Olá Mundo");
},5000);