//Escrever uma função que recebe 2 números e retorne o maior deles

// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

function max(x,y){
//   if(x>y){
//     return x;
// }
//   else{
//     return y;
//   }
// 

//if(x>y) return x;

return x>y ? x : y;
}
const max2 = (x,y) => x>y ? x : y;

console.log(max(10,5));
console.log(max2(20,5));